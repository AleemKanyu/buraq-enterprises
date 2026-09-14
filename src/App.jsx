import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesStrip from './components/FeaturesStrip';
import CurvedShowcase from './components/CurvedShowcase';
import RecommendedRail from './components/RecommendedRail';
import CraftsmanshipBanner from './components/CraftsmanshipBanner';
import ProductCatalog from './components/ProductCatalog';
import ProductDetailModal from './components/ProductDetailModal';
import InquiryModal from './components/InquiryModal';
import CatalogModal from './components/CatalogModal';
import Footer from './components/Footer';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [catalogModalOpen, setCatalogModalOpen] = useState(false);
  const [inquiryDefaultProduct, setInquiryDefaultProduct] = useState(null);

  const handleOpenInquiry = (product = null) => {
    setInquiryDefaultProduct(product);
    setInquiryModalOpen(true);
  };

  const handleQuickInquire = (product) => {
    setSelectedProduct(product);
  };

  const scrollToCatalog = () => {
    const el = document.getElementById('catalog');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2C2420] flex flex-col font-sans selection:bg-[#7A0F1D] selection:text-[#F3E5AB]">
      {/* Top Header Navbar */}
      <Navbar 
        onOpenInquiry={() => handleOpenInquiry(null)}
        onOpenCatalog={() => setCatalogModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section - Asymmetrical curved container & pill badges */}
        <HeroSection 
          onExplore={scrollToCatalog}
          onOpenInquiry={() => handleOpenInquiry(null)}
        />

        {/* 2. Features Strip - Minimalist 4-column row (NO 3-box cards!) */}
        <FeaturesStrip />

        {/* 3. Curved Showcase - Organic golden capsule with circular pedestals */}
        <CurvedShowcase 
          onSelectProduct={(product) => setSelectedProduct(product)}
          onExploreAll={scrollToCatalog}
        />

        {/* 4. Recommended Rail - Horizontal cards with rounded thumbnail & '+' buttons */}
        <RecommendedRail 
          onSelectProduct={(product) => setSelectedProduct(product)}
          onQuickInquire={(product) => handleOpenInquiry(product)}
        />

        {/* 5. Craftsmanship Showcase Banner - Curved container with expandable photography */}
        <CraftsmanshipBanner 
          onOpenCatalog={() => setCatalogModalOpen(true)}
        />

        {/* 6. Comprehensive Interactive Product Catalog */}
        <ProductCatalog 
          onSelectProduct={(product) => setSelectedProduct(product)}
          onQuickInquire={(product) => handleOpenInquiry(product)}
        />
      </main>

      {/* Royal Maroon & Gold Footer */}
      <Footer 
        onOpenInquiry={() => handleOpenInquiry(null)}
        onOpenCatalog={() => setCatalogModalOpen(true)}
      />

      {/* Modals */}
      <ProductDetailModal 
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onOpenInquiry={(product) => handleOpenInquiry(product)}
      />

      <InquiryModal 
        isOpen={inquiryModalOpen}
        onClose={() => {
          setInquiryModalOpen(false);
          setInquiryDefaultProduct(null);
        }}
        defaultProduct={inquiryDefaultProduct}
      />

      <CatalogModal 
        isOpen={catalogModalOpen}
        onClose={() => setCatalogModalOpen(false)}
      />
    </div>
  );
}
