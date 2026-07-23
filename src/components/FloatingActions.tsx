import { MessageCircle, Phone } from 'lucide-react';

export function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      <a
        href="tel:+919970575328"
        className="md:hidden flex items-center justify-center w-[50px] h-[50px] bg-white border border-black rounded-full hover:bg-black hover:text-white transition-colors duration-300 text-black"
        aria-label="Call Us"
      >
        <Phone size={20} />
      </a>
      <a
        href="https://wa.me/919970575328"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-[50px] h-[50px] bg-white border border-black rounded-full hover:bg-black hover:text-white transition-colors duration-300 text-black"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={22} />
      </a>
    </div>
  );
}
