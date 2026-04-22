import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";

import suite from "../../assets/facilities/suite.png";
import dining from "../../assets/facilities/dining.jpg";
import lounge from "../../assets/facilities/lounge.jpg";
import exterior from "../../assets/facilities/exterior.jpg";
import detail from "../../assets/facilities/detail.jpg";
import consultations from "../../assets/gallery/2.jpg.jpeg";

const FACILITIES = [
  {
    title: "Premium Patient Suites",
    image: suite,
    description: "Spacious, private suites designed for maximum comfort and recovery."
  },
  {
    title: "Nutritional Care & Dining",
    image: dining,
    description: "Dedicated spaces for mindful nutrition and family dining."
  },
  {
    title: "Family Lounge Areas",
    image: lounge,
    description: "Cozy, modern waiting and living areas for family and visitors."
  },
  {
    title: "Modern Infrastructure",
    image: exterior,
    description: "State-of-the-art facilities with a focus on safety and accessibility."
  },
  {
    title: "Architectural Excellence",
    image: detail,
    description: "Premium design and environment for a soothing postnatal journey."
  },
  {
    title: "Specialized Consultations",
    image: consultations,
    description: "Expert medical guidance and personalized care for your postnatal health."
  },
];

export const Facilities = () => {
  return (
    <section id="facilities" className="py-24 bg-background-200">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          title="Our Facilities"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {FACILITIES.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-[2.5rem] bg-white shadow-soft"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-serif font-bold text-neutral-900 mb-2 group-hover:text-primary-300 transition-colors">
                  {facility.title}
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  {facility.description}
                </p>
              </div>
              
              {/* Optional overlay line */}
              <div className="absolute bottom-0 left-0 h-1.5 bg-primary-300 transition-all duration-500 w-0 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
