import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Tilt from 'react-parallax-tilt';
import {
  Globe,
  ShoppingCart,
  Smartphone,
  MonitorSmartphone,
  LayoutDashboard,
  Workflow,
  Lightbulb,
  Instagram,
  Camera,
  Megaphone,
  LineChart,
  Palette,
  Users,
  MessageCircle,
  Mail,
  MapPin,
  ClipboardCheck,
  ArrowRight,
  Sparkles,
  Gift,
  Send,
  Code2,
} from 'lucide-react';
import { ParticleField } from '../components/three/ParticleField';
import { SplitReveal } from '../components/fx/SplitReveal';
import { Magnetic } from '../components/fx/Magnetic';
import { getLenis } from '../components/fx/SmoothScroll';

const WHATSAPP = '393791408773';
const EMAIL = 'info@futurecraft.com';

const webSolutions = [
  {
    icon: Globe,
    title: 'Siti Web',
    description: 'Siti vetrina, landing page e portali veloci, curati nel design e ottimizzati per Google.',
    gradient: 'from-cyan-400 to-teal-400',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce',
    description: 'Negozi online completi: catalogo, pagamenti, spedizioni e pannello per gestire gli ordini.',
    gradient: 'from-emerald-400 to-green-500',
  },
  {
    icon: Smartphone,
    title: 'App Web & Mobile',
    description: 'Applicazioni su misura per i tuoi clienti o per il tuo team, su smartphone, tablet e desktop.',
    gradient: 'from-blue-400 to-indigo-500',
  },
  {
    icon: MonitorSmartphone,
    title: 'App per Totem',
    description: 'Totem touch per il tuo locale: ordini al tavolo, menu digitali, check-in e informazioni.',
    gradient: 'from-fuchsia-400 to-pink-500',
  },
  {
    icon: LayoutDashboard,
    title: 'Gestionali',
    description: 'Software gestionali per magazzino, prenotazioni, clienti, fatture e personale.',
    gradient: 'from-orange-400 to-amber-500',
  },
  {
    icon: Workflow,
    title: 'Automazioni & Integrazioni',
    description: 'Colleghiamo i tuoi strumenti ed eliminiamo il lavoro ripetitivo: meno errori, più tempo.',
    gradient: 'from-sky-400 to-cyan-500',
  },
];

const socialServices = [
  { icon: Instagram, title: 'Gestione Social', description: 'Instagram, Facebook e TikTok gestiti con un piano editoriale costante.' },
  { icon: Camera, title: 'Foto & Video', description: 'Shooting e contenuti video professionali per il tuo brand.' },
  { icon: Megaphone, title: 'Advertising', description: 'Campagne sponsorizzate mirate per portare clienti veri.' },
  { icon: LineChart, title: 'Strategia & Report', description: 'Obiettivi chiari, analisi dei risultati e miglioramento continuo.' },
  { icon: Palette, title: 'Brand Identity', description: 'Logo, colori e stile che rendono il tuo brand riconoscibile.' },
  { icon: Users, title: 'Community', description: 'Rispondiamo, coinvolgiamo e facciamo crescere la tua community.' },
];

const clients = [
  { name: 'Masseria Le Cantine', logo: '/images/clients/IMG_2793-a9325dff-0b61-4664-8686-de91173101f1.png' },
  { name: 'Barber Class', logo: '/images/clients/IMG_3390-dca4c09d-76c7-48ee-a8db-a342908b24e5.png' },
  { name: 'Tenuta Terra Tefra', logo: '/images/clients/E1B76A4F-162B-4745-B056-64C8801A6D9A-3c6d01f7-5ec8-4fb3-8c64-29a0f7f524b3.png' },
  { name: 'Beverhouse', logo: '/images/clients/IMG_3907-62035144-bed8-4146-90e2-0b8189b0446a.png' },
  { name: 'Nonna Elena', logo: '/images/clients/e5432cff2f036f642775930da5f16d32-1cdcd8d1-30e7-434c-b4ef-4fa98f334dd4.png' },
  { name: 'Choza', logo: '/images/clients/IMG_3910-4d719762-b988-417d-8d22-1f668d0ba9b0.png' },
  { name: 'La Rambla', logo: '/images/clients/IMG_4294-7e09a872-d2b6-4d44-ad73-d91a59c952a2.png' },
  { name: 'Debicar', logo: '/images/clients/IMG_4468-4bf9b5e5-eda9-46fe-b162-22f159f67453.png' },
  { name: 'Wave Events', logo: '/images/clients/wave-logo.png' },
  { name: 'Bona Events', logo: '/images/clients/bonaevents-logo.png' },
  { name: 'DIM', logo: '/images/clients/dim-logo.svg' },
];

const steps = [
  { icon: MessageCircle, title: 'Ci contatti', description: 'Scrivici su WhatsApp, via email o su Instagram: raccontaci la tua idea.' },
  { icon: MapPin, title: 'Veniamo da te', description: 'Consulenza gratuita direttamente nella tua attività, per capire davvero le tue esigenze.' },
  { icon: Lightbulb, title: 'Strategia su misura', description: 'Ti presentiamo la soluzione digitale o il piano social pensato solo per te.' },
  { icon: ClipboardCheck, title: 'Preventivo chiaro', description: 'Ricevi un preventivo trasparente, senza impegno e senza sorprese.' },
];

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const lenis = getLenis();
  if (lenis) lenis.scrollTo(el, { offset: -90 });
  else el.scrollIntoView({ behavior: 'smooth' });
}

function SectionBadge({ icon: Icon, children }: { icon: React.ElementType; children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl border border-cyan-400/30 rounded-full px-5 py-2.5 mb-6">
      <Icon className="w-4 h-4 text-cyan-400" />
      <span className="text-cyan-200 text-sm font-medium tracking-wide uppercase">{children}</span>
    </div>
  );
}

export function ServicesPage() {
  const location = useLocation();

  // Supporta link diretti tipo /servizi#preventivo
  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.slice(1);
    const t = window.setTimeout(() => scrollToId(id), 450);
    return () => window.clearTimeout(t);
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-cyan-900/20 to-gray-900 relative overflow-hidden">
      <ParticleField />
      <div className="fixed inset-0 bg-gradient-to-b from-gray-900/70 via-transparent to-gray-900/90 z-0 pointer-events-none" />

      <div className="relative z-10 pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* HERO */}
          <section className="text-center mb-24 md:mb-32">
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
              <SectionBadge icon={Gift}>Consulenza gratuita</SectionBadge>
            </motion.div>
            <SplitReveal
              as="h1"
              onScroll={false}
              delay={0.15}
              className="text-5xl md:text-7xl font-bold mb-6 leading-[1.02]"
              lines={[
                { text: 'Qualunque soluzione', className: 'text-white' },
                {
                  text: 'digitale, su misura.',
                  className: 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-300 to-blue-400',
                },
              ]}
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10"
            >
              Sviluppiamo <span className="text-white font-semibold">software e soluzioni web personalizzate</span> e facciamo crescere la tua
              attività con <span className="text-cyan-300 font-semibold">social media e marketing</span>. Tu ci racconti l'idea, noi la
              realizziamo.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Magnetic>
                <button
                  onClick={() => scrollToId('preventivo')}
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-400 to-teal-400 text-gray-900 font-bold text-lg rounded-full shadow-[0_0_40px_-5px_rgba(34,211,238,0.6)]"
                >
                  Richiedi un preventivo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Magnetic>
              <div className="flex gap-3">
                <button
                  onClick={() => scrollToId('web')}
                  className="px-5 sm:px-6 py-3 sm:py-4 text-sm sm:text-base whitespace-nowrap rounded-full bg-white/5 border border-white/15 text-white font-semibold hover:bg-white/10 transition"
                >
                  Soluzioni Web
                </button>
                <button
                  onClick={() => scrollToId('social')}
                  className="px-5 sm:px-6 py-3 sm:py-4 text-sm sm:text-base whitespace-nowrap rounded-full bg-white/5 border border-white/15 text-white font-semibold hover:bg-white/10 transition"
                >
                  Social & Marketing
                </button>
              </div>
            </motion.div>
          </section>

          {/* SOLUZIONI WEB */}
          <section id="web" className="mb-24 md:mb-32 scroll-mt-28">
            <div className="text-center mb-14">
              <SectionBadge icon={Code2}>Sviluppo su misura</SectionBadge>
              <SplitReveal
                className="text-4xl md:text-6xl font-bold mb-5"
                lines={[
                  { text: 'Soluzioni Web', className: 'text-white' },
                  { text: 'personalizzate', className: 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400' },
                ]}
              />
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Progettiamo e sviluppiamo da zero quello che serve alla tua attività. Ecco alcuni esempi di cosa possiamo creare per te.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {webSolutions.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
                  className="group relative"
                >
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${s.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />
                  <Tilt
                    className="h-full rounded-3xl"
                    tiltMaxAngleX={8}
                    tiltMaxAngleY={8}
                    scale={1.02}
                    transitionSpeed={1500}
                    glareEnable
                    glareMaxOpacity={0.15}
                    glareColor="#a5f3fc"
                    glarePosition="all"
                    glareBorderRadius="1.5rem"
                  >
                    <div className="relative h-full bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl border border-white/10 rounded-3xl p-8 overflow-hidden">
                      <div className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br ${s.gradient} blur-3xl opacity-15`} />
                      <div className={`relative inline-flex p-4 rounded-2xl bg-gradient-to-r ${s.gradient} mb-6`}>
                        <s.icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="relative text-2xl font-bold text-white mb-3 !text-left">{s.title}</h3>
                      <p className="relative text-gray-300 leading-relaxed">{s.description}</p>
                    </div>
                  </Tilt>
                </motion.div>
              ))}
            </div>

            {/* Qualunque cosa su richiesta */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative mt-8 rounded-3xl p-[1.5px] bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-500"
            >
              <div className="rounded-3xl bg-gray-900/95 backdrop-blur-xl px-8 py-10 md:px-12 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                <div className="shrink-0 p-5 rounded-2xl bg-gradient-to-br from-cyan-400 to-teal-400">
                  <Sparkles className="w-9 h-9 text-gray-900" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 md:!text-left">Hai un'idea diversa? La realizziamo.</h3>
                  <p className="text-gray-300 text-lg">
                    Qualunque soluzione digitale su richiesta: se ti serve, la progettiamo insieme. Contattaci per un preventivo gratuito.
                  </p>
                </div>
                <button
                  onClick={() => scrollToId('preventivo')}
                  className="shrink-0 inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white text-gray-900 font-bold hover:bg-cyan-100 transition"
                >
                  Chiedi un preventivo <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </section>

          {/* SOCIAL & MARKETING */}
          <section id="social" className="mb-24 md:mb-32 scroll-mt-28">
            <div className="grid lg:grid-cols-5 gap-12 items-start">
              <div className="lg:col-span-2 lg:sticky lg:top-32 text-center lg:text-left">
                <SectionBadge icon={Instagram}>Social & Marketing</SectionBadge>
                <SplitReveal
                  className="text-4xl md:text-6xl font-bold mb-5 lg:!text-left"
                  lines={[
                    { text: 'Facciamo crescere', className: 'text-white' },
                    { text: 'il tuo brand', className: 'text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-400 to-cyan-400' },
                  ]}
                />
                <p className="text-gray-300 text-lg mb-8">
                  Un pacchetto social costruito sulla tua attività: contenuti, gestione e pubblicità per trasformare i follower in clienti.
                </p>
                <div className="inline-flex items-start gap-3 text-left bg-white/5 border border-white/10 rounded-2xl p-5">
                  <MapPin className="w-6 h-6 text-cyan-400 shrink-0 mt-0.5" />
                  <p className="text-gray-300">
                    <span className="text-white font-semibold">Consulenza gratuita in sede:</span> veniamo noi da te a spiegarti la strategia
                    personalizzata per la tua attività.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-3 grid sm:grid-cols-2 gap-5">
                {socialServices.map((s, i) => (
                  <motion.div
                    key={s.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
                    className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-pink-400/40 transition-colors"
                  >
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-pink-500 to-fuchsia-500 mb-4 group-hover:scale-110 transition-transform">
                      <s.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 !text-left">{s.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{s.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Loghi clienti */}
            <div className="mt-16">
              <p className="text-center text-gray-400 text-sm uppercase tracking-[0.25em] mb-6">Si sono già affidati a noi</p>
              <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                <div className="marquee-track flex w-max gap-5" style={{ animation: 'scroll-logos 45s linear infinite' }}>
                  {[...clients, ...clients, ...clients].map((c, i) => (
                    <div
                      key={`${c.name}-${i}`}
                      className="flex-shrink-0 w-32 h-20 md:w-40 md:h-24 bg-white/5 border border-white/10 rounded-xl p-3 md:p-4 flex items-center justify-center"
                    >
                      <img src={c.logo} alt={c.name} loading="lazy" className="max-w-full max-h-full object-contain" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* COME FUNZIONA */}
          <section className="mb-24 md:mb-32">
            <div className="text-center mb-14">
              <SectionBadge icon={Gift}>Senza impegno</SectionBadge>
              <SplitReveal
                className="text-4xl md:text-6xl font-bold mb-5"
                lines={[
                  { text: 'La consulenza', className: 'text-white' },
                  { text: 'è gratuita', className: 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400' },
                ]}
              />
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Sia per una soluzione digitale innovativa, sia per un pacchetto social personalizzato. Ecco come funziona.
              </p>
            </div>
            <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-px bg-gradient-to-r from-cyan-400/0 via-cyan-400/50 to-cyan-400/0" />
              {steps.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className="relative text-center"
                >
                  <div className="relative mx-auto mb-5 w-20 h-20 rounded-full bg-gray-900 border border-cyan-400/40 flex items-center justify-center shadow-[0_0_30px_-5px_rgba(34,211,238,0.5)]">
                    <s.icon className="w-8 h-8 text-cyan-300" />
                    <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 text-gray-900 text-sm font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{s.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* PREVENTIVO */}
          <section id="preventivo" className="scroll-mt-28">
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-r from-cyan-500/20 via-teal-400/10 to-blue-500/20 blur-3xl rounded-[3rem]" />
              <div className="relative bg-gray-900/80 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 sm:p-10 md:p-14">
                <div className="text-center">
                  <SectionBadge icon={Send}>Preventivo gratuito</SectionBadge>
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
                    Parliamo del tuo <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">progetto</span>
                  </h2>
                  <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
                    Richiedi un preventivo o scrivici per qualunque domanda o curiosità. Ti rispondiamo il prima possibile.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4 text-left max-w-4xl mx-auto">
                    <a
                      href={`https://wa.me/${WHATSAPP}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-green-400/50 transition"
                    >
                      <div className="p-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500">
                        <MessageCircle className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-semibold">WhatsApp</div>
                        <div className="text-gray-400 text-sm">+39 379 140 8773</div>
                      </div>
                    </a>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/50 transition"
                    >
                      <div className="p-3 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-400">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-semibold">Email</div>
                        <div className="text-gray-400 text-sm">{EMAIL}</div>
                      </div>
                    </a>
                    <a
                      href="https://www.instagram.com/future_.craft"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-pink-400/50 transition"
                    >
                      <div className="p-3 rounded-xl bg-gradient-to-r from-pink-500 to-fuchsia-500">
                        <Instagram className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-semibold">Instagram</div>
                        <div className="text-gray-400 text-sm">@future_.craft</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
