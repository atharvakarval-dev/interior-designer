import React from 'react';
import { FadeUp } from './FadeUp';

export function Marquee() {
  return (
    <section className="relative w-full overflow-hidden bg-[var(--color-paper-white)] py-[20px] lg:py-[30px] border-y border-[var(--color-charcoal-ink)] flex items-center font-[family-name:var(--font-helveticanow)] z-10">
      
      <FadeUp className="w-full">
        {/* Infinite Marquee Container with Accessible Hover Pause */}
        <div className="flex w-max flex-nowrap whitespace-nowrap group">
          
          {/* Track 1 */}
          <div className="flex items-center animate-marquee group-hover:[animation-play-state:paused]">
            <span className="text-[clamp(1.5rem,4vw,60px)] font-normal leading-none tracking-[var(--tracking-heading-lg)] uppercase text-[var(--color-charcoal-ink)] mx-[20px] lg:mx-[40px]">
              EDITORIAL DESIGN
            </span>
            <span className="text-[clamp(1.5rem,4vw,60px)] font-normal leading-none uppercase text-[var(--color-accent-7)] mx-[20px] lg:mx-[40px] inline-block -translate-y-[2%]">
              /
            </span>
            <span className="text-[clamp(1.5rem,4vw,60px)] font-normal leading-none tracking-[var(--tracking-heading-lg)] uppercase text-[var(--color-charcoal-ink)] mx-[20px] lg:mx-[40px]">
              BRUTALIST ARCHITECTURE
            </span>
            <span className="text-[clamp(1.5rem,4vw,60px)] font-normal leading-none uppercase text-[var(--color-accent-8)] mx-[20px] lg:mx-[40px] inline-block -translate-y-[2%]">
              /
            </span>
            <span className="text-[clamp(1.5rem,4vw,60px)] font-normal leading-none tracking-[var(--tracking-heading-lg)] uppercase text-[var(--color-charcoal-ink)] mx-[20px] lg:mx-[40px]">
              MINIMAL SPACES
            </span>
            <span className="text-[clamp(1.5rem,4vw,60px)] font-normal leading-none uppercase text-[var(--color-accent-3)] mx-[20px] lg:mx-[40px] inline-block -translate-y-[2%]">
              /
            </span>
          </div>

          {/* Track 2 - Duplicated for infinite seamless loop (Hidden from screen readers) */}
          <div className="flex items-center animate-marquee group-hover:[animation-play-state:paused]" aria-hidden="true">
            <span className="text-[clamp(1.5rem,4vw,60px)] font-normal leading-none tracking-[var(--tracking-heading-lg)] uppercase text-[var(--color-charcoal-ink)] mx-[20px] lg:mx-[40px]">
              EDITORIAL DESIGN
            </span>
            <span className="text-[clamp(1.5rem,4vw,60px)] font-normal leading-none uppercase text-[var(--color-accent-7)] mx-[20px] lg:mx-[40px] inline-block -translate-y-[2%]">
              /
            </span>
            <span className="text-[clamp(1.5rem,4vw,60px)] font-normal leading-none tracking-[var(--tracking-heading-lg)] uppercase text-[var(--color-charcoal-ink)] mx-[20px] lg:mx-[40px]">
              BRUTALIST ARCHITECTURE
            </span>
            <span className="text-[clamp(1.5rem,4vw,60px)] font-normal leading-none uppercase text-[var(--color-accent-8)] mx-[20px] lg:mx-[40px] inline-block -translate-y-[2%]">
              /
            </span>
            <span className="text-[clamp(1.5rem,4vw,60px)] font-normal leading-none tracking-[var(--tracking-heading-lg)] uppercase text-[var(--color-charcoal-ink)] mx-[20px] lg:mx-[40px]">
              MINIMAL SPACES
            </span>
            <span className="text-[clamp(1.5rem,4vw,60px)] font-normal leading-none uppercase text-[var(--color-accent-3)] mx-[20px] lg:mx-[40px] inline-block -translate-y-[2%]">
              /
            </span>
          </div>

        </div>
      </FadeUp>
    </section>
  );
}