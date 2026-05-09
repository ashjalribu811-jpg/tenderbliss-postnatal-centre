import { SEO } from '../components/ui/SEO'
import { Hero } from '../components/sections/Hero'
import { BannerSlider } from '../components/sections/BannerSlider'
import { Facilities } from '../components/sections/Facilities'
import { WhyChooseUs } from '../components/sections/WhyChooseUs'
import { About } from '../components/sections/About'
import { MissionVision } from '../components/sections/MissionVision'
import { ExpertCare } from '../components/sections/ExpertCare'

export const Home = () => {
  return (
    <main>
      <SEO 
        title="Home"
        description="Welcome to TenderBliss, Kerala's premier postnatal wellness center. We provide luxury postpartum recovery services, Ayurvedic care, and a safe haven for you and your baby."
      />
      <Hero />
      <BannerSlider />
      <About />
      <ExpertCare />
      <WhyChooseUs />
      <Facilities />
      <MissionVision />
    </main>
  );
};
