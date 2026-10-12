import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { WHATSAPP_NUMBER } from '../data/cleaningData';
import { buildDirectWhatsAppUrl } from '../utils/whatsapp';

interface NavbarProps {
  onOpenQuote: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote, onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'services-section', 'about-section', 'why-us-section', 'process-section', 'reviews-section', 'faqs-section'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId === 'services-section' ? 'services' : 
                             sectionId === 'about-section' ? 'about' :
                             sectionId === 'why-us-section' ? 'why-us' :
                             sectionId === 'process-section' ? 'how-it-works' :
                             sectionId === 'reviews-section' ? 'reviews' :
                             sectionId === 'faqs-section' ? 'faqs' : 'home');
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Home', id: 'home', key: 'home' },
    { label: 'Services', id: 'services-section', key: 'services' },
    { label: 'About', id: 'about-section', key: 'about' },
    { label: 'Why Us', id: 'why-us-section', key: 'why-us' },
    { label: 'How It Works', id: 'process-section', key: 'how-it-works' },
    { label: 'Reviews', id: 'reviews-section', key: 'reviews' },
    { label: 'FAQs', id: 'faqs-section', key: 'faqs' },
  ];

  const defaultWhatsappUrl = buildDirectWhatsAppUrl('Hello Royale cruize, I would like to inquire about your professional cleaning services.');

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-[0_2px_12px_rgba(0,0,0,0.06)] border-b border-[#E5E5DC]'
            : 'bg-white/95 backdrop-blur-md border-b border-[#E5E5DC] shadow-[0_1px_8px_rgba(0,0,0,0.04)]'
        }`}
      >
        <div className="h-20 w-full max-w-[1280px] mx-auto px-3 sm:px-6 flex items-center justify-between gap-2 sm:gap-4">
          {/* Brand Logo & Name */}
          <div className="flex min-w-0 shrink-0 items-center gap-3">
            <button
              onClick={() => scrollTo('home')}
              className="flex min-w-0 shrink-0 items-center gap-2 sm:gap-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#236b45] rounded-lg p-1"
            >
              {/* Previous direct SVG markup retained for easy rollback:
              <img
                src="../assets/royale-cruize-logo.svg"
                alt="Royale cruize Cleaning Services Logo"
                className="h-9 w-auto object-contain"
                loading="eager"
              /> */}
             
              <BrandLogo className="block h-auto w-[118px] sm:w-[144px] object-contain" loading="eager" />

              <span className="hidden sm:inline-block whitespace-nowrap font-heading text-base lg:text-2xl font-bold text-[#17452F] tracking-tight">
                Royale cruize
              </span>
              
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.key;
              return (
                <button
                  key={link.key}
                  onClick={() => scrollTo(link.id)}
                  className={`px-3 py-1.5 text-[15px] font-medium transition-all duration-200 rounded-lg whitespace-nowrap ${
                    isActive
                      ? 'bg-[#EAF2EB] text-[#236b45] font-semibold'
                      : 'text-[#4f4634] hover:text-[#201b12] hover:bg-[#FAF9F4]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Actions Zone */}
          <div className="flex shrink-0 items-center gap-1.5 sm:gap-3">
            {/* WhatsApp Direct Line */}
            <a
              href={defaultWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#EAF2EB] text-[#236b45] hover:bg-[#a9f3c2] transition-colors whitespace-nowrap"
              title="Chat directly on WhatsApp"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              <span className="text-[13px] font-semibold">WhatsApp</span>
              <span className="flex h-2 w-2 rounded-full bg-[#236b45] animate-pulse" />
            </a>

            {/* Get a Free Quote Button */}
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center justify-center px-2.5 sm:px-4 py-2.5 rounded-lg bg-[#e8b323] text-[#242820] text-[12px] sm:text-[15px] font-semibold shadow-sm hover:bg-[#F5D778] active:scale-[0.98] transition-all whitespace-nowrap cursor-pointer"
            >
              <span className="sm:hidden">Quote</span>
              <span className="hidden sm:inline">Get a Free Quote</span>
            </button>

            {/* Contact / Info profile button */}
            <button
              onClick={onOpenContact}
              title="Contact Royale cruize"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#785a00] hover:bg-[#5b4300] text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Contact options"
            >
              <span className="material-symbols-outlined text-[18px]">person</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center text-[#242820] hover:bg-[#FAF9F4] transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              <span className="material-symbols-outlined text-[24px]">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-[#E5E5DC] shadow-lg animate-in slide-in-from-top duration-200">
            <div className="max-w-[1280px] mx-auto px-6 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.key}
                  onClick={() => scrollTo(link.id)}
                  className={`text-left px-3 py-2.5 rounded-lg text-[15px] font-medium transition-colors ${
                    activeSection === link.key
                      ? 'bg-[#EAF2EB] text-[#236b45] font-semibold'
                      : 'text-[#4f4634] hover:bg-[#FAF9F4]'
                  }`}
                >
                  {link.label}
                </button>
              ))}

              <div className="pt-3 border-t border-[#E5E5DC] flex flex-col gap-2">
                <a
                  href={defaultWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#EAF2EB] text-[#236b45] font-semibold text-[14px]"
                >
                  <span className="material-symbols-outlined text-[18px]">chat</span>
                  <span>Direct WhatsApp Line</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
