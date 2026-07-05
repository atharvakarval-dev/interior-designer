import { Search } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';

export function Header() {
  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#why-us' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Process', href: '#process' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <header className="fixed top-0 z-50 h-[80px] w-full bg-white">
      <div className="container mx-auto flex h-full items-center justify-between px-6 lg:px-12">
        <a href="#" className="text-[14px] font-normal leading-tight text-black">
          Divine Space <br /> Designers
        </a>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[16px] font-normal text-black transition-opacity hover:opacity-60"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <button className="flex h-10 w-10 items-center justify-center rounded-full border border-black text-black transition-colors hover:bg-black hover:text-white">
            <Search size={16} />
          </button>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-black px-5 py-4 text-[16px] font-normal text-black transition-colors hover:bg-black hover:text-white"
          >
            Get Free Consultation
          </a>
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button className="flex items-center gap-2 rounded-full border border-black px-4 py-1.5 text-[14px] font-normal text-black transition-colors hover:bg-black hover:text-white">
                Menu
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="flex w-full flex-col overflow-y-auto rounded-none border-l border-black bg-white px-8 pb-8 pt-16 shadow-none sm:w-[400px]">
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.name}>
                    <a
                      href={link.href}
                      className="text-[24px] font-normal tracking-[-0.5px] text-black transition-colors hover:text-[#ff0000] sm:text-[28px]"
                    >
                      {link.name}
                    </a>
                  </SheetClose>
                ))}
              </nav>

              <div className="mt-auto flex shrink-0 flex-col gap-6 pt-8">
                <div className="flex flex-col gap-1">
                  <span className="mb-1 text-[12px] uppercase tracking-wider text-[#bfbfbf]">Contact</span>
                  <a href="mailto:hello@divinespace.com" className="text-[15px] text-black transition-colors hover:text-[#ff0000]">
                    hello@divinespace.com
                  </a>
                  <a href="tel:+919876543210" className="text-[15px] text-black transition-colors hover:text-[#ff0000]">
                    +91 98765 43210
                  </a>
                </div>
                <SheetClose asChild>
                  <a
                    href="#contact"
                    className="inline-flex w-full items-center justify-center rounded-full bg-black py-6 text-[16px] font-normal text-white transition-colors hover:bg-[#ff0000]"
                  >
                    Get Free Consultation
                  </a>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
