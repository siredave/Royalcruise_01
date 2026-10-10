import React, { useState } from 'react';
import { buildDirectWhatsAppUrl } from '../utils/whatsapp';

interface FloatingWhatsAppProps {
  onScrollToQuote: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onScrollToQuote }) => {
  const [showQuickCard, setShowQuickCard] = useState(false);
  const defaultWhatsappUrl = buildDirectWhatsAppUrl('Hello Royalcruise, I would like to chat with a cleaning specialist.');

  return (
    <aside className="fixed bottom-6 right-6 z-50 flex items-end flex-col gap-3">
      {/* Quick Action Popup */}
      {showQuickCard && (
        <div className="bg-white rounded-2xl shadow-2xl border border-[#E5E5DC] p-4 w-72 mb-2 animate-in fade-in slide-in-from-bottom-4 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-[#E5E5DC]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#236b45] animate-pulse" />
              <span className="text-[14px] font-bold text-[#242820]">Royalcruise Support</span>
            </div>
            <button
              onClick={() => setShowQuickCard(false)}
              className="text-[#626B62] hover:text-[#242820] text-sm"
              aria-label="Close support popup"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          </div>

          <p className="text-[13px] text-[#626B62] my-3 leading-relaxed">
            Need an instant response? Connect directly with our team on WhatsApp.
          </p>

          <div className="flex flex-col gap-2">
            <a
              href={defaultWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#236b45] text-white text-[13px] font-semibold hover:bg-[#17452F] transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              <span>Open WhatsApp Chat</span>
            </a>

            <button
              onClick={() => {
                setShowQuickCard(false);
                onScrollToQuote();
              }}
              className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-[#FAF9F4] text-[#242820] text-[13px] font-semibold hover:bg-[#EAF2EB] transition-colors border border-[#E5E5DC]"
            >
              <span className="material-symbols-outlined text-[16px]">calculate</span>
              <span>Calculate Quote Online</span>
            </button>
          </div>
        </div>
      )}

      {/* Floating Button with Tooltip */}
      <div className="flex items-center gap-2 group">
        <div className="hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none bg-[#353026] text-[#faefe0] text-[13px] px-3.5 py-1.5 rounded-lg shadow-lg whitespace-nowrap">
          Chat with Royalcruise on WhatsApp
        </div>

        <button
          onClick={() => setShowQuickCard(!showQuickCard)}
          aria-label="Chat with Royalcruise on WhatsApp"
          className="w-14 h-14 rounded-full bg-[#236b45] hover:bg-[#17452F] text-white flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-transform cursor-pointer relative"
        >
          <span className="material-symbols-outlined text-[30px]">chat</span>
          <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-[#F5D778] border-2 border-white rounded-full" />
        </button>
      </div>
    </aside>
  );
};
