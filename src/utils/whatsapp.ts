import { QuoteFormData } from '../types';
import { WHATSAPP_NUMBER } from '../data/cleaningData';

export const SERVICE_BASE_RATES: Record<string, { baseMin: number; baseMax: number; label: string }> = {
  'Residential House Cleaning': { baseMin: 25000, baseMax: 45000, label: 'Residential' },
  'Office & Commercial Cleaning': { baseMin: 40000, baseMax: 85000, label: 'Commercial' },
  'Relocation Move-In/Out Cleaning': { baseMin: 50000, baseMax: 95000, label: 'Relocation' },
  'Specialized Deep Cleaning': { baseMin: 45000, baseMax: 80000, label: 'Deep Cleaning' }
};

export const PROPERTY_MULTIPLIERS: Record<string, number> = {
  '1-2 Bedroom Apartment': 1.0,
  '3-4 Bedroom House': 1.45,
  '5+ Bedroom Duplex / Villa': 2.1,
  'Small Office (Up to 10 Desks)': 1.2,
  'Medium to Large Corporate Space': 2.3
};

export const FREQUENCY_DISCOUNTS: Record<string, number> = {
  'one-time': 1.0,
  'monthly': 0.95,
  'bi-weekly': 0.90,
  'weekly': 0.85
};

export const ADDON_PRICES: Record<string, number> = {
  'Interior Windows Detailing': 8000,
  'Oven & Refrigerator Interior Degrease': 12000,
  'Upholstery & Carpet Steam Shampoo': 18000,
  'Post-Paint / Renovation Residue Detailing': 20000
};

export function calculateEstimatedQuote(data: QuoteFormData) {
  const serviceConfig = SERVICE_BASE_RATES[data.service] || { baseMin: 30000, baseMax: 50000 };
  const propertyMult = PROPERTY_MULTIPLIERS[data.propertyType] || 1.0;
  const frequencyDiscount = FREQUENCY_DISCOUNTS[data.frequency] || 1.0;

  let addonTotal = 0;
  data.addons.forEach(addon => {
    addonTotal += ADDON_PRICES[addon] || 0;
  });

  const min = Math.round(((serviceConfig.baseMin * propertyMult) + addonTotal) * frequencyDiscount / 500) * 500;
  const max = Math.round(((serviceConfig.baseMax * propertyMult) + addonTotal) * frequencyDiscount / 500) * 500;

  return { min, max };
}

function normalizeWhatsAppNumber(phone: string): string {
  return phone.replace(/\D/g, '');
}

export function buildWhatsAppQuoteUrl(data: QuoteFormData, customPhone = WHATSAPP_NUMBER): string {
  const lines: string[] = [
    '✨ *Royale cruize Cleaning Services Quote Inquiry*',
    '--------------------------------------',
    `📍 *Service:* ${data.service}`,
    `🏠 *Property / Size:* ${data.propertyType}`,
    `🗺️ *Location:* ${data.location || 'Not specified'}`,
    `📅 *Preferred Date:* ${data.date || 'Flexible'}`,
    `🔄 *Frequency:* ${data.frequency.toUpperCase()}`
  ];

  if (data.addons.length > 0) {
    lines.push(`➕ *Add-ons:* ${data.addons.join(', ')}`);
  }

  if (data.notes && data.notes.trim()) {
    lines.push(`📝 *Special Requests / Notes:* ${data.notes.trim()}`);
  }

  const { min, max } = calculateEstimatedQuote(data);
  lines.push('--------------------------------------');
  lines.push(`💡 *Estimated Range:* ₦${min.toLocaleString()} – ₦${max.toLocaleString()}`);
  lines.push('');
  lines.push('Hello Royale cruize team, please review my cleaning requirements and confirm availability!');

  const message = lines.join('\n');
  return `https://wa.me/${normalizeWhatsAppNumber(customPhone)}?text=${encodeURIComponent(message)}`;
}

export function buildDirectWhatsAppUrl(text: string, customPhone = WHATSAPP_NUMBER): string {
  return `https://wa.me/${normalizeWhatsAppNumber(customPhone)}?text=${encodeURIComponent(text)}`;
}
