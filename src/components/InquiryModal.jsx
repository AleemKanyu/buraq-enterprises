import React, { useState } from 'react';
import { X, Sparkles, Send, CheckCircle } from 'lucide-react';

export default function InquiryModal({ isOpen, onClose, defaultProduct = null }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    type: defaultProduct ? (defaultProduct.categoryLabel || defaultProduct.category || 'Crockery') : 'Luxury Crockery & Dinnerware',
    productName: defaultProduct ? defaultProduct.name : '',
    quantity: 'Standard Order',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      onClick={handleClose}
    >
      <div 
        className="relative max-w-lg w-full bg-[#FAF7F2] rounded-3xl overflow-hidden border border-[#D5C2A3] shadow-2xl p-6 sm:p-8 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-[#4A3B32] hover:text-[#7A0F1D] flex items-center justify-center shadow-xs transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#FAF0DC] text-[#7A0F1D] mx-auto flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-[#7A0F1D]" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-[#2A1E1A]">
              Inquiry Received
            </h3>
            <p className="text-xs sm:text-sm text-[#5D5046] max-w-sm mx-auto leading-relaxed">
              Thank you for contacting Buraq Enterprises. Our luxury culinary and tableware concierge will reach out to you within 2 hours with tailored pricing and catalogs.
            </p>
            <div className="pt-2">
              <button
                onClick={handleClose}
                className="px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-[#7A0F1D] hover:bg-[#5D0A14] transition-colors"
              >
                Back to Site
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6 space-y-1">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#7A0F1D]">
                <Sparkles className="w-3.5 h-3.5 text-[#B38728]" />
                <span>Concierge & Inquiries</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#271E1B]">
                Request Quotation & Catalog
              </h3>
              <p className="text-xs text-[#6B5C51]">
                Specialists in fine crockery, bridal wedding registries, and luxury electronic kitchen setups.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#3D302A] mb-1">Your Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Zaid Khan"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#DFCBB0] text-xs sm:text-sm text-[#271E1B] focus:outline-none focus:border-[#7A0F1D]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#3D302A] mb-1">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 70062 70870"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#DFCBB0] text-xs sm:text-sm text-[#271E1B] focus:outline-none focus:border-[#7A0F1D]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#3D302A] mb-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="name@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#DFCBB0] text-xs sm:text-sm text-[#271E1B] focus:outline-none focus:border-[#7A0F1D]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#3D302A] mb-1">Interest Category</label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#DFCBB0] text-xs sm:text-sm text-[#271E1B] focus:outline-none focus:border-[#7A0F1D]"
                  >
                    <option>Luxury Crockery & Dinnerware</option>
                    <option>Electronic Kitchen Appliances</option>
                    <option>Crystal Glassware & Bar</option>
                    <option>Wedding Bridal Registry</option>
                    <option>Wholesale / B2B Hospitality</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#3D302A] mb-1">Scale of Requirement</label>
                  <select
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#DFCBB0] text-xs sm:text-sm text-[#271E1B] focus:outline-none focus:border-[#7A0F1D]"
                  >
                    <option>Individual Residence</option>
                    <option>Wedding / Corporate Gifting (10-50 units)</option>
                    <option>Hotel / Restaurant Bulk (50+ units)</option>
                    <option>Interior Designer Sourcing</option>
                  </select>
                </div>
              </div>

              {formData.productName && (
                <div className="p-2.5 rounded-lg bg-[#FAF0DC] text-xs text-[#7A0F1D] font-medium border border-[#E1CDAD]">
                  Regarding: <strong>{formData.productName}</strong>
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-[#3D302A] mb-1">Additional Notes</label>
                <textarea
                  rows="3"
                  placeholder="Share specific models, delivery locations, or custom gold detailing requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2 rounded-xl bg-white border border-[#DFCBB0] text-xs sm:text-sm text-[#271E1B] focus:outline-none focus:border-[#7A0F1D]"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-5 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#7A0F1D] to-[#9E1B2D] hover:from-[#650B16] hover:to-[#7A0F1D] shadow-md hover:shadow-lg flex items-center justify-center gap-2 transition-all border border-[#B38728]/40"
                >
                  <Send className="w-4 h-4 text-[#F3E5AB]" />
                  <span>Submit Inquiry</span>
                </button>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
