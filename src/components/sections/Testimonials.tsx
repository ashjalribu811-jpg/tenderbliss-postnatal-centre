import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import doctorImg from "../../assets/doctorimg.jpeg";

import { SectionHeading } from "../ui/SectionHeading";


const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "First-time Mother",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    text: "My experience at TenderBliss was nothing short of magical. The staff went above and beyond to make sure I was comfortable and informed every step of the way. The facilities feel more like a luxury hotel than a clinical setting.",
    rating: 5,
  },
  {
    id: 2,
    name: "Jessica & David",
    role: "Parents of Twins",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    text: "Delivering twins can be daunting, but the team's expertise immediately put us at ease. The NICU team is incredible, and the postpartum care we received helped us transition so smoothly into our new life.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Roberts",
    role: "Mother of three",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    text: "Having had my previous children at different hospitals, I can confidently say TenderBliss is in a league of its own. The personalized attention and holistic approach to maternal wellness are unmatched.",
    rating: 5,
  },
  {
    id: 4,
    name: "Priya & Arun",
    role: "Parents of a beautiful girl",
    image: "https://images.unsplash.com/photo-1542171246-0b81a4230ca3?auto=format&fit=crop&w=200&q=80",
    text: "Our journey from conception to delivery was handled with such care. The doctors at TenderBliss were incredibly patient with all our questions, and the nursing staff felt like extended family by the time we left.",
    rating: 5,
  },
  {
    id: 5,
    name: "Dr. Sophia Lee",
    role: "Physician & Mother",
    image: doctorImg,
    text: "As a medical professional myself, I hold hospitals to extremely high standards. TenderBliss exceeded my expectations in clinical excellence, hygiene, and the absolute warmth of their labor suites.",
    rating: 5,
  },
  {
    id: 6,
    name: "Ayesha Khan",
    role: "First-time Mother",
    image: "https://images.unsplash.com/photo-1534126511673-b6899657816a?auto=format&fit=crop&w=200&q=80",
    text: "The lactation consultants and postnatal care team completely saved my sanity during the first few weeks. I felt so supported physically and emotionally. The private recovery rooms are an absolute sanctuary.",
    rating: 5,
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
          title="Patient Stories"
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
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover shadow-sm border-2 border-primary-50"
                      />
                      <div>
                        <h4 className="font-bold text-neutral-900 text-base">
                          {testimonial.name}
                        </h4>
                        <p className="text-primary-300 font-medium text-xs">
                          {testimonial.role}
                        </p>
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
