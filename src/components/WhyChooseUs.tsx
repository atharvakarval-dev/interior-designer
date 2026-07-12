import React from 'react';
import { FadeUp } from './FadeUp';
import { AnimatedText } from './AnimatedText';

const features = [
  {
    number: '01',
    title: 'Designed Within Your Budget',
    description: 'Beautiful interiors don’t have to be expensive. We carefully plan and execute designs that align with your financial comfort—no hidden surprises.',
  },
  {
    number: '02',
    title: 'On-Time Delivery',
    description: 'We value your time. Our structured workflow and disciplined execution ensure your project is completed as promised.',
  },
  {
    number: '03',
    title: 'Transparent Operations',
    description: 'No confusion. No hidden costs. From material selection to execution, we keep everything clear and transparent at every stage.',
  },
  {
    number: '04',
    title: 'Step-by-Step Payment System',
    description: 'Pay as the work progresses. Our milestone-based payment structure gives you full control and confidence throughout the project.',
  },
  {
    number: '05',
    title: 'Reliable Service',
    description: 'Consistency, trust, and quality define us. We are committed to delivering what we promise—every time.',
  }
];

export function WhyChooseUs() {
  return (
    <section 
      id="why-us" 
      className="relative w-full py-[80px] lg:py-[150px] bg-[var(--color-accent-2)] text-[var(--color-charcoal-ink)] font-[family-name:var(--font-helveticanow)] overflow-clip"
    >
      {/* Brand Primary Red Rail - Reduced to z-10 to slip cleanly beneath the navbar */}
      <div 
        className="absolute inset-y-0 left-0 z-10 w-[8px] bg-[var(--color-accent-7)]" 
        aria-hidden="true" 
      />

      <div className="mx-auto max-w-[var(--page-max-width)] px-[20px] lg:px-[40px] relative z-20">
        
        {/* =========================================
            MOBILE LAYOUT (< 1024px)
            Sequential editorial flow for optimal reading
           ========================================= */}
        <div className="flex flex-col lg:hidden w-full gap-[40px]">
          
          {/* 1. Typographic Introduction */}
          <div className="flex flex-col gap-[20px]">
            <FadeUp>
              <h3 className="text-[12px] uppercase tracking-[0.28em] text-[var(--color-charcoal-ink)] opacity-70">
                About us and how we work
              </h3>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="text-[clamp(2.5rem,8vw,50px)] font-normal leading-[1.05] tracking-tight">
                <AnimatedText text="Our mission is to transform any space with a fusion of art and functionality to fit its user." />
              </h2>
            </FadeUp>
          </div>

          {/* 2. First Documentary Image */}
          <FadeUp delay={0.2}>
            <div className="w-full aspect-[4/5] bg-[var(--color-newsprint-gray)] overflow-hidden relative">
              <img
                src="/assets/whychooseus.jpg"
                alt="Designers collaborating in the studio"
                className="w-full h-full object-cover grayscale"
              />
              {/* Static label on mobile (no hover available on touch) */}
              <div className="absolute bottom-[20px] right-[20px] bg-[var(--color-paper-white)] px-[15px] py-[8px] border border-[var(--color-charcoal-ink)]">
                <span className="text-[11px] uppercase tracking-[0.21em] font-semibold">Studio Space</span>
              </div>
            </div>
          </FadeUp>

          {/* 3. Brutalist Feature List */}
          <div className="flex flex-col border-t border-[var(--color-charcoal-ink)] mt-[10px]">
            {features.map((feature, index) => (
              <FadeUp key={index} delay={0.1 * index}>
                <div className="py-[30px] border-b border-[var(--color-charcoal-ink)] flex flex-col gap-[15px]">
                  <div className="flex items-start gap-[15px]">
                    <span className="text-[var(--text-body)] font-normal text-[var(--color-signal-red)] flex-shrink-0 mt-[4px]">
                      {feature.number}
                    </span>
                    <h4 className="text-[var(--text-subheading)] sm:text-[var(--text-3xl)] font-semibold leading-[1.2] tracking-tight">
                      {feature.title}
                    </h4>
                  </div>
                  <p className="text-[var(--text-body)] font-normal leading-[var(--leading-body)] tracking-[var(--tracking-body)] pl-[35px]">
                    {feature.description}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* 4. Second Documentary Image */}
          <FadeUp delay={0.2}>
            <div className="w-full aspect-[4/5] bg-[var(--color-newsprint-gray)] overflow-hidden relative mt-[20px]">
              <img
                src="/assets/whychooseus2.webp"
                alt="Interior detail and material textures"
                className="w-full h-full object-cover grayscale"
              />
              <div className="absolute bottom-[20px] right-[20px] bg-[var(--color-paper-white)] px-[15px] py-[8px] border border-[var(--color-charcoal-ink)]">
                <span className="text-[11px] uppercase tracking-[0.21em] font-semibold">Material Palette</span>
              </div>
            </div>
          </FadeUp>

          {/* 5. Anchor CTA */}
          <FadeUp delay={0.3}>
            <div className="mt-[20px] flex justify-start sm:justify-center">
              <a href="#contact" className="inline-flex h-[50px] px-[32px] rounded-[var(--radius-full)] bg-[var(--color-charcoal-ink)] text-[var(--color-paper-white)] text-[16px] font-normal items-center justify-center transition-transform duration-300 hover:scale-[1.02] w-full sm:w-auto">
                Start your project
              </a>
            </div>
          </FadeUp>

        </div>

        {/* =========================================
            DESKTOP LAYOUT (>= 1024px)
            Sticky asymmetrical spread
           ========================================= */}
        <div className="hidden lg:grid grid-cols-12 gap-[80px] items-start">
          
          <div className="col-span-5 relative h-full">
            <div className="sticky top-[120px] flex flex-col w-full">
              
              <FadeUp>
                <h3 className="text-[12px] uppercase tracking-[0.28em] text-[var(--color-charcoal-ink)] mb-[30px] opacity-70">
                  About us and how we work
                </h3>
              </FadeUp>
              
              <FadeUp delay={0.2}>
                <div className="w-full aspect-[4/5] bg-[var(--color-newsprint-gray)] overflow-hidden relative group">
                  <img
                    src="/assets/whychooseus.jpg"
                    alt="Designers collaborating in the studio"
                    className="w-full h-full object-cover grayscale opacity-90 transition-all duration-[1.5s] ease-out group-hover:scale-[1.05] group-hover:grayscale-0 group-hover:opacity-100"
                  />
                  <div className="absolute bottom-[20px] right-[20px] bg-[var(--color-paper-white)] px-[15px] py-[8px] border border-[var(--color-charcoal-ink)] translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="text-[11px] uppercase tracking-[0.21em] font-semibold">Studio Space</span>
                  </div>
                </div>
              </FadeUp>

              <FadeUp delay={0.4}>
                <div className="mt-[40px]">
                  <a href="#contact" className="inline-flex h-[50px] px-[32px] rounded-[var(--radius-full)] bg-[var(--color-charcoal-ink)] text-[var(--color-paper-white)] text-[16px] font-normal items-center justify-center transition-transform duration-300 hover:scale-[1.02]">
                    Start your project
                  </a>
                </div>
              </FadeUp>

              <FadeUp delay={0.5}>
                <div className="w-full aspect-[4/5] bg-[var(--color-newsprint-gray)] overflow-hidden relative group mt-[40px]">
                  <img
                    src="/assets/whychooseus2.webp"
                    alt="Interior detail and material textures"
                    className="w-full h-full object-cover grayscale opacity-90 transition-all duration-[1.5s] ease-out group-hover:scale-[1.05] group-hover:grayscale-0 group-hover:opacity-100"
                  />
                  <div className="absolute bottom-[20px] right-[20px] bg-[var(--color-paper-white)] px-[15px] py-[8px] border border-[var(--color-charcoal-ink)] translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="text-[11px] uppercase tracking-[0.21em] font-semibold">Material Palette</span>
                  </div>
                </div>
              </FadeUp>

            </div>
          </div>

          <div className="col-span-7 flex flex-col">
            <FadeUp>
              <h2 className="text-[clamp(2.5rem,5vw,50px)] font-normal leading-[1.0] tracking-tight lg:tracking-[var(--tracking-heading-lg)] mb-[60px] lg:mb-[100px]">
                <AnimatedText text="Our mission is to transform any space with a fusion of art and functionality to fit its user." />
              </h2>
            </FadeUp>

            <div className="flex flex-col border-t border-[var(--color-charcoal-ink)]">
              {features.map((feature, index) => (
                <FadeUp key={index} delay={0.1 * index}>
                  <div className="group py-[40px] lg:py-[50px] border-b border-[var(--color-charcoal-ink)] flex flex-col transition-colors duration-500 hover:bg-[var(--color-paper-white)] -mx-[20px] px-[20px] cursor-default">
                    
                    <div className="flex items-start justify-between mb-[20px] lg:mb-[30px] gap-[20px]">
                      <h4 className="text-[var(--text-3xl)] lg:text-[var(--text-4xl)] font-semibold leading-[1.1] lg:leading-[0.93] tracking-[var(--tracking-4xl)] max-w-[85%] transition-transform duration-500 group-hover:translate-x-4">
                        {feature.title}
                      </h4>
                      <span className="text-[var(--text-body)] font-normal text-[var(--color-charcoal-ink)] opacity-50 transition-colors duration-500 group-hover:text-[var(--color-signal-red)] group-hover:opacity-100 flex-shrink-0">
                        {feature.number}
                      </span>
                    </div>
                    
                    <p className="text-[var(--text-body)] font-normal leading-[var(--leading-body)] tracking-[var(--tracking-body)] max-w-[480px] transition-transform duration-500 group-hover:translate-x-4">
                      {feature.description}
                    </p>

                  </div>
                </FadeUp>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}