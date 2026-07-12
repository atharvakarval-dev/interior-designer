import React from 'react';
import { FadeUp } from './FadeUp';
import { AnimatedText } from './AnimatedText';

export function Hero() {
  return (
    <section className="relative w-full bg-[var(--color-paper-white)] text-[var(--color-charcoal-ink)] font-[family-name:var(--font-helveticanow)] overflow-hidden flex items-center lg:min-h-[calc(100vh-100px)]">
      
      {/* Brand Primary Blue Rail - Strict System Requirement */}
      <div className="absolute inset-y-0 left-0 z-50 w-[8px] bg-[var(--color-accent-8)]" aria-hidden="true" />
      
      {/* Subtle Architectural Grid Lines */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[8%] top-[12%] hidden h-[1px] w-[350px] bg-[var(--color-charcoal-ink)] opacity-10 xl:block" />
        <div className="absolute right-[12%] top-[18%] hidden h-[1px] w-[280px] bg-[var(--color-charcoal-ink)] opacity-10 xl:block" />
      </div>

      {/* Reduced padding (lg:pt-[40px] lg:pb-[40px]) to pull content up into a single viewport */}
      <div className="container relative mx-auto max-w-[var(--page-max-width)] px-[20px] lg:px-[40px] pt-[120px] pb-[60px] lg:pt-[40px] lg:pb-[40px] z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[40px] lg:gap-[40px] xl:gap-[60px] items-center">
          
          {/* =========================================
              LEFT COLUMN: TYPOGRAPHIC INSTALLATION
             ========================================= */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <FadeUp>
              <p className="text-[12px] uppercase tracking-[0.28em] text-[var(--color-pewter)] mb-[16px] lg:mb-[24px]">
                Divine Space Designers
              </p>
            </FadeUp>

            {/* Fluid Display Text - Safe for 320px up to 4K */}
            <div className="relative mb-[24px] lg:mb-[32px]">
              <FadeUp delay={0.1}>
                <h1 className="text-[clamp(4rem,15vw,130px)] font-normal leading-[0.93] tracking-[var(--tracking-display)] uppercase m-0 flex flex-col">
                  <span className="block">DIVINE</span>
                  <span className="block flex flex-col sm:flex-row sm:items-end gap-[10px] sm:gap-[20px]">
                    SPACE
                    <span className="hidden sm:block pb-[12px] text-[14px] uppercase tracking-[0.24em] text-[var(--color-pewter)] whitespace-nowrap">
                      Design for real life
                    </span>
                  </span>
                </h1>
              </FadeUp>
            </div>

            <FadeUp delay={0.2}>
              <p className="text-[var(--text-body)] leading-[var(--leading-body)] tracking-[var(--tracking-body)] max-w-[480px]">
                <AnimatedText text="At Divine Space Designers, we believe every space has a soul, and we bring it to life with thoughtful design, practical execution, and a deep understanding of your needs." />
              </p>
            </FadeUp>

            {/* Strict Editorial Accent */}
            <FadeUp delay={0.3}>
              <p className="mt-[20px] lg:mt-[24px] text-[12px] sm:text-[14px] font-normal uppercase tracking-[0.21px] text-[var(--color-signal-red)]">
                On-time delivery | Transparent process | Trusted service
              </p>
            </FadeUp>

            {/* Pure Brutalist Buttons */}
            <FadeUp delay={0.4}>
              <div className="mt-[32px] lg:mt-[40px] flex flex-col sm:flex-row gap-[16px]">
                <a
                  href="#contact"
                  className="inline-flex h-[50px] px-[24px] rounded-[var(--radius-full)] bg-[var(--color-charcoal-ink)] text-[var(--color-paper-white)] text-[16px] font-normal items-center justify-center transition-transform duration-300 hover:scale-[1.02]"
                >
                  Book a consultation
                </a>
                <a
                  href="#projects"
                  className="inline-flex h-[50px] px-[24px] rounded-[var(--radius-full)] border border-[var(--color-charcoal-ink)] bg-transparent text-[var(--color-charcoal-ink)] text-[16px] font-normal items-center justify-center transition-transform duration-300 hover:scale-[1.02]"
                >
                  View projects
                </a>
              </div>
            </FadeUp>
          </div>

          {/* =========================================
              RIGHT COLUMN: IMAGE COLLAGE
             ========================================= */}
          <div className="lg:col-span-6 relative w-full mt-[40px] lg:mt-0">
            
            {/* MOBILE VIEW (< 1024px) */}
            <div className="flex lg:hidden flex-col gap-[20px] w-full">
              <FadeUp delay={0.5}>
                <img
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80"
                  alt="Minimal office interior"
                  className="w-full aspect-[4/3] object-cover bg-[var(--color-newsprint-gray)]"
                />
              </FadeUp>
              <div className="grid grid-cols-2 gap-[20px]">
                <FadeUp delay={0.6}>
                  <img
                    src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1400&q=80"
                    alt="Interior living room"
                    className="w-full aspect-[3/4] object-cover bg-[var(--color-newsprint-gray)]"
                  />
                </FadeUp>
                <FadeUp delay={0.7}>
                  <img
                    src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1000&q=80"
                    alt="Warm living room detail"
                    className="w-full aspect-[4/5] object-cover bg-[var(--color-newsprint-gray)] mt-[40px]"
                  />
                </FadeUp>
              </div>
            </div>

            {/* DESKTOP VIEW (>= 1024px) - Height bounded to fit within a single viewport */}
            <div className="hidden lg:block relative w-full h-[500px] xl:h-[600px]">
              
              {/* Image 1: Top Left Building */}
              <FadeUp delay={0.4} className="absolute top-[0%] left-[0%] w-[48%] z-10 transition-transform duration-[2s] hover:scale-[1.02]">
                <img
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80"
                  alt="Architecture exterior"
                  className="w-full aspect-[4/5] object-cover bg-[var(--color-newsprint-gray)] grayscale contrast-125"
                />
              </FadeUp>

              {/* Image 2: Middle Right Living Room (Dominant) */}
              <FadeUp delay={0.5} className="absolute top-[15%] right-[0%] w-[65%] z-20 transition-transform duration-[2s] hover:scale-[1.02]">
                <img
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1400&q=80"
                  alt="Interior living room"
                  className="w-full aspect-[16/9] object-cover bg-[var(--color-newsprint-gray)] grayscale contrast-125"
                />
              </FadeUp>

              {/* Image 3: Bottom Left Bedroom */}
              <FadeUp delay={0.6} className="absolute bottom-[0%] left-[12%] w-[42%] z-30 transition-transform duration-[2s] hover:scale-[1.02]">
                <div className="relative w-full">
                  <img
                    src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1000&q=80"
                    alt="Bedroom detail"
                    className="w-full aspect-[3/4] object-cover bg-[var(--color-newsprint-gray)]"
                  />
                  
                  {/* Strict Theme Signature Box */}
                  <div className="absolute -bottom-[20px] -right-[30px] bg-[var(--color-charcoal-ink)] text-[var(--color-paper-white)] p-[20px] xl:p-[24px] shadow-none min-w-[220px]">
                    <div className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-pewter)] mb-[6px]">
                      Signature spaces
                    </div>
                    <div className="text-[14px] xl:text-[16px] font-normal leading-[1.2]">
                      Calm, crafted, complete
                    </div>
                  </div>
                </div>
              </FadeUp>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}