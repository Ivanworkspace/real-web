import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { HoloGlobe } from './three/HoloGlobe';
import { SplitReveal } from './fx/SplitReveal';
import { Magnetic } from './fx/Magnetic';

const stats = [
  { value: 50, prefix: '', suffix: '+', label: 'Clienti' },
  { value: 100, prefix: '', suffix: '+', label: 'Progetti' },
  { value: 120, prefix: '+', suffix: '%', label: 'Crescita Media' },
];

// Numero che conta da 0 al valore finale
function CountUp({ value, prefix, suffix, delay }: { value: number; prefix: string; suffix: string; delay: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const counter = { n: 0 };
    const tween = gsap.to(counter, {
      n: value,
      duration: 2.2,
      delay,
      ease: 'power3.out',
      onUpdate: () => {
        if (ref.current) ref.current.textContent = `${prefix}${Math.round(counter.n)}${suffix}`;
      },
    });
    return () => {
      tween.kill();
    };
  }, [value, prefix, suffix, delay]);
  return <span ref={ref}>{`${prefix}0${suffix}`}</span>;
}

export function HeroNew() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);

  return (
    <div
      ref={sectionRef}
      className="relative min-h-[100svh] flex items-end lg:items-center overflow-hidden bg-[#0b1220]"
    >
      {/* Globo 3D olografico */}
      <div className="absolute inset-0 z-0">
        <HoloGlobe />
      </div>

      {/* Sfumatura per leggibilità del testo */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent lg:bg-gradient-to-r lg:from-gray-900/90 lg:via-gray-900/40 lg:to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-40 z-0 pointer-events-none bg-gradient-to-t from-gray-900 to-transparent" />

      {/* Contenuto */}
      <motion.div className="relative z-10 container mx-auto px-6 max-w-7xl pb-24 pt-32 lg:pt-32 lg:pb-20" style={{ opacity, y }}>
        <div className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl border border-cyan-400/30 rounded-full px-5 py-2.5 mb-8"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-200 text-sm font-medium tracking-wide uppercase">Digital Future Starts Here</span>
            <Zap className="w-4 h-4 text-teal-400" />
          </motion.div>

          <SplitReveal
            as="h1"
            onScroll={false}
            delay={0.15}
            className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-8 leading-[0.95] lg:!text-left"
            lines={[
              { text: 'Trasformiamo', className: 'text-white' },
              { text: 'Idee in', className: 'text-white' },
              {
                text: 'Successi.',
                className: 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-300 to-cyan-500 animate-gradient',
              },
            ]}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg lg:text-xl text-gray-300 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0"
          >
            Creiamo <span className="text-white font-semibold">esperienze digitali uniche</span> che fanno crescere il tuo
            business con <span className="text-cyan-300 font-semibold">risultati misurabili</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85 }}
            className="flex justify-center lg:justify-start gap-10 mb-10"
          >
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center lg:text-left">
                <div className="font-display text-3xl lg:text-4xl font-bold text-white">
                  <CountUp value={stat.value} prefix={stat.prefix} suffix={stat.suffix} delay={1 + index * 0.15} />
                </div>
                <div className="text-gray-400 text-xs uppercase tracking-widest mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
          >
            <Magnetic>
              <Link
                to="/servizi"
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-400 to-teal-400 text-gray-900 font-bold text-lg rounded-full overflow-hidden shadow-[0_0_40px_-5px_rgba(34,211,238,0.6)]"
              >
                <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                <span className="relative">Scopri i Servizi</span>
                <ArrowRight className="relative w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Magnetic>
            <Magnetic>
              <Link
                to="/contact"
                className="inline-flex px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/20 text-white font-bold text-lg rounded-full hover:bg-white/10 hover:border-cyan-300/50 transition-colors"
              >
                Contattaci
              </Link>
            </Magnetic>
          </motion.div>
        </div>
      </motion.div>

      {/* Indicatore scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-3 text-gray-400"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <div className="relative w-px h-14 bg-white/10 overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-px h-6 bg-cyan-300"
            animate={{ y: [-24, 56] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>

      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 4s ease infinite;
        }
      `}</style>
    </div>
  );
}
