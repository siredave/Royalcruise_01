import React from 'react';
import { PROCESS_STEPS } from '../data/cleaningData';

export const ProcessSection: React.FC = () => {
  return (
    <section id="process-section" className="w-full py-20 lg:py-28 bg-[#fff8f2]">
      <div className="max-w-[1280px] mx-auto px-6 flex flex-col gap-14">
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto gap-3">
          <span className="text-[13px] font-bold uppercase tracking-widest text-[#236b45]">
            Our Process
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl text-[#242820] font-bold">
            Simple, Seamless Experience
          </h2>
          <p className="text-[16px] text-[#626B62] leading-relaxed">
            Direct WhatsApp coordination makes booking effortless without confusing forms or unexpected delays.
          </p>
        </div>

        {/* 4-step Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-7 left-12 right-12 h-0.5 bg-[#E5E5DC] z-0" />

          {PROCESS_STEPS.map((step) => (
            <div
              key={step.step}
              className="flex flex-col items-start gap-4 relative z-10 group"
            >
              <div
                className={`w-14 h-14 rounded-full ${step.colorClass} font-heading text-[20px] font-bold flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-200 shrink-0`}
              >
                {step.step}
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-heading text-[19px] font-bold text-[#242820]">
                  {step.title}
                </h3>
                <p className="text-[13px] text-[#626B62] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
