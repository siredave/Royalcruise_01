import React, { useState } from 'react';
import { QuoteFormData } from '../types';
import {
  ADDON_PRICES,
  buildWhatsAppQuoteUrl,
  calculateEstimatedQuote,
} from '../utils/whatsapp';

interface QuoteCalculatorSectionProps {
  initialService?: string;
}

export const QuoteCalculatorSection: React.FC<QuoteCalculatorSectionProps> = ({
  initialService = 'Residential House Cleaning',
}) => {
  const [service, setService] = useState<string>(initialService);
  const [propertyType, setPropertyType] = useState<string>('1-2 Bedroom Apartment');
  const [location, setLocation] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [frequency, setFrequency] = useState<'one-time' | 'weekly' | 'bi-weekly' | 'monthly'>('one-time');
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [notes, setNotes] = useState<string>('');
  const [copiedNotification, setCopiedNotification] = useState<boolean>(false);

  const toggleAddon = (addon: string) => {
    setSelectedAddons((prev) =>
      prev.includes(addon) ? prev.filter((a) => a !== addon) : [...prev, addon]
    );
  };

  const currentFormData: QuoteFormData = {
    service,
    propertyType,
    location,
    date,
    frequency,
    addons: selectedAddons,
    notes,
  };

  const estimate = calculateEstimatedQuote(currentFormData);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = buildWhatsAppQuoteUrl(currentFormData);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleCopySummary = () => {
    const lines = [
      'Royalcruise Cleaning Services Quote Summary',
      `Service: ${service}`,
      `Property: ${propertyType}`,
      `Location: ${location || 'To be specified'}`,
      `Preferred Date: ${date || 'Flexible'}`,
      `Frequency: ${frequency.toUpperCase()}`,
      selectedAddons.length ? `Add-ons: ${selectedAddons.join(', ')}` : '',
      notes ? `Notes: ${notes}` : '',
      `Estimated Range: ₦${estimate.min.toLocaleString()} – ₦${estimate.max.toLocaleString()}`
    ].filter(Boolean).join('\n');

    navigator.clipboard.writeText(lines).then(() => {
      setCopiedNotification(true);
      setTimeout(() => setCopiedNotification(false), 3000);
    });
  };

  return (
    <section id="quote-section" className="w-full py-20 lg:py-24 bg-[#FAF9F4]">
      <div className="max-w-[880px] mx-auto px-6">
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl border border-[#E5E5DC]">
          {/* Header */}
          <div className="flex flex-col gap-2 mb-8 text-center">
            <div className="inline-flex items-center gap-1.5 justify-center text-[#236b45] text-[13px] font-semibold uppercase tracking-wider">
              <span className="material-symbols-outlined text-[18px]">calculate</span>
              <span>Interactive Quote Assistant</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#242820]">
              Plan Your Cleaning on WhatsApp
            </h2>
            <p className="text-[16px] text-[#626B62]">
              Fill in your service needs below and initiate a prefilled WhatsApp inquiry with a single click.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Service Selection */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="quote-service"
                  className="text-[14px] font-semibold text-[#242820]"
                >
                  Select Service
                </label>
                <select
                  id="quote-service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-[#fff8f2] border border-[#E5E5DC] text-[#242820] text-[15px] focus:outline-none focus:ring-2 focus:ring-[#236b45]/40 transition-colors"
                >
                  <option value="Residential House Cleaning">Residential House Cleaning</option>
                  <option value="Office & Commercial Cleaning">Office & Commercial Cleaning</option>
                  <option value="Relocation Move-In/Out Cleaning">Relocation Move-In/Out Cleaning</option>
                  <option value="Specialized Deep Cleaning">Specialized Deep Cleaning</option>
                </select>
              </div>

              {/* Property Type */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="quote-property"
                  className="text-[14px] font-semibold text-[#242820]"
                >
                  Property Type / Size
                </label>
                <select
                  id="quote-property"
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-[#fff8f2] border border-[#E5E5DC] text-[#242820] text-[15px] focus:outline-none focus:ring-2 focus:ring-[#236b45]/40 transition-colors"
                >
                  <option value="1-2 Bedroom Apartment">1-2 Bedroom Apartment</option>
                  <option value="3-4 Bedroom House">3-4 Bedroom House</option>
                  <option value="5+ Bedroom Duplex / Villa">5+ Bedroom Duplex / Villa</option>
                  <option value="Small Office (Up to 10 Desks)">Small Office (Up to 10 Desks)</option>
                  <option value="Medium to Large Corporate Space">Medium to Large Corporate Space</option>
                </select>
              </div>

              {/* Location */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="quote-location"
                  className="text-[14px] font-semibold text-[#242820]"
                >
                  Location / Area
                </label>
                <input
                  id="quote-location"
                  type="text"
                  placeholder="e.g. Victoria Island, Lekki, Ikeja"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-[#fff8f2] border border-[#E5E5DC] text-[#242820] text-[15px] placeholder:text-[#626B62]/60 focus:outline-none focus:ring-2 focus:ring-[#236b45]/40 transition-colors"
                />
              </div>

              {/* Preferred Date */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="quote-date"
                  className="text-[14px] font-semibold text-[#242820]"
                >
                  Preferred Date / Timing
                </label>
                <input
                  id="quote-date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-[#fff8f2] border border-[#E5E5DC] text-[#242820] text-[15px] focus:outline-none focus:ring-2 focus:ring-[#236b45]/40 transition-colors"
                />
              </div>
            </div>

            {/* Cleaning Frequency */}
            <div className="flex flex-col gap-2 pt-1">
              <label className="text-[14px] font-semibold text-[#242820] flex items-center justify-between">
                <span>Cleaning Frequency</span>
                {frequency !== 'one-time' && (
                  <span className="text-[12px] font-bold text-[#236b45] bg-[#EAF2EB] px-2 py-0.5 rounded-md">
                    {frequency === 'weekly' ? '15% Off Applied' : frequency === 'bi-weekly' ? '10% Off Applied' : '5% Off Applied'}
                  </span>
                )}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {(
                  [
                    { id: 'one-time', label: 'One-Time', tag: 'Standard' },
                    { id: 'monthly', label: 'Monthly', tag: 'Save 5%' },
                    { id: 'bi-weekly', label: 'Bi-Weekly', tag: 'Save 10%' },
                    { id: 'weekly', label: 'Weekly', tag: 'Save 15%' },
                  ] as const
                ).map((f) => (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => setFrequency(f.id)}
                    className={`p-3 rounded-xl border text-left flex flex-col gap-0.5 transition-all cursor-pointer ${
                      frequency === f.id
                        ? 'border-[#236b45] bg-[#EAF2EB] shadow-xs'
                        : 'border-[#E5E5DC] bg-[#fff8f2] hover:border-[#236b45]/40'
                    }`}
                  >
                    <span className="text-[14px] font-bold text-[#242820]">{f.label}</span>
                    <span className="text-[11px] text-[#626B62]">{f.tag}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Optional Add-ons */}
            <div className="flex flex-col gap-2 pt-1">
              <label className="text-[14px] font-semibold text-[#242820]">
                Optional Add-on Care (Select any that apply)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {Object.entries(ADDON_PRICES).map(([addonTitle, price]) => {
                  const isChecked = selectedAddons.includes(addonTitle);
                  return (
                    <label
                      key={addonTitle}
                      className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer select-none transition-all ${
                        isChecked
                          ? 'border-[#236b45] bg-[#EAF2EB]/60 shadow-xs'
                          : 'border-[#E5E5DC] bg-[#fff8f2] hover:bg-white'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggleAddon(addonTitle)}
                          className="w-4 h-4 rounded text-[#236b45] accent-[#236b45] focus:ring-0 cursor-pointer"
                        />
                        <span className="text-[13px] font-medium text-[#242820]">
                          {addonTitle}
                        </span>
                      </div>
                      <span className="text-[12px] font-semibold text-[#785a00]">
                        +₦{price.toLocaleString()}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Special Notes */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="quote-notes"
                className="text-[14px] font-semibold text-[#242820]"
              >
                Special Requests or Notes (Optional)
              </label>
              <textarea
                id="quote-notes"
                rows={3}
                placeholder="Tell us about specific stain treatments, pets, balconies, or scheduling preferences..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-[#fff8f2] border border-[#E5E5DC] text-[#242820] text-[14px] placeholder:text-[#626B62]/60 focus:outline-none focus:ring-2 focus:ring-[#236b45]/40 transition-colors resize-none"
              />
            </div>

            {/* Real-time Estimate Card */}
            <div className="bg-[#FAF9F4] rounded-2xl p-5 border border-[#E5E5DC] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex flex-col text-center sm:text-left">
                <span className="text-[12px] font-semibold text-[#626B62] uppercase tracking-wider">
                  Transparent Indicative Estimate
                </span>
                <span className="font-heading text-2xl font-bold text-[#17452F]">
                  ₦{estimate.min.toLocaleString()} – ₦{estimate.max.toLocaleString()}
                </span>
                <span className="text-[11px] text-[#626B62]">
                  * Final quote confirmed based on site inspection & exact requirements.
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopySummary}
                  className="px-3 py-2 rounded-lg bg-white border border-[#E5E5DC] text-[#242820] hover:bg-[#FAF9F4] text-[13px] font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                  title="Copy details to clipboard"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    {copiedNotification ? 'check' : 'content_copy'}
                  </span>
                  <span>{copiedNotification ? 'Copied!' : 'Copy Summary'}</span>
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full mt-2 py-4 rounded-xl bg-[#236b45] text-white font-semibold text-[16px] shadow-lg hover:bg-[#17452F] flex items-center justify-center gap-2.5 transition-all duration-200 cursor-pointer active:scale-[0.99]"
            >
              <span className="material-symbols-outlined text-[22px]">chat</span>
              <span>Continue on WhatsApp</span>
            </button>

            {/* Explanation Note */}
            <p className="text-center text-[13px] text-[#626B62] leading-relaxed">
              * Clicking “Continue on WhatsApp” opens your WhatsApp chat directly with your selected details ready for our review and instant quote calculation.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};
