import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import img1 from "../../assets/gallery/1.jpeg";
import img2 from "../../assets/gallery/2.jpeg";
import img3 from "../../assets/gallery/3.jpeg";
import img4 from "../../assets/gallery/4.jpeg";
import img5 from "../../assets/gallery/5.jpeg";
import img6 from "../../assets/gallery/6.jpeg";
import img7 from "../../assets/gallery/7.jpeg";
import img8 from "../../assets/gallery/8.jpeg";
import img9 from "../../assets/gallery/9.jpeg";
import img10 from "../../assets/gallery/10.jpeg";
import img11 from "../../assets/gallery/11.jpeg";
import img12 from "../../assets/gallery/12.jpeg";
import img13 from "../../assets/gallery/13.jpeg";
import img14 from "../../assets/gallery/14.jpeg";
import img15 from "../../assets/gallery/15.jpeg";

const IMAGES = [
  /*
   {
    src: img5,
    alt: "Relaxing Atmosphere",
    title: "Relaxing Atmosphere",
    subtitle: "Rest and recover in a peaceful and nurturing setting."
  },
  {
    src: img13,
    alt: "Family Comfort",
    title: "Family Comfort",
    subtitle: "A welcoming and comfortable place for your loved ones."
  },
   {
    src: img15,
    alt: "Tranquil Setting",
    title: "Tranquil Setting",
    subtitle: "Find your calm and focus on your new beginning."
  },
  {
    src: img1,
    alt: "Exterior View",
    title: "Exterior View",
    subtitle: "Welcome to TenderBliss Postnatal Centre."
  },
  */
   {
    src: img14,
    alt: "Quality Care",
    title: "Premium",
    subtitle: "Premium settings for our specialized premium services."
  },
    {
    src: img10,
    alt: "Premium Bedroom",
    title: "Premium Bedroom",
    subtitle: "Your personal sanctuary for postnatal healing."
  },
    {
    src: img4,
    alt: "Modern Facilities",
    title: "Therapy Area",
    subtitle: "Equipped with everything you need for a comfortable stay."
  },


 
  {
    src: img6,
    alt: "Living Rooms",
    title: "Living Rooms",
    subtitle: "Thoughtfully designed spaces for you and your loved ones."
  },
  /*
  {
    src: img7,
    alt: "Hygienic Environment",
    title: "Hygienic Environment",
    subtitle: "Maintained to the highest standards of cleanliness."
  },
  */
  {
    src: img8,
    alt: "Dedicated Support Spaces",
    title: "Normal Bedroom",
    subtitle: "Spaces created with your care and well-being in mind."
  },
    {
    src: img2,
    alt: "Serene Environment",
    title: "Kitchen",
    subtitle: "A calming space designed for your peace of mind."
  },
 
  /*
  {
    src: img9,
    alt: "Welcoming Reception",
    title: "Welcoming Reception",
    subtitle: "Feel at home from the moment you arrive."
  },
  */

  /*
  {
    src: img11,
    alt: "Nurturing Space",
    title: "Nurturing Space",
    subtitle: "Carefully designed to support new mothers."
  },
  */
  // {
  //   src: img12,
  //   alt: "Thoughtful Design",
  //   title: "Normal Living Area",
  //   subtitle: "Every detail crafted for your utmost wellbeing."
  // },
  

  /*
   {
    src: img3,
    alt: "Premium Care Suite",
    title: "Premium Care Suite",
    subtitle: "Experience luxury, privacy, and comfort during your recovery."
  },
  */
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
                    <h3 className="text-[1.75rem] text-white font-bold mb-2" style={{ fontFamily: "'Burgundia', 'Playfair Display', serif" }}>
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
