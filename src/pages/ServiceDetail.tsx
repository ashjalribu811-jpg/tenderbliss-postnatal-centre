import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Sparkles, Target } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { SERVICES_DATA } from '../data/servicesData';

export const ServiceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [isLoading, setIsLoading] = useState(true);

  const service = (id && SERVICES_DATA[id]) ? SERVICES_DATA[id] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, [id]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background-200">
        <div className="text-center">
          <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-4">Service Not Found</h2>
          <Link to="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed inset-0 z-[200] bg-white/95 backdrop-blur-md flex flex-col items-center justify-center pointer-events-none"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center justify-center gap-4"
            >
              <div className="flex gap-2">
                <motion.div className="w-1.5 h-1.5 rounded-full bg-primary-300" animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, delay: 0, duration: 0.8 }} />
                <motion.div className="w-1.5 h-1.5 rounded-full bg-primary-300" animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, delay: 0.15, duration: 0.8 }} />
                <motion.div className="w-1.5 h-1.5 rounded-full bg-primary-300" animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, delay: 0.3, duration: 0.8 }} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className={`min-h-screen pb-20 pt-24 bg-background-200 transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <div className="container mx-auto px-6 md:px-12">


          {/* Hero Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="rounded-[2.5rem] overflow-hidden bg-white shadow-soft border border-neutral-100 mb-16 relative"
          >
            <div className="relative h-[45vh] min-h-[400px] w-full">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/40 to-transparent" />
              <div className="absolute bottom-12 left-12 right-12">
                <span className="text-primary-200 uppercase tracking-widest font-bold text-xs mb-4 block">{service.category}</span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white font-bold leading-tight mb-6">
                  {service.title}
                </h1>
                <p className="text-white/80 text-lg md:text-xl max-w-3xl leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
            {/* Left Column: Vision & Features */}
            <div className="lg:col-span-2 flex flex-col gap-12">
              {/* Vision Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                className="bg-white rounded-[2rem] p-10 shadow-sm border border-neutral-100 relative overflow-hidden"
              >
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary-50/50 rounded-full blur-3xl" />
                <div className="flex items-start gap-6 relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center shrink-0 text-primary-300">
                    <Target className="w-7 h-7" />
                  </div>
                  <div>
                    <h2 className="text-xl font-serif font-bold text-neutral-900 mb-3">Our Vision</h2>
                    <p className="text-base text-neutral-600 leading-relaxed italic opacity-90">
                      "{service.vision}"
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Sections List */}
              <div className="flex flex-col gap-16">
                {service.sections.map((section, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-10 items-center`}
                  >
                    <div className="w-full md:w-1/2 h-80 rounded-3xl overflow-hidden shadow-soft">
                      <img src={section.image} alt={section.title} className="w-full h-full object-cover object-center" />
                    </div>
                    <div className="w-full md:w-1/2">
                      <div className="w-8 h-8 rounded-full bg-secondary-50 flex items-center justify-center mb-3 text-secondary-300">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-3">{section.title}</h3>
                      <p className="text-base text-neutral-600 leading-relaxed font-normal">{section.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column: CTA & Info */}
            <div className="lg:col-span-1 sticky top-32">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-[2rem] p-8 border border-neutral-100 shadow-float"
              >
                <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-6 font-bold">Ready to Begin?</h3>
                <p className="text-neutral-500 mb-8 leading-relaxed font-bold">
                  Experience our specialized {service.title.toLowerCase()} treatment tailored to your unique requirements.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3 text-neutral-600 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    100% Ayurvedic Approach
                  </li>
                  <li className="flex items-center gap-3 text-neutral-600 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    Expert Practitioners
                  </li>
                  <li className="flex items-center gap-3 text-neutral-600 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    Personalized Consultation
                  </li>
                </ul>
                <a href="https://wa.me/919946223233?text=Hello,%20I'm%20interested%20in%20the%20Service:%20" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full py-6 text-lg rounded-2xl shadow-primary-200 shadow-lg" size="lg">
                    Book Appointment
                  </Button>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
