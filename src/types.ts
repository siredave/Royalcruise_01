export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  altText: string;
  features: string[];
  durationEstimate: string;
  whatsappMessage: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'services' | 'pricing' | 'booking';
}

export interface TestimonialItem {
  id: string;
  quote: string;
  service: string;
  accentColor: 'gold' | 'green';
}

export interface QuoteFormData {
  service: string;
  propertyType: string;
  location: string;
  date: string;
  frequency: 'one-time' | 'weekly' | 'bi-weekly' | 'monthly';
  addons: string[];
  notes: string;
}
