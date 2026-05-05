import { motion } from "framer-motion";
import { Check } from "lucide-react";

export const ExpertCare = () => {
  return (
    <section className="py-24 bg-background-200">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left: Doctor Image & Name */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5] z-10">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Lead Doctor" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent text-white">
                <h3 className="text-3xl font-serif font-bold">Dr. Sarah Jenkins</h3>
                <p className="text-primary-200 font-medium">Senior Obstetrician & Gynecologist</p>
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
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 mb-8 leading-tight">
              Compassionate Care from Leading Specialists
            </h2>
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed font-sans">
              Our postnatal center is led by experienced medical professionals dedicated to the health and well-being of every mother and child. We combine traditional wisdom with modern medical expertise to ensure a smooth recovery.
            </p>

            <div className="space-y-4 mb-10">
              {[
                "Personalized Postnatal Recovery Plans",
                "24/7 Professional Medical Supervision",
                "Expert Guidance on Newborn Care",
                "Specialized Ayurvedic Consultations"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center text-primary-300 group-hover:bg-primary-300 group-hover:text-white transition-colors duration-300">
                    <Check className="w-4 h-4 stroke-[3px]" />
                  </div>
                  <span className="text-neutral-700 font-medium font-sans">{item}</span>
                </div>
              ))}
            </div>

            <div className="p-8 rounded-[2.5rem] bg-white border border-neutral-100 shadow-soft relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-24 h-24 bg-primary-50 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:scale-150 transition-transform duration-700" />
              <p className="italic text-neutral-600 mb-4 relative z-10 font-sans leading-relaxed">
                "Our mission is to provide a sanctuary where mothers can heal, bond, and grow in confidence, supported by the highest standards of medical care and emotional support."
              </p>
              <div className="font-bold text-neutral-900 relative z-10">— Medical Director</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
