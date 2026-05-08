import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { SectionHeading } from "../ui/SectionHeading";
import { cn } from "../../lib/utils";


const AVATAR_COLORS = [
  "bg-blue-500",
  "bg-red-500",
  "bg-yellow-500",
  "bg-green-500",
  "bg-purple-500",
  "bg-pink-500",
  "bg-indigo-500",
  "bg-teal-500",
];

const TESTIMONIALS = [
  {
    id: 1,
    name: "Sini shameer",
    text: "Masha Allah.... ❤️The best postnatal care center in malappuram district...",
    rating: 5,
    color: AVATAR_COLORS[0],
  },
  {
    id: 2,
    name: "Nasriya Kkt",
    text: "Best postnatal center in Kerala.... good service.... good ambience 💜",
    rating: 5,
    color: AVATAR_COLORS[1],
  },
  {
    id: 3,
    name: "Fahim Huwaid",
    text: "Well cared, and peaceful location glad to have them.",
    rating: 5,
    color: AVATAR_COLORS[1],
  },
];

export const Testimonials = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);

  const totalPages = Math.ceil(TESTIMONIALS.length / 3);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [totalPages]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "50%" : "-50%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? "50%" : "-50%",
      opacity: 0,
    }),
  };

  const getVisibleTestimonials = () => {
    const start = currentPage * 3;
    return TESTIMONIALS.slice(start, start + 3);
  };

  return (
    <section id="testimonials" className="py-24 bg-background-200 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-200/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 font-serif">
        <SectionHeading
          title="Voices Of Care"
        />

        <div className="max-w-7xl mx-auto mt-16 relative">
          <div className="min-h-[400px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentPage}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 35 },
                  opacity: { duration: 0.4 }
                }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {getVisibleTestimonials().map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="bg-white rounded-[2rem] p-8 shadow-float border border-neutral-100 flex flex-col h-full hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className={cn(
                          "w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-sm border-2 border-white uppercase",
                          testimonial.color
                        )}
                      >
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-neutral-900 text-base">
                          {testimonial.name}
                        </h4>
                      </div>
                    </div>

                    <p className="text-neutral-700 italic text-[15px] leading-relaxed flex-grow">
                      "{testimonial.text}"
                    </p>

                    <div className="mt-6 flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-amber-400 text-sm">★</span>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination Indicators */}
          <div className="flex justify-center items-center gap-3 mt-12">
            {[...Array(totalPages)].map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentPage ? 1 : -1);
                  setCurrentPage(idx);
                }}
                aria-label={`Go to page ${idx + 1}`}
                className={`transition-all duration-300 rounded-full ${currentPage === idx
                  ? "w-8 h-3 bg-primary-300"
                  : "w-3 h-3 bg-neutral-300 hover:bg-primary-200"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
