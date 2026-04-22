import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { SectionHeading } from "../components/ui/SectionHeading";

// No suite images selected

const PACKAGES = [
  {
    name: "Bliss Cozy Stay",
    subtitle: "1 BHK – Budget Friendly",
    features: [
      "WiFi access",
      "Fan/optional AC",
      "Compact bedroom Setup",
      "Smart TV",
      "Essential baby care space",
      "Attached bathroom",
      "Daily cleaning",
      "Basic nurse support access",
      "Simple, neat interiors"
    ],
    color: "bg-[#FDFFFF]/90",
    borderColor: "border-[#E8E4E0]",
    popular: false,
  },
  {
    name: "Bliss Comfort Suite",
    subtitle: "1 BHK – Standard Comfort",
    features: [
      "High-speed WiFi",
      "Air-conditioned Bedroom",
      "Compact living area",
      "LED TV",
      "Basic baby care setup",
      "Comfortable bedding",
      "Attached Bathroom with hot water",
      "housekeeping service",
      "Nurse Support(on Request)",
      "Warm,cozy interior design"
    ],
    color: "bg-[#E8E4E0]/70",
    borderColor: "border-[#D2B68A]/30",
    popular: false,
  },
  {
    name: "Bliss Divine Care Suite",
    subtitle: "2 BHK – Care Focused",
    features: [
      "High speed wifi",
      "Air-conditioned bedrooms",
      "Confortable living space",
      "Smart LED TV",
      "Mother & Baby care essentials setup",
      "Baby bassinet",
      "Fridge",
      "Clean attached bathrooms",
      "Daily housekeeping",
      "Nurse assistance on call",
      "Calm,Wellness-Focused interiors"
    ],
    color: "bg-[#EEE5D9]/90",
    borderColor: "border-[#D2B68A]/50",
    popular: false,
  },
  {
    name: "Bliss Royale Suite",
    subtitle: "2 BHK – Premium Luxury",
    features: [
      "High-speed WiFi (unlimited)",
      "Fully air-conditioned rooms",
      "Spacious living & dining area",
      "Smart TV with OTT access",
      "Premium bedding & recliner for mother",
      "Baby cot & newborn care station",
      "Private kitchenette (induction, kettle, fridge)",
      "Attached modern bathrooms with hot water",
      "Daily housekeeping & laundry service",
      "24/7 nurse call support",
      "Ambient lighting & soothing interiors"
    ],
    color: "bg-[#D2B68A]/50",
    borderColor: "border-[#D2B68A]/60",
    popular: true,
  }
];

export const PackagesPage = () => {
  return (
    <main className="pt-32 pb-24 min-h-screen bg-background-200 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >

          <SectionHeading
            title="Curated Luxury Care"
          />

        </motion.div>

        {/* Package Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch pt-8 relative">
          {/* Subtle Background Decoration */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-full bg-white -rotate-3 rounded-[5rem] -z-10 blur-3xl opacity-30" />

          {PACKAGES.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: i * 0.15,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ y: -10 }}
              className={`relative flex flex-col rounded-[3rem] border-2 shadow-soft transition-all group ${pkg.borderColor} ${pkg.color} ${pkg.popular ? 'z-10 ring-4 ring-primary-300/10' : ''}`}
            >
              <div className="p-10 flex-grow flex flex-col relative">
                {pkg.popular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary-300/90 text-white px-6 py-2 rounded-full text-[10px] font-inter font-black tracking-widest uppercase shadow-xl z-20 ring-4 ring-white whitespace-nowrap">
                    Premium choice
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-xl font-inter font-bold text-neutral-900 mb-1 leading-tight">
                    {pkg.name}
                  </h3>
                  <p className="text-[13px] font-inter font-bold text-neutral-500/80">{pkg.subtitle}</p>
                </div>

                <div className="space-y-3.5 mb-10 flex-grow">
                  <p className="text-[10px] font-inter font-black uppercase tracking-[0.2em] text-neutral-400 border-b border-neutral-200/50 pb-2 mb-4">Inclusions</p>
                  {pkg.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <div className="mt-1 w-4 h-4 rounded-full flex items-center justify-center bg-white border border-neutral-200 text-primary-300 shrink-0">
                        <Check className="w-2.5 h-2.5 stroke-[4px]" />
                      </div>
                      <span className="text-[14px] font-sans font-medium leading-tight text-neutral-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto">
                  <a
                    href={`https://wa.me/919946223233?text=I'm interested in the ${pkg.name} package.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 rounded-2xl bg-primary-300 text-white font-inter font-bold text-[14px] tracking-widest flex items-center justify-center gap-2 hover:bg-secondary-300 transition-all shadow-lg group shadow-primary-300/10"
                  >
                    more details
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
};
