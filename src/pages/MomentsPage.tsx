import { SEO } from '../components/ui/SEO';
import { Testimonials } from '../components/sections/Testimonials';
import { CenterGallery } from '../components/sections/CenterGallery';

export const MomentsPage = () => {
  return (
    <main className="min-h-screen pt-20">
      <SEO 
        title="Moments"
        description="Experience the journey of motherhood through our gallery and patient testimonials. Real stories from real mothers at TenderBliss."
      />
      <h1 className="sr-only">TenderBliss Moments: Gallery and Testimonials</h1>
      {/* Gallery Section - First */}
      <CenterGallery />

      {/* Patient Stories Section - Below */}
      <Testimonials />
    </main>
  );
};
