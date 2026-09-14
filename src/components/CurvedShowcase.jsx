import React from 'react';
import { ArrowRight, Eye, Sparkles } from 'lucide-react';
import { featuredShowcase } from '../data/products';

export default function CurvedShowcase({ onSelectProduct, onExploreAll }) {
  return (
    <section id="showcase" className="py-14 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Organic Curved Container (Matching the green rounded capsule from Screenshot 3, rendered in luxury golden & maroon) */}
        <div 
          className="relative overflow-hidden bg-gradient-to-br from-[#E7D6B8] via-[#DEC7A3] to-[#D1B58C] border border-[#CDB083] p-6 sm:p-10 lg:p-12 shadow-[0_25px_60px_-15px_rgba(122,15,29,0.15)]"
          style={{
            borderRadius: "44px"
          }}
        >
          {/* Subtle Golden Pattern Overlay */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/20 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#7A0F1D]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Heading, Subhead & Pill CTA */}
            <div className="lg:col-span-4 text-left space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF5EC]/80 border border-[#C5A77B] text-[#7A0F1D] text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-[#A57827]" />
                <span>Curated Centerpieces</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#2A1D18] leading-tight">
                Signature Crockery & Living
              </h2>

              <p className="text-xs sm:text-sm text-[#57493E] leading-relaxed">
                Hand-sculpted bone china, 24K gold gilded plates, and precision barista appliances crafted for those who demand excellence in every detail.
              </p>

              <div className="pt-2">
                <button
                  onClick={onExploreAll}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-[#2A1D18] bg-[#FAF5EC] hover:bg-white border border-[#CBB084] shadow-sm hover:shadow-md transition-all group"
                >
                  <span>View All Centerpieces</span>
                  <ArrowRight className="w-4 h-4 text-[#7A0F1D] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Column: 3 Circular Showcase Pedestals (Exactly like Screenshot 3's 3 circular drinkware discs) */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 lg:gap-6">
                {featuredShowcase.map((item) => (
                  <div 
                    key={item.id}
                    onClick={() => onSelectProduct(item)}
                    className="cursor-pointer group flex flex-col items-center text-center bg-white/40 hover:bg-white/80 p-5 rounded-3xl backdrop-blur-xs border border-white/50 hover:border-[#B38728]/60 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    {/* Circular Plate / Pedestal (Matching Screenshot 3's circular drink containers) */}
                    <div className="relative w-36 h-36 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full p-2 bg-gradient-to-b from-white to-[#F2E8D8] shadow-md group-hover:shadow-xl transition-shadow flex items-center justify-center border-2 border-[#E3D0B2]">
                      <div className="w-full h-full rounded-full overflow-hidden relative">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                          <span className="w-8 h-8 rounded-full bg-[#7A0F1D] text-white flex items-center justify-center shadow-md">
                            <Eye className="w-4 h-4" />
                          </span>
                        </div>
                      </div>

                      {/* Small floating tag badge */}
                      <span className="absolute -bottom-1 bg-[#7A0F1D] text-[#F3E5AB] text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-xs border border-[#D4AF37]/50">
                        {item.tag}
                      </span>
                    </div>

                    {/* Item Details */}
                    <div className="mt-4 space-y-1">
                      <h3 className="text-sm sm:text-base font-serif font-bold text-[#2C211C] group-hover:text-[#7A0F1D] transition-colors line-clamp-1">
                        {item.name}
                      </h3>
                      <p className="text-[11px] text-[#695A4F] line-clamp-1">
                        {item.category}
                      </p>
                      <div className="pt-1 text-sm font-bold text-[#7A0F1D]">
                        {item.price}
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
