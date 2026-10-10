import React, { useState } from 'react';
import { buildDirectWhatsAppUrl } from '../utils/whatsapp';

interface HeroSectionProps {
  onScrollToQuote: () => void;
  onScrollToServices: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onScrollToQuote,
  onScrollToServices,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const whatsappUrl = buildDirectWhatsAppUrl('Hello Royalcruise, I would like to request a free quote for my property.');

  return (
    <section id="home" className="w-full relative overflow-hidden bg-[#FAF9F4] py-16 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Content Column */}
        <div className="lg:col-span-7 flex flex-col gap-6 z-10">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF5D6] text-[#B8860B] w-fit shadow-xs">
            <span className="material-symbols-outlined text-[16px] text-[#785a00] fill-icon">
              verified
            </span>
            <span className="text-[13px] font-semibold uppercase tracking-wider text-[#785a00]">
              Royalcruise Cleaning Services
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-[54px] text-[#242820] font-bold leading-[1.18] tracking-tight text-balance">
            Experience the Beauty of a{' '}
            <span className="text-[#B8860B] relative inline-block">
              Truly Clean Space
              <span className="absolute bottom-1 left-0 w-full h-[7px] bg-[#e8b323]/40 -z-10 rounded-full" />
            </span>
            .
          </h1>

          {/* Description */}
          <p className="text-[18px] text-[#626B62] leading-[1.6] max-w-xl">
            From spotless homes to professional workspaces, we help create cleaner, fresher environments with care, precision, and attention to detail.
          </p>

          {/* CTA Action Group */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onScrollToQuote}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-[#e8b323] text-[#242820] font-semibold text-[15px] shadow-md hover:bg-[#F5D778] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">chat</span>
              <span>Get a Free Quote</span>
            </button>

            <button
              onClick={onScrollToServices}
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-[#EAF2EB] text-[#236b45] font-semibold text-[15px] hover:bg-[#a9f3c2]/60 transition-all duration-200 cursor-pointer"
            >
              <span>Explore Our Services</span>
              <span className="material-symbols-outlined text-[18px] ml-1.5">arrow_downward</span>
            </button>
          </div>

          {/* Trust Statement Micro-bar */}
          <div className="flex items-center gap-3 pt-4 border-t border-[#E5E5DC]/80">
            <div className="w-2.5 h-2.5 rounded-full bg-[#236b45] shrink-0" />
            <p className="text-[13px] text-[#626B62] tracking-wide font-medium">
              Reliable Service • Exceptional Standards • Immaculate Results.
            </p>
          </div>
        </div>

        {/* Right Visual Column */}
        <div className="lg:col-span-5 relative">
          <div className="relative mx-auto max-w-[480px] lg:max-w-none">
            {/* Decorative Background Aura */}
            <div className="absolute -top-6 -right-6 w-72 h-72 rounded-full bg-[#FFF5D6] filter blur-3xl opacity-70 pointer-events-none" />
            <div className="absolute -bottom-8 -left-8 w-64 h-64 rounded-full bg-[#EAF2EB] filter blur-2xl opacity-60 pointer-events-none" />

            {/* Main Image Frame */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white p-2.5">
              <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-[#f7ecdd]">
                {/* Fallback placeholder while image loads */}
                {!imageLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-tr from-[#f7ecdd] to-[#fdf2e3]">
                    <div className="text-center p-6">
                      <span className="material-symbols-outlined text-4xl text-[#785a00]/40 animate-pulse">
                        cleaning_services
                      </span>
                    </div>
                  </div>
                )}

                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCx9N3kE2xShv2FQxH0ItwQgzSkqzuOdfGK_O3BisSEJt_0XqukJI4LttNw6uoExnn8onv10H4U1UqKha3hKtr8RuRxMzs015eFnARSxADygcu29FJCbi89McdZZX-rAqoP269PGnArOThIXQL4sijwUw9C01zcnnq-Ls5unO48RmncJz7qw44RpfDeSS5okd76eKDEIEpTIk9JY2Gb8p79sy6xCOjf4BgQMv1aTexRnW6vnn87Ia4hnw"
                  alt="A cheerful Black African female professional cleaner wearing an elegant dark green apron with gold embroidery, holding eco-safe cleaning supplies inside a bright sunlit luxury apartment living room with modern ivory and natural wood furnishings"
                  className={`w-full h-full object-cover transition-opacity duration-500 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => setImageLoaded(true)}
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Floating Badge 1: 100% Satisfaction Standard */}
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-lg flex items-center gap-3 border border-white/60">
                <div className="w-9 h-9 rounded-full bg-[#FFF5D6] flex items-center justify-center text-[#B8860B] shrink-0">
                  <span className="material-symbols-outlined text-[20px] fill-icon">
                    workspace_premium
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[13px] font-bold text-[#242820] leading-tight">
                    100% Satisfaction
                  </span>
                  <span className="text-[11px] text-[#626B62]">
                    Standard Guaranteed
                  </span>
                </div>
              </div>

              {/* Floating Badge 2: Eco-Friendly Supplies */}
              <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-lg flex items-center gap-3 border border-white/60">
                <div className="w-9 h-9 rounded-full bg-[#EAF2EB] flex items-center justify-center text-[#236b45] shrink-0">
                  <span className="material-symbols-outlined text-[20px] fill-icon">
                    eco
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[13px] font-bold text-[#242820] leading-tight">
                    Eco-Friendly
                  </span>
                  <span className="text-[11px] text-[#626B62]">
                    Family & Pet Safe
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
