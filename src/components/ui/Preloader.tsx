import { motion } from "framer-motion";

export const Preloader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="flex flex-col items-center">
        {/* Square-based Medical Cross - Smaller Size */}
        <div className="grid grid-cols-3 grid-rows-3 gap-1 w-10 h-10">
          <div />
          <motion.div 
            animate={{ opacity: [0.2, 1, 0.2] }} 
            transition={{ duration: 1.2, delay: 0.1, ease: "easeInOut" }}
            className="bg-[#8367A5] rounded-sm" 
          />
          <div />
          
          <motion.div 
            animate={{ opacity: [0.2, 1, 0.2] }} 
            transition={{ duration: 1.2, delay: 0.2, ease: "easeInOut" }}
            className="bg-[#8367A5] rounded-sm" 
          />
          <motion.div 
            animate={{ opacity: [0.2, 1, 0.2] }} 
            transition={{ duration: 1.2, delay: 0, ease: "easeInOut" }}
            className="bg-[#8367A5] rounded-sm" 
          />
          <motion.div 
            animate={{ opacity: [0.2, 1, 0.2] }} 
            transition={{ duration: 1.2, delay: 0.2, ease: "easeInOut" }}
            className="bg-[#8367A5] rounded-sm" 
          />
          
          <div />
          <motion.div 
            animate={{ opacity: [0.2, 1, 0.2] }} 
            transition={{ duration: 1.2, delay: 0.1, ease: "easeInOut" }}
            className="bg-[#8367A5] rounded-sm" 
          />
          <div />
        </div>
      </div>
    </motion.div>
  );
};
