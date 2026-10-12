import React from 'react';
import { buildDirectWhatsAppUrl } from '../utils/whatsapp';

export const CtaSection: React.FC = () => {
  const whatsappUrl = buildDirectWhatsAppUrl(
    'Hello Royale cruize, I am ready to experience a cleaner space. Let\'s discuss my service requirements.'
  );

  return (
    <section className="w-full py-20 bg-[#17452F] text-white relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-[#B8860B]/20 filter blur-3xl pointer-events-none" />
      <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full bg-[#236b45]/30 filter blur-2xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 text-center flex flex-col items-center gap-6 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#F5D778] text-[13px] font-semibold uppercase tracking-wider backdrop-blur-xs">
          <span className="material-symbols-outlined text-[16px]">cleaning_services</span>
          <span>Ready for a Transformation?</span>
        </div>

        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-white font-bold max-w-2xl text-balance">
          Ready to Experience a Cleaner Space?
        </h2>

        <p className="text-[18px] text-white/80 max-w-xl leading-relaxed">
          Tell us what your space needs, and let’s discuss the right cleaning service for you.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#e8b323] text-[#242820] font-bold text-[16px] shadow-xl hover:bg-[#F5D778] transition-all hover:scale-105 active:scale-95"
          >
            <span className="material-symbols-outlined text-[24px]">chat</span>
            <span>Chat With Us on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
