import React, { useState } from 'react';
import { X, Download, FileText, Sparkles, CheckCircle2 } from 'lucide-react';

export default function CatalogModal({ isOpen, onClose }) {
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      setDownloaded(true);
      // Create a virtual download trigger
      const link = document.createElement('a');
      link.href = '/images/buraq-logo.png';
      link.download = 'Buraq-Enterprises-Luxury-Catalog-2026.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 1200);
  };

  const handleClose = () => {
    setDownloaded(false);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      onClick={handleClose}
    >
      <div 
        className="relative max-w-md w-full bg-[#FAF7F2] rounded-3xl overflow-hidden border border-[#DFCBB0] shadow-2xl p-6 sm:p-8 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-[#4A3B32] hover:text-[#7A0F1D] flex items-center justify-center shadow-xs"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="text-center space-y-4">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#F5EAD4] to-[#DFC8A4] text-[#7A0F1D] mx-auto flex items-center justify-center shadow-sm">
            <FileText className="w-7 h-7 text-[#7A0F1D]" />
          </div>

          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#7A0F1D]">
              <Sparkles className="w-3.5 h-3.5 text-[#B38728]" />
              <span>Official 2026 Edition</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#271E1B] mt-1">
              Buraq Luxury Lookbook
            </h3>
            <p className="text-xs text-[#6F6055] mt-1.5 leading-relaxed">
              Complete catalog showcasing 24K gold-embossed bone china tableware, barista espresso appliances, digital air fryers, and crystal decanters.
            </p>
          </div>

          <div className="p-4 bg-white rounded-2xl border border-[#E9DFC8] text-xs text-left space-y-2">
            <div className="flex items-center justify-between text-[#382D28] font-semibold">
              <span>Buraq_Enterprises_Catalog_2026.pdf</span>
              <span className="text-[#7A0F1D]">14.8 MB</span>
            </div>
            <div className="space-y-1 text-[11px] text-[#78695F]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#7A0F1D]" />
                <span>Full specifications & wholesale tier discounts</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#7A0F1D]" />
                <span>Fine porcelain care & appliance warranty index</span>
              </div>
            </div>
          </div>

          {downloaded ? (
            <div className="p-3 bg-[#EAF7ED] text-[#1E6B35] rounded-xl text-xs font-semibold flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>Catalog downloaded successfully!</span>
            </div>
          ) : (
            <button
              onClick={handleDownload}
              disabled={downloading}
              className="w-full py-3 px-5 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#7A0F1D] to-[#9E1B2D] hover:from-[#650B16] hover:to-[#7A0F1D] shadow-md flex items-center justify-center gap-2 transition-all border border-[#B38728]/40"
            >
              <Download className="w-4 h-4 text-[#F3E5AB]" />
              <span>{downloading ? 'Preparing Catalog...' : 'Download Lookbook PDF'}</span>
            </button>
          )}

          <p className="text-[10px] text-[#8C7E74]">
            For wholesale dealership inquiries or printed hardbound lookbooks, reach us at concierge@buraqenterprises.com
          </p>
        </div>

      </div>
    </div>
  );
}
