import React from 'react';
import { Phone, Mail, MapPin, Clock, ArrowUpRight, Sparkles, Heart } from 'lucide-react';

export default function Footer({ onOpenInquiry, onOpenCatalog }) {
  return (
    <footer id="contact" className="bg-[#2A050B] text-[#EADBCE] pt-16 pb-12 border-t-2 border-[#C5A059]/40 relative overflow-hidden">
      {/* Decorative Gold Glow Elements */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 right-10 w-80 h-80 bg-[#7A0F1D]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Section: Brand Showcase with Gold Logo and Tagline from Screenshot 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-[#5A1C24]">
          
          <div className="lg:col-span-5 space-y-4 text-left">
            <div className="flex items-center gap-3">
              <img 
                src="/images/buraq-logo-gold.png" 
                alt="Buraq Enterprises Logo Gold" 
                className="h-12 w-auto object-contain"
              />
            </div>

            <p className="text-sm font-serif italic text-[#F3E5AB]">
              &ldquo;Together In Every Journey &bull; Good People Make Beautiful Journeys&rdquo;
            </p>

            <p className="text-xs text-[#C7B5A7] leading-relaxed max-w-md">
              Buraq Enterprises is a premier purveyor of 24K gold-embossed bone china dinnerware, artisanal crystal crockery, and high-efficiency smart electronic kitchen appliances for culinary enthusiasts and grand hospitality venues.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={onOpenCatalog}
                className="px-4 py-2 rounded-full text-xs font-semibold text-[#2A050B] bg-gradient-to-r from-[#F3E5AB] to-[#D4AF37] hover:opacity-90 transition-opacity shadow-sm"
              >
                Download 2026 Lookbook
              </button>

              <button
                onClick={onOpenInquiry}
                className="px-4 py-2 rounded-full text-xs font-semibold text-[#F3E5AB] border border-[#D4AF37]/50 hover:bg-[#D4AF37]/10 transition-colors"
              >
                Schedule Showroom Visit
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3 text-left">
            <h4 className="text-xs uppercase font-bold tracking-widest text-[#F3E5AB] flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-[#D4AF37]" />
              Curated Collections
            </h4>
            <ul className="space-y-2 text-xs text-[#D8C7B9]">
              <li><a href="#catalog" className="hover:text-[#F3E5AB] transition-colors flex items-center justify-between"><span>Fine Bone China Dinner Sets</span> <ArrowUpRight className="w-3 h-3 opacity-60" /></a></li>
              <li><a href="#catalog" className="hover:text-[#F3E5AB] transition-colors flex items-center justify-between"><span>Barista Touch Espresso Machines</span> <ArrowUpRight className="w-3 h-3 opacity-60" /></a></li>
              <li><a href="#catalog" className="hover:text-[#F3E5AB] transition-colors flex items-center justify-between"><span>Vortex Convection Air Fryers</span> <ArrowUpRight className="w-3 h-3 opacity-60" /></a></li>
              <li><a href="#catalog" className="hover:text-[#F3E5AB] transition-colors flex items-center justify-between"><span>Artisan Lead-Free Crystal Decanters</span> <ArrowUpRight className="w-3 h-3 opacity-60" /></a></li>
              <li><a href="#catalog" className="hover:text-[#F3E5AB] transition-colors flex items-center justify-between"><span>24K Titanium Gold Cutlery</span> <ArrowUpRight className="w-3 h-3 opacity-60" /></a></li>
              <li><a href="#catalog" className="hover:text-[#F3E5AB] transition-colors flex items-center justify-between"><span>Wedding & Bridal Registries</span> <ArrowUpRight className="w-3 h-3 opacity-60" /></a></li>
            </ul>
          </div>

          {/* Contact & Showroom */}
          <div className="lg:col-span-4 space-y-3 text-left">
            <h4 className="text-xs uppercase font-bold tracking-widest text-[#F3E5AB] flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-[#D4AF37]" />
              Experience Center & Concierge
            </h4>
            
            <div className="space-y-2.5 text-xs text-[#D8C7B9]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <span>Naibasti, KP Road, Anantnag</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <a href="tel:+917006270870" className="hover:text-[#F3E5AB] transition-colors font-medium">
                  +91 7006270870
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <a href="mailto:concierge@buraqenterprises.com" className="hover:text-[#F3E5AB] transition-colors">
                  concierge@buraqenterprises.com
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <span>Monday – Saturday: 10:00 AM – 8:30 PM (IST)</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Wings Tribute */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A8988C]">
          <p>© {new Date().getFullYear()} Buraq Enterprises. All Rights Reserved. Crafted with pure gold and precision engineering.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Privacy Policy</span>
            <span>&bull;</span>
            <span>Terms of Service</span>
            <span>&bull;</span>
            <span>Authenticity Certificate</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
