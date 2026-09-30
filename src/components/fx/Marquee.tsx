import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { getLenis } from './SmoothScroll';

interface MarqueeProps {
  items: string[];
  reverse?: boolean;
  outline?: boolean;
  speed?: number;
}

// Nastro di testo infinito: accelera, inverte direzione e si inclina
// in base alla velocità dello scroll.
export function Marquee({ items, reverse = false, outline = false, speed = 40 }: MarqueeProps) {
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const half = el.scrollWidth / 2;
    let x = reverse ? -half : 0;
    let dir = reverse ? 1 : -1;
    const skewTo = gsap.quickTo(el, 'skewX', { duration: 0.4, ease: 'power3' });

    const tick = (_: number, deltaMs: number) => {
      const velocity = getLenis()?.velocity ?? 0;
      if (velocity !== 0) dir = (velocity > 0 ? -1 : 1) * (reverse ? -1 : 1);
      const boost = 1 + Math.min(Math.abs(velocity) * 0.25, 6);
      x += dir * speed * boost * (deltaMs / 1000);
      if (x <= -half) x += half;
      if (x > 0) x -= half;
      gsap.set(el, { x });
      skewTo(gsap.utils.clamp(-12, 12, -velocity * 0.6));
    };
    gsap.ticker.add(tick);
    return () => gsap.ticker.remove(tick);
  }, [reverse, speed]);

  const row = [...items, ...items];
  return (
    <div className="overflow-hidden whitespace-nowrap select-none py-2">
      <div ref={track} className="marquee-track inline-flex will-change-transform">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center">
            {row.map((item, i) => (
              <span key={`${copy}-${i}`} className="flex items-center">
                <span className={`font-display text-5xl md:text-8xl font-bold uppercase tracking-tight px-6 md:px-10 ${outline ? 'text-outline' : 'text-white'}`}>
                  {item}
                </span>
                <span className="text-3xl md:text-6xl text-cyan-400">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function MarqueeBand() {
  return (
    <section className="relative py-16 md:py-24 bg-gray-900 overflow-hidden border-y border-white/5">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-teal-400/10 to-cyan-500/5" />
      <div className="relative -rotate-2 space-y-2">
        <Marquee items={['Sviluppo Web', 'Social Media', 'Brand Identity', 'Fotografia', 'Growth']} />
        <Marquee items={['Digital Future Starts Here', 'Future Craft']} reverse outline speed={30} />
      </div>
    </section>
  );
}
