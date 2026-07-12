import { FadeUp } from './FadeUp';
import { AnimatedText } from './AnimatedText';

const steps = [
  {
    number: '1',
    title: 'Consultation',
    description:
      'We sit down with you to understand your vision, daily lifestyle, and budget. Every preference and constraint is mapped before a single line is drawn.',
  },
  {
    number: '2',
    title: 'Design & Planning',
    description:
      'We translate your brief into customized layouts, mood boards, and 3D visualizations. You see the full space and approve every detail before execution begins.',
  },
  {
    number: '3',
    title: 'Material Selection',
    description:
      'Transparent, hands-on guidance in choosing quality materials, finishes, and fixtures. We balance durability, aesthetics, and your budget at every choice.',
  },
  {
    number: '4',
    title: 'Execution',
    description:
      'Our skilled team manages the build with disciplined timelines and on-site supervision. Craftsmanship and cleanliness are maintained from start to finish.',
  },
  {
    number: '5',
    title: 'Handover',
    description:
      'Timely delivery with a complete walkthrough and documentation. We hand over a finished space you trust, backed by ongoing support.',
  },
];

export function Process() {
  return (
    <section id="process" className="bg-accent-1 py-24 lg:py-32 px-6 lg:px-12 w-full">
      <div className="container mx-auto max-w-[1200px]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <FadeUp>
              <span className="mb-6 inline-block rounded-full bg-accent-3 px-3 py-1 text-[14px] font-normal uppercase tracking-[0.21px] text-white">
                Process &amp; Approach
              </span>
            </FadeUp>
            <h2 className="text-[46px] md:text-[50px] font-normal text-black leading-[1] tracking-[-1.38px]">
              <AnimatedText text="Our Working Process" />
            </h2>
          </div>
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
                <div className="text-[14px] font-normal text-accent-4 mb-6 tracking-[0.21px] transition-colors duration-300 group-hover:text-[#ff0000]">
                  0{step.number}
                </div>
                <h3 className="font-semibold text-[23px] text-black tracking-[-0.39px] mb-3 leading-[1.2]">
                  {step.title}
                </h3>
                <p className="text-[18px] text-black font-normal leading-[1.31] tracking-[-0.07px]">
                  {step.description}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>

      <img
        src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1400&q=80"
        alt="Designers reviewing material samples on site"
        className="mt-16 w-full max-w-none aspect-[16/7] object-cover lg:-mx-12"
      />
    </section>
  );
}
