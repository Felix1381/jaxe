import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Method from '@/components/Method';
import WhyChooseUs from '@/components/WhyChooseUs';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <Method />
        <WhyChooseUs />
        <Contact />
      </main>
    </div>
  );
}
