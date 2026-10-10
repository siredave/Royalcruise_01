import React from 'react';
import { WHY_CHOOSE_US_ITEMS } from '../data/cleaningData';

export const WhyChooseUsSection: React.FC = () => {
  return (
    <section id="why-us-section" className="w-full py-20 bg-[#17452F] text-white">
      <div className="max-w-[1280px] mx-auto px-6 flex flex-col gap-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-3 max-w-xl">
            <span className="text-[13px] font-bold uppercase tracking-widest text-[#F5D778]">
              Why Choose Us
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl text-white font-bold leading-tight">
              The Difference Is in the Details.
            </h2>
          </div>
          <p className="text-[16px] text-white/80 max-w-md leading-relaxed">
            We combine methodical cleaning checklists with responsive customer care to guarantee effortless reliability every single time.
          </p>
        </div>

        {/* 4 Core Benefits Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US_ITEMS.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-xs border border-white/10 flex flex-col gap-4 hover:bg-white/10 transition-colors duration-200"
            >
              <span className="material-symbols-outlined text-[#F5D778] text-[32px]">
                {item.icon}
              </span>
              <h3 className="font-heading text-[20px] font-bold text-white leading-snug">
                {item.title}
              </h3>
              <p className="text-[13px] text-white/70 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
