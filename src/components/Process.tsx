import React from 'react';
import { FadeUp } from './FadeUp';
import { AnimatedText } from './AnimatedText';

const steps = [
  {
    number: '1',
    title: 'Consultation',
    description: 'We sit down with you to understand your vision, daily lifestyle, and budget. Every preference and constraint is mapped before a single line is drawn.',
  },
  {
    number: '2',
    title: 'Design & Planning',
    description: 'We translate your brief into customized layouts, mood boards, and 3D visualizations. You see the full space and approve every detail before execution begins.',
  },
  {
    number: '3',
    title: 'Material Selection',
    description: 'Transparent, hands-on guidance in choosing quality materials, finishes, and fixtures. We balance durability, aesthetics, and your budget at every choice.',
  },
  {
    number: '4',
    title: 'Execution',
    description: 'Our skilled team manages the build with disciplined timelines and on-site supervision. Craftsmanship and cleanliness are maintained from start to finish.',
  },
  {
    number: '5',
    title: 'Handover',
    description: 'Timely delivery with a complete walkthrough and documentation. We hand over a finished space you trust, backed by ongoing support.',
  },
];

export function Process() {
  return (
    <section 
      id="process" 
      className="relative w-full py-[80px] lg:py-[150px] bg-[var(--color-accent-1)] text-[var(--color-charcoal-ink)] font-[family-name:var(--font-helveticanow)] overflow-hidden"
    >
      {/* Brand Primary Blue Rail */}
      <div 
        className="absolute inset-y-0 left-0 z-10 w-[8px] bg-[var(--color-accent-8)]" 
        aria-hidden="true" 
      />

      <div className="mx-auto max-w-[var(--page-max-width)] px-[20px]">
        
        {/* Asymmetrical Typographic Installation with Overlap */}
        <div className="mb-[80px] lg:mb-[120px] relative">
          
          {/* Massive Typographic Anchor - Scaled for 320px mobile */}
          <div className="w-full relative z-0">
            <FadeUp>
              <h2 className="text-[55px] sm:text-[80px] md:text-[120px] lg:text-[var(--text-display)] font-normal leading-[0.85] tracking-tight lg:tracking-[var(--tracking-display)] uppercase m-0">
                <AnimatedText text="PROCESS" />
              </h2>
            </FadeUp>
          </div>

          {/* Overlapping Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[30px] lg:gap-[40px] mt-[20px] relative z-10">
            
            {/* Paragraph anchoring directly underneath the text (No more bottom-alignment void) */}
            <div className="lg:col-span-5 flex flex-col justify-start lg:pt-[20px]">
              <FadeUp delay={0.2}>
                <p className="text-[var(--text-subheading)] font-normal leading-[var(--leading-subheading)] tracking-[var(--tracking-subheading)] max-w-[450px]">
                  We ensure a smooth, transparent, and timely completion of every project from start to finish.
                </p>
              </FadeUp>
            </div>

            {/* Overlapping Landscape Image (Pulled aggressively upwards via negative margin) */}
            <div className="lg:col-span-6 lg:col-start-7 lg:-mt-[120px] xl:-mt-[160px]">
              <FadeUp delay={0.4}>
                <div className="w-full aspect-[4/3] bg-[var(--color-newsprint-gray)] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1400&q=80"
                    alt="Designers reviewing material samples on site"
                    className="w-full h-full object-cover transition-transform duration-[2s] ease-out hover:scale-105"
                  />
                </div>
              </FadeUp>
            </div>

          </div>
        </div>

        {/* Dense Brutalist List */}
        <div className="w-full border-t border-[var(--color-charcoal-ink)]">
          {steps.map((step, index) => (
            <FadeUp key={index} delay={index * 0.1}>
              <div className="group grid grid-cols-1 md:grid-cols-12 gap-[20px] py-[35px] border-b border-[var(--color-charcoal-ink)] transition-colors duration-500 hover:bg-[var(--color-paper-white)] cursor-default">
                
                {/* Oversized Step Number */}
                <div className="md:col-span-3 flex items-start md:items-center px-[10px] md:px-[20px]">
                  <span className="text-[var(--text-heading-lg)] font-normal leading-[var(--leading-heading-lg)] tracking-[var(--tracking-heading-lg)] transition-transform duration-500 group-hover:translate-x-4">
                    0{step.number}
                  </span>
                </div>

                {/* Section Title */}
                <div className="md:col-span-4 flex items-start md:items-center px-[10px] md:px-[0px]">
                  <h3 className="text-[var(--text-3xl)] font-semibold leading-[var(--leading-3xl)] tracking-[var(--tracking-3xl)]">
                    {step.title}
                  </h3>
                </div>

                {/* Content */}
                <div className="md:col-span-5 flex items-start md:items-center px-[10px] md:px-[0px]">
                  <p className="text-[var(--text-body)] font-normal leading-[var(--leading-body)] tracking-[var(--tracking-body)] max-w-[420px]">
                    {step.description}
                  </p>
                </div>

              </div>
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  );
}