import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/cleaningData';
import { ServiceItem } from '../types';
import { buildDirectWhatsAppUrl } from '../utils/whatsapp';

interface ServicesSectionProps {
  onSelectServiceForQuote: (serviceTitle: string) => void;
  onOpenServiceDetails: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForQuote,
  onOpenServiceDetails,
}) => {
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  const handleImageLoad = (id: string) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="services-section" className="w-full py-20 lg:py-28 bg-[#fff8f2]">
      <div className="max-w-[1280px] mx-auto px-6 flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto gap-3">
          <span className="text-[13px] font-bold uppercase tracking-widest text-[#236b45]">
            What We Offer
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl text-[#242820] font-bold">
            Premium Cleaning Tailored to Your Needs
          </h2>
          <p className="text-[16px] text-[#626B62] leading-relaxed">
            Whether you need routine home hygiene, high-standard executive office care, or comprehensive relocation readiness, our expert crew has you covered.
          </p>
        </div>

        {/* Services 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((service) => {
            const whatsappUrl = buildDirectWhatsAppUrl(service.whatsappMessage);
            const isLoaded = loadedImages[service.id];

            return (
              <div
                key={service.id}
                className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-xl border border-[#E5E5DC]/60 transition-all duration-300 group hover:-translate-y-1"
              >
                {/* Image Frame */}
                <div className="relative h-48 overflow-hidden bg-[#f7ecdd]">
                  {!isLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-[#f7ecdd]">
                      <span className="material-symbols-outlined text-[#785a00]/30 animate-pulse text-3xl">
                        cleaning_services
                      </span>
                    </div>
                  )}
                  <img
                    src={service.image}
                    alt={service.altText}
                    className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                      isLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={() => handleImageLoad(service.id)}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-md text-[12px] font-semibold text-[#236b45] shadow-xs">
                    {service.category}
                  </div>

                  {/* Checklist peek button */}
                  <button
                    onClick={() => onOpenServiceDetails(service)}
                    className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white/95 hover:bg-white text-[#242820] text-[12px] font-semibold px-2.5 py-1 rounded-md shadow-md flex items-center gap-1 cursor-pointer"
                    title="View service scope & checklist"
                  >
                    <span>Scope</span>
                    <span className="material-symbols-outlined text-[14px]">checklist</span>
                  </button>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow justify-between gap-4">
                  <div>
                    <h3 className="font-heading text-[20px] font-bold text-[#242820] mb-2 leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-[13px] text-[#626B62] leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Action links */}
                  <div className="flex flex-col gap-2 pt-3 border-t border-[#E5E5DC]/70">
                    <div className="flex items-center justify-between">
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[#236b45] hover:text-[#17452F] text-[14px] font-semibold transition-colors group/link"
                      >
                        <span>Inquire on WhatsApp</span>
                        <span className="material-symbols-outlined text-[18px] group-hover/link:translate-x-1 transition-transform">
                          arrow_forward
                        </span>
                      </a>

                      <button
                        onClick={() => onSelectServiceForQuote(service.title)}
                        className="text-[12px] font-semibold text-[#785a00] hover:text-[#5f4700] underline underline-offset-2 cursor-pointer"
                        title="Calculate custom quote for this service"
                      >
                        Quote
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
