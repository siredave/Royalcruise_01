import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TrustStrip } from './components/TrustStrip';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { ProcessSection } from './components/ProcessSection';
import { ReviewsSection } from './components/ReviewsSection';
import { FaqSection } from './components/FaqSection';
import { QuoteCalculatorSection } from './components/QuoteCalculatorSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { ContactModal } from './components/ContactModal';
import { LegalModal } from './components/LegalModal';
import { ServiceItem } from './types';

export default function App() {
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState<string>('Residential House Cleaning');
  const [inspectingService, setInspectingService] = useState<ServiceItem | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceForQuote = (serviceTitle: string) => {
    setSelectedServiceForQuote(serviceTitle);
    scrollTo('quote-section');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fff8f2] text-[#242820]">
      {/* Top Navigation */}
      <Navbar
        onOpenQuote={() => scrollTo('quote-section')}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Main Content Area */}
      <main className="w-full pt-20 flex-grow">
        {/* Section 1: Hero */}
        <HeroSection
          onScrollToQuote={() => scrollTo('quote-section')}
          onScrollToServices={() => scrollTo('services-section')}
        />

        {/* Section 2: Trust & Benefits Strip */}
        <TrustStrip />

        {/* Section 3: Cleaning Services Grid */}
        <ServicesSection
          onSelectServiceForQuote={handleSelectServiceForQuote}
          onOpenServiceDetails={(service) => setInspectingService(service)}
        />

        {/* Section 4: About Royalcruise */}
        <AboutSection />

        {/* Section 5: Why Choose Us */}
        <WhyChooseUsSection />

        {/* Section 6: How It Works / Process */}
        <ProcessSection />

        {/* Section 7: Customer Feedback */}
        <ReviewsSection />

        {/* Section 8: Frequently Asked Questions */}
        <FaqSection />

        {/* Section 9: WhatsApp Quote Calculator */}
        <QuoteCalculatorSection
          initialService={selectedServiceForQuote}
          key={selectedServiceForQuote}
        />

        {/* Section 10: Final Call To Action */}
        <CtaSection />
      </main>

      {/* Footer */}
      <Footer
        onScrollTo={scrollTo}
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
      />

      {/* Floating WhatsApp Action Widget */}
      <FloatingWhatsApp onScrollToQuote={() => scrollTo('quote-section')} />

      {/* Service Scope & Details Modal */}
      <ServiceDetailModal
        service={inspectingService}
        onClose={() => setInspectingService(null)}
        onSelectForQuote={handleSelectServiceForQuote}
      />

      {/* Contact & Support Dialog */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        onScrollToQuote={() => scrollTo('quote-section')}
      />

      {/* Privacy Policy & Terms Modal */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
