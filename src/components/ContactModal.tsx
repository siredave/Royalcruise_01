import React from 'react';
import { buildDirectWhatsAppUrl } from '../utils/whatsapp';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  onScrollToQuote: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  onScrollToQuote,
}) => {
  if (!isOpen) return null;

  const whatsappUrl = buildDirectWhatsAppUrl('Hello Royalcruise, I would like to get in touch with your team.');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-[#E5E5DC] animate-in zoom-in-95 duration-200 flex flex-col gap-5">
        <div className="flex items-center justify-between pb-3 border-b border-[#E5E5DC]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#EAF2EB] text-[#236b45] flex items-center justify-center">
              <span className="material-symbols-outlined text-[20px]">support_agent</span>
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold text-[#242820]">Royalcruise Direct Care</h3>
              <p className="text-[12px] text-[#626B62]">Available Mon – Sat, 7am – 7pm</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-[#626B62] hover:bg-[#FAF9F4]"
            aria-label="Close contact dialog"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <div className="flex flex-col gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3.5 rounded-xl bg-[#EAF2EB] hover:bg-[#a9f3c2]/60 text-[#236b45] transition-colors"
          >
            <span className="material-symbols-outlined text-[24px]">chat</span>
            <div className="flex flex-col">
              <span className="text-[14px] font-bold">Official WhatsApp Channel</span>
              <span className="text-[12px] text-[#626B62]">Instant response & booking coordinator</span>
            </div>
          </a>

          <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#FAF9F4] border border-[#E5E5DC]">
            <span className="material-symbols-outlined text-[#785a00] text-[24px]">location_on</span>
            <div className="flex flex-col">
              <span className="text-[14px] font-bold text-[#242820]">Coverage Areas</span>
              <span className="text-[12px] text-[#626B62]">Residential & Corporate Hubs nationwide</span>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#FAF9F4] border border-[#E5E5DC]">
            <span className="material-symbols-outlined text-[#785a00] text-[24px]">schedule</span>
            <div className="flex flex-col">
              <span className="text-[14px] font-bold text-[#242820]">Operating Hours</span>
              <span className="text-[12px] text-[#626B62]">Monday – Saturday: 7:00 AM – 7:00 PM</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end gap-2 pt-2 border-t border-[#E5E5DC]">
          <button
            onClick={() => {
              onClose();
              onScrollToQuote();
            }}
            className="w-full py-2.5 px-4 rounded-xl bg-[#e8b323] hover:bg-[#F5D778] text-[#242820] font-semibold text-[14px] transition-colors cursor-pointer text-center"
          >
            Use Online Quote Assistant
          </button>
        </div>
      </div>
    </div>
  );
};
