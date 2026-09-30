import React, { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Sparkles, Stars, AdaptiveDpr } from '@react-three/drei';
import { EffectComposer, Bloom, Vignette, ChromaticAberration } from '@react-three/postprocessing';
import * as THREE from 'three';

// Globo olografico ispirato al logo Future Craft ("Digital Future Starts Here"):
// sfera di particelle con shader custom + cerchi massimi wireframe + anello di testo rotante.

const CA_OFFSET = new THREE.Vector2(0.0006, 0.0008);

const isMobile = () => typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches;

// Punti distribuiti uniformemente sulla sfera (spirale di Fibonacci)
function fibonacciSphere(count: number, radius: number) {
  const positions = new Float32Array(count * 3);
  const randoms = new Float32Array(count);
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = golden * i;
    positions[i * 3] = Math.cos(theta) * r * radius;
    positions[i * 3 + 1] = y * radius;
    positions[i * 3 + 2] = Math.sin(theta) * r * radius;
    randoms[i] = Math.random();
  }
  return { positions, randoms };
}

const pointsVertex = /* glsl */ `
  uniform float uTime;
  uniform float uSize;
  uniform vec3 uPulseDir;
  attribute float aRandom;
  varying float vAlpha;
  varying float vMix;
  varying float vPulse;

  void main() {
    vec3 dir = normalize(position);
    // Onda che parte da un punto della sfera e la attraversa
    float d = acos(clamp(dot(dir, uPulseDir), -1.0, 1.0));
    float wave = sin(d * 6.0 - uTime * 2.2);
    float pulse = smoothstep(0.75, 1.0, wave);
    // Respiro organico
    float breathe = sin(uTime * 0.8 + aRandom * 6.2831) * 0.035;
    vec3 p = position + dir * (pulse * 0.12 + breathe);

    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;

    // Faccia posteriore più tenue
    vec3 n = normalize(normalMatrix * dir);
    float facing = dot(n, normalize(-mv.xyz));
    vAlpha = mix(0.12, 1.0, smoothstep(-0.4, 0.6, facing));
    vAlpha *= 0.55 + 0.45 * sin(uTime * 2.0 + aRandom * 40.0);
    vMix = dir.y * 0.5 + 0.5;
    vPulse = pulse;

    gl_PointSize = uSize * (0.6 + aRandom * 0.8 + pulse * 1.6) * (1.0 / -mv.z);
  }
`;

const pointsFragment = /* glsl */ `
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  varying float vAlpha;
  varying float vMix;
  varying float vPulse;

  void main() {
    vec2 c = gl_PointCoord - 0.5;
    float dist = length(c);
    if (dist > 0.5) discard;
    float glow = pow(1.0 - dist * 2.0, 1.8);
    vec3 col = mix(uColorA, uColorB, vMix);
    col = mix(col, vec3(1.0), vPulse * 0.7);
    gl_FragColor = vec4(col * (1.0 + vPulse * 1.5), glow * vAlpha);
  }
`;

function ParticleSphere({ count, radius }: { count: number; radius: number }) {
  const { positions, randoms } = useMemo(() => fibonacciSphere(count, radius), [count, radius]);
  const material = useRef<THREE.ShaderMaterial>(null);
  const pulseDir = useMemo(() => new THREE.Vector3(0.4, 0.6, 0.7).normalize(), []);
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uSize: { value: 38 },
      uPulseDir: { value: pulseDir },
      uColorA: { value: new THREE.Color('#0891b2') },
      uColorB: { value: new THREE.Color('#5eead4') },
    }),
    [pulseDir]
  );

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    uniforms.uTime.value = t;
    // Il punto d'origine dell'onda si sposta lentamente
    pulseDir.set(Math.sin(t * 0.15), Math.cos(t * 0.11) * 0.6, Math.cos(t * 0.15)).normalize();
  });

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-aRandom" args={[randoms, 1]} />
      </bufferGeometry>
      <shaderMaterial
        ref={material}
        vertexShader={pointsVertex}
        fragmentShader={pointsFragment}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Cerchi massimi inclinati come nel logo wireframe
function WireRings({ radius, count }: { radius: number; count: number }) {
  const group = useRef<THREE.Group>(null);
  const rings = useMemo(() => {
    const segs = 160;
    const base: THREE.Vector3[] = [];
    for (let i = 0; i <= segs; i++) {
      const a = (i / segs) * Math.PI * 2;
      base.push(new THREE.Vector3(Math.cos(a) * radius, Math.sin(a) * radius, 0));
    }
    const geometry = new THREE.BufferGeometry().setFromPoints(base);
    return Array.from({ length: count }, (_, i) => {
      const q = new THREE.Quaternion().setFromEuler(
        new THREE.Euler(Math.random() * Math.PI, Math.random() * Math.PI, (i / count) * Math.PI)
      );
      const material = new THREE.LineBasicMaterial({
        color: i % 3 === 0 ? '#a5f3fc' : '#22d3ee',
        transparent: true,
        opacity: 0.18 + Math.random() * 0.22,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      const line = new THREE.Line(geometry, material);
      line.quaternion.copy(q);
      return { line, speed: (Math.random() - 0.5) * 0.25 };
    });
  }, [radius, count]);

  useEffect(() => () => rings.forEach(({ line }) => (line.material as THREE.Material).dispose()), [rings]);

  useFrame((_, delta) => {
    rings.forEach(({ line, speed }) => line.rotateZ(speed * delta));
    if (group.current) group.current.rotation.y -= delta * 0.05;
  });

  return (
    <group ref={group}>
      {rings.map(({ line }, i) => (
        <primitive key={i} object={line} />
      ))}
    </group>
  );
}

// Anello orbitale con "satellite" luminoso
function Orbit({ radius, tilt, speed, color }: { radius: number; tilt: [number, number, number]; speed: number; color: string }) {
  const sat = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed;
    if (sat.current) sat.current.position.set(Math.cos(t) * radius, Math.sin(t) * radius, 0);
  });
  return (
    <group rotation={tilt}>
      <mesh>
        <torusGeometry args={[radius, 0.004, 8, 200]} />
        <meshBasicMaterial color={color} transparent opacity={0.35} blending={THREE.AdditiveBlending} depthWrite={false} />
      </mesh>
      <mesh ref={sat}>
        <sphereGeometry args={[0.045, 16, 16]} />
        <meshBasicMaterial color="#ffffff" toneMapped={false} />
      </mesh>
    </group>
  );
}

// Testo circolare disegnato su canvas → texture (nessun font esterno da scaricare in WebGL)
function TextRing({ radius, text }: { radius: number; text: string }) {
  const mesh = useRef<THREE.Mesh>(null);
  const [texture, setTexture] = useState<THREE.CanvasTexture | null>(null);

  useEffect(() => {
    let cancelled = false;
    const draw = () => {
      if (cancelled) return;
      const size = 1024;
      const canvas = document.createElement('canvas');
      canvas.width = canvas.height = size;
      const ctx = canvas.getContext('2d')!;
      ctx.clearRect(0, 0, size, size);
      ctx.translate(size / 2, size / 2);
      ctx.fillStyle = '#e0fbff';
      ctx.font = '600 44px "Space Grotesk", "Helvetica Neue", Arial, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      const chars = text.split('');
      const step = (Math.PI * 2) / chars.length;
      chars.forEach((ch, i) => {
        ctx.save();
        ctx.rotate(i * step);
        ctx.translate(0, -size * 0.44);
        ctx.fillText(ch, 0, 0);
        ctx.restore();
      });
      const tex = new THREE.CanvasTexture(canvas);
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.anisotropy = 4;
      setTexture((old) => {
        old?.dispose();
        return tex;
      });
    };
    const fonts = (document as any).fonts;
    if (fonts?.load) fonts.load('600 44px "Space Grotesk"').then(draw, draw);
    else draw();
    return () => {
      cancelled = true;
    };
  }, [text]);

  useFrame((_, delta) => {
    if (mesh.current) mesh.current.rotation.z -= delta * 0.12;
  });

  if (!texture) return null;
  return (
    <mesh ref={mesh}>
      <planeGeometry args={[radius * 2, radius * 2]} />
      <meshBasicMaterial map={texture} transparent opacity={0.9} depthWrite={false} toneMapped={false} />
    </mesh>
  );
}

function GlobeRig({ mobile }: { mobile: boolean }) {
  const rig = useRef<THREE.Group>(null);
  const globe = useRef<THREE.Group>(null);
  const { viewport } = useThree();
  const wide = viewport.aspect > 1.15;

  useFrame((state, delta) => {
    if (!rig.current || !globe.current) return;
    const scroll = Math.min(window.scrollY / window.innerHeight, 1.5);
    // Parallax col mouse (smorzato)
    const tx = state.pointer.x * 0.35;
    const ty = state.pointer.y * 0.25;
    rig.current.rotation.y = THREE.MathUtils.damp(rig.current.rotation.y, tx, 3, delta);
    rig.current.rotation.x = THREE.MathUtils.damp(rig.current.rotation.x, -ty, 3, delta);
    globe.current.rotation.y += delta * (0.12 + scroll * 0.6);
    // Allo scroll il globo si alza e si allontana
    const baseX = wide ? viewport.width * 0.22 : 0;
    const baseY = wide ? 0 : viewport.height * 0.3;
    rig.current.position.x = THREE.MathUtils.damp(rig.current.position.x, baseX, 4, delta);
    rig.current.position.y = THREE.MathUtils.damp(rig.current.position.y, baseY + scroll * 1.6, 4, delta);
    rig.current.position.z = THREE.MathUtils.damp(rig.current.position.z, -scroll * 2, 4, delta);
  });

  const radius = mobile ? 1.0 : 1.7;

  return (
    <group ref={rig}>
      <group ref={globe} rotation={[0.3, 0, 0.15]}>
        <ParticleSphere count={mobile ? 2200 : 5200} radius={radius} />
        <WireRings radius={radius * 1.01} count={mobile ? 9 : 14} />
      </group>
      <Orbit radius={radius * 1.35} tilt={[1.2, 0.2, 0]} speed={0.5} color="#22d3ee" />
      <Orbit radius={radius * 1.55} tilt={[1.9, -0.4, 0.3]} speed={-0.35} color="#5eead4" />
      <TextRing radius={radius * 1.28} text="DIGITAL FUTURE STARTS HERE ✦ FUTURE CRAFT ✦ " />
    </group>
  );
}

export function HoloGlobe() {
  const [mobile] = useState(isMobile);
  const [visible, setVisible] = useState(true);
  const wrapper = useRef<HTMLDivElement>(null);

  // Mette in pausa il rendering quando l'hero non è visibile
  useEffect(() => {
    const el = wrapper.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={wrapper} className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        dpr={[1, mobile ? 1.5 : 2]}
        frameloop={visible ? 'always' : 'never'}
        gl={{ antialias: false, alpha: false, powerPreference: 'high-performance' }}
        eventSource={document.getElementById('root')!}
        eventPrefix="client"
      >
        <color attach="background" args={['#0b1220']} />
        <fog attach="fog" args={['#0b1220', 8, 30]} />
        <Suspense fallback={null}>
          <GlobeRig mobile={mobile} />
          <Stars radius={60} depth={40} count={mobile ? 1200 : 3000} factor={3} saturation={0} fade speed={0.6} />
          <Sparkles count={mobile ? 40 : 90} scale={[12, 7, 6]} size={2.2} speed={0.35} color="#67e8f9" opacity={0.7} />
          <EffectComposer multisampling={0}>
            <Bloom mipmapBlur intensity={1.25} luminanceThreshold={0.15} luminanceSmoothing={0.3} radius={0.75} />
            <ChromaticAberration
              offset={CA_OFFSET}
              radialModulation={false}
              modulationOffset={0}
            />
            <Vignette eskil={false} offset={0.2} darkness={0.75} />
          </EffectComposer>
        </Suspense>
        <AdaptiveDpr pixelated={false} />
      </Canvas>
    </div>
  );
}
