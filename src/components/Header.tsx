import React from 'react';
import { Search } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'About Us', href: '#why-us' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Process', href: '#process' },
  { name: 'Testimonials', href: '#testimonials' },
];

export function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-50 px-[20px] lg:px-[40px] py-[25px] lg:py-[40px] flex items-center justify-between bg-transparent font-[family-name:var(--font-helveticanow)]">
      
      {/* Editorial Logo (14px, 400 weight, 2 lines) - Strict System Requirement */}
      <a href="#" className="block text-[14px] font-normal leading-[1.2] text-[var(--color-charcoal-ink)] uppercase tracking-[0.08px] z-10 hover:opacity-70 transition-opacity">
        Divine Space<br />Designers
      </a>

      {/* Right-Aligned System Controls */}
      <div className="flex items-center gap-[10px] sm:gap-[16px] z-10">
        
        {/* Search Circular Button */}
        <button 
          className="flex h-[40px] w-[40px] items-center justify-center rounded-[var(--radius-full)] border border-[var(--color-charcoal-ink)] text-[var(--color-charcoal-ink)] bg-transparent transition-colors duration-300 hover:bg-[var(--color-charcoal-ink)] hover:text-[var(--color-paper-white)]"
          aria-label="Search"
        >
          <Search size={16} strokeWidth={1.5} />
        </button>

        {/* Primary Action (Filled Pill) - Hidden on smallest mobile for space, moved to menu */}
        <a
          href="#contact"
          className="hidden md:inline-flex h-[40px] items-center justify-center rounded-[var(--radius-full)] bg-[var(--color-accent-3)] px-[20px] text-[14px] font-normal text-[var(--color-paper-white)] transition-transform duration-300 hover:scale-[1.02]"
        >
          Free Consultation
        </a>

        {/* Menu Overlay System */}
        <Sheet>
          <SheetTrigger
            render={
              <button className="flex h-[40px] items-center gap-[8px] rounded-[var(--radius-full)] border border-[var(--color-charcoal-ink)] px-[16px] text-[14px] font-normal text-[var(--color-charcoal-ink)] bg-transparent transition-colors duration-300 hover:bg-[var(--color-charcoal-ink)] hover:text-[var(--color-paper-white)]">
                MENU <span className="text-[16px] leading-none mb-[2px]">≡</span>
              </button>
            }
          />
          
          <SheetContent 
            side="right" 
            className="flex w-full flex-col overflow-y-auto rounded-none border-l border-[var(--color-charcoal-ink)] bg-[var(--color-paper-white)] px-[30px] lg:px-[50px] pb-[40px] pt-[100px] sm:max-w-[450px] shadow-none"
          >
            {/* Brutalist Menu Links */}
            <nav className="flex flex-col border-t border-[var(--color-charcoal-ink)]">
              {navLinks.map((link) => (
                <SheetClose
                  key={link.name}
                  render={
                    <a
                      href={link.href}
                      className="group flex items-center justify-between border-b border-[var(--color-charcoal-ink)] py-[20px] lg:py-[30px] text-[clamp(2rem,5vw,46px)] font-normal uppercase leading-none tracking-[var(--tracking-heading)] text-[var(--color-charcoal-ink)] transition-colors hover:bg-[var(--color-newsprint-gray)] -mx-[30px] px-[30px] lg:-mx-[50px] lg:px-[50px]"
                    >
                      <span className="transition-transform duration-500 group-hover:translate-x-4">
                        {link.name}
                      </span>
                      <span className="text-[var(--text-body)] font-normal text-[var(--color-signal-red)] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                        ↗
                      </span>
                    </a>
                  }
                />
              ))}
            </nav>

            {/* Editorial Contact Block */}
            <div className="mt-auto flex shrink-0 flex-col gap-[30px] pt-[60px]">
              <div className="flex flex-col gap-[10px]">
                <span className="mb-[4px] text-[12px] uppercase tracking-[0.21em] text-[var(--color-pewter)]">
                  Inquiries
                </span>
                <a href="mailto:hello@divinespace.com" className="text-[16px] font-semibold text-[var(--color-charcoal-ink)] transition-colors hover:text-[var(--color-signal-red)]">
                  hello@divinespace.com
                </a>
                <a href="https://wa.me/919970575328" target="_blank" rel="noopener noreferrer" className="text-[16px] font-semibold text-[var(--color-charcoal-ink)] transition-colors hover:text-[var(--color-signal-red)]">
                  +91 99705 75328
                </a>
              </div>
              
              <SheetClose
                render={
                  <a
                    href="#contact"
                    className="inline-flex w-full h-[60px] items-center justify-center rounded-[var(--radius-full)] bg-[var(--color-accent-3)] px-[24px] text-[16px] font-normal text-[var(--color-paper-white)] transition-transform duration-300 hover:scale-[1.02]"
                  >
                    Get Free Consultation
                  </a>
                }
              />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}