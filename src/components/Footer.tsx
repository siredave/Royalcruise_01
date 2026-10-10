import React from 'react';
import { buildDirectWhatsAppUrl } from '../utils/whatsapp';

interface FooterProps {
  onScrollTo: (id: string) => void;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onScrollTo,
  onOpenPrivacy,
  onOpenTerms,
}) => {
  const whatsappUrl = buildDirectWhatsAppUrl(
    'Hello Royalcruise, I am contacting you through your website footer.'
  );

  return (
    <footer className="w-full bg-[#17452F] text-white">
      <div className="w-full max-w-[1280px] mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-2 flex flex-col gap-4 pr-0 lg:pr-6">
            <div className="flex items-center gap-3">
              <img
                src="https://lh3.googleusercontent.com/aida/AEtjO1WtLzvguGT5d9USfggFhH3SUATUtLSftzlKGu_pgcHmWS6HMCOf3OFfsw7Fkiz3JMlw1nlqIO1Hpl0DYNNJ3qxetuuXj-z3xdF_qiok_RKLYDxFD-wav1JBki2tR2mZuFtDWGvAACMDXZPXaV54NskbztRbRO9CZhDb6HqJWlKDNSfYXKtFXo2tkX_8F22WfB6WDrQyxdOqgjhAghL7L3XEvulrViMm4pY0UcFG1AQXewICfDrjiSZi90o"
                alt="Royalcruise Cleaning Services Logo"
                className="h-9 w-auto object-contain bg-white rounded-md p-1"
              />
              <span className="font-heading text-2xl text-white font-bold tracking-tight">
                Royalcruise
              </span>
            </div>

            <p className="text-[15px] text-white/80 max-w-sm leading-relaxed">
              Refined, professional, and reliable property care. Delivering immaculate residential, corporate, and specialized deep cleaning solutions with guaranteed peace of mind.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="text-[12px] uppercase tracking-wider text-[#F5D778] font-semibold">
                Direct WhatsApp Care:
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#236b45] text-white">
                Instant Response
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <span className="font-heading text-[18px] text-[#F5D778] font-bold mb-1">
              Quick Links
            </span>
            <nav className="flex flex-col gap-2.5">
              <button
                onClick={() => onScrollTo('home')}
                className="text-left text-[14px] text-white/80 hover:text-[#F5D778] transition-colors cursor-pointer"
              >
                Home
              </button>
              <button
                onClick={() => onScrollTo('about-section')}
                className="text-left text-[14px] text-white/80 hover:text-[#F5D778] transition-colors cursor-pointer"
              >
                About Us
              </button>
              <button
                onClick={() => onScrollTo('why-us-section')}
                className="text-left text-[14px] text-white/80 hover:text-[#F5D778] transition-colors cursor-pointer"
              >
                Why Us
              </button>
              <button
                onClick={() => onScrollTo('process-section')}
                className="text-left text-[14px] text-white/80 hover:text-[#F5D778] transition-colors cursor-pointer"
              >
                How It Works
              </button>
              <button
                onClick={() => onScrollTo('reviews-section')}
                className="text-left text-[14px] text-white/80 hover:text-[#F5D778] transition-colors cursor-pointer"
              >
                Customer Reviews
              </button>
              <button
                onClick={() => onScrollTo('faqs-section')}
                className="text-left text-[14px] text-white/80 hover:text-[#F5D778] transition-colors cursor-pointer"
              >
                FAQs
              </button>
            </nav>
          </div>

          {/* Services Links */}
          <div className="flex flex-col gap-3">
            <span className="font-heading text-[18px] text-[#F5D778] font-bold mb-1">
              Services
            </span>
            <nav className="flex flex-col gap-2.5">
              <button
                onClick={() => onScrollTo('services-section')}
                className="text-left text-[14px] text-white/80 hover:text-[#F5D778] transition-colors cursor-pointer"
              >
                Office Cleaning
              </button>
              <button
                onClick={() => onScrollTo('services-section')}
                className="text-left text-[14px] text-white/80 hover:text-[#F5D778] transition-colors cursor-pointer"
              >
                House Cleaning
              </button>
              <button
                onClick={() => onScrollTo('services-section')}
                className="text-left text-[14px] text-white/80 hover:text-[#F5D778] transition-colors cursor-pointer"
              >
                Relocation Cleaning
              </button>
              <button
                onClick={() => onScrollTo('services-section')}
                className="text-left text-[14px] text-white/80 hover:text-[#F5D778] transition-colors cursor-pointer"
              >
                Deep Cleaning
              </button>
            </nav>
          </div>

          {/* Contact & Connect */}
          <div className="flex flex-col gap-3">
            <span className="font-heading text-[18px] text-[#F5D778] font-bold mb-1">
              Contact & Connect
            </span>
            <div className="flex flex-col gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/10 group"
              >
                <span className="material-symbols-outlined text-[#F5D778] text-[24px]">
                  chat
                </span>
                <div className="flex flex-col text-left">
                  <span className="text-[12px] text-white/60">Chat Directly</span>
                  <span className="text-[14px] text-white font-medium group-hover:text-[#F5D778] transition-colors">
                    WhatsApp Line
                  </span>
                </div>
              </a>

              <div className="flex items-start gap-2.5 text-white/80 pt-1">
                <span className="material-symbols-outlined text-[20px] text-[#F5D778] mt-0.5 shrink-0">
                  schedule
                </span>
                <span className="text-[13px] leading-relaxed">
                  Monday – Saturday: 7:00 AM – 7:00 PM
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-white/60">
          <p>© 2025 Royalcruise Cleaning Services. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-[#F5D778] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={onOpenTerms}
              className="hover:text-[#F5D778] transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
