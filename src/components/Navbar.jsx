import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Menu, X, Phone, Sparkles } from 'lucide-react';

export default function Navbar({ onOpenInquiry, onOpenCatalog, cartCount = 0, onOpenCart }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#FAF7F2]/95 backdrop-blur-md py-3 shadow-[0_4px_25px_rgba(0,0,0,0.06)] border-b border-[#E8DFC8]' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo with Wings */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative flex items-center">
              <img 
                src="/images/buraq-logo.png" 
                alt="Buraq Enterprises Logo" 
                className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </a>

          {/* Center Navigation Links - Clean Minimal Pill Style */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-white/70 backdrop-blur-sm px-4 py-1.5 rounded-full border border-[#E5DAC6] shadow-sm">
            <a 
              href="#hero" 
              className="px-3.5 py-1.5 text-xs lg:text-sm font-medium text-[#4A3B32] hover:text-[#7A0F1D] rounded-full hover:bg-[#F7EFE1] transition-all"
            >
              Home
            </a>
            <a 
              href="#showcase" 
              className="px-3.5 py-1.5 text-xs lg:text-sm font-medium text-[#4A3B32] hover:text-[#7A0F1D] rounded-full hover:bg-[#F7EFE1] transition-all"
            >
              Signature Collection
            </a>
            <a 
              href="#catalog" 
              className="px-3.5 py-1.5 text-xs lg:text-sm font-medium text-[#4A3B32] hover:text-[#7A0F1D] rounded-full hover:bg-[#F7EFE1] transition-all"
            >
              Crockery & Appliances
            </a>
            <a 
              href="#craftsmanship" 
              className="px-3.5 py-1.5 text-xs lg:text-sm font-medium text-[#4A3B32] hover:text-[#7A0F1D] rounded-full hover:bg-[#F7EFE1] transition-all"
            >
              Heritage
            </a>
            <a 
              href="#contact" 
              className="px-3.5 py-1.5 text-xs lg:text-sm font-medium text-[#4A3B32] hover:text-[#7A0F1D] rounded-full hover:bg-[#F7EFE1] transition-all"
            >
              Showroom
            </a>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Direct Call Link */}
            <a
              href="tel:+917006270870"
              className="hidden lg:inline-flex items-center gap-1.5 text-xs font-semibold text-[#3E3029] hover:text-[#7A0F1D] bg-white/70 hover:bg-white px-3.5 py-1.5 rounded-full border border-[#E3D8C6] transition-all"
              title="Call Buraq Enterprises"
            >
              <Phone className="w-3.5 h-3.5 text-[#7A0F1D]" />
              <span>7006270870</span>
            </a>

            {/* Catalog Button */}
            <button
              onClick={onOpenCatalog}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#7A0F1D] hover:text-[#520A13] px-3 py-1.5 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              Catalog
            </button>

            {/* Inquire CTA Pill Button - Inspired by Screenshot 3's orange/accent pill CTA */}
            <button
              onClick={onOpenInquiry}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium text-white bg-gradient-to-r from-[#7A0F1D] to-[#9E1B2D] hover:from-[#600C17] hover:to-[#7A0F1D] shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 border border-[#B38728]/40"
            >
              <span>Get a Quote</span>
            </button>

            {/* Mobile menu toggle */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full text-[#4A3B32] hover:bg-[#F2E8D5] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 bg-white/95 backdrop-blur-md rounded-2xl border border-[#E5DAC6] shadow-xl space-y-2">
            <a 
              href="#hero" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-[#4A3B32] hover:bg-[#F7EFE1] rounded-lg"
            >
              Home
            </a>
            <a 
              href="#showcase" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-[#4A3B32] hover:bg-[#F7EFE1] rounded-lg"
            >
              Signature Showcase
            </a>
            <a 
              href="#catalog" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-[#4A3B32] hover:bg-[#F7EFE1] rounded-lg"
            >
              Crockery & Electronic Appliances
            </a>
            <a 
              href="#craftsmanship" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-[#4A3B32] hover:bg-[#F7EFE1] rounded-lg"
            >
              Our Heritage & Quality
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-[#4A3B32] hover:bg-[#F7EFE1] rounded-lg"
            >
              Showroom & Contact
            </a>
            <div className="pt-2 border-t border-[#EAE0CD] flex flex-col gap-2">
              <a
                href="tel:+917006270870"
                className="w-full py-2.5 rounded-full text-xs font-semibold text-[#7A0F1D] bg-[#FAF1E3] border border-[#DFCBAE] flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Concierge: 7006270870</span>
              </a>
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenInquiry(); }}
                className="w-full py-2.5 rounded-full text-xs font-semibold text-white bg-[#7A0F1D] text-center"
              >
                Inquire Directly
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
