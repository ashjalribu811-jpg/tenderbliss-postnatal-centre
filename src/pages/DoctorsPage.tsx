import { SEO } from '../components/ui/SEO';
import { Doctors } from '../components/sections/Doctors';

export const DoctorsPage = () => {
  return (
    <main className="pt-24 min-h-screen pb-16">
      <SEO 
        title="Our Doctors"
        description="Meet the expert doctors and practitioners at TenderBliss. Our team specialized in Ayurvedic gynaecology and postnatal health is dedicated to your well-being."
      />
      <h1 className="sr-only">Our Expert Doctors & Practitioners</h1>
      <Doctors />
    </main>
  );
};
