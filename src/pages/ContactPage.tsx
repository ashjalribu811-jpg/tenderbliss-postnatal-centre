import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ShoppingBag, HeartPulse, Landmark, TrainFront, Plane } from 'lucide-react';
import nilamburMap from '../assets/nilambur-map.png';

const Instagram = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Facebook = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const WhatsApp = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.117.571-.085 1.758-.719 2.006-1.412.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const nearestPlaces = [
  { name: "Hilite mall", distance: "500 meter", icon: ShoppingBag },
  { name: "New life maternity hospital", distance: "1 km", icon: HeartPulse },
  { name: "Connolly’s plot", distance: "2.5 km", icon: MapPin },
  { name: "Teak museum", distance: "9 km", icon: Landmark },
  { name: "Nilambur railway station", distance: "8 km", icon: TrainFront },
  { name: "Calicut airport", distance: "38 km", icon: Plane },
];

export const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background-200 pt-32 pb-20 px-6 md:px-12 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-6xl bg-white rounded-2xl shadow-float overflow-hidden flex flex-col pt-10"
      >
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-neutral-900">Get In Touch</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 px-8 md:px-16 pb-12 items-center">
          {/* Left Column: Contact info */}
          <div className="flex flex-col gap-10">
            {/* Email */}
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0 shadow-sm border border-primary-100">
                <Mail className="w-6 h-6 text-primary-300" />
              </div>
              <div className="flex flex-col pt-1">
                <p className="text-neutral-400 text-sm mb-1.5 uppercase tracking-wider font-semibold">Email</p>
                <a href="mailto:tenderblissgroup@gmail.com" className="text-neutral-800 text-lg font-medium hover:text-primary-300 transition-colors">
                  tenderblissgroup@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0 shadow-sm border border-primary-100">
                <Phone className="w-6 h-6 text-primary-300" />
              </div>
              <div className="flex flex-col pt-1">
                <p className="text-neutral-400 text-sm mb-1.5 uppercase tracking-wider font-semibold">Call/WhatsApp</p>
                <a href="https://wa.me/919946223233" target="_blank" rel="noopener noreferrer" className="text-neutral-800 text-lg font-medium hover:text-primary-300 transition-colors">
                  +91 9946223233
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0 shadow-sm border border-primary-100">
                <MapPin className="w-6 h-6 text-primary-300" />
              </div>
              <div className="flex flex-col pt-1">
                <p className="text-neutral-400 text-sm mb-1.5 uppercase tracking-wider font-semibold">Location</p>
                <a href="https://maps.app.goo.gl/yUeQEZtUtqrBdHts8?g_st=iw" target="_blank" rel="noopener noreferrer" className="text-neutral-800 text-lg font-medium leading-relaxed hover:text-primary-300 transition-colors">
                  Opposite to Nayara Petrol Station,<br />
                  Tanah Mampad, Nilambur 676542
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Stylized Map Image with Link */}
          <div className="relative group h-[300px] lg:h-[450px]">
            <a
              href="https://maps.app.goo.gl/yUeQEZtUtqrBdHts8?g_st=iw"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white relative transition-all duration-500 hover:scale-[1.01] cursor-pointer"
            >
              <img
                src={nilamburMap}
                alt="TenderBliss Nilambur Location Map"
                className="w-full h-full object-cover transition-all duration-700 group-hover:brightness-110"
              />

              {/* Subtle Overlay to maintain premium feel */}
              <div className="absolute inset-0 bg-primary-300/5 pointer-events-none border-1 border-primary-300/10 rounded-3xl" />

              {/* View on Google Maps Label Overlay */}
              <div className="absolute inset-x-0 bottom-0 py-4 bg-black/40 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-[0.3em] text-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                View on Google Maps
              </div>
            </a>

            {/* Soft decorative glow behind map */}
            <div className="absolute -inset-4 bg-primary-300/10 blur-2xl rounded-full -z-10" />
          </div>
        </div>

        {/* Nearest Places Section */}
        <div className="mt-16 px-8 md:px-16 pb-16 border-t border-neutral-100 pt-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-neutral-900 mb-2">Nearest Places</h2>
            <p className="text-neutral-500 text-sm md:text-base max-w-lg mx-auto"></p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {nearestPlaces.map((place, index) => (
              <motion.div
                key={place.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white p-6 rounded-2xl border border-neutral-100 hover:border-primary-200 transition-all duration-300 hover:shadow-[0_10px_30px_-10px_rgba(var(--primary-300-rgb),0.1)] overflow-hidden"
              >
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-primary-50 rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-500 blur-2xl" />

                <div className="flex flex-col gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-neutral-50 flex items-center justify-center text-neutral-400 group-hover:bg-primary-300 group-hover:text-white transition-all duration-300 shadow-sm">
                    <place.icon className="w-6 h-6" />
                  </div>

                  <div className="flex flex-col">
                    <h3 className="text-neutral-900 font-bold text-lg mb-1 group-hover:text-primary-400 transition-colors">{place.name}</h3>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-300" />
                      <span className="text-primary-300 text-xs font-black uppercase tracking-wider">{place.distance} away</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Social Media Link Icons */}
        <div className="mt-8 py-8 border-t border-neutral-100 bg-neutral-50 flex flex-col items-center">
          <div className="flex items-center gap-8 mb-6">
            <a
              href="https://wa.me/919946223233"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-neutral-400 hover:bg-primary-300 hover:text-white transition-all duration-300 shadow-sm border border-neutral-200"
            >
              <WhatsApp className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/tenderbliss"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-neutral-400 hover:bg-primary-300 hover:text-white transition-all duration-300 shadow-sm border border-neutral-200"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61573275210168"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-neutral-400 hover:bg-primary-300 hover:text-white transition-all duration-300 shadow-sm border border-neutral-200"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
          <p className="text-neutral-400 text-xs uppercase tracking-[0.2em] font-bold">Connect with us</p>
        </div>
      </motion.div>
    </div>
  );
};
