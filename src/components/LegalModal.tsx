import React from 'react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#E5E5DC] flex flex-col gap-5 animate-in zoom-in-95 duration-200 max-h-[85vh]">
        <div className="flex items-center justify-between pb-3 border-b border-[#E5E5DC]">
          <h3 className="font-heading text-xl font-bold text-[#242820]">
            {isPrivacy ? 'Privacy Policy' : 'Terms of Service'}
          </h3>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-[#626B62] hover:bg-[#FAF9F4]"
            aria-label="Close dialog"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <div className="overflow-y-auto text-[14px] text-[#626B62] leading-relaxed flex flex-col gap-4 pr-1">
          {isPrivacy ? (
            <>
              <p>
                At <strong>Royale cruize Cleaning Services</strong>, we value the trust you place in us when inviting our team into your home or commercial workspace.
              </p>
              <h4 className="font-bold text-[#242820]">1. Information We Collect</h4>
              <p>
                When inquiring or booking through WhatsApp or our website forms, we only collect essential property and schedule information (such as property type, location area, preferred date, and specific requests) required to deliver precise quotes and cleaning services.
              </p>
              <h4 className="font-bold text-[#242820]">2. Use of Information</h4>
              <p>
                Your contact details are solely used to coordinate arrival windows, provide customized estimates, and verify satisfaction following service delivery. We do not sell or distribute personal data to third parties.
              </p>
              <h4 className="font-bold text-[#242820]">3. Security & Discretion</h4>
              <p>
                All team members undergo thorough background checks and adhere to strict confidentiality protocols regarding client residences and corporate premises.
              </p>
            </>
          ) : (
            <>
              <p>
                Welcome to <strong>Royale cruize Cleaning Services</strong>. By engaging our services, you agree to the following operational standards.
              </p>
              <h4 className="font-bold text-[#242820]">1. Scope of Work</h4>
              <p>
                Our team delivers professional cleaning based on the verified service package (Residential, Commercial, Relocation, or Deep Cleaning). Any additional rooms or intensive post-construction needs not initially specified will be quoted transparently prior to work commencement.
              </p>
              <h4 className="font-bold text-[#242820]">2. Guarantee & Satisfaction</h4>
              <p>
                We stand behind our 100% Satisfaction Standard. If any agreed area does not meet your expectations, notify our direct care team within 24 hours of service completion and our crew will promptly address it.
              </p>
              <h4 className="font-bold text-[#242820]">3. Rescheduling & Cancellations</h4>
              <p>
                We understand schedules change. Please notify us at least 12 hours in advance via WhatsApp so our mobile crews can adjust dispatch routes smoothly.
              </p>
            </>
          )}
        </div>

        <div className="pt-3 border-t border-[#E5E5DC] flex justify-end">
          <button
            onClick={onClose}
            className="py-2.5 px-6 rounded-xl bg-[#236b45] text-white font-semibold text-[14px] hover:bg-[#17452F] transition-colors cursor-pointer"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
