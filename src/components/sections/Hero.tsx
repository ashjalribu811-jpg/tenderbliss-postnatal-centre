import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "../../assets/suites/first.png"

export const Hero = () => {
  return (
    <section className="relative w-full min-h-[90vh] md:min-h-[95vh] bg-white overflow-hidden flex flex-col pt-24 md:pt-40 lg:pt-48">
      {/* Background Decorative Elements for Depth */}
      <div className="absolute top-20 right-[10%] w-[30rem] h-[30rem] bg-primary-100/30 rounded-full blur-[120px] -z-10" />
      <div className="absolute top-40 left-[5%] w-[20rem] h-[20rem] bg-secondary-100/20 rounded-full blur-[100px] -z-10" />

      {/* Main Content Area: Centered Container */}
      <div className="container mx-auto px-6 md:px-12 h-fit flex flex-col relative z-20 pt-8 md:pt-12">

        {/* TEXT OVERLAY BLOCK - Positioned on the Left, overlapping image below */}
        <div className="max-w-6xl relative group">

          {/* Tagline Animation Container */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-4 mb-6"
          >
          </motion.div>

          {/* Heading and Description Flex Block */}
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20 mb-1">
            {/* Main Branding Heading */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex-1"
            >
              <h1
                className="text-[2.0rem] md:text-[3.2rem] lg:text-[4.2rem] leading-[0.85] text-primary-300 pointer-events-none tracking-tight mb-8"
                style={{ fontFamily: "'Burgundia', 'Playfair Display', serif" }}
              >
                Complete Postnatal <br />
                <span className="relative inline-block mt-4 text-secondary-300">
                  Care Solution
                </span>
              </h1>
              
              <p className="text-black/80 text-[16px] leading-relaxed font-sans max-w-[500px] mb-4">
                We create a safe and soothing environment where mothers can focus on healing, restoring energy, and building a strong, loving bond with their baby.
              </p>
            </motion.div>
          </div>

          {/* Buttons Block - Below the heading/description group */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-5 items-stretch sm:items-center relative z-30 mb-12"
          >
            <a
              href="https://wa.me/919946223233"
              target="_blank"
              rel="noopener noreferrer"
              className="h-[46px] min-w-[200px] bg-primary-300 text-white rounded-full font-inter font-bold shadow-xl shadow-primary-300/20 hover:shadow-primary-300/40 hover:-translate-y-1 transition-all flex items-center justify-center whitespace-nowrap text-[15px] tracking-wide z-30"
            >
              Book a Consultation
            </a>

            <Link
              to="/packages"
              className="h-[46px] min-w-[200px] border border-neutral-200 text-neutral-600 bg-white/70 backdrop-blur-md rounded-full font-inter font-bold hover:border-secondary-300 hover:text-secondary-300 transition-all flex items-center justify-center shadow-lg shadow-black/5 text-[15px] tracking-wide group z-30"
            >
              Packages
              <span className="ml-2">
                →
              </span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* FOOTER ARTWORK: Building Render with Drift FX - Anchored to Bottom */}
      <div className="w-full relative -mt-16 md:-mt-64 lg:-mt-[35rem] z-10 pointer-events-none select-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <img
              src={heroImage}
              alt="TenderBliss Premium Postnatal Care Facility"
              className="w-full h-auto object-cover scale-[1.05]"
            />
          </div>
        </motion.div>

        {/* Advanced Gradient Masking for a seamless blend with top content removed for original image clarity */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white/10 to-transparent" />
      </div>
    </section>
  );
};