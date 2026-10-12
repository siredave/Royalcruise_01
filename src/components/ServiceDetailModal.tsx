import React from 'react';
import { ServiceItem } from '../types';
import { buildDirectWhatsAppUrl } from '../utils/whatsapp';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectForQuote: (title: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onSelectForQuote,
}) => {
  if (!service) return null;

  const whatsappUrl = buildDirectWhatsAppUrl(
    `Hello Royale cruize, I am interested in detailed booking for ${service.title}.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#E5E5DC] animate-in zoom-in-95 duration-200">
        {/* Header image banner */}
        <div className="relative h-48 w-full bg-[#f7ecdd]">
          <img
            src={service.image}
            alt={service.altText}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-[#242820] flex items-center justify-center shadow-md transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
          <div className="absolute bottom-4 left-6 right-6">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#EAF2EB] text-[#236b45] inline-block mb-1">
              {service.category}
            </span>
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-white leading-tight">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 flex flex-col gap-5 max-h-[60vh] overflow-y-auto">
          <div>
            <h4 className="text-[13px] font-bold uppercase tracking-wider text-[#785a00] mb-1">
              Service Scope
            </h4>
            <p className="text-[14px] text-[#626B62] leading-relaxed">
              {service.description}
            </p>
          </div>

          <div>
            <h4 className="text-[13px] font-bold uppercase tracking-wider text-[#236b45] mb-2">
              What's Included in This Package
            </h4>
            <ul className="flex flex-col gap-2">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-[14px] text-[#242820]">
                  <span className="material-symbols-outlined text-[18px] text-[#236b45] shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#FAF9F4] border border-[#E5E5DC]">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[20px] text-[#785a00]">
                schedule
              </span>
              <span className="text-[13px] text-[#626B62]">Typical Duration:</span>
            </div>
            <span className="text-[13px] font-bold text-[#242820]">
              {service.durationEstimate}
            </span>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-6 pt-3 border-t border-[#E5E5DC] bg-white flex flex-col sm:flex-row items-center gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-[#236b45] text-white text-center font-semibold text-[14px] shadow-sm hover:bg-[#17452F] flex items-center justify-center gap-2 transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">chat</span>
            <span>Book via WhatsApp</span>
          </a>

          <button
            onClick={() => {
              onClose();
              onSelectForQuote(service.title);
            }}
            className="w-full sm:w-auto py-3 px-4 rounded-xl bg-[#FAF9F4] border border-[#E5E5DC] text-[#242820] hover:bg-[#EAF2EB] font-semibold text-[14px] transition-colors cursor-pointer"
          >
            Calculate Quote
          </button>
        </div>
      </div>
    </div>
  );
};
