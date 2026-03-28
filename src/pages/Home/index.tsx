import { Hero } from '../../components/Hero';
import { About } from '../../components/About';
import { Services } from '../../components/Services';
import { Stats } from '../../components/Stats';
import { Testimonials } from '../../components/Testimonials';
import { ContactCTA } from '../../components/ContactCTA';

export const HomePage: React.FC = () => {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Stats />
      <Testimonials />
      <ContactCTA />
    </main>
  );
};
