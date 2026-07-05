import { useState } from 'react';
import { FadeUp } from './FadeUp';
import { AnimatedText } from './AnimatedText';
import { ArrowUpRight, Home, LayoutDashboard, Sofa, Briefcase, Grid, PaintBucket } from 'lucide-react';

const services = [
  {
    title: 'Residential Interiors',
    description: 'Complete interior design solutions tailored for homes, apartments, and villas.',
    icon: Home,
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
  },
  {
    title: 'Modular Kitchen',
    description: 'Smart, aesthetic, and functional kitchen designs for the modern lifestyle.',
    icon: LayoutDashboard,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
  },
  {
    title: 'Living & Bedroom',
    description: 'Cozy and luxurious setups designed to enhance comfort and relaxation.',
    icon: Sofa,
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80',
  },
  {
    title: 'Office & Commercial',
    description: 'Professional and productive workspaces designed for efficiency and branding.',
    icon: Briefcase,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
  },
  {
    title: '3D Design & Planning',
    description: 'High-quality 3D visualizations and space planning to preview your dream space.',
    icon: Grid,
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
  },
  {
    title: 'Furniture & Decor',
    description: 'Custom furniture and carefully curated decor items that match your style.',
    icon: PaintBucket,
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=800&q=80',
  }
];

export function Services() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="services" className="bg-white py-24 lg:py-32 px-6 lg:px-12 w-full">
      <div className="container mx-auto max-w-[1200px]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 lg:mb-24">
          <h2 className="text-[46px] md:text-[50px] font-normal tracking-[-1.38px] text-black leading-[1]">
            <AnimatedText text="Specialized Services" />
          </h2>
          <FadeUp delay={0.2}>
            <p className="text-[18px] text-black max-w-sm font-normal leading-[1.31] tracking-[-0.07px]">
              We offer a wide range of interior design services to cater to your specific needs.
            </p>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <FadeUp key={service.title} delay={0.1 * index} className="h-full">
              <div 
                className="group bg-white p-8 md:p-10 border border-black transition-colors duration-300 flex flex-col h-full cursor-pointer hover:border-[#ff0000]"
                onClick={() => toggleCard(index)}
              >
                <div className="mb-10 flex justify-between items-start">
                  <service.icon className="w-8 h-8 text-black" strokeWidth={1.5} />
                  <ArrowUpRight className={`w-6 h-6 text-black transition-all duration-300 ${expandedIndex === index ? 'rotate-90 opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0'}`} strokeWidth={1.5} />
                </div>
                <div className="flex-grow">
                  <h3 className="text-[24px] font-normal tracking-[-0.5px] text-black mb-4">
                    {service.title}
                  </h3>
                  <p className="text-[16px] text-black/70 leading-[1.5] font-normal">
                    {service.description}
                  </p>
                </div>
                <div className={`grid transition-all duration-500 ease-in-out ${expandedIndex === index ? 'grid-rows-[1fr] mt-6' : 'grid-rows-[0fr] mt-0'}`}>
                  <div className="overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-[200px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
