import React, { useState, useMemo } from 'react';
import { Search, Sparkles, Star, Eye, MessageCircle, ArrowRight } from 'lucide-react';
import { allProducts } from '../data/products';

export default function ProductCatalog({ onSelectProduct, onQuickInquire }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Collections' },
    { id: 'crockery', label: 'Luxury Crockery & Dinnerware' },
    { id: 'appliances', label: 'Electronic Kitchen Appliances' },
    { id: 'drinkware', label: 'Bar & Crystal Glassware' },
    { id: 'cookware', label: 'Cutlery & Fine Cookware' }
  ];

  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="catalog" className="py-16 sm:py-20 bg-gradient-to-b from-[#FAF7F2] to-[#F5EFE6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3E7D3] border border-[#DFCBAE] text-[#7A0F1D] text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#B38728]" />
            <span>Complete Collection</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#271E1B]">
            Curated Fine Crockery & Kitchen Tech
          </h2>

          <p className="text-sm sm:text-base text-[#68594E]">
            From regal 24K gold-trimmed porcelain dinnerware to high-torque smart kitchen appliances, explore bespoke items engineered for longevity and refined taste.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#7A0F1D] text-[#F9EDCF] shadow-md border border-[#7A0F1D]'
                    : 'bg-white/80 hover:bg-white text-[#52443B] border border-[#E3D8C6] hover:border-[#C5A059]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C7D73]" />
            <input 
              type="text"
              placeholder="Search dinner sets, blenders..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full bg-white/90 border border-[#E3D8C6] focus:border-[#7A0F1D] focus:outline-none text-xs sm:text-sm text-[#271E1B] placeholder:text-[#9F9187] shadow-xs"
            />
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl overflow-hidden border border-[#EAE0D1] hover:border-[#D4AF37] transition-all duration-300 shadow-xs hover:shadow-xl group flex flex-col justify-between"
            >
              {/* Product Visual Container */}
              <div className="relative h-60 overflow-hidden bg-[#F7F2EA]">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Badge */}
                {product.badge && (
                  <span className="absolute top-3 left-3 bg-[#7A0F1D]/90 backdrop-blur-xs text-[#F5E6BF] text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full border border-[#D4AF37]/40 shadow-xs">
                    {product.badge}
                  </span>
                )}

                {/* Quick View Hover Button */}
                <button
                  onClick={() => onSelectProduct(product)}
                  className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-semibold"
                >
                  <span className="px-4 py-2 rounded-full bg-[#FAF5EC] text-[#7A0F1D] shadow-lg flex items-center gap-1.5 font-bold hover:bg-white transition-colors">
                    <Eye className="w-3.5 h-3.5 text-[#7A0F1D]" /> Quick Specs
                  </span>
                </button>
              </div>

              {/* Product Info */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-1.5 text-left">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-[#8B7C72]">
                      {product.categoryLabel}
                    </span>
                    <div className="flex items-center gap-1 text-[#C5A059]">
                      <Star className="w-3.5 h-3.5 fill-[#C5A059]" />
                      <span className="text-xs font-bold text-[#3B2F2A]">{product.rating}</span>
                      <span className="text-[10px] text-[#8C7D73]">({product.reviews})</span>
                    </div>
                  </div>

                  <h3 className="font-serif text-base font-bold text-[#2A1E1A] group-hover:text-[#7A0F1D] transition-colors line-clamp-1">
                    {product.name}
                  </h3>

                  <p className="text-xs text-[#6F6055] line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Bottom Row: Price & Actions */}
                <div className="pt-3 border-t border-[#F2EAE0] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] block text-[#8F8177] uppercase font-medium">Starting At</span>
                    <span className="text-base sm:text-lg font-bold text-[#7A0F1D]">{product.price}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onQuickInquire(product)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-[#7A0F1D] bg-[#F9EFE0] hover:bg-[#7A0F1D] hover:text-white transition-colors border border-[#DFCBAE]"
                      title="Direct WhatsApp Quote"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Quote</span>
                    </button>

                    <button
                      onClick={() => onSelectProduct(product)}
                      className="w-8 h-8 rounded-full bg-[#2A1E1A] text-white hover:bg-[#7A0F1D] flex items-center justify-center transition-colors shadow-xs"
                      title="Full Details"
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12 bg-white rounded-3xl border border-[#EBE1D3] p-8">
            <p className="text-[#65554B] text-sm">No items found matching your criteria.</p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="mt-3 text-xs font-semibold text-[#7A0F1D] underline"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
