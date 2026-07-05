import { FadeUp } from './FadeUp';

export function Marquee() {
  return (
    <div className="w-full overflow-hidden bg-white py-12 md:py-20 border-t border-b border-black">
      <FadeUp>
        <div className="flex whitespace-nowrap group">
          <div className="animate-marquee inline-block group-hover:[animation-play-state:paused]">
            <span className="text-[50px] md:text-[80px] font-normal tracking-[-0.03em] uppercase text-black mx-4">
              EDITORIAL DESIGN
            </span>
            <span className="text-[50px] md:text-[80px] font-normal tracking-[-0.03em] uppercase text-[#ff0000] mx-4 inline-block">
              /
            </span>
            <span className="text-[50px] md:text-[80px] font-normal tracking-[-0.03em] uppercase text-black mx-4">
              BRUTALIST ARCHITECTURE
            </span>
            <span className="text-[50px] md:text-[80px] font-normal tracking-[-0.03em] uppercase text-[#ff0000] mx-4 inline-block">
              /
            </span>
            <span className="text-[50px] md:text-[80px] font-normal tracking-[-0.03em] uppercase text-black mx-4">
              MINIMAL SPACES
            </span>
            <span className="text-[50px] md:text-[80px] font-normal tracking-[-0.03em] uppercase text-[#ff0000] mx-4 inline-block">
              /
            </span>
          </div>
          <div className="animate-marquee inline-block group-hover:[animation-play-state:paused]" aria-hidden="true">
            <span className="text-[50px] md:text-[80px] font-normal tracking-[-0.03em] uppercase text-black mx-4">
              EDITORIAL DESIGN
            </span>
            <span className="text-[50px] md:text-[80px] font-normal tracking-[-0.03em] uppercase text-[#ff0000] mx-4 inline-block">
              /
            </span>
            <span className="text-[50px] md:text-[80px] font-normal tracking-[-0.03em] uppercase text-black mx-4">
              BRUTALIST ARCHITECTURE
            </span>
            <span className="text-[50px] md:text-[80px] font-normal tracking-[-0.03em] uppercase text-[#ff0000] mx-4 inline-block">
              /
            </span>
            <span className="text-[50px] md:text-[80px] font-normal tracking-[-0.03em] uppercase text-black mx-4">
              MINIMAL SPACES
            </span>
            <span className="text-[50px] md:text-[80px] font-normal tracking-[-0.03em] uppercase text-[#ff0000] mx-4 inline-block">
              /
            </span>
          </div>
        </div>
      </FadeUp>
    </div>
  );
}
