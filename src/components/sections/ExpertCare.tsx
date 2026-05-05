import { motion } from "framer-motion";
import doctorImg from "../../assets/doctorimg.jpeg";

export const ExpertCare = () => {
  return (
    <section className="py-24 bg-background-200">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:pl-32">
          {/* Left: Doctor Image & Name */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[320px] relative"
          >
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-[3/4] z-10">
              <img
                src={doctorImg}
                alt="Lead Doctor"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                <h3 className="text-3xl text-white/90 font-serif font-bold">Dr. Aparna Nath</h3>
                <p className="text-white/90 font-medium">BAMS, MS - Specialist in Prasuthi & Streeroga</p>
              </div>
            </div>
            {/* Decoration */}
            <div className="absolute -z-0 -top-6 -left-6 w-32 h-32 bg-primary-300/20 rounded-full blur-3xl" />
            <div className="absolute -z-0 -bottom-6 -right-6 w-48 h-48 bg-secondary-300/10 rounded-full blur-3xl" />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <span className="text-primary-300 font-bold tracking-[0.2em] uppercase text-sm mb-4 block font-inter">Expert Medical Guidance</span>

            <p className="text-lg text-neutral-600 mb-6 leading-relaxed font-sans">
              Dr. Aparna Nath is an Ayurvedic clinician and academic specializing in Prasuthi & Streeroga (women’s health). She combines classical Ayurvedic principles with modern clinical insights to provide evidence-informed, patient-centered care.
            </p>
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed font-sans">
              With experience across public healthcare, medical education, and clinical practice, she has served as a Specialist Medical Officer, Assistant Professor, and Chief Consultant. Her expertise supports women’s health at every stage of life.
            </p>




          </motion.div>
        </div>
      </div>
    </section>
  );
};
