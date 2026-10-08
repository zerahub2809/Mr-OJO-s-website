import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Layout from './components/layout/Layout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Products from './pages/Products.jsx';
import HowItWorks from './pages/HowItWorks.jsx';
import DeliveryPricing from './pages/DeliveryPricing.jsx';
import QualityStandards from './pages/QualityStandards.jsx';
import DemandInsights from './pages/DemandInsights.jsx';
import Gallery from './pages/Gallery.jsx';
import Testimonials from './pages/Testimonials.jsx';
import Contact from './pages/Contact.jsx';
import NotFound from './pages/NotFound.jsx';

/** Scroll to top (or hash target) and update the document title on route change. */
function RouteEffects() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <Layout>
      <RouteEffects />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/delivery-pricing" element={<DeliveryPricing />} />
        <Route path="/quality-standards" element={<QualityStandards />} />
        <Route path="/demand-insights" element={<DemandInsights />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
