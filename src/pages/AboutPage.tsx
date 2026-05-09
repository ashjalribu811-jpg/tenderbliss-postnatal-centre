import { SEO } from '../components/ui/SEO';
import { About } from '../components/sections/About';

export const AboutPage = () => {
  return (
    <main className="pt-24 min-h-screen pb-16">
      <SEO 
        title="About Us"
        description="Learn about TenderBliss, our mission, vision, and the expert team behind our premium postnatal care services in Kerala."
      />
      <h1 className="sr-only">About TenderBliss Postnatal Wellness Center</h1>
      <About />
    </main>
  );
};
