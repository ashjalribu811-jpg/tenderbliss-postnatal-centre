import { SEO } from "../components/ui/SEO";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SectionHeading } from "../components/ui/SectionHeading";

// Import new premium assets
import generalImg from "../assets/services/general.png";
import specialImg from "../assets/services/special.png";
import specialitiesImg from "../assets/services/specialities.png";
import exclusiveImg from "../assets/services/exclusive.png";

const CATEGORIES = [
  {
    id: "general",
    title: "General Packages",
    description: "Foundational Ayurvedic care for structural healing and physical revitalization.",
    image: generalImg,
    count: "01"
  },
  {
    id: "special",
    title: "Special Packages",
    description: "Targeted treatments designed for specific postpartum needs and recovery goals.",
    image: specialImg,
    count: "02"
  },
  {
    id: "specialities",
    title: "Our Specialities",
    description: "Expert-led Ayurvedic solutions for gynecological health and fertility management.",
    image: specialitiesImg,
    count: "03"
  },
  {
    id: "exclusive",
    title: "Exclusive Packages",
    description: "Premier intensive care focusing on deep systemic wellness and therapeutic restoration.",
    image: exclusiveImg,
    count: "04"
  }
];

export const ServicesPage = () => {
  return (
    <main className="pt-32 min-h-screen pb-24 bg-background-200 overflow-hidden">
      <SEO 
        title="Services"
        description="Comprehensive postnatal care and Ayurvedic treatments. Explore our general packages, special packages, and clinical specialities for mother and baby wellness."
      />
      <div className="container mx-auto px-6 md:px-12">
        <h1 className="sr-only">TenderBliss Postnatal Services and Packages</h1>
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           className="text-center max-w-3xl mx-auto mb-20"
        >
          <SectionHeading 
            title="Complete Postnatal Care"
          />
          <p className="text-[15px] font-sans text-neutral-600 mt-6 leading-relaxed max-w-2xl mx-auto">
            From traditional Ayurvedic rejuvenation to specialized clinical specialities, we offer a comprehensive range of care protocols designed specifically for the modern mother and family.
          </p>
        </motion.div>

        {/* Visual Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="group relative h-[450px] rounded-[3.5rem] overflow-hidden shadow-soft border border-neutral-100"
            >
              {/* Background Image */}
              <img 
                src={cat.image} 
                alt={cat.title} 
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-110" 
              />
              
              {/* Premium Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-700 group-hover:opacity-80" />

              {/* Content Overlay */}
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[12px] font-inter font-black text-secondary-300 tracking-widest uppercase py-1 px-3 bg-secondary-300/10 backdrop-blur-md rounded-full border border-secondary-300/20">
                    Category {cat.count}
                  </span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4 tracking-tight">
                  {cat.title}
                </h2>
                
                <p className="text-white/70 text-[14px] leading-relaxed mb-8 max-w-md line-clamp-2 transform transition-all duration-500 group-hover:text-white">
                  {cat.description}
                </p>

                <div className="flex items-center justify-between">
                  <Link 
                    to={`/services/category/${cat.id}`}
                    className="h-12 px-8 bg-white text-neutral-900 rounded-full font-inter font-bold text-[13px] tracking-wide flex items-center justify-center transition-all hover:bg-primary-300 hover:text-white group-hover:shadow-xl shadow-white/20"
                  >
                    View Treatments
                  </Link>

                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white transition-all duration-500 group-hover:bg-white/10 group-hover:rotate-45">
                    <span className="text-xl">→</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Support Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 p-12 bg-white rounded-[4rem] shadow-float border border-neutral-100 flex flex-col md:flex-row items-center justify-between gap-12"
        >
           <div className="max-w-xl">
              <h4 className="text-2xl font-serif font-bold text-neutral-900 mb-4 tracking-tight">Need assistance in choosing?</h4>
              <p className="text-neutral-500 font-sans leading-relaxed">Our experts are available for a personal consultation to help you select the package that best suits your clinical and personal needs.</p>
           </div>
           <Link to="/contact" className="h-16 px-12 bg-primary-300 text-white rounded-full font-inter font-bold text-[15px] shadow-lg shadow-primary-300/20 hover:scale-[1.05] transition-all flex items-center justify-center whitespace-nowrap">
             Talk to an Expert
           </Link>
        </motion.div>
      </div>
    </main>
  );
};
