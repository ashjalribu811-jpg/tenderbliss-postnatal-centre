import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import logo from "../../assets/logos.png";

export const Footer = () => {
  return (
    <footer className="bg-white pt-10 pb-6 border-t border-neutral-100 overflow-hidden font-sans">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="container mx-auto px-6 md:px-12"
      >
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start transition-all duration-300 gap-12 md:gap-24 mb-12">
          {/* Brand & Mini Info - Logo on Left Side */}
          <div className="flex-shrink-0 flex justify-center md:justify-start items-center md:items-start lg:w-64">
            <a href="/" className="inline-block">
              <img
                src={logo}
                alt="TenderBliss Logo"
                className="w-[270px] h-[163px] object-contain"
              />
            </a>
          </div>

          {/* Quick Links */}
          <div className="flex-shrink-0 lg:w-64 text-center md:text-left">
            <h4 className="font-sans text-xl font-bold text-neutral-900 mb-4">Quick Links</h4>
            <div className="flex flex-col items-center md:items-start gap-3 text-base">
              <a href="/" className="text-neutral-500 hover:text-primary-300 transition-colors py-0">Home</a>
              <a href="/moments" className="text-neutral-500 hover:text-primary-300 transition-colors py-0">Moments</a>
              <a href="/packages" className="text-neutral-500 hover:text-primary-300 transition-colors py-0">Packages</a>
              <a href="/contact" className="text-neutral-500 hover:text-primary-300 transition-colors py-0">Contact Us</a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex-shrink-0 text-center md:text-left">
            <h4 className="font-sans text-xl font-bold text-neutral-900 mb-4">Contact</h4>
            <ul className="flex flex-col items-start md:items-start space-y-4 text-base w-fit mx-auto md:mx-0">
              <li className="flex flex-row items-start justify-start gap-2 text-neutral-500 text-left">
                <MapPin className="w-5 h-5 text-primary-300 flex-shrink-0 mt-1" />
                <a href="https://maps.app.goo.gl/yUeQEZtUtqrBdHts8?g_st=iw" target="_blank" rel="noopener noreferrer" className="hover:text-primary-300 transition-colors">
                  near nayara petrol station,<br />Tanah Mampad, Nilambur 676542
                </a>
              </li>
              <li className="flex flex-row items-start justify-start gap-2 text-neutral-500">
                <Phone className="w-5 h-5 text-primary-300 flex-shrink-0 mt-1" />
                <div className="flex flex-col gap-1">
                  <a href="https://wa.me/919946223233" target="_blank" rel="noopener noreferrer" className="hover:text-primary-300 transition-colors">+91 9946223233</a>
                  <a href="https://wa.me/918848904949" target="_blank" rel="noopener noreferrer" className="hover:text-primary-300 transition-colors">+91 8848904949 (2nd number)</a>
                </div>
              </li>
              <li className="flex flex-row items-center justify-start gap-2 text-neutral-500">
                <Mail className="w-5 h-5 text-primary-300 flex-shrink-0" />
                <a href="mailto:tenderblissgroup@gmail.com" className="hover:text-primary-300 transition-colors">tenderblissgroup@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar - Centered Attribution */}
        <div className="pt-6 border-t border-neutral-100 flex flex-col items-center justify-center text-center gap-2 text-neutral-400">
          <p className="leading-relaxed text-base">
            © {new Date().getFullYear()} TenderBliss postnatal wellness centre. All rights reserved.
            <span className="hidden sm:inline"> | </span><br className="sm:hidden" />
            Designed & Developed by <a href="https://rolobee.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-300 transition-colors font-medium">rolobee</a>
          </p>
        </div>
      </motion.div>
    </footer>
  );
};