import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";

const SERVICES = [
  {
    id: "abyangam",
    title: "Abyangam",
    description: "Traditional full-body Ayurvedic massage with herbally infused oils to rejuvenate and detoxify.",
    image: "https://images.unsplash.com/photo-1544161515-436ce6bd2183?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "fertility-management",
    title: "Fertility Management",
    description: "Natural hormonal balance and reproductive health enhancement through targeted Ayurvedic protocols.",
    image: "https://images.unsplash.com/photo-1559757175-7b3112267f33?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "post-natal-care",
    title: "Postnatal Care",
    description: "Complete mother and baby wellness packages for the crucial first months of recovery and bonding.",
    image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "pcos-management",
    title: "PCOS Management",
    description: "Holistic approach to metabolic health and hormonal regularities using ancient herbal wisdom.",
    image: "https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "women-wellness",
    title: "Women Wellness",
    description: "Comprehensive health and rejuvenation packages specifically designed for modern women's needs.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "tummy-correction",
    title: "Tummy Correction",
    description: "Specialized abdominal contouring and muscle toning treatments for postpartum recovery.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-background-200">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          title="Our Premium Services"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {SERVICES.map((service, index) => (
            <Link
              key={service.id}
              to={`/services/${service.id}`}
              className="block"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                className="group relative h-[400px] rounded-3xl overflow-hidden shadow-soft block isolate"
              >
              {/* Background Image scaling smoothly without lag */}
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 will-change-transform"
                />
              </div>

              {/* Black Tint Overlay with smooth transition */}
              <div className="absolute inset-0 bg-neutral-900/60 transition-colors duration-500 ease-out group-hover:bg-neutral-900/40 z-10" />

              {/* Content positioned over the image */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                {/* Initial position is slightly lower, slides up smoothly on hover */}
                <div className="transform transition-transform duration-500 ease-out group-hover:-translate-y-1 will-change-transform">
                  <h3 className="text-xl font-serif text-white mb-2 font-bold drop-shadow-sm tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-white/70 text-xs leading-relaxed font-medium transition-opacity duration-500 line-clamp-2 max-w-[90%]">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
        </div>
      </div>
    </section>
  );
};
