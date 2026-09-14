import React from 'react';
import { X, Sparkles, Star, ShieldCheck, CheckCircle2, MessageSquare, Phone, Send } from 'lucide-react';

export default function ProductDetailModal({ product, onClose, onOpenInquiry }) {
  if (!product) return null;

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Buraq Enterprises, I am interested in getting pricing and delivery details for "${product.name}" (${product.price || ''}). Please share more details.`
    );
    window.open(`https://wa.me/917006270870?text=${text}`, '_blank');
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative max-w-2xl w-full bg-[#FAF7F2] rounded-3xl overflow-hidden border border-[#D5C2A3] shadow-2xl my-8 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-[#4A3B32] hover:text-[#7A0F1D] flex items-center justify-center shadow-md transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Product Image */}
        <div className="relative h-64 sm:h-72 w-full bg-[#EFE4D2] overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between">
            <div>
              <span className="bg-[#7A0F1D] text-[#F3E5AB] text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full border border-[#D4AF37]/50 shadow-xs">
                {product.categoryLabel || product.category}
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mt-1.5 shadow-sm">
                {product.name}
              </h3>
            </div>
            <div className="text-right">
              <span className="text-lg sm:text-xl font-bold text-[#F3E5AB]">{product.price}</span>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Description */}
          <div>
            <h4 className="text-xs uppercase font-bold tracking-wider text-[#7A0F1D] mb-1.5 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#B38728]" />
              Artisan Profile & Overview
            </h4>
            <p className="text-sm text-[#57483E] leading-relaxed">
              {product.description || product.subtext}
            </p>
          </div>

          {/* Technical Specifications */}
          {product.specs && (
            <div className="bg-white/80 rounded-2xl p-4 sm:p-5 border border-[#E9DFCE] space-y-3">
              <h5 className="text-xs uppercase font-bold tracking-wider text-[#2D211C]">
                Key Specifications & Craft Details
              </h5>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#52443B]">
                {Array.isArray(product.specs) ? (
                  product.specs.map((spec, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#7A0F1D] flex-shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))
                ) : (
                  Object.entries(product.specs).map(([key, val]) => (
                    <div key={key} className="space-y-0.5">
                      <span className="font-semibold text-[#2B1F1B] capitalize">{key.replace(/([A-Z])/g, ' $1')}: </span>
                      <span>{val}</span>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

          {/* Guarantee Pill */}
          <div className="flex items-center gap-3 p-3 rounded-xl bg-[#FAF0DE] border border-[#E2CEB0] text-xs text-[#55463C]">
            <ShieldCheck className="w-5 h-5 text-[#7A0F1D] flex-shrink-0" />
            <span>
              <strong>Buraq Authenticity Guarantee:</strong> Full replacement warranty against transit fracture and electrical manufacturing defects.
            </span>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <button
              onClick={handleWhatsApp}
              className="w-full sm:flex-1 py-3 px-4 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20ba5a] flex items-center justify-center gap-2 shadow-md transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Inquire via WhatsApp</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenInquiry(product);
              }}
              className="w-full sm:flex-1 py-3 px-4 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#7A0F1D] to-[#961625] hover:opacity-95 flex items-center justify-center gap-2 shadow-md transition-all border border-[#B38728]/40"
            >
              <Send className="w-4 h-4 text-[#F3E5AB]" />
              <span>Request Quotation / Samples</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
