import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Marquee } from '@/components/Marquee';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { Services } from '@/components/Services';
import { Process } from '@/components/Process';
import { Projects } from '@/components/Projects';
import { Testimonials } from '@/components/Testimonials';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';
import { FloatingActions } from '@/components/FloatingActions';

export default function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden text-black font-sans selection:bg-black selection:text-white">
      <Header />
      <main className="pt-[80px]">
        <Hero />
        <Marquee />
        <WhyChooseUs />
        <Services />
        <Process />
        <Projects />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
