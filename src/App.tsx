import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { AboutPage } from './pages/AboutPage';
import { DoctorsPage } from './pages/DoctorsPage';
import { MomentsPage } from './pages/MomentsPage';
import { ServiceDetail } from './pages/ServiceDetail';
import { ServiceCategoryPage } from './pages/ServiceCategoryPage';
import { ContactPage } from './pages/ContactPage';
import { PackagesPage } from './pages/PackagesPage';
import { Preloader } from './components/ui/Preloader';
import { ScrollToTopButton } from './components/ui/ScrollToTopButton';
import { CustomCursor } from './components/ui/CustomCursor';

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/doctors" element={<DoctorsPage />} />
        <Route path="/packages" element={<PackagesPage />} />
        <Route path="/services/:id" element={<ServiceDetail />} />
        <Route path="/services/category/:categorySlug" element={<ServiceCategoryPage />} />
        <Route path="/moments" element={<MomentsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </AnimatePresence>
  );
};

const LayoutWrapper = ({ onLoaded }: { onLoaded: () => void }) => {
  const location = useLocation();
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    onLoaded();
  }, [onLoaded]);

  useEffect(() => {
    setIsNavigating(true);
    const timer = setTimeout(() => setIsNavigating(false), 600);
    window.scrollTo(0, 0);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isNavigating && <Preloader key="nav-loader" />}
      </AnimatePresence>
      <Navbar />
      <CustomCursor />
      <div className="relative z-10">
        <AnimatedRoutes />
      </div>
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

const handleLoaded = () => { };

const AppContent = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initial site load timer
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen text-neutral-800 font-sans selection:bg-primary-300 selection:text-white bg-white">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="loader" />}
      </AnimatePresence>
      <LayoutWrapper onLoaded={handleLoaded} />
    </div>
  );
};

function App() {
  return <AppContent />;
}

export default App
