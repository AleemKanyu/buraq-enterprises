import React from 'react';
import { ArrowRight, Sparkles, Award, ShieldCheck, HeartHandshake, Eye } from 'lucide-react';

export default function HeroSection({ onExplore, onOpenInquiry }) {
  return (
    <section id="hero" className="relative pt-28 sm:pt-32 pb-12 lg:pb-20 overflow-hidden">
      {/* Subtle Ambient Decorative Circles & Gradients */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#FAF0DC] rounded-full blur-3xl opacity-60 pointer-events-none -z-10" />
      <div className="absolute top-40 right-10 w-[30rem] h-[30rem] bg-[#F4E3C1] rounded-full blur-3xl opacity-40 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Hero Column: Narrative & Call to Actions */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-7 text-left">
            
            {/* Top Brand Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF1E3] border border-[#E2D2B5] text-[#7A0F1D] text-xs font-semibold tracking-wide shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#7A0F1D] animate-pulse"></span>
              <span>BURAQ ENTERPRISES • TOGETHER IN EVERY JOURNEY</span>
            </div>

            {/* Editorial Serif Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-serif font-semibold text-[#221815] leading-[1.18] tracking-tight">
              Where Royal Dining Meets <span className="italic font-normal text-[#7A0F1D] decoration-[#D4AF37] underline decoration-wavy underline-offset-4">Smart Culinary</span> Precision.
            </h1>

            {/* Description Text */}
            <p className="text-sm sm:text-base lg:text-lg text-[#5D5046] leading-relaxed max-w-xl font-normal">
              Curators of fine bone china crockery, 24K gold-embossed dinner sets, and next-generation electronic kitchen appliances engineered for discerning homes and grand hospitality banquets.
            </p>

            {/* Actions: Main Golden Pill & Secondary Inquiry */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <button
                onClick={onExplore}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#7A0F1D] via-[#8C1322] to-[#B38728] hover:opacity-95 shadow-[0_10px_25px_-5px_rgba(122,15,29,0.35)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore Catalog</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenInquiry}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium text-[#4A3B32] bg-[#FAF3E7] hover:bg-[#F3E7D3] border border-[#DFCBB0] transition-colors"
              >
                <span>Bespoke / Bulk Inquiries</span>
              </button>
            </div>

            {/* 3 Circular Micro-Features - Replicating the 3 subtle pill highlights from Screenshot 3 */}
            <div className="pt-4 flex flex-wrap items-center gap-4 sm:gap-6 border-t border-[#EADBCE]">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#F3E6D0] text-[#7A0F1D] flex items-center justify-center shadow-xs">
                  <Sparkles className="w-4 h-4 text-[#B38728]" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-semibold text-[#291F1C]">24K Gold Embellished</div>
                  <div className="text-[11px] text-[#7C6E64]">Mineral Bone China</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#F3E6D0] text-[#7A0F1D] flex items-center justify-center shadow-xs">
                  <Award className="w-4 h-4 text-[#7A0F1D]" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-semibold text-[#291F1C]">Culinary Precision</div>
                  <div className="text-[11px] text-[#7C6E64]">Smart Touch Tech</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#F3E6D0] text-[#7A0F1D] flex items-center justify-center shadow-xs">
                  <ShieldCheck className="w-4 h-4 text-[#B38728]" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-semibold text-[#291F1C]">Heritage Warranty</div>
                  <div className="text-[11px] text-[#7C6E64]">100% Quality Checked</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Hero Column: Organic Asymmetrical Curved Container (Replicating Screenshot 3) */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Organic Curved Container with Asymmetrical Border Radius (Just like Screenshot 3's hero mask) */}
              <div 
                className="relative overflow-hidden bg-gradient-to-br from-[#EEDDC0] via-[#F4E9D5] to-[#E3CDA7] p-2.5 sm:p-3 shadow-[0_20px_50px_rgba(122,15,29,0.12)] border border-[#DFCBB0]"
                style={{
                  borderRadius: "50px 170px 50px 130px"
                }}
              >
                <div 
                  className="relative overflow-hidden w-full h-[360px] sm:h-[430px] lg:h-[480px] bg-[#E8DAC3]"
                  style={{
                    borderRadius: "44px 162px 44px 122px"
                  }}
                >
                  <img 
                    src="/images/gold_dinnerware.jpg" 
                    alt="Luxury Porcelain Crockery and Modern Kitchen Setting" 
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Subtle Gradient Veil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                  {/* Floating Golden Emblem Badge (Like Screenshot 3's "100% Arabica" badge) */}
                  <div className="absolute bottom-6 right-6 bg-[#FAF4EA]/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-[#D8C29D] shadow-lg flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#7A0F1D] flex items-center justify-center text-[#F5E2B5]">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <div className="text-[10px] uppercase font-bold tracking-wider text-[#7A0F1D]">Certified Luxury</div>
                      <div className="text-xs font-bold text-[#2C221D]">100% Artisanal & Tech</div>
                    </div>
                  </div>

                  {/* Floating Tag Top Left */}
                  <div className="absolute top-6 left-6 bg-[#2B060B]/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#D4AF37]/50 shadow-md">
                    <span className="text-[11px] font-medium text-[#F3E5AB] tracking-wide flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
                      Imperial Dining & Chef Suites
                    </span>
                  </div>

                </div>
              </div>

              {/* Decorative Subtle Gold Glow Ring Behind */}
              <div 
                className="absolute -inset-4 bg-gradient-to-r from-[#D4AF37]/20 to-[#7A0F1D]/15 -z-10 blur-xl opacity-70 pointer-events-none"
                style={{ borderRadius: "60px 180px 60px 140px" }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
