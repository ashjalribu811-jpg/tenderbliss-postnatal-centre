import { motion } from "framer-motion";

export const MissionVision = () => {
  const items = [
    {
      title: "Our Vision",
      points: [
        "To be the most trusted and luxurious postpartum care center.",
        "Providing mothers with a sanctuary of healing and empowerment."
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      color: "text-[#8B5CF6]", // Distinct Violet
      bulletColor: "bg-[#8B5CF6]",
      bgColor: "bg-[#F7F2FA]"
    },
    {
      title: "Our Mission",
      points: [
        "To deliver exceptional maternal and neonatal care.",
        "Through a blend of traditional warmth and modern medical excellence."
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      color: "text-[#63c8ce]",
      bulletColor: "bg-[#63c8ce]",
      bgColor: "bg-[#F1FAFA]"
    }
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row gap-8">
          {items.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ 
                duration: 0.8, 
                ease: [0.22, 1, 0.36, 1],
                delay: index * 0.15 
              }}
              className={`flex-1 p-10 md:p-14 text-center flex flex-col items-center justify-center transition-all duration-500 relative group
                rounded-[3rem] border border-[#E9DEEF] shadow-xl shadow-primary-100/10
                ${item.bgColor}
              `}
            >
              {/* Animated background on hover */}
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-40 transition-opacity duration-500 -z-1" />
              
              <div className={`mb-8 w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-sm ${item.color} group-hover:scale-110 transition-transform duration-500`}>
                {item.icon}
              </div>
              
              <h3 className={`text-[1.75rem] font-serif ${item.color} font-bold mb-6`}>
                {item.title}
              </h3>
              
              <div className="space-y-4 text-left w-full max-w-xs mx-auto">
                {item.points.map((point, i) => (
                  <div key={i} className="flex items-start gap-4 group/point">
                    <div className={`flex-shrink-0 w-2 h-2 mt-2.5 rounded-full ${item.bulletColor} group-hover/point:scale-125 transition-transform`} />

                    <p className="text-neutral-600 leading-relaxed text-[1rem] font-medium pt-0.5">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
