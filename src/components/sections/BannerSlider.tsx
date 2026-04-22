import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import banner1 from "../../assets/1.jpg.jpeg";
import banner2 from "../../assets/2.jpg.jpeg";

const BANNERS = [
  banner1,
  banner2
];

export const BannerSlider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % BANNERS.length);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full h-auto overflow-hidden bg-white py-0"
    >
      <div className="relative w-full aspect-[21/9] md:aspect-[25/9] rounded-xl md:rounded-3xl overflow-hidden shadow-2xl mx-auto max-w-[98%]">
        <AnimatePresence initial={false}>
          <motion.div
            key={current}
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{
              x: { duration: 1.5, ease: [0.65, 0, 0.35, 1] },
              opacity: { duration: 0.8 }
            }}
            className="absolute inset-0 w-full h-full"
            style={{ zIndex: 1 }}
          >
            <img
              src={BANNERS[current]}
              alt={`TenderBliss Banner ${current + 1}`}
              className="w-full h-full object-cover"
              loading="eager"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Premium Navigation Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 px-5 py-2.5 bg-black/10 backdrop-blur-xl border border-white/20 rounded-full z-20 shadow-2xl">
        {BANNERS.map((_, idx) => (
          <motion.button
            key={idx}
            onClick={() => setCurrent(idx)}
            animate={{ 
              width: current === idx ? 48 : 12,
              backgroundColor: current === idx ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.3)"
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="group relative h-1.5 rounded-full overflow-hidden"
            aria-label={`Go to slide ${idx + 1}`}
          >
            {/* Active progress fill */}
            <AnimatePresence mode="wait">
              {current === idx && (
                <motion.div
                  key={`progress-${idx}`}
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 6.5, ease: "linear" }}
                  onAnimationComplete={nextSlide}
                  className="absolute inset-0 bg-[#63c8ce] rounded-full shadow-[0_0_12px_rgba(99,200,206,0.6)]"
                />
              )}
            </AnimatePresence>
          </motion.button>
        ))}
      </div>
    </motion.section>
  );
};
