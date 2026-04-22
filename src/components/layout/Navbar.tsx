import { useState, useEffect, type MouseEvent } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logos.png";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Initial check
    setIsScrolled(window.scrollY > 40);
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      requestAnimationFrame(() => {
        setIsScrolled(currentScrollY > 40);
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const SERVICES_DROPDOWN = [
    { name: "General Packages", id: "general" },
    { name: "Special Packages", id: "special" },
    { name: "Our Specialities", id: "specialities" },
    { name: "Exclusive Package On", id: "exclusive", isHighlight: true }
  ];

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoveredLinkData, setHoveredLinkData] = useState<{ width: number; left: number } | null>(null);

  const handleMouseEnter = (e: MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    setHoveredLinkData({
      width: el.offsetWidth,
      left: el.offsetLeft,
    });
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", hasDropdown: true },
    { name: "Moments", href: "/moments" },
    { name: "Packages", href: "/packages" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1]
        }}
        className="fixed left-0 right-0 top-0 z-[100] px-4 md:px-8 lg:px-12 pointer-events-none"
      >
        <motion.div
          animate={{
            maxWidth: isScrolled ? "72rem" : "80rem",
            paddingTop: isScrolled ? "0.75rem" : "1rem",
            paddingBottom: isScrolled ? "0.75rem" : "1rem",
            paddingLeft: isScrolled ? "1.5rem" : "2rem",
            paddingRight: isScrolled ? "1.5rem" : "2rem",
            borderRadius: isScrolled ? "2rem" : "2.5rem",
          }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={`container mx-auto relative bg-white/95 backdrop-blur-md pointer-events-auto transition-shadow duration-500 ${isScrolled
            ? "shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border-b border-neutral-100/50"
            : "shadow-lg border-b border-neutral-100"
            }`}
          style={{
            borderRadius: isScrolled ? "2rem" : "2.5rem",
          }}
        >
          <div className="flex items-center justify-between gap-6 w-full">
            <Link
              to="/"
              className="flex flex-shrink-0 items-center justify-start relative z-50 transition-all duration-500"
              style={{
                width: isScrolled ? "180px" : "220px",
                height: isScrolled ? "45px" : "55px",
              }}
            >
              <motion.img
                src={logo}
                alt="TenderBliss Logo"
                animate={{
                  width: isScrolled ? "180px" : "220px",
                  scale: isScrolled ? 0.92 : 1,
                }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute left-0 top-1/2 -translate-y-1/2 object-contain origin-left"
              />
            </Link>

            <nav 
              className="hidden lg:flex items-center justify-center flex-grow mx-4 gap-2 xl:gap-4 relative"
              onMouseLeave={() => setHoveredLinkData(null)}
            >
              <AnimatePresence>
                {hoveredLinkData && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1,
                      left: hoveredLinkData.left,
                      width: hoveredLinkData.width
                    }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 400, 
                      damping: 30,
                      opacity: { duration: 0.2 }
                    }}
                    className="absolute h-10 bg-primary-50/80 rounded-full z-0"
                  />
                )}
              </AnimatePresence>

              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative py-4 px-3 cursor-pointer z-10"
                  onMouseEnter={(e) => {
                    handleMouseEnter(e);
                    if (link.hasDropdown) setActiveDropdown(link.name);
                  }}
                  onMouseLeave={() => link.hasDropdown && setActiveDropdown(null)}
                >
                  {link.hasDropdown ? (
                    <div
                      className="flex items-center gap-1.5 font-bold tracking-[0.4px] text-[13px] text-neutral-800/70 hover:text-primary-300 transition-colors duration-300 uppercase cursor-default"
                    >
                      {link.name}
                      <motion.span
                        animate={{ rotate: activeDropdown === "Services" ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-[10px]"
                      >
                        ▼
                      </motion.span>
                    </div>
                  ) : (
                    <Link
                      to={link.href!}
                      onClick={() => {
                        setActiveDropdown(null);
                        setIsMobileMenuOpen(false);
                      }}
                      className="flex items-center gap-1.5 font-bold tracking-[0.4px] text-[13px] text-neutral-800/70 hover:text-primary-300 transition-colors duration-300 uppercase"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            <div className="hidden lg:flex items-center flex-shrink-0">
              <motion.a
                href="https://wa.me/919946223233?text=Hello,%20I%20have%20a%20quick%20enquiry!"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="bg-primary-300 text-white px-8 py-3 rounded-full font-inter font-semibold text-[15px] hover:bg-[#63c8ce] transition-all duration-300 border-none shadow-md hover:shadow-lg"
              >
                Quick Enquiry
              </motion.a>
            </div>

            <button
              className="lg:hidden p-2.5 text-neutral-800 hover:bg-neutral-50 rounded-xl transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Simple Dropdown Menu */}
          <AnimatePresence>
            {activeDropdown === "Services" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                onMouseEnter={() => setActiveDropdown("Services")}
                onMouseLeave={() => setActiveDropdown(null)}
                className="absolute top-full left-[35%] -translate-x-1/2 pt-2 w-64 pointer-events-auto z-50"
              >
                <div className="bg-white shadow-2xl rounded-2xl p-4 border border-neutral-100 flex flex-col gap-1">
                  {SERVICES_DROPDOWN.map((item) => (
                    <Link
                      key={item.id}
                      to={`/services/category/${item.id}`}
                      onClick={() => setActiveDropdown(null)}
                      className={`px-4 py-3 rounded-xl text-[13px] font-bold uppercase tracking-wider transition-all duration-200 hover:bg-neutral-50 ${item.isHighlight ? "text-primary-300" : "text-neutral-600 hover:text-primary-300"}`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Mobile Menu Overlay - Smooth spring animation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="fixed inset-0 bg-neutral-900/40 backdrop-blur-sm z-[101] pointer-events-auto"
              />
              <motion.div
                initial={{ opacity: 0, x: "100%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "100%" }}
                transition={{
                  type: "spring",
                  damping: 28,
                  stiffness: 220,
                  mass: 0.8
                }}
                className="fixed inset-y-0 right-0 w-full max-w-[380px] bg-white shadow-2xl z-[102] overflow-y-auto pointer-events-auto flex flex-col"
              >
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-8">
                    <img src={logo} alt="Logo" className="w-[160px] h-auto object-contain" />
                    <button
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="p-2 bg-neutral-50 rounded-full hover:bg-neutral-100 transition-all duration-200 hover:scale-110"
                    >
                      <X className="w-5 h-5 text-neutral-500" />
                    </button>
                  </div>

                  <nav className="flex flex-col gap-1 overflow-y-auto pr-2">
                    {navLinks.map((link, idx) => (
                      <motion.div
                        key={link.name}
                        className="flex flex-col"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                      >
                        <Link
                          to={link.href || "#"}
                          onClick={() => {
                            if (!link.hasDropdown) {
                              setIsMobileMenuOpen(false);
                            }
                          }}
                          className="py-4 px-4 rounded-xl hover:bg-neutral-50 text-neutral-800 font-bold text-base transition-all flex items-center justify-between uppercase"
                        >
                          {link.name}
                          {link.hasDropdown && <span className="text-xs text-neutral-400">▼</span>}
                        </Link>

                        {link.hasDropdown && (
                          <div className="pl-5 flex flex-col gap-4 mb-4 border-l-2 border-primary-100 ml-4 py-2">
                            {SERVICES_DROPDOWN.map((item) => (
                              <Link
                                key={item.id}
                                to={`/services/category/${item.id}`}
                                className={`text-sm font-bold uppercase tracking-wider ${item.isHighlight ? "text-primary-300" : "text-neutral-600"} hover:text-primary-300 transition-colors`}
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </nav>

                  <div className="mt-auto pt-6 pb-4">
                    <motion.a
                      href="https://wa.me/919946223233"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-primary-300 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg text-sm hover:bg-primary-200 transition-all duration-300"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      Quick WhatsApp Enquiry
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};