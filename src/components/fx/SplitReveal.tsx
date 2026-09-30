import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SplitRevealProps {
  lines: { text: string; className?: string }[];
  as?: 'h1' | 'h2';
  className?: string;
  delay?: number;
  onScroll?: boolean;
}

// Titolo che entra parola per parola, dal basso, con leggera rotazione 3D.
export function SplitReveal({ lines, as: Tag = 'h2', className = '', delay = 0, onScroll = true }: SplitRevealProps) {
  const ref = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.from('.split-word', {
        yPercent: 115,
        rotateX: -60,
        opacity: 0,
        duration: 1.1,
        ease: 'expo.out',
        stagger: 0.06,
        delay,
        scrollTrigger: onScroll ? { trigger: ref.current, start: 'top 85%', once: true } : undefined,
      });
    }, ref);
    return () => ctx.revert();
  }, [delay, onScroll]);

  return (
    <Tag ref={ref} className={className} style={{ perspective: 800 }}>
      {lines.map((line, li) => (
        <span key={li} className="block">
          {line.text.split(' ').map((word, wi) => (
            <span key={wi} className="inline-block overflow-hidden align-bottom pb-[0.12em] -mb-[0.12em]">
              <span className={`split-word inline-block origin-bottom ${line.className ?? ''}`}>{word}</span>
              {wi < line.text.split(' ').length - 1 && <span className="inline-block">&nbsp;</span>}
            </span>
          ))}
        </span>
      ))}
    </Tag>
  );
}
