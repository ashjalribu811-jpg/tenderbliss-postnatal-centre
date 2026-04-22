import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import img1 from "../../assets/gallery/1.jpg.jpeg";
import img2 from "../../assets/gallery/2.jpg.jpeg";
import img3 from "../../assets/gallery/3.jpg.jpeg";
import img4 from "../../assets/gallery/4.jpg.jpeg";
import img5 from "../../assets/gallery/5.jpg.jpeg";
import img6 from "../../assets/gallery/6.jpg.jpeg";

const IMAGES = [
  {
    src: img6,
    alt: "Premium Care Suite",
    title: "Premium Care Suite",
    subtitle: "Experience luxury and comfort during your stay."
  },
  {
    src: img4,
    alt: "Modern Facility",
    title: "Modern Facility",
    subtitle: "State-of-the-art infrastructure for maternal health."
  },
  {
    src: img2,
    alt: "Sanctuary Rooms",
    title: "Sanctuary Rooms",
    subtitle: "Private, serene environments for recovery."
  },
  {
    src: img1,
    alt: "Holistic Wellness",
    title: "Holistic Wellness",
    subtitle: "A complete approach to prenatal and postnatal care."
  },
  {
    src: img3,
    alt: "Family & Comfort",
    title: "Family & Comfort",
    subtitle: "Thoughtfully designed spaces for you and your loved ones."
  },
  {
    src: img5,
    alt: "Safe Arrival",
    title: "Safe Arrival",
    subtitle: "The perfect environment for your new beginning."
  }
];

export const CenterGallery = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedImages = showAll ? IMAGES : IMAGES.slice(0, 3);

  return (
    <section className="py-24 bg-white font-serif">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          title="Gallery"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          <AnimatePresence mode="popLayout">
            {displayedImages.map((image, index) => (
              <motion.div
                key={image.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                layout
                className="group relative h-[450px] rounded-[2.5rem] overflow-hidden shadow-2xl isoloate cursor-pointer shadow-primary-300/5 hover:shadow-primary-300/10 transition-all duration-500"
              >
                {/* Image with smooth zoom */}
                <div className="absolute inset-0">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                  />
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                {/* Captions */}
                <div className="absolute inset-0 p-10 flex flex-col justify-end">
                  <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                    <h3 className="text-[1.75rem] text-white font-bold mb-2">
                      {image.title}
                    </h3>
                    <p className="text-white/80 text-[0.9rem] font-medium leading-relaxed max-w-[280px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {image.subtitle}
                    </p>
                  </div>
                </div>

                {/* Decorative Corner Blur */}
                <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform scale-75 group-hover:scale-100">
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Show More Button */}
        <div className="mt-16 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="group relative inline-flex items-center gap-2 h-[52px] px-10 rounded-full font-bold text-neutral-800 transition-all duration-300 hover:text-white"
          >
            {/* Background shape */}
            <div className="absolute inset-0 rounded-full border-2 border-neutral-800 group-hover:bg-neutral-800 transition-all duration-300" />

            <span className="relative z-10 flex items-center gap-2">
              {showAll ? "Show Less" : "Show All"}
              <motion.span
                animate={{ rotate: showAll ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                ▼
              </motion.span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
