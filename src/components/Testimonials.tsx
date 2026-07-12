import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { FadeUp } from './FadeUp';
import { AnimatedText } from './AnimatedText';

const testimonials = [
  {
    quote: "The team transformed our 2BHK into exactly what we dreamed of on time and within budget. Highly recommend!",
    name: 'Priya & Rahul Joshi',
    project: '2BHK Residential, Pune',
  },
  {
    quote: 'The modular kitchen they designed is both stunning and practical. Zero hidden costs, exactly as promised.',
    name: 'Anjali Mehta',
    project: 'Modular Kitchen Project',
  },
  {
    quote: 'Professional, transparent, and punctual. Divine Space Designers truly delivers on every promise.',
    name: 'Santosh Patil',
    project: 'Office Interior, Pune',
  },
  {
    quote: 'Our new office space is perfectly balanced with creativity and productivity in mind.',
    name: 'Vikram Desai',
    project: 'Commercial Space',
  },
  {
    quote: 'I loved the step-by-step payment system. It gave me full control and confidence.',
    name: 'Sneha Kadam',
    project: 'Home Renovation',
  },
];

export function Testimonials() {
  return (
    <section 
      id="testimonials" 
      className="relative w-full overflow-hidden bg-[var(--color-accent-6)] px-[20px] py-[100px] lg:px-[40px] lg:py-[150px] font-[family-name:var(--font-helveticanow)]"
    >
      {/* Brand Primary Red Rail - Strict System Requirement */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[8px] bg-[var(--color-accent-7)]" aria-hidden="true" />
      
      <div className="mx-auto max-w-[var(--page-max-width)] relative z-20">
        
        {/* =========================================
            TYPOGRAPHIC INSTALLATION HEADER
           ========================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[20px] mb-[60px] lg:mb-[100px] items-end">
          <div className="lg:col-span-8">
            <FadeUp>
              <h2 className="text-[clamp(3rem,11vw,120px)] font-normal leading-[0.93] tracking-tight lg:tracking-[var(--tracking-display)] text-[var(--color-charcoal-ink)] uppercase m-0 flex flex-col">
                <span className="block">CLIENT</span>
                <span className="block">TESTIMONIALS</span>
              </h2>
            </FadeUp>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end pb-[10px] lg:pb-[20px]">
            <FadeUp delay={0.2}>
              <p className="text-[var(--text-body)] font-normal leading-[var(--leading-body)] tracking-[var(--tracking-body)] text-[var(--color-charcoal-ink)] max-w-[300px]">
                <AnimatedText text="Don't just take our word for it. Hear from the people who live and work in our spaces." />
              </p>
            </FadeUp>
          </div>
        </div>

        {/* =========================================
            BRUTALIST CAROUSEL CARDS
           ========================================= */}
        <FadeUp delay={0.3}>
          <div className="relative w-full">
            <Carousel opts={{ loop: true, align: "start" }} className="w-full">
              <CarouselContent className="-ml-[20px]">
                {testimonials.map((test, index) => (
                  <CarouselItem key={index} className="pl-[20px] md:basis-1/2 xl:basis-1/3">
                    
                    {/* Flat Editorial Card */}
                    <div className="flex h-full min-h-[350px] flex-col justify-between border border-[var(--color-charcoal-ink)] bg-[var(--color-paper-white)] p-[30px] lg:p-[40px] transition-transform duration-500 hover:-translate-y-2 cursor-grab active:cursor-grabbing">
                      
                      <blockquote className="text-[var(--text-subheading)] font-normal leading-[var(--leading-subheading)] tracking-[var(--tracking-subheading)] text-[var(--color-charcoal-ink)]">
                        "{test.quote}"
                      </blockquote>
                      
                      <div className="mt-[40px] flex flex-col items-start border-t border-[var(--color-pewter)] pt-[20px]">
                        <p className="text-[var(--text-lg-3)] font-semibold text-[var(--color-charcoal-ink)]">
                          {test.name}
                        </p>
                        {/* Strict Editorial Category Label */}
                        <p className="mt-[8px] text-[var(--text-caption)] font-normal uppercase tracking-[var(--tracking-caption)] text-[var(--color-signal-red)]">
                          {test.project}
                        </p>
                      </div>

                    </div>

                  </CarouselItem>
                ))}
              </CarouselContent>
              
              {/* Custom Minimalist Controls */}
              <div className="mt-[40px] lg:mt-[60px] flex justify-end gap-[12px] border-t border-[var(--color-charcoal-ink)] pt-[20px]">
                <CarouselPrevious className="static translate-y-0 h-[50px] w-[50px] rounded-[var(--radius-full)] border border-[var(--color-charcoal-ink)] bg-transparent text-[var(--color-charcoal-ink)] shadow-none transition-colors duration-300 hover:bg-[var(--color-charcoal-ink)] hover:text-[var(--color-paper-white)]" />
                <CarouselNext className="static translate-y-0 h-[50px] w-[50px] rounded-[var(--radius-full)] border border-[var(--color-charcoal-ink)] bg-transparent text-[var(--color-charcoal-ink)] shadow-none transition-colors duration-300 hover:bg-[var(--color-charcoal-ink)] hover:text-[var(--color-paper-white)]" />
              </div>
            </Carousel>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}