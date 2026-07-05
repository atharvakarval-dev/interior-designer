import { Instagram, Facebook, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="w-full bg-[#e8e8e8] px-6 pb-12 pt-24 text-black lg:px-12">
      <div className="container mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="flex flex-col gap-6">
            <h2 className="text-[23px] font-normal tracking-[-0.39px] text-black">
              Divine Space
            </h2>
            <p className="max-w-sm text-[16px] leading-[1.4] tracking-[0.08px] text-black">
              At Divine Space Designers, we create interiors that reflect your personality while staying within your budget. Trusted by clients across Pune.
            </p>
            <div className="mt-2 flex items-center gap-6">
              <a href="#" className="text-black transition-colors hover:text-[#ff0000]" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-black transition-colors hover:text-[#ff0000]" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-black transition-colors hover:text-[#ff0000]" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-[14px] font-normal uppercase tracking-[0.21px] text-[#bfbfbf]">Quick Links</h3>
            <ul className="flex flex-col gap-4">
              {['Home', 'About Us', 'Projects', 'Process', 'Testimonials'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-[16px] font-normal text-black transition-colors hover:text-[#ff0000]"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-[14px] font-normal uppercase tracking-[0.21px] text-[#bfbfbf]">Services</h3>
            <ul className="flex flex-col gap-4">
              {[
                'Residential Interiors',
                'Modular Kitchens',
                'Bedroom Design',
                'Office Workspaces',
                '3D Visualization',
                'Custom Decor',
              ].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-[16px] font-normal text-black transition-colors hover:text-[#ff0000]">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-[14px] font-normal uppercase tracking-[0.21px] text-[#bfbfbf]">Contact Us</h3>
            <ul className="flex flex-col gap-5">
              <li className="flex items-start gap-4 text-[16px] text-black">
                <a href="tel:+919876543210" className="transition-colors hover:text-[#ff0000]">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-start gap-4 text-[16px] text-black">
                <a href="mailto:hello@divinespace.in" className="transition-colors hover:text-[#ff0000]">
                  hello@divinespace.in
                </a>
              </li>
              <li className="flex items-start gap-4 text-[16px] text-black">
                <span>
                  Kalyani Nagar, Pune,
                  <br />
                  Maharashtra 411014
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 mb-8 h-px w-full bg-black" />

        <div className="flex flex-col items-center justify-between gap-4 text-[14px] font-normal tracking-[0.21px] text-black md:flex-row">
          <p>&copy; 2025 Divine Space Designers.</p>
          <p>Designed in Pune</p>
        </div>
      </div>
    </footer>
  );
}
