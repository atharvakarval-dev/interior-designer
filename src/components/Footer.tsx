import React from 'react';
import { FadeUp } from './FadeUp';
import { ArrowUpRight } from 'lucide-react';

export function Footer() {
  return (
    <footer 
      id="contact" 
      className="relative w-full bg-[var(--color-accent-5)] text-[var(--color-charcoal-ink)] font-[family-name:var(--font-helveticanow)] pt-[100px] lg:pt-[150px] pb-[40px] overflow-hidden"
    >
      {/* Brand Editorial Rail (Terracotta) - Strict System Requirement */}
      <div 
        className="absolute inset-y-0 left-0 z-10 w-[8px] bg-[var(--color-accent-1)]" 
        aria-hidden="true" 
      />

      <div className="mx-auto max-w-[var(--page-max-width)] px-[20px] lg:px-[40px] relative z-20">
        
        {/* =========================================
            MASSIVE TYPOGRAPHIC ANCHOR
           ========================================= */}
        <div className="w-full border-b border-[var(--color-charcoal-ink)] pb-[40px] lg:pb-[60px] mb-[60px] lg:mb-[80px]">
          <FadeUp>
            <h2 className="text-[clamp(3.5rem,14vw,200px)] font-normal leading-[0.85] tracking-tight lg:tracking-[var(--tracking-display)] uppercase m-0 flex flex-col sm:flex-row sm:items-end justify-between">
              <span className="block">DIVINE</span>
              <span className="block">SPACE</span>
            </h2>
          </FadeUp>
        </div>

        {/* =========================================
            ASYMMETRICAL EDITORIAL GRID
           ========================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[60px] lg:gap-[40px]">
          
          {/* Column 1: Brand Manifesto & Social Pills */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <FadeUp delay={0.1}>
              <p className="text-[var(--text-body)] font-normal leading-[var(--leading-body)] tracking-[var(--tracking-body)] max-w-[320px] mb-[40px]">
                At Divine Space Designers, we create interiors that reflect your personality while staying within your budget. Trusted by clients across Pune.
              </p>
              
              {/* System-Compliant Pill Ghost Buttons */}
              <div className="flex flex-wrap gap-[12px]">
                {['Instagram', 'Facebook', 'YouTube'].map((social) => (
                  <a 
                    key={social}
                    href="#" 
                    className="inline-flex items-center gap-[6px] rounded-[var(--radius-full)] border border-[var(--color-charcoal-ink)] px-[16px] py-[8px] text-[14px] font-normal transition-colors duration-300 hover:bg-[var(--color-charcoal-ink)] hover:text-[var(--color-paper-white)]"
                  >
                    {social}
                    <ArrowUpRight className="w-[14px] h-[14px]" strokeWidth={1.5} />
                  </a>
                ))}
              </div>
            </FadeUp>
          </div>

          {/* Column 2: Dense Brutalist Links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <FadeUp delay={0.2}>
              <h3 className="mb-[24px] text-[var(--text-caption)] font-semibold uppercase tracking-[var(--tracking-caption)] text-[var(--color-signal-red)]">
                Quick Links
              </h3>
              <ul className="flex flex-col border-t border-[var(--color-charcoal-ink)]">
                {['Home', 'About Us', 'Projects', 'Process', 'Testimonials'].map((link) => (
                  <li key={link} className="border-b border-[var(--color-charcoal-ink)]">
                    <a
                      href={`#${link.toLowerCase().replace(' ', '-')}`}
                      className="group block py-[16px] text-[var(--text-body-sm)] font-normal transition-colors hover:text-[var(--color-signal-red)] flex items-center justify-between"
                    >
                      <span className="transition-transform duration-300 group-hover:translate-x-2">{link}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </FadeUp>
          </div>

          {/* Column 3: Dense Brutalist Services */}
          <div className="lg:col-span-2">
            <FadeUp delay={0.3}>
              <h3 className="mb-[24px] text-[var(--text-caption)] font-semibold uppercase tracking-[var(--tracking-caption)] text-[var(--color-signal-red)]">
                Services
              </h3>
              <ul className="flex flex-col border-t border-[var(--color-charcoal-ink)]">
                {[
                  'Residential Interiors',
                  'Modular Kitchens',
                  'Bedroom Design',
                  'Office Workspaces',
                  '3D Visualization',
                  'Custom Decor',
                ].map((service) => (
                  <li key={service} className="border-b border-[var(--color-charcoal-ink)]">
                    <a 
                      href="#services" 
                      className="group block py-[16px] text-[var(--text-body-sm)] font-normal transition-colors hover:text-[var(--color-signal-red)] flex items-center justify-between"
                    >
                      <span className="transition-transform duration-300 group-hover:translate-x-2">{service}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </FadeUp>
          </div>

          {/* Column 4: Contact Directory */}
          <div className="lg:col-span-3 lg:col-start-10">
            <FadeUp delay={0.4}>
              <h3 className="mb-[24px] text-[var(--text-caption)] font-semibold uppercase tracking-[var(--tracking-caption)] text-[var(--color-signal-red)]">
                Contact Us
              </h3>
              <div className="flex flex-col border-t border-[var(--color-charcoal-ink)]">
                
                <div className="border-b border-[var(--color-charcoal-ink)] py-[16px] flex flex-col gap-[8px]">
                  <span className="text-[12px] uppercase tracking-[0.2em] text-[var(--color-pewter)]">Email</span>
                  <a href="mailto:hello@divinespace.in" className="text-[var(--text-body-sm)] font-semibold hover:text-[var(--color-signal-red)] transition-colors">
                    hello@divinespace.in
                  </a>
                </div>

                <div className="border-b border-[var(--color-charcoal-ink)] py-[16px] flex flex-col gap-[8px]">
                  <span className="text-[12px] uppercase tracking-[0.2em] text-[var(--color-pewter)]">Phone</span>
                  <a href="tel:+919876543210" className="text-[var(--text-body-sm)] font-semibold hover:text-[var(--color-signal-red)] transition-colors">
                    +91 98765 43210
                  </a>
                  <a href="tel:+918459330334" className="text-[var(--text-body-sm)] font-semibold hover:text-[var(--color-signal-red)] transition-colors">
                    +91 84593 30334
                  </a>
                </div>

                <div className="border-b border-[var(--color-charcoal-ink)] py-[16px] flex flex-col gap-[8px]">
                  <span className="text-[12px] uppercase tracking-[0.2em] text-[var(--color-pewter)]">Studios</span>
                  <p className="text-[var(--text-body-sm)] font-normal leading-[1.4]">
                    Kalyani Nagar, Pune,<br />Maharashtra 411014
                  </p>
                  <p className="text-[var(--text-body-sm)] font-normal leading-[1.4] mt-[8px]">
                    Nanded Gaon, Near Nanded City,<br />Sinhagad Road, Pune
                  </p>
                </div>

              </div>
            </FadeUp>
          </div>

        </div>

        {/* =========================================
            BOTTOM METADATA
           ========================================= */}
        <FadeUp delay={0.5}>
          <div className="mt-[80px] lg:mt-[120px] flex flex-col sm:flex-row items-center justify-between gap-[16px] border-t border-[var(--color-charcoal-ink)] pt-[20px] text-[var(--text-caption)] font-normal tracking-[var(--tracking-caption)]">
            <p>&copy; {new Date().getFullYear()} Divine Space Designers.</p>
            <p className="opacity-70">Designed in Pune</p>
          </div>
        </FadeUp>

      </div>
    </footer>
  );
}