import { Testimonials } from '../components/sections/Testimonials';
import { CenterGallery } from '../components/sections/CenterGallery';

export const MomentsPage = () => {
  return (
    <main className="min-h-screen pt-20">
      {/* Gallery Section - First */}
      <CenterGallery />

      {/* Patient Stories Section - Below */}
      <Testimonials />
    </main>
  );
};
