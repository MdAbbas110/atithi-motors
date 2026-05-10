import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyUs from '@/components/WhyUs';
import DefSection from '@/components/DefSection';
import Branches from '@/components/Branches';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import AtithiMotorsMap from '@/components/AtithiMotorsMap';
import ScrollRevealProvider from '@/components/ScrollRevealProvider';

export const metadata: Metadata = {
  title: 'Atithi Motors — TATA Authorized Service Center, Ghazipur',
  description:
    'Atithi Motors is your trusted TATA Motors Authorized Service Center in Ghazipur, UP. Genuine parts, DEF/Urea sales, cashless insurance claims, free pickup & drop. Call 7518951555.',
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <ScrollRevealProvider>
        <main id="main-content">
          <Hero />
          <Services />
          <AtithiMotorsMap />
          <WhyUs />
          <DefSection />
          <Branches />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </ScrollRevealProvider>
    </>
  );
}
