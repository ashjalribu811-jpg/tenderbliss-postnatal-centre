import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
}

export const SEO = ({ title, description, keywords }: SEOProps) => {
  const location = useLocation();

  useEffect(() => {
    const baseTitle = "TenderBliss | Premium Postnatal Wellness Center";
    document.title = title ? `${title} | TenderBliss` : baseTitle;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description || "TenderBliss is the most trusted and luxurious postpartum care center in Kerala, providing expert postnatal care and traditional Ayurvedic treatments.");
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords || "postnatal care, postpartum recovery, Kerala maternity care, Ayurvedic postnatal treatment");
    }

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `https://tenderbliss.com${location.pathname}`);

  }, [title, description, keywords, location.pathname]);

  return null;
};
