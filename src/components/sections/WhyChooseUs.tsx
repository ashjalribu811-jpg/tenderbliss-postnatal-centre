import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { ShieldCheck, Heart, UserRound, Clock } from "lucide-react";

const REASONS = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary-300" />,
    title: "Safe & Secure",
    description: "Your health and safety are our top priorities with 24/7 monitoring and expert care.",
  },
  {
    icon: <Heart className="w-8 h-8 text-primary-300" />,
    title: "Compassionate Care",
    description: "Our dedicated team provides warm, personalized support for every mother and baby.",
  },
  {
    icon: <UserRound className="w-8 h-8 text-primary-300" />,
    title: "Expert Doctors",
    description: "Access to leading obstetricians and pediatricians with years of specialized experience.",
  },
  {
    icon: <Clock className="w-8 h-8 text-primary-300" />,
    title: "24/7 Support",
    description: "We are always here for you, providing round-the-clock assistance and medical guidance.",
  },
];

export const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading
          title="Why Choose Us"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {REASONS.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-background-200 hover:bg-primary-100/30 transition-colors border border-transparent hover:border-primary-100 group"
            >
              <div className="mb-6 p-4 bg-white rounded-2xl w-fit shadow-sm group-hover:scale-110 transition-transform duration-300">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">
                {reason.title}
              </h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
