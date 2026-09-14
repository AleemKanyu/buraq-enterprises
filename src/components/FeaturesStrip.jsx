import React from 'react';
import { Sparkles, Cpu, ShieldCheck, Truck } from 'lucide-react';
import { brandFeatures } from '../data/features';

const iconMap = {
  Sparkles: Sparkles,
  Cpu: Cpu,
  ShieldCheck: ShieldCheck,
  Truck: Truck,
};

export default function FeaturesStrip() {
  return (
    <section className="py-10 border-y border-[#E9DECD] bg-[#FAF6EE]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Strictly Seamless 4-Column Feature Strip (No 3-Box Containers!) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {brandFeatures.map((item) => {
            const IconComponent = iconMap[item.icon] || Sparkles;
            return (
              <div 
                key={item.id} 
                className="flex items-start gap-4 text-left group"
              >
                {/* Minimalist Round Golden Accent Icon */}
                <div className="flex-shrink-0 w-11 h-11 rounded-full bg-gradient-to-br from-[#F5EAD4] to-[#E9D5B4] border border-[#DFC8A4] flex items-center justify-center text-[#7A0F1D] shadow-xs group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-5 h-5 text-[#800C1B]" />
                </div>
                
                {/* Title & Understated Subtext */}
                <div className="space-y-1">
                  <h3 className="text-sm sm:text-base font-semibold text-[#271E1B] group-hover:text-[#7A0F1D] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[#6E6056] leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
