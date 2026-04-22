import { Hero } from '../components/sections/Hero'
import { BannerSlider } from '../components/sections/BannerSlider'
import { Facilities } from '../components/sections/Facilities'
import { WhyChooseUs } from '../components/sections/WhyChooseUs'
import { About } from '../components/sections/About'
import { MissionVision } from '../components/sections/MissionVision'

export const Home = () => {
  return (
    <main>
      <Hero />
      <BannerSlider />
      <About />
      <WhyChooseUs />
      <Facilities />
      <MissionVision />
    </main>
  );
};
