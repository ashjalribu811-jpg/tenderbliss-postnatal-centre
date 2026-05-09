import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import aboutImg from "../../assets/3.jpg.jpeg";

export const About = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background shape */}
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary-100/50 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-float w-full h-[500px]">
              <img
                src={aboutImg}
                alt="Child Leg Photo"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>

            {/* Floating stats card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.4, duration: 0.6 }}

            >
              <div className="text-4xl font-serif text-primary-300 font-bold mb-2"></div>

            </motion.div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <SectionHeading
              title={`A Safe Haven for You\nand Your Baby`}
              subtitle="At TenderBliss, we provide expert postnatal care services designed to support new mothers and newborns with comfort, safety, and compassion. We believe that welcoming a new life is a beautiful journey, and our experienced team ensures you receive the best postpartum recovery care, helping you rest, heal, and bond with your baby."
              align="left"
              className="mb-8"
            />

            <div className="space-y-6 text-neutral-600 text-lg">

              <ul className="space-y-4 pt-4">
                {[
                  "Personalized postnatal care tailored to every mother’s unique needs.",
                  "24/7 expert support for both mother and newborn, ensuring complete peace of mind.",
                  "Specialized ayurveda treatments  designed for postnatal wellness.",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-secondary-300 flex-shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
