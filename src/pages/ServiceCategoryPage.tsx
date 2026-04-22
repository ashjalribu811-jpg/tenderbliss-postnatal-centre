import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { SERVICES_DATA, CATEGORY_META } from '../data/servicesData';

export const ServiceCategoryPage = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();

  const meta = categorySlug ? CATEGORY_META[categorySlug] : null;
  const treatments = meta
    ? Object.values(SERVICES_DATA).filter(s => {
      const cat = s.category.toUpperCase();
      const target = meta.title.toUpperCase();
      return cat === target || cat.includes(target) || target.includes(cat);
    })
    : [];

  if (!meta) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Category Not Found</h2>
          <Link to="/services"><Button>Back to Services</Button></Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen pt-32 pb-20 bg-background-200">
      <div className="container mx-auto px-6 md:px-12">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Left Column: Treatments List */}
          <div className="lg:col-span-2 space-y-12">
            {treatments.map((treatment, idx) => (
              <motion.div
                key={treatment.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-soft border border-neutral-100 flex flex-col md:flex-row gap-8 items-center"
              >
                <div className="w-full md:w-1/3 aspect-square rounded-2xl overflow-hidden shrink-0 shadow-inner">
                  <img
                    src={treatment.image}
                    alt={treatment.title}
                    className="w-full h-full object-cover object-center grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">{treatment.title}</h3>
                  <p className="text-neutral-600 leading-relaxed mb-6">
                    {treatment.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {treatment.sections.slice(0, 2).map((s, i) => (
                      <span key={i} className="px-3 py-1 bg-primary-100/50 text-primary-300 text-[11px] font-bold rounded-full uppercase tracking-wider">
                        {s.title}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Sticky Sidebar */}
          <div className="lg:col-span-1 space-y-8 sticky top-32">
            {/* Ready to Begin Box */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-[2rem] p-8 shadow-float border border-neutral-100"
            >
              <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">Ready to Begin?</h3>
              <p className="text-neutral-500 mb-8 text-sm leading-relaxed font-medium">
                Experience our specialized treatments tailored to your unique requirements.
              </p>
              <ul className="space-y-4 mb-10 text-left max-w-[240px] mx-auto">
                <li className="flex items-center gap-3 text-sm text-neutral-600 font-bold">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  100% Ayurvedic Approach
                </li>
                <li className="flex items-center gap-3 text-sm text-neutral-600 font-bold">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  Expert Practitioners
                </li>
                <li className="flex items-center gap-3 text-sm text-neutral-600 font-bold">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  Personalized Consultation
                </li>
              </ul>
              <a
                href="https://wa.me/919946223233?text=Hello,%20I'd%20like%20more%20details%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full py-6 text-base rounded-2xl shadow-primary-200 shadow-lg !text-white">
                  For More Details
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
};
