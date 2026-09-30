import React, { Suspense, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sparkles } from '@react-three/drei';
import { random } from 'maath';
import * as THREE from 'three';

// Sfondo 3D leggero per le pagine interne: nebulosa di particelle con flusso
// ondulatorio (shader) + un piccolo globo wireframe che reagisce al mouse.

const fieldVertex = /* glsl */ `
  uniform float uTime;
  uniform float uScroll;
  attribute float aRandom;
  varying float vAlpha;
  varying float vMix;

  void main() {
    vec3 p = position;
    float t = uTime * 0.25 + aRandom * 6.2831;
    p.x += sin(t + p.y * 0.6) * 0.25;
    p.y += cos(t * 0.8 + p.z * 0.5) * 0.25 + uScroll * (0.5 + aRandom);
    p.z += sin(t * 0.6 + p.x * 0.4) * 0.25;
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = (14.0 + aRandom * 26.0) * (1.0 / -mv.z);
    vAlpha = 0.25 + 0.75 * abs(sin(uTime * 0.9 + aRandom * 30.0));
    vMix = aRandom;
  }
`;

const fieldFragment = /* glsl */ `
  varying float vAlpha;
  varying float vMix;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    if (d > 0.5) discard;
    float glow = pow(1.0 - d * 2.0, 2.0);
    vec3 col = mix(vec3(0.02, 0.71, 0.83), vec3(0.37, 0.92, 0.83), vMix);
    gl_FragColor = vec4(col, glow * vAlpha * 0.9);
  }
`;

function Field({ count }: { count: number }) {
  const ref = useRef<THREE.Points>(null);
  const { positions, randoms } = useMemo(() => {
    const positions = random.inSphere(new Float32Array(count * 3), { radius: 9 }) as Float32Array;
    const randoms = new Float32Array(count).map(() => Math.random());
    return { positions, randoms };
  }, [count]);
  const uniforms = useMemo(() => ({ uTime: { value: 0 }, uScroll: { value: 0 } }), []);

  useFrame((state, delta) => {
    uniforms.uTime.value = state.clock.getElapsedTime();
    const target = window.scrollY / Math.max(document.body.scrollHeight - window.innerHeight, 1);
    uniforms.uScroll.value = THREE.MathUtils.damp(uniforms.uScroll.value, target * 3, 2, delta);
    if (ref.current) {
      ref.current.rotation.y += delta * 0.02;
      ref.current.rotation.x = THREE.MathUtils.damp(ref.current.rotation.x, state.pointer.y * 0.15, 2, delta);
      ref.current.rotation.z = THREE.MathUtils.damp(ref.current.rotation.z, -state.pointer.x * 0.1, 2, delta);
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-aRandom" args={[randoms, 1]} />
      </bufferGeometry>
      <shaderMaterial
        vertexShader={fieldVertex}
        fragmentShader={fieldFragment}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function MiniGlobe({ position }: { position: [number, number, number] }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.15;
    ref.current.rotation.x = THREE.MathUtils.damp(ref.current.rotation.x, 0.3 + state.pointer.y * 0.3, 2, delta);
    ref.current.position.x = THREE.MathUtils.damp(ref.current.position.x, position[0] + state.pointer.x * 0.3, 2, delta);
  });
  return (
    <group ref={ref} position={position}>
      <mesh>
        <icosahedronGeometry args={[1.3, 3]} />
        <meshBasicMaterial color="#22d3ee" wireframe transparent opacity={0.12} blending={THREE.AdditiveBlending} depthWrite={false} />
      </mesh>
      <mesh rotation={[Math.PI / 2.4, 0, 0]}>
        <torusGeometry args={[1.8, 0.005, 8, 160]} />
        <meshBasicMaterial color="#5eead4" transparent opacity={0.3} blending={THREE.AdditiveBlending} depthWrite={false} />
      </mesh>
    </group>
  );
}

export function ParticleField({ className = 'fixed inset-0 z-0 pointer-events-none' }: { className?: string }) {
  const [mobile] = useState(() => window.matchMedia('(max-width: 768px)').matches);
  return (
    <div className={className}>
      <Canvas camera={{ position: [0, 0, 7], fov: 60 }} dpr={[1, mobile ? 1.25 : 1.75]} gl={{ antialias: false, alpha: true }}
        eventSource={document.getElementById('root')!}
        eventPrefix="client"
      >
        <Suspense fallback={null}>
          <Field count={mobile ? 1400 : 3500} />
          <MiniGlobe position={mobile ? [1.2, 2.2, -1] : [3.6, 1.2, -1]} />
          <Sparkles count={mobile ? 25 : 60} scale={[14, 10, 6]} size={2} speed={0.3} color="#a5f3fc" opacity={0.6} />
        </Suspense>
      </Canvas>
    </div>
  );
}
