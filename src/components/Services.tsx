import React, { useState } from 'react';
import { FadeUp } from './FadeUp';
import { AnimatedText } from './AnimatedText';
import { ArrowRight, Home, LayoutDashboard, Sofa, Briefcase, Grid, PaintBucket } from 'lucide-react';
import residentialImage from '../../assets/Grand parents room.webp';
import furnitureImage from '../../assets/bedroom.webp';
import commercialImage from '../../assets/commercial-interior-design-services.jpg';
import designPlanningImage from '../../assets/ss2471258001-architect.jpg';

const services = [
  {
    title: 'Residential Interiors',
    description: 'Complete interior design solutions tailored for homes, apartments, and villas.',
    icon: Home,
    image: residentialImage,
  },
  {
    title: 'Modular Kitchen',
    description: 'Smart, aesthetic, and functional kitchen designs for the modern lifestyle.',
    icon: LayoutDashboard,
    image: '/assets/modular-kitchen.webp',
  },
  {
    title: 'Living & Bedroom',
    description: 'Cozy and luxurious setups designed to enhance comfort and relaxation.',
    icon: Sofa,
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1000&q=80',
  },
  {
    title: 'Office & Commercial',
    description: 'Professional and productive workspaces designed for efficiency and branding.',
    icon: Briefcase,
    image: commercialImage,
  },
  {
    title: '3D Design & Planning',
    description: 'High-quality 3D visualizations and space planning to preview your dream space.',
    icon: Grid,
    image: designPlanningImage,
  },
  {
    title: 'Furniture & Decor',
    description: 'Custom furniture and carefully curated decor items that match your style.',
    icon: PaintBucket,
    image: furnitureImage,
  }
];

export function Services() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [mobileExpandedIndex, setMobileExpandedIndex] = useState<number | null>(null);

  return (
    <section 
      id="services" 
      className="relative w-full bg-[var(--color-paper-white)] text-[var(--color-charcoal-ink)] font-[family-name:var(--font-helveticanow)] overflow-hidden py-[100px] lg:py-[150px]"
    >
      {/* Editorial Left-Panel Rail (Terracotta) */}
      <div 
        className="absolute inset-y-0 left-0 z-10 w-[8px] bg-[var(--color-accent-1)]" 
        aria-hidden="true" 
      />

      <div className="mx-auto max-w-[var(--page-max-width)] px-[20px] lg:px-[40px] relative z-20">
        
        {/* =========================================
            MASSIVE TYPOGRAPHIC HEADER
           ========================================= */}
        {/* Removed redundant border-b here to fix the double-line bug */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-[30px] mb-[40px] lg:mb-[80px]">
          <FadeUp>
            <h2 className="text-[clamp(3.5rem,10vw,120px)] font-normal leading-[0.93] tracking-tight lg:tracking-[var(--tracking-display)] uppercase m-0 flex flex-col">
              <span className="block">SPECIALIZED</span>
              <span className="block">SERVICES</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.2} className="lg:pb-[15px]">
            <p className="text-[var(--text-subheading)] font-normal leading-[var(--leading-subheading)] tracking-[var(--tracking-subheading)] max-w-[350px]">
              <AnimatedText text="We offer a wide range of interior design services to cater to your specific needs." />
            </p>
          </FadeUp>
        </div>

        {/* =========================================
            DESKTOP LAYOUT (Sticky Image + Hover Index)
           ========================================= */}
        <div className="hidden lg:grid grid-cols-12 gap-[60px] items-start">
          
          {/* Interactive Editorial List - The border-t here now acts as the sole divider */}
          <div className="col-span-7 flex flex-col border-t border-[var(--color-charcoal-ink)]">
            {services.map((service, index) => (
              <div 
                key={service.title}
                onMouseEnter={() => setActiveIndex(index)}
                className="group flex flex-col border-b border-[var(--color-charcoal-ink)] transition-colors duration-500 hover:bg-[var(--color-newsprint-gray)] cursor-default py-[40px] px-[20px] -mx-[20px]"
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-[40px]">
                    <span className="text-[var(--text-heading-sm)] font-normal tracking-[var(--tracking-heading-sm)] text-[var(--color-pewter)] transition-colors duration-500 group-hover:text-[var(--color-signal-red)]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-[var(--text-heading-sm)] font-semibold leading-[var(--leading-heading-sm)] tracking-[var(--tracking-heading-sm)]">
                      {service.title}
                    </h3>
                  </div>
                  <ArrowRight className="w-[30px] h-[30px] text-[var(--color-pewter)] transition-all duration-500 -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-hover:text-[var(--color-charcoal-ink)]" strokeWidth={1} />
                </div>
                
                {/* Description seamlessly tucked into the row layout */}
                <div className="grid grid-rows-[0fr] transition-all duration-500 ease-out group-hover:grid-rows-[1fr]">
                  <div className="overflow-hidden ml-[85px] max-w-[400px]">
                    <p className="text-[var(--text-body)] font-normal leading-[var(--leading-body)] tracking-[var(--tracking-body)] pt-[20px]">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sticky Image Reveal Anchor */}
          <div className="col-span-5 relative h-full">
            <div className="sticky top-[150px] w-full aspect-[4/5] bg-[var(--color-newsprint-gray)] overflow-hidden">
              {services.map((service, index) => (
                <img 
                  key={`img-${index}`}
                  src={service.image} 
                  alt={service.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-[1.2s] ease-in-out ${activeIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
                />
              ))}
              
              {/* Contextual Floating Metadata */}
              <div className="absolute bottom-[30px] right-[30px] bg-[var(--color-paper-white)] px-[20px] py-[10px] border border-[var(--color-charcoal-ink)]">
                <p className="text-[14px] uppercase tracking-[0.21px] font-semibold text-[var(--color-charcoal-ink)] flex items-center gap-[10px]">
                  <span>{String((activeIndex ?? 0) + 1).padStart(2, '0')}</span>
                  <span className="w-[20px] h-[1px] bg-[var(--color-charcoal-ink)]"></span>
                  <span>{services[activeIndex ?? 0]?.title}</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================
            MOBILE LAYOUT (Brutalist Accordion)
           ========================================= */}
        {/* The border-t here now acts as the sole divider below the paragraph */}
        <div className="flex lg:hidden flex-col border-t border-[var(--color-charcoal-ink)]">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="flex flex-col border-b border-[var(--color-charcoal-ink)] py-[30px] cursor-pointer"
              onClick={() => setMobileExpandedIndex(mobileExpandedIndex === index ? null : index)}
            >
              <div className="flex items-start justify-between w-full">
                <div className="flex flex-col gap-[10px]">
                  <span className="text-[14px] uppercase font-semibold tracking-[0.21px] text-[var(--color-signal-red)]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-[var(--text-xl)] font-semibold leading-[var(--leading-xl)] tracking-[var(--tracking-xl)] pr-[16px]">
                    {service.title}
                  </h3>
                </div>
                <ArrowRight 
                  className={`w-[24px] h-[24px] text-[var(--color-charcoal-ink)] transition-transform duration-500 mt-[30px] flex-shrink-0 ${mobileExpandedIndex === index ? 'rotate-90' : 'rotate-0'}`} 
                  strokeWidth={1.5} 
                />
              </div>
              
              <div className={`grid transition-all duration-700 ease-in-out ${mobileExpandedIndex === index ? 'grid-rows-[1fr] mt-[25px]' : 'grid-rows-[0fr] mt-0'}`}>
                <div className="overflow-hidden flex flex-col gap-[20px]">
                  <p className="text-[var(--text-body)] font-normal leading-[var(--leading-body)] tracking-[var(--tracking-body)]">
                    {service.description}
                  </p>
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full aspect-[4/3] object-cover bg-[var(--color-newsprint-gray)] grayscale"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}