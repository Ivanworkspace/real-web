import React, { useLayoutEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ParticleField } from '../components/three/ParticleField';
import { SplitReveal } from '../components/fx/SplitReveal';
import { 
  Award, 
  Users, 
  TrendingUp, 
  Sparkles,
  Target,
  Zap,
  Heart,
  Lightbulb,
  Rocket
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Testo circolare rotante (come il logo sulla felpa)
function RotatingBadge() {
  const text = 'DIGITAL FUTURE STARTS HERE ✦ FUTURE CRAFT ✦ ';
  return (
    <div className="relative w-28 h-28 md:w-36 md:h-36">
      <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full animate-spin-slow">
        <defs>
          <path id="badge-circle" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
        </defs>
        <text className="fill-white font-display" style={{ fontSize: 15.5, fontWeight: 600, letterSpacing: 2.2 }}>
          <textPath href="#badge-circle">{text}</textPath>
        </text>
      </svg>
      <div className="absolute inset-[30%] rounded-full bg-gradient-to-br from-cyan-400 to-teal-400 shadow-[0_0_30px_rgba(34,211,238,0.6)] flex items-center justify-center">
        <Sparkles className="w-6 h-6 text-gray-900" />
      </div>
    </div>
  );
}

// Foto con reveal cinematografico allo scroll + tilt 3D
function FounderPhoto() {
  const wrap = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!wrap.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.photo-mask',
        { clipPath: 'inset(100% 0% 0% 0% round 1.5rem)' },
        {
          clipPath: 'inset(0% 0% 0% 0% round 1.5rem)',
          duration: 1.4,
          ease: 'expo.inOut',
          scrollTrigger: { trigger: wrap.current, start: 'top 80%', once: true },
        }
      );
      gsap.fromTo(
        '.photo-img',
        { scale: 1.18 },
        {
          scale: 1.02,
          ease: 'none',
          scrollTrigger: { trigger: wrap.current, start: 'top bottom', end: 'bottom top', scrub: true },
        }
      );
    }, wrap);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrap} className="relative">
      <div className="absolute -inset-4 bg-gradient-to-br from-cyan-400/30 via-teal-400/10 to-transparent blur-3xl rounded-[2rem]" />
      <Tilt
        tiltMaxAngleX={6}
        tiltMaxAngleY={6}
        perspective={1200}
        transitionSpeed={2000}
        glareEnable
        glareMaxOpacity={0.12}
        glareColor="#ffffff"
        glarePosition="all"
        glareBorderRadius="1.5rem"
        className="rounded-3xl"
      >
        <div className="photo-mask relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl aspect-[3/4] sm:aspect-[4/5] lg:aspect-auto lg:h-[720px]">
          <img
            src="/images/ivan-futurecraft.jpg"
            alt="Ivan Santantonio con la felpa Future Craft - Digital Future Starts Here"
            loading="lazy"
            decoding="async"
            className="photo-img absolute inset-0 w-full h-full object-cover will-change-transform"
            style={{ objectPosition: '55% 38%' }}
          />
          {/* Sfumatura in basso per leggere il nome */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-transparent to-transparent" />

          <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-auto md:min-w-[280px] bg-gray-900/60 backdrop-blur-xl border border-white/15 rounded-2xl px-5 py-4 md:p-6">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-1 !text-left">Ivan Santantonio</h3>
            <p className="text-cyan-300 font-semibold text-sm uppercase tracking-widest">Founder & Developer</p>
          </div>
        </div>
      </Tilt>
      <div className="absolute -top-8 -right-4 md:-right-10 z-10 pointer-events-none">
        <RotatingBadge />
      </div>
    </div>
  );
}

export function AboutNew() {
  const stats = [
    { icon: Users, value: '50+', label: 'Clienti Felici', gradient: 'from-cyan-400 to-teal-400' },
    { icon: Award, value: '100+', label: 'Progetti', gradient: 'from-cyan-500 to-blue-500' },
    { icon: TrendingUp, value: '+120%', label: 'Crescita Media', gradient: 'from-green-500 to-emerald-500' },
    { icon: Rocket, value: '5+', label: 'Anni Esperienza', gradient: 'from-orange-500 to-red-500' },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Passione',
      description: 'Ogni progetto è una sfida che affrontiamo con entusiasmo e dedizione',
      gradient: 'from-red-500 to-pink-500'
    },
    {
      icon: Lightbulb,
      title: 'Innovazione',
      description: 'Sempre aggiornati sulle ultime tecnologie e trend del settore',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Target,
      title: 'Risultati',
      description: 'Focus su metriche concrete e ROI per il successo del tuo business',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Zap,
      title: 'Velocità',
      description: 'Delivery rapido senza compromettere la qualità del lavoro',
      gradient: 'from-cyan-400 to-teal-400'
    }
  ];

  const expertise = [
    {
      title: 'Sviluppo Web & App',
      description: 'React, Next.js, Node.js e le migliori tecnologie per applicazioni scalabili e performanti',
      skills: ['React', 'Next.js', 'TypeScript', 'Node.js', 'TailwindCSS']
    },
    {
      title: 'Social Media Marketing',
      description: 'Strategie data-driven per far crescere la tua presenza social e aumentare engagement e conversioni',
      skills: ['Instagram Growth', 'Content Strategy', 'Analytics', 'Community Management']
    },
    {
      title: 'Brand & Design',
      description: 'Creiamo identità visive memorabili e design che comunicano i valori del tuo brand',
      skills: ['UI/UX Design', 'Brand Identity', 'Fotografia', 'Video Production']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-cyan-900/20 to-gray-900 relative overflow-hidden">
      {/* Background 3D */}
      <ParticleField />

      {/* Overlay */}
      <div className="fixed inset-0 bg-gradient-to-b from-gray-900/70 via-transparent to-gray-900/90 z-0 pointer-events-none" />

      {/* Contenuto */}
      <div className="relative z-10 pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400/20 to-teal-400/20 backdrop-blur-xl border border-cyan-400/30 rounded-full px-6 py-3 mb-6"
            >
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-300 font-semibold">Chi Siamo</span>
            </motion.div>

            <SplitReveal
              as="h1"
              onScroll={false}
              delay={0.2}
              className="text-5xl lg:text-7xl font-bold mb-6"
              lines={[
                { text: 'La Storia di', className: 'text-white' },
                { text: 'Future Craft', className: 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-400' },
              ]}
            />

            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Dove la passione per il codice incontra l'arte del marketing
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} blur-xl opacity-0 group-hover:opacity-50 transition-opacity`} />
                <div className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-2xl text-center">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${stat.gradient} mb-4`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20 items-center">
            {/* Immagine */}
            <FounderPhoto />

            {/* Testo */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400 mb-6">
                  La Nostra Missione
                </h2>
                <p className="text-gray-300 leading-relaxed text-lg mb-4">
                  Ciao, sono <span className="text-white font-semibold">Ivan Santantonio</span>. Il mondo digitale mi ha affascinato fin da subito. 
                  La possibilità di trasformare idee in codice funzionante e l'evoluzione costante delle tecnologie mi hanno spinto a 
                  studiare e sperimentare senza sosta.
                </p>
                <p className="text-gray-300 leading-relaxed text-lg mb-4">
                  Oltre allo sviluppo, ho scoperto una forte passione per il <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400 font-semibold">marketing digitale</span> e 
                  la <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-semibold">creazione di contenuti</span> che 
                  comunicano e coinvolgono. Da questo mix di competenze è nata <span className="text-white font-bold">Future Craft</span>.
                </p>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Future Craft non è solo un nome, è una promessa: quella di <span className="text-white font-semibold">costruire il futuro digitale</span> dei 
                  nostri clienti, unendo <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 font-semibold">sviluppo web 
                  all'avanguardia</span> e <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 font-semibold">strategie 
                  di marketing intelligenti</span>.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Valori */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold text-center mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-200">
                I Nostri Valori
              </span>
            </h2>
            <p className="text-center text-gray-400 mb-12 text-lg">
              I principi che guidano ogni nostro progetto
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="relative group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${value.gradient} blur-xl opacity-0 group-hover:opacity-50 transition-opacity`} />
                  <div className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 h-full">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${value.gradient} mb-4`}>
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Expertise */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold text-center mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-200">
                Le Nostre Competenze
              </span>
            </h2>
            <p className="text-center text-gray-400 mb-12 text-lg">
              Tecnologie e strategie per il tuo successo
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {expertise.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8"
                >
                  <h3 className="text-2xl font-bold text-white mb-4">{exp.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-gradient-to-r from-cyan-400/20 to-teal-400/20 border border-cyan-400/30 rounded-full text-sm text-cyan-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-teal-400 blur-3xl opacity-30" />
              <div className="relative bg-gradient-to-r from-cyan-400/10 to-teal-400/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12">
                <h2 className="text-4xl font-bold text-white mb-4">
                  Pronto a Iniziare?
                </h2>
                <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                  Hai un'idea che aspetta di diventare digitale? Una sfida da vincere online? 
                  Parliamone e costruiamo insieme il tuo futuro.
                </p>
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-gradient-to-r from-cyan-400 to-teal-400 text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl shadow-cyan-400/50 hover:shadow-cyan-400/70 transition-all duration-300"
                >
                  Contattaci Ora
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
