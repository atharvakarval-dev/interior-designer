import React from 'react';
import { FadeUp } from './FadeUp';

export function CTA() {
  return (
    <section className="relative w-full bg-[var(--color-accent-7)] text-[var(--color-paper-white)] font-[family-name:var(--font-helveticanow)] overflow-hidden">
      
      {/* Brand Primary Blue Rail - Strict System Requirement */}
      <div className="absolute inset-y-0 left-0 z-10 w-[8px] bg-[var(--color-accent-8)]" aria-hidden="true" />

      {/* Subtle Architectural Grid Lines */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute right-[10%] top-[15%] hidden h-[1px] w-[300px] bg-[var(--color-paper-white)] opacity-20 xl:block" />
      </div>

      <div className="mx-auto max-w-[var(--page-max-width)] px-[20px] lg:px-[40px] py-[100px] lg:py-[180px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[40px] lg:gap-[20px]">

          {/* =========================================
              MASSIVE TYPOGRAPHIC ANCHOR
             ========================================= */}
          <div className="lg:col-span-12">
            <FadeUp>
              <h2 className="text-[clamp(3.5rem,11vw,150px)] font-normal leading-[0.93] tracking-tight lg:tracking-[var(--tracking-display)] uppercase m-0 flex flex-col">
                <span className="block">Let's Design</span>
                {/* Magazine-style ink contrast on the red canvas */}
                <span className="block text-[var(--color-charcoal-ink)]">Your Dream</span>
                <span className="block">Space Together</span>
              </h2>
            </FadeUp>
          </div>

          {/* =========================================
              ASYMMETRICAL ACTION ZONE
             ========================================= */}
          <div className="lg:col-span-5 lg:col-start-8 mt-[20px] lg:mt-[80px] flex flex-col border-t border-[var(--color-paper-white)]/30 pt-[30px] lg:pt-[40px]">
            <FadeUp delay={0.2}>
              <p className="text-[var(--text-body)] sm:text-[var(--text-subheading)] font-normal leading-[var(--leading-subheading)] tracking-[var(--tracking-subheading)] mb-[40px] max-w-[420px]">
                Contact us today to start your journey toward a beautifully designed space.
              </p>
            </FadeUp>

            <FadeUp delay={0.3}>
              <a
                href="#contact"
                className="group inline-flex h-[50px] lg:h-[60px] px-[32px] lg:px-[40px] rounded-[var(--radius-full)] bg-[var(--color-charcoal-ink)] text-[var(--color-paper-white)] text-[16px] lg:text-[18px] font-normal items-center justify-center transition-transform duration-300 hover:scale-[1.02] w-fit"
              >
                Start your project
              </a>
            </FadeUp>
          </div>

        </div>
      </div>
    </section>
  );
}