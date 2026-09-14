import React, { useState } from 'react';
import { Sparkles, CheckCircle2, Shield, HeartHandshake, Maximize2, X } from 'lucide-react';

export default function CraftsmanshipBanner({ onOpenCatalog }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="craftsmanship" className="py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Organic Curved Container (Matching the bottom showcase container from Screenshot 3) */}
        <div 
          className="relative overflow-hidden bg-gradient-to-r from-[#EFE3CF] via-[#E8D6BD] to-[#DFCAAB] border border-[#D5BF9E] p-6 sm:p-10 lg:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.06)]"
          style={{
            borderRadius: "44px"
          }}
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/30 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Heritage Story & 3 Minimal Metrics */}
            <div className="lg:col-span-6 space-y-5 text-left">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF5EB]/90 border border-[#D5C19E] text-[#7A0F1D] text-xs font-semibold">
                <HeartHandshake className="w-3.5 h-3.5 text-[#B38728]" />
                <span>Together In Every Journey</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#2A1E1A] leading-tight">
                Craftsmanship We Take Pride In
              </h2>

              <p className="text-xs sm:text-sm text-[#5B4E44] leading-relaxed">
                At Buraq Enterprises, we believe good people make beautiful journeys. Whether hosting intimate family dinners with 24K gold-rimmed bone china or crafting culinary masterworks using high-precision electronic appliances, our collections are built to inspire for a lifetime.
              </p>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={onOpenCatalog}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#7A0F1D] to-[#961525] hover:from-[#630C17] hover:to-[#7A0F1D] shadow-md hover:shadow-lg transition-all"
                >
                  <Sparkles className="w-4 h-4 text-[#F3E5AB]" />
                  <span>Download Luxury Catalog</span>
                </button>
              </div>

              {/* 3 Minimal Icons Below Story (Matching Screenshot 3's bottom indicators) */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-4 border-t border-[#D5BF9E]/70">
                <div className="space-y-1">
                  <div className="w-7 h-7 rounded-full bg-[#FAF5EB] text-[#7A0F1D] flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-[#7A0F1D]" />
                  </div>
                  <div className="text-[11px] font-bold text-[#271E1B]">Direct Porcelain</div>
                  <div className="text-[10px] text-[#6B5E55]">Master Kilns</div>
                </div>

                <div className="space-y-1">
                  <div className="w-7 h-7 rounded-full bg-[#FAF5EB] text-[#7A0F1D] flex items-center justify-center">
                    <Shield className="w-4 h-4 text-[#B38728]" />
                  </div>
                  <div className="text-[11px] font-bold text-[#271E1B]">BIS Certified</div>
                  <div className="text-[10px] text-[#6B5E55]">Safe Kitchen Tech</div>
                </div>

                <div className="space-y-1">
                  <div className="w-7 h-7 rounded-full bg-[#FAF5EB] text-[#7A0F1D] flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-[#7A0F1D]" />
                  </div>
                  <div className="text-[11px] font-bold text-[#271E1B]">White-Glove</div>
                  <div className="text-[10px] text-[#6B5E55]">Safe Transit Box</div>
                </div>
              </div>

            </div>

            {/* Right Column: Rounded Organic Visual with Expand Trigger (Like Screenshot 3) */}
            <div className="lg:col-span-6 relative flex items-center justify-center">
              <div 
                className="relative w-full h-64 sm:h-80 lg:h-96 rounded-3xl overflow-hidden border-2 border-white/60 shadow-xl group cursor-pointer"
                onClick={() => setModalOpen(true)}
              >
                <img 
                  src="/images/luxury_table.jpg" 
                  alt="Fine tableware and banquet hospitality" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Expand Overlay Button (Bottom Right icon as seen in Screenshot 3) */}
                <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm text-[#7A0F1D] flex items-center justify-center shadow-md group-hover:bg-[#7A0F1D] group-hover:text-white transition-colors">
                  <Maximize2 className="w-5 h-5" />
                </div>

                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-[11px] text-[#F3E5AB] font-medium">
                  Artisanal Table Setting & Appliances
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Lightbox / Zoom Modal */}
      {modalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setModalOpen(false)}
        >
          <div className="relative max-w-4xl w-full bg-[#200508] p-2 rounded-3xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center"
            >
              <X className="w-5 h-5" />
            </button>
            <img 
              src="https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&w=1400&q=90" 
              alt="Artisanal Crockery Detailed View"
              className="w-full h-auto max-h-[80vh] object-contain rounded-2xl"
            />
            <div className="p-4 text-center">
              <h4 className="text-[#F3E5AB] font-serif text-lg font-bold">Buraq Enterprises • Artisanal Craftsmanship & Modern Kitchen Suites</h4>
              <p className="text-[#DFCAAB] text-xs mt-1">Together in every culinary journey</p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
