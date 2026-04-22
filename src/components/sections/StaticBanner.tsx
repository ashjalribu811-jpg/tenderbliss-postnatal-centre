import { motion } from "framer-motion";
import banner from "../../assets/banner.jpg";

export const StaticBanner = () => {
  return (
    <section className="w-full bg-white flex justify-center items-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full h-auto"
      >
        <img
          src={banner}
          alt="TenderBliss Postnatal Wellness - Malayalam Banner"
          className="w-full h-auto object-cover"
        />
      </motion.div>
    </section>
  );
};
