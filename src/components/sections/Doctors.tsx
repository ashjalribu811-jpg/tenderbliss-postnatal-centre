import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import doctorImg from "../../assets/doctorimg.jpeg";

const DOCTORS = [
  {
    id: 1,
    name: "Dr. Aparna Nath",
    specialty: "Specialist in Prasuthi & Streeroga",
    image: doctorImg,
    experience: "15+ Years",
  },
  {
    id: 2,
    name: "Dr. Emily Chen",
    specialty: "Fetal Medicine Specialist",
    image: "https://images.unsplash.com/photo-1594824432258-4500139178bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    experience: "12+ Years",
  },
  {
    id: 3,
    name: "Dr. Michael Roberts",
    specialty: "Chief Pediatrician",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    experience: "20+ Years",
  },
  {
    id: 4,
    name: "Dr. Ananya Patel",
    specialty: "Lactation Consultant",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    experience: "10+ Years",
  },
];

export const Doctors = () => {
  return (
    <section id="doctors" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          title="Meet Our Experts"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {DOCTORS.map((doctor, index) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-3xl aspect-[3/4] mb-6 shadow-soft">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Overlay information that slides up on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white/90 text-sm font-medium">Experience: {doctor.experience}</p>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-serif font-bold text-neutral-900 mb-1 group-hover:text-primary-300 transition-colors">
                  {doctor.name}
                </h3>
                <p className="text-neutral-500 font-medium">{doctor.specialty}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
