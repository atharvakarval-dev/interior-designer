import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { FadeUp } from './FadeUp';

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
    <section id="testimonials" className="w-full overflow-hidden bg-white px-6 py-24 lg:px-12 lg:py-32">
      <div className="container mx-auto max-w-[1200px]">
        <FadeUp>
          <div className="mb-16 text-left">
            <h2 className="text-[46px] font-normal leading-[1] tracking-[-1.38px] text-black md:text-[50px]">
              Client Testimonials
            </h2>
          </div>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="relative w-full px-0">
            <Carousel opts={{ loop: true }}>
              <CarouselContent>
                {testimonials.map((test, index) => (
                  <CarouselItem key={index} className="pl-5 md:basis-1/2 lg:basis-1/3">
                    <div className="flex h-full flex-col justify-between border border-black bg-[#e8e8e8] p-8 rounded-none">
                      <blockquote className="text-[18px] font-normal leading-[1.31] tracking-[-0.07px] text-black">
                        "{test.quote}"
                      </blockquote>
                      <div className="mt-8 flex flex-col items-start border-t border-black pt-6">
                        <p className="text-[16px] font-semibold text-black">{test.name}</p>
                        <p className="mt-1 text-[14px] uppercase tracking-[0.21px] text-[#ff0000]">
                          {test.project}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="mt-8 flex gap-2">
                <CarouselPrevious className="static translate-y-0 h-12 w-12 rounded-full border border-black bg-white text-black shadow-none transition-colors hover:bg-black hover:text-white" />
                <CarouselNext className="static translate-y-0 h-12 w-12 rounded-full border border-black bg-white text-black shadow-none transition-colors hover:bg-black hover:text-white" />
              </div>
            </Carousel>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
