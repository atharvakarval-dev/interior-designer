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
    <section id="why-us" className="bg-[#e8e8e8] py-24 lg:py-32 px-6 lg:px-12 w-full">
      <div className="container mx-auto max-w-[1200px]">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
          
          <div className="lg:col-span-3">
            <FadeUp>
              <h3 className="text-[16px] font-normal text-[#ff0000] leading-[1.4] tracking-[0.08px] uppercase">
                About us and<br />how we work
              </h3>
            </FadeUp>
          </div>

          <div className="lg:col-span-9">
            <h2 className="text-[35px] md:text-[46px] font-normal leading-[1.0] tracking-[-0.03em] text-black max-w-4xl hover:text-[#bfbfbf] transition-colors duration-500 cursor-default">
              <AnimatedText text="Our mission is to transform any space with a fusion of art and functionality to fit its user." />
            </h2>

            <div className="grid md:grid-cols-2 gap-x-12 gap-y-16 mt-20 lg:mt-32">
              {features.map((feature, index) => (
                <FadeUp key={index} delay={index * 0.1}>
                  <div className="flex flex-col group cursor-pointer">
                    <span className="text-[14px] font-normal text-black mb-6 block tracking-[0.21px] transition-transform duration-300 group-hover:-translate-y-2">
                      {feature.number}
                    </span>
                    <h4 className="font-semibold text-[19px] text-black mb-3 leading-[1.2]">
                      {feature.title}
                    </h4>
                    <p className="text-[16px] font-normal text-black leading-[1.4] tracking-[0.08px] max-w-sm">
                      {feature.description}
                    </p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>

        </div>
      </div>

      <img
        src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=80"
        alt="Designers collaborating in the studio"
        className="-mx-6 mt-20 w-full max-w-none aspect-[16/7] object-cover lg:-mx-12"
      />
    </section>
  );
}
