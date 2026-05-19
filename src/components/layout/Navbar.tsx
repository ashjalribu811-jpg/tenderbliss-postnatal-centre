import { useState, useEffect, type MouseEvent } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logos.png";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsScrolled(window.scrollY > 40);

    const handleScroll = () => {
      requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 40);
      });
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const SERVICES_DROPDOWN = [
    { name: "General Packages", id: "general" },
    { name: "Special Packages", id: "special" },
    { name: "Our Specialities", id: "specialities" },
    {
      name: "Exclusive Package On",
      id: "exclusive",
      isHighlight: true,
    },
  ];

  const [activeDropdown, setActiveDropdown] =
    useState<string | null>(null);

  const [hoveredLinkData, setHoveredLinkData] = useState<{
    width: number;
    left: number;
  } | null>(null);

  const handleMouseEnter = (
    e: MouseEvent<HTMLElement>
  ) => {
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
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
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
          }}
          transition={{
            duration: 0.4,
          }}
          className={`container mx-auto relative bg-white/95 pointer-events-auto transition-all duration-300 ${
            isScrolled
              ? "shadow-lg border border-neutral-100 rounded-[2rem]"
              : "shadow-md border border-neutral-100 rounded-[2.5rem]"
          }`}
        >
          <div className="flex items-center justify-between gap-6 w-full">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center relative z-50"
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
                transition={{
                  duration: 0.4,
                }}
                className="absolute left-0 top-1/2 -translate-y-1/2 object-contain origin-left"
              />
            </Link>

            {/* Desktop Nav */}
            <nav
              className="hidden lg:flex items-center justify-center flex-grow mx-4 gap-2 xl:gap-4 relative"
              onMouseLeave={() =>
                setHoveredLinkData(null)
              }
            >
              <AnimatePresence>
                {hoveredLinkData && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      left: hoveredLinkData.left,
                      width: hoveredLinkData.width,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.9,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
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

                    if (link.hasDropdown)
                      setActiveDropdown(link.name);
                  }}
                  onMouseLeave={() =>
                    link.hasDropdown &&
                    setActiveDropdown(null)
                  }
                >
                  {link.hasDropdown ? (
                    <div className="flex items-center gap-1.5 font-bold tracking-[0.4px] text-[13px] text-neutral-800/70 hover:text-primary-300 transition-colors duration-200 uppercase">
                      {link.name}

                      <motion.span
                        animate={{
                          rotate:
                            activeDropdown ===
                            "Services"
                              ? 180
                              : 0,
                        }}
                        transition={{
                          duration: 0.2,
                        }}
                        className="text-[10px]"
                      >
                        ▼
                      </motion.span>
                    </div>
                  ) : (
                    <Link
                      to={link.href!}
                      className="flex items-center gap-1.5 font-bold tracking-[0.4px] text-[13px] text-neutral-800/70 hover:text-primary-300 transition-colors duration-200 uppercase"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center flex-shrink-0">
              <motion.a
                href="https://wa.me/919946223233?text=Hello,%20I%20have%20a%20quick%20enquiry!"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{
                  duration: 0.2,
                }}
                className="bg-primary-300 text-white px-8 py-3 rounded-full font-semibold text-[15px] hover:bg-[#63c8ce] transition-all duration-300 shadow-md"
              >
                Quick Enquiry
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-xl text-neutral-800 active:scale-95 transition-transform duration-150 touch-manipulation"
              onClick={() =>
                setIsMobileMenuOpen(
                  (prev) => !prev
                )
              }
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Desktop Dropdown */}
          <AnimatePresence>
            {activeDropdown === "Services" && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: 10,
                }}
                transition={{
                  duration: 0.2,
                }}
                onMouseEnter={() =>
                  setActiveDropdown("Services")
                }
                onMouseLeave={() =>
                  setActiveDropdown(null)
                }
                className="absolute top-full left-[35%] -translate-x-1/2 pt-2 w-64 z-50"
              >
                <div className="bg-white shadow-lg rounded-2xl p-4 border border-neutral-100 flex flex-col gap-1">
                  {SERVICES_DROPDOWN.map((item) => (
                    <Link
                      key={item.id}
                      to={`/services/category/${item.id}`}
                      onClick={() =>
                        setActiveDropdown(null)
                      }
                      className={`px-4 py-3 rounded-xl text-[13px] font-bold uppercase tracking-wider transition-colors duration-200 hover:bg-neutral-50 ${
                        item.isHighlight
                          ? "text-primary-300"
                          : "text-neutral-600 hover:text-primary-300"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Mobile Overlay */}
        {isMobileMenuOpen && (
          <div
            onClick={() =>
              setIsMobileMenuOpen(false)
            }
            className="fixed inset-0 bg-black/30 z-[101] lg:hidden"
          />
        )}

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-screen w-[82%] max-w-[360px]
          bg-white z-[102] shadow-xl
          transform-gpu will-change-transform
          transition-transform duration-300 ease-out
          lg:hidden flex flex-col
          pointer-events-auto touch-auto
          ${
            isMobileMenuOpen
              ? "translate-x-0"
              : "translate-x-full"
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-5 border-b border-neutral-100">
            <img
              src={logo}
              alt="Logo"
              className="w-[150px] object-contain"
            />

            <button
              onClick={() =>
                setIsMobileMenuOpen(false)
              }
              className="p-2 rounded-lg active:scale-95 transition-transform duration-150 touch-manipulation"
            >
              <X className="w-5 h-5 text-neutral-700" />
            </button>
          </div>

          {/* Menu Links */}
          <div className="flex flex-col p-5 gap-2 overflow-y-scroll touch-pan-y">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="flex flex-col"
              >
                {link.hasDropdown ? (
                  <button
                    type="button"
                    className="w-full text-left px-4 py-3 rounded-xl text-sm font-semibold text-neutral-700 uppercase touch-manipulation"
                  >
                    {link.name}
                  </button>
                ) : (
                  <Link
                    to={link.href!}
                    onClick={() =>
                      setIsMobileMenuOpen(false)
                    }
                    className="px-4 py-3 rounded-xl text-sm font-semibold text-neutral-700 hover:bg-neutral-50 transition-colors duration-200 uppercase touch-manipulation"
                  >
                    {link.name}
                  </Link>
                )}

                {link.hasDropdown && (
                  <div className="pl-4 mt-2 mb-3 flex flex-col gap-2 border-l-2 border-primary-100">
                    {SERVICES_DROPDOWN.map(
                      (item) => (
                        <Link
                          key={item.id}
                          to={`/services/category/${item.id}`}
                          onClick={() =>
                            setIsMobileMenuOpen(
                              false
                            )
                          }
                          className={`text-sm font-semibold uppercase transition-colors duration-200 touch-manipulation ${
                            item.isHighlight
                              ? "text-primary-300"
                              : "text-neutral-600 hover:text-primary-300"
                          }`}
                        >
                          {item.name}
                        </Link>
                      )
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-auto p-5 border-t border-neutral-100">
            <a
              href="https://wa.me/919946223233"
              className="w-full bg-primary-300 text-white py-4 rounded-xl font-semibold flex items-center justify-center shadow-md hover:bg-primary-200 transition-all duration-300 touch-manipulation"
            >
              Quick WhatsApp Enquiry
            </a>
          </div>
        </div>
      </motion.header>
    </>
  );
};