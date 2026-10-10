import React, { useState } from 'react';
import { FAQS_DATA } from '../data/cleaningData';

export const FaqSection: React.FC = () => {
  // First FAQ open by default for immediate preview
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'services' | 'booking' | 'pricing'>('all');

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const filteredFaqs = FAQS_DATA.filter((faq) => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="faqs-section" className="w-full py-20 lg:py-28 bg-[#fff8f2]">
      <div className="max-w-[900px] mx-auto px-6 flex flex-col gap-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-3">
          <span className="text-[13px] font-bold uppercase tracking-widest text-[#236b45]">
            Got Questions?
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl text-[#242820] font-bold">
            Frequently Asked Questions
          </h2>
          <p className="text-[16px] text-[#626B62] leading-relaxed">
            Clear answers about how we service your residential and commercial properties.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-2.5 rounded-2xl border border-[#E5E5DC] shadow-xs">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
            {(
              [
                { id: 'all', label: 'All FAQs' },
                { id: 'services', label: 'Services' },
                { id: 'booking', label: 'Booking' },
                { id: 'pricing', label: 'Pricing' },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-3.5 py-1.5 rounded-lg text-[13px] font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === tab.id
                    ? 'bg-[#EAF2EB] text-[#236b45]'
                    : 'text-[#626B62] hover:text-[#242820] hover:bg-[#FAF9F4]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative w-full sm:w-64">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[18px] text-[#626B62]">
              search
            </span>
            <input
              type="text"
              placeholder="Search answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-[14px] bg-[#FAF9F4] rounded-lg border border-[#E5E5DC] focus:outline-none focus:ring-2 focus:ring-[#236b45]/30 text-[#242820]"
            />
          </div>
        </div>

        {/* Accordion Container */}
        <div className="flex flex-col gap-3">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-xl border border-[#E5E5DC] text-[#626B62]">
              <span className="material-symbols-outlined text-3xl mb-2 text-[#785a00]">info</span>
              <p>No questions matched your search query. Try another term or reach out on WhatsApp.</p>
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-xl shadow-xs border border-[#E5E5DC]/70 overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 font-semibold text-[17px] text-[#242820] hover:text-[#236b45] transition-colors focus:outline-none cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <span
                      className={`material-symbols-outlined text-[#236b45] shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : 'rotate-0'
                      }`}
                    >
                      expand_more
                    </span>
                  </button>

                  <div
                    className={`transition-all duration-300 ease-in-out px-5 overflow-hidden text-[#626B62] text-[15px] leading-relaxed ${
                      isOpen ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 pb-0 opacity-0'
                    }`}
                  >
                    <p>{faq.answer}</p>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};
