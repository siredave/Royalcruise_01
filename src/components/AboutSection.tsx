import React, { useState } from 'react';
import { ABOUT_PRINCIPLES } from '../data/cleaningData';

export const AboutSection: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section id="about-section" className="w-full py-20 lg:py-28 bg-[#FAF9F4]">
      <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Visual Column */}
        <div className="lg:col-span-5 relative order-2 lg:order-1">
          <div className="relative rounded-2xl overflow-hidden shadow-xl bg-white p-3">
            <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-[#f7ecdd]">
              {!imageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-[#f7ecdd]">
                  <span className="material-symbols-outlined text-[#785a00]/30 animate-pulse text-4xl">
                    cleaning_services
                  </span>
                </div>
              )}
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzGeaMFzMV4MEQTNP-jpZHQNRENdUyguvWDpvv4cUNYTHbbWzLaZEzaO8yhGDCaE8e63hFtKClK6937-YW3UgXEga4zksK0B0zQIJ6_eXJhRgaiNrYcLNj5RYb1rTqEU_Hco9WbgUt8mSCZNGjjMCwz_Cv3LGynHxOiVZsVbJ8QfApQwwWuWsHEK54K74dJLLThCcBx5kluEKvmhNaLFh4O9TSHxg0HcpDkaC7ppjS2g6mEWM1SN0Oaw"
                alt="Black African professional cleaner with a friendly warm smile holding microfiber cloths and specialized cleaning spray in an organized upscale kitchen setting"
                className={`w-full h-full object-cover transition-opacity duration-500 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => setImageLoaded(true)}
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Decorative Stamp */}
            <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-[#17452F] text-white rounded-full flex flex-col items-center justify-center p-3 text-center shadow-xl border-2 border-white">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#F5D778]">
                Excellence
              </span>
              <span className="font-heading text-[18px] font-extrabold leading-tight">
                Since Day 1
              </span>
            </div>
          </div>
        </div>

        {/* Narrative Column */}
        <div className="lg:col-span-7 flex flex-col gap-6 order-1 lg:order-2">
          <span className="text-[13px] font-bold uppercase tracking-widest text-[#236b45]">
            About Royalcruise
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl text-[#242820] font-bold leading-tight">
            A Higher Standard of Clean.
          </h2>
          <p className="text-[18px] text-[#626B62] leading-relaxed">
            At Royalcruise Cleaning Services, we believe a clean environment creates comfort, confidence, and peace of mind. Our approach focuses on dependable service, attention to detail, and creating spaces our customers can feel proud of.
          </p>

          {/* Principles List */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-4">
            {ABOUT_PRINCIPLES.map((principle, index) => (
              <div
                key={index}
                className="flex flex-col gap-2.5 p-5 rounded-xl bg-white shadow-xs border border-[#E5E5DC]/60 hover:shadow-md transition-shadow duration-200"
              >
                <div
                  className={`w-10 h-10 rounded-lg ${principle.bg} ${principle.text} flex items-center justify-center shrink-0`}
                >
                  <span className="material-symbols-outlined text-[22px]">
                    {principle.icon}
                  </span>
                </div>
                <h3 className="text-[15px] font-bold text-[#242820] leading-snug">
                  {principle.title}
                </h3>
                <p className="text-[13px] text-[#626B62] leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
