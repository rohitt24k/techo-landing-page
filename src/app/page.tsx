import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import CTAs from '@/components/home/CTAs';
import Testimonials from '@/components/home/Testimonials';

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Testimonials />
      <CTAs />
    </div>
  );
}
