import React from 'react';
import { Plus, Check, Sparkles } from 'lucide-react';
import { recommendedItems } from '../data/products';

export default function RecommendedRail({ onSelectProduct, onQuickInquire }) {
  return (
    <section className="py-12 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with Subtle Wing Motif (Matching "▾ Рекомендуем попробовать ▾" from Screenshot 3) */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#7A0F1D]">
            <span>◆</span>
            <span>Recommended Selections</span>
            <span>◆</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#271E1B] mt-1">
            Curated For Everyday Grandeur
          </h2>
        </div>

        {/* Horizontal Cards Row (Matching Screenshot 3's 3-card horizontal layout with rounded thumbnails and '+' buttons) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {recommendedItems.map((item) => (
            <div 
              key={item.id}
              className="bg-white/80 hover:bg-white p-3.5 sm:p-4 rounded-2xl border border-[#E9DFCF] hover:border-[#C5A059] transition-all duration-300 shadow-xs hover:shadow-md flex items-center gap-3.5 group cursor-pointer"
              onClick={() => onSelectProduct(item)}
            >
              {/* Rounded Product Thumbnail */}
              <div className="relative w-20 h-20 sm:w-22 sm:h-22 rounded-xl overflow-hidden flex-shrink-0 bg-[#F6EFE3] border border-[#E6DBC8]">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Title, Subtext, Price */}
              <div className="flex-1 min-w-0 text-left">
                <h3 className="text-xs sm:text-sm font-semibold text-[#291F1C] group-hover:text-[#7A0F1D] transition-colors line-clamp-1">
                  {item.name}
                </h3>
                <p className="text-[11px] text-[#716358] line-clamp-2 mt-0.5 leading-snug">
                  {item.subtext}
                </p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-bold text-[#7A0F1D]">
                    {item.price}
                  </span>
                  
                  {/* The '+' Inquire/View Pill Button (like in Screenshot 3) */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onQuickInquire(item);
                    }}
                    className="w-7 h-7 rounded-full bg-[#FAF0DC] hover:bg-[#7A0F1D] text-[#7A0F1D] hover:text-[#F7EBB7] flex items-center justify-center transition-colors border border-[#DFCBAE] shadow-xs"
                    title="View & Inquire"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
