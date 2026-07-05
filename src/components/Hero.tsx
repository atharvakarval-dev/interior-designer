import { FadeUp } from './FadeUp';
import { AnimatedChars } from './AnimatedChars';
import { AnimatedText } from './AnimatedText';
import { RevealImage } from './RevealImage';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-8 sm:px-6 lg:px-12">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-[12%] hidden h-px w-[22rem] bg-black/10 xl:block" />
        <div className="absolute right-[12%] top-[18%] hidden h-px w-[18rem] bg-black/10 xl:block" />
      </div>

      <div className="container relative mx-auto max-w-[1200px]">
        <div className="grid w-full gap-8 xl:grid-cols-[1.05fr_0.95fr] xl:items-start xl:gap-12">
          <div className="relative z-10 order-1">
            <FadeUp>
              <p className="text-[11px] uppercase tracking-[0.28em] text-black sm:text-[12px] sm:tracking-[0.32em]">
                Divine Space Designers
              </p>
            </FadeUp>

            <div className="mt-4 sm:mt-6">
              <AnimatedChars
                text="DIVINE"
                className="block text-[clamp(3.4rem,22vw,9rem)] font-normal uppercase leading-[0.9] tracking-[-0.06em] text-black sm:text-[clamp(4.8rem,12vw,9rem)]"
              />
              <div className="relative mt-1 flex items-end gap-3 sm:mt-2 sm:gap-4">
                <AnimatedChars
                  delay={0.06}
                  text="SPACE"
                  className="block text-[clamp(3.4rem,22vw,9rem)] font-normal uppercase leading-[0.9] tracking-[-0.06em] text-black sm:text-[clamp(4.8rem,12vw,9rem)]"
                />
                <span className="hidden pb-4 text-[13px] uppercase tracking-[0.24em] text-black sm:block">
                  Design for real life
                </span>
              </div>
            </div>

            <div className="mt-6 max-w-[36rem] sm:mt-8">
              <div className="text-[16px] leading-[1.4] tracking-[-0.004em] text-black sm:text-[18px] sm:leading-[1.31] md:text-[19px]">
                <AnimatedText text="At Divine Space Designers, we believe every space has a soul, and we bring it to life with thoughtful design, practical execution, and a deep understanding of your needs." />
              </div>

              <FadeUp delay={0.18}>
                <p className="mt-5 text-[12px] uppercase tracking-[0.18em] text-[#ff0000] sm:mt-6 sm:text-[14px] sm:tracking-[0.21px]">
                  On-time delivery | Transparent process | Trusted service
                </p>
              </FadeUp>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-3 sm:mt-8 sm:gap-4">
              <FadeUp delay={0.22}>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-black bg-white px-4 py-2 text-[14px] font-normal text-black transition-colors hover:bg-black hover:text-white sm:px-[18px] sm:py-[10px] sm:text-[16px]"
                >
                  Book a consultation
                </a>
              </FadeUp>
              <FadeUp delay={0.3}>
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-full border border-black bg-white px-4 py-2 text-[14px] font-normal text-black transition-colors hover:bg-black hover:text-white sm:px-[18px] sm:py-[10px] sm:text-[16px]"
                >
                  View projects
                </a>
              </FadeUp>
            </div>
          </div>

          <div className="relative z-10 order-2 mt-8 xl:hidden">
            <div className="grid gap-4">
              <RevealImage
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1400&q=80"
                alt="Interior living room"
                className="aspect-[4/3] w-full overflow-hidden rounded-none border border-black bg-white"
              />
              <div className="grid grid-cols-2 gap-3">
                <RevealImage
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80"
                  alt="Minimal office interior"
                  className="aspect-[4/5] w-full overflow-hidden rounded-none border border-black bg-white"
                />
                <RevealImage
                  src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1000&q=80"
                  alt="Warm living room detail"
                  className="aspect-[3/4] w-full overflow-hidden rounded-none border border-black bg-white"
                />
              </div>
            </div>
          </div>

          <div className="relative z-10 order-2 hidden min-h-[560px] xl:block md:min-h-[640px]">
            <div className="absolute left-0 top-0 w-[38%] md:w-[42%]">
              <RevealImage
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80"
                alt="Minimal office interior"
                className="aspect-[4/5] w-full overflow-hidden rounded-none border border-black bg-white"
              />
            </div>

            <div className="absolute right-0 top-10 w-[58%] md:w-[60%]">
              <RevealImage
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1400&q=80"
                alt="Interior living room"
                className="aspect-[4/3] w-full overflow-hidden rounded-none border border-black bg-white"
              />
            </div>

            <div className="absolute bottom-0 left-[14%] w-[34%] md:w-[32%]">
              <RevealImage
                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1000&q=80"
                alt="Warm living room detail"
                className="aspect-[3/4] w-full overflow-hidden rounded-none border border-black bg-white"
              />
            </div>

            <div className="absolute bottom-8 right-4 max-w-[220px] border border-black bg-white px-4 py-3">
              <div className="text-[11px] uppercase tracking-[0.22em] text-[#ff0000]">
                Signature spaces
              </div>
              <div className="mt-1 text-[16px] font-normal leading-[1.2] text-black">
                Calm, crafted, complete
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
