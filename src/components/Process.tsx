import { FadeUp } from './FadeUp';
import { AnimatedText } from './AnimatedText';

const steps = [
  {
    number: '1',
    title: 'Consultation',
    description: 'We understand your vision, lifestyle, and budget.',
  },
  {
    number: '2',
    title: 'Design & Planning',
    description: 'We create customized designs tailored to your space.',
  },
  {
    number: '3',
    title: 'Material Selection',
    description: 'Transparent guidance in choosing quality materials.',
  },
  {
    number: '4',
    title: 'Execution',
    description: 'Our skilled team brings your design to life.',
  },
  {
    number: '5',
    title: 'Handover',
    description: 'Timely delivery with complete satisfaction.',
  },
];

export function Process() {
  return (
    <section id="process" className="bg-white py-24 lg:py-32 px-6 lg:px-12 w-full">
      <div className="container mx-auto max-w-[1200px]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <h2 className="text-[46px] md:text-[50px] font-normal text-black leading-[1] tracking-[-1.38px]">
              <AnimatedText text="Our Working Process" />
            </h2>
            <FadeUp delay={0.2}>
              <p className="text-[18px] text-black max-w-sm font-normal leading-[1.31] tracking-[-0.07px]">
                We ensure a smooth, transparent, and timely completion of every project from start to finish.
              </p>
            </FadeUp>
          </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-12">
          {steps.map((step, index) => (
            <FadeUp key={index} delay={index * 0.1} className="w-full h-full group">
              <div className="flex flex-col items-start bg-white border border-black h-full transition-all duration-300 hover:-translate-y-2 p-6 rounded-none cursor-default">
                <div className="text-[14px] font-normal text-[#bfbfbf] mb-6 tracking-[0.21px] transition-colors duration-300 group-hover:text-[#ff0000]">
                  0{step.number}
                </div>
                <h3 className="font-semibold text-[19px] text-black tracking-[-0.02em] mb-3 leading-[1.2]">
                  {step.title}
                </h3>
                <p className="text-[16px] text-black font-normal leading-[1.4] tracking-[0.08px]">
                  {step.description}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
