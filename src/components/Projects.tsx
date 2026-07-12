import React from 'react';
import { FadeUp } from './FadeUp';
import { AnimatedText } from './AnimatedText';

const projects = [
  {
    title: 'House Interior',
    location: 'PUNE, MAHARASHTRA',
    area: '165 SQM',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1400&q=80',
    tag: 'Interior',
    // Editorial bespoke layouts for desktop grid
    aspect: 'aspect-[4/3]',
    desktopLayout: 'lg:col-span-8',
  },
  {
    title: 'Apartment Interior',
    location: 'MUMBAI, MAHARASHTRA',
    area: '100 SQM',
    image: '/assets/modular-kitchen.webp',
    tag: 'Kitchen',
    aspect: 'aspect-[3/4]',
    desktopLayout: 'lg:col-span-4 lg:mt-[150px]',
  },
  {
    title: 'Studio Interior',
    location: 'BANGALORE, KARNATAKA',
    area: '85 SQM',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=80',
    tag: 'Office',
    aspect: 'aspect-[16/9]',
    desktopLayout: 'lg:col-span-10 lg:col-start-2 lg:mt-[100px]',
  },
];

export function Projects() {
  return (
    <section 
      id="projects" 
      className="relative w-full bg-[var(--color-accent-8)] text-[var(--color-paper-white)] font-[family-name:var(--font-helveticanow)] py-[100px] lg:py-[150px] overflow-hidden"
    >
      {/* Brand Primary Pink Rail - Strict System Requirement */}
      <div className="absolute inset-y-0 left-0 z-10 w-[8px] bg-[var(--color-accent-6)]" aria-hidden="true" />

      <div className="mx-auto max-w-[var(--page-max-width)] px-[20px] lg:px-[40px] relative z-20">
        
        {/* =========================================
            HEADER: TYPOGRAPHIC ANCHOR
           ========================================= */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-[40px] mb-[80px] lg:mb-[120px]">
          <div>
            <FadeUp>
              <span className="mb-[20px] block text-[14px] font-normal tracking-[0.21px] text-[var(--color-paper-white)] opacity-60">
                (03) — SELECTED WORK
              </span>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="text-[clamp(3.5rem,11vw,120px)] font-normal leading-[0.93] tracking-tight lg:tracking-[var(--tracking-display)] uppercase m-0 flex flex-col">
                <span className="block">SELECTED</span>
                <span className="block">WORK</span>
              </h2>
            </FadeUp>
          </div>
          <FadeUp delay={0.2}>
            <a
              href="#contact"
              className="inline-flex h-[50px] px-[32px] rounded-[var(--radius-full)] border border-[var(--color-paper-white)] bg-transparent text-[var(--color-paper-white)] text-[16px] font-normal items-center justify-center transition-transform duration-300 hover:scale-[1.02]"
            >
              View all projects
            </a>
          </FadeUp>
        </div>

        {/* =========================================
            ASYMMETRICAL PROJECT GALLERY
           ========================================= */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-[40px] lg:gap-[40px] w-full">
          {projects.map((project, index) => (
            <div key={`${project.title}-${index}`} className={`group flex flex-col cursor-pointer w-full ${project.desktopLayout}`}>
              <FadeUp delay={0.1 * index} className="w-full h-full flex flex-col">
                
                {/* Raw Documentary Image Crop */}
                <div className={`relative w-full ${project.aspect} overflow-hidden bg-[var(--color-newsprint-gray)]`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-[1.03]"
                  />
                </div>

                {/* Editorial Metadata Grid */}
                <div className="mt-[20px] lg:mt-[30px] flex flex-col border-t border-[var(--color-paper-white)]/30 pt-[20px]">
                  
                  {/* Top Row: Index & Mandatory Red Editorial Tag */}
                  <div className="flex items-center justify-between mb-[16px]">
                    <span className="text-[var(--text-heading-sm)] font-normal leading-none tracking-[var(--tracking-heading-sm)]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-[var(--text-caption)] font-semibold uppercase tracking-[var(--tracking-caption)] text-[var(--color-signal-red)]">
                      {project.tag}
                    </span>
                  </div>
                  
                  {/* Title & Details */}
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-[16px]">
                    <h3 className="text-[var(--text-3xl)] font-semibold leading-[var(--leading-3xl)] tracking-[var(--tracking-3xl)] max-w-[300px]">
                      {project.title}
                    </h3>
                    <div className="flex flex-col gap-[4px] text-[14px] uppercase tracking-[0.21px] font-normal opacity-70 lg:text-right">
                      <p>LOC — {project.location}</p>
                      <p>AREA — {project.area}</p>
                    </div>
                  </div>

                </div>
              </FadeUp>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}