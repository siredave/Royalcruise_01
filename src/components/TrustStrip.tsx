import React from 'react';
import { TRUST_PILLARS } from '../data/cleaningData';

export const TrustStrip: React.FC = () => {
  return (
    <section className="w-full bg-[#FAF9F4] border-y border-[#E5E5DC] py-8">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {TRUST_PILLARS.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3.5 group hover:-translate-y-0.5 transition-transform duration-200"
            >
              <div className="w-12 h-12 rounded-xl bg-[#EAF2EB] text-[#236b45] group-hover:bg-[#a9f3c2] flex items-center justify-center shrink-0 shadow-xs transition-colors duration-200">
                <span className="material-symbols-outlined text-[24px]">
                  {item.icon}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[15px] font-bold text-[#242820] leading-tight">
                  {item.title}
                </span>
                <span className="text-[13px] text-[#626B62]">
                  {item.subtitle}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
