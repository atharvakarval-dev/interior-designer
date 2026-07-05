import { FadeUp } from './FadeUp';

export function CTA() {
  return (
    <section className="w-full bg-[#e8e8e8] px-6 py-32 text-center lg:px-12 lg:py-48">
      <div className="container mx-auto flex max-w-3xl flex-col items-center">
        <FadeUp>
          <h2 className="text-[50px] font-normal leading-[0.93] tracking-[-0.05em] text-black uppercase md:text-[80px]">
            Let&apos;s Design Your Dream Space Together
          </h2>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p className="mt-8 text-[18px] font-normal leading-[1.31] text-black">
            Contact us today to start your journey toward a beautifully designed space.
          </p>
        </FadeUp>

        <FadeUp delay={0.4}>
          <a
            href="#contact"
            className="mt-12 inline-flex items-center justify-center rounded-full border border-black bg-white px-[18px] py-[10px] text-[16px] font-normal text-black transition-colors hover:bg-black hover:text-white"
          >
            Contact Us Today
          </a>
        </FadeUp>
      </div>
    </section>
  );
}
