import React from 'react';
import { TESTIMONIALS_DATA } from '../data/cleaningData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews-section" className="w-full py-20 lg:py-28 bg-[#FAF9F4]">
      <div className="max-w-[1280px] mx-auto px-6 flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto gap-3">
          <span className="text-[13px] font-bold uppercase tracking-widest text-[#236b45]">
            Customer Experience
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl text-[#242820] font-bold">
            What Our Customers Say
          </h2>
          <p className="text-[16px] text-[#626B62] leading-relaxed">
            We value every customer experience. Here's a collection of feedback about our cleaning services.
          </p>
        </div>

        {/* Feedback Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((item) => {
            const isGold = item.accentColor === 'gold';
            return (
              <div
                key={item.id}
                className={`bg-white p-8 rounded-2xl shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between gap-6 border-t-4 ${
                  isGold ? 'border-t-[#e8b323]' : 'border-t-[#236b45]'
                } border-x border-b border-[#E5E5DC]/60`}
              >
                <div className="flex flex-col gap-4">
                  <span
                    className={`material-symbols-outlined text-[36px] fill-icon ${
                      isGold ? 'text-[#B8860B]' : 'text-[#236b45]'
                    }`}
                  >
                    format_quote
                  </span>
                  <p className="text-[16px] text-[#242820] italic leading-relaxed">
                    “{item.quote}”
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E5E5DC] flex items-center justify-between">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#EAF2EB] text-[#236b45] text-[13px] font-semibold">
                    {item.service}
                  </span>
                  <span className="text-[12px] text-[#626B62] font-medium">
                    Verified Service
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
