import { ServiceItem, FaqItem, TestimonialItem } from '../types';

export const WHATSAPP_NUMBER = '2348000000000'; // Standard Nigerian international format (+234)

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'office-cleaning',
    title: 'Office & Commercial Cleaning',
    category: 'Corporate',
    description: 'Workspace sanitation, glass partitions, desks, conference rooms, and high-traffic common areas cleaned discreetly and thoroughly.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuByY-PlySDLNcWz87eR5aXVXtPntY6isaMeK6SLwhK9f8AgWh9BvDdwKIc4aCH5mQaZSIoLXsZKV1XsyTsuIKzaOlpVtPQz1M3jr2HBS8TcQwX8HJzQo_4Xrq-E6jfvX11E-G62h8fOqBuuVHQ9NxWWHDu8xdc9xArztHGqTLfSW02Y2EhIPfr9A-CWbchwhwWSS6-zeHbPq4fGvEuyOXLZuULrNgkILBof0kRrmrSzAkpqPhZvJwfaug',
    altText: 'Two professional African commercial cleaners in navy scrubs thoroughly wiping conference tables and sanitizing glass partition windows in an open-plan executive corporate office',
    features: [
      'Conference & executive board room disinfection',
      'Streak-free glass partition & reception cleaning',
      'Workstation dusting & electronic surface hygiene',
      'Restroom sanitation & supply replenishment',
      'Flexible after-hours or early morning scheduling'
    ],
    durationEstimate: '2 – 4 hours per visit',
    whatsappMessage: 'Hello Royalcruise, I am inquiring about Office & Commercial Cleaning for our workspace.'
  },
  {
    id: 'house-cleaning',
    title: 'House & Residential Cleaning',
    category: 'Residential',
    description: 'Comprehensive living room, kitchen, bedroom, and bathroom care for peaceful homes. Flexible one-off or recurring visits.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDV8722xDgYAVym1rcM09jwJI6KdUBqwX1V0N65nMXUqnJzWmoIRS7FEg9V02sT1UC9Y05rhqBQef-jgAHRnoAwOng4p29KU1fOtF6l8t6kE4YjLHB7oT1gevT6kVim4m2MY35-nUCOiHQlcbwvL8alGMWSGnX5g1-2V-5R9kCHznmTvC-WKBmaNkjLNaiboHKojw8Z2_nd0zBZgSDdS8-0Ypgw3wGRHYEEVeExt5x9vNugZXpc01A0VA',
    altText: 'A neat, luminous contemporary residential living room with polished wooden floors and plush beige sofas immediately following a professional thorough house cleaning',
    features: [
      'Detailed dusting of baseboards, picture frames & moldings',
      'Kitchen countertop degreasing & exterior appliance shine',
      'Bathroom tile scrub, descaling & toilet disinfection',
      'Hardwood & tile vacuuming followed by damp micro-fiber mop',
      'Bed linen change & bedroom decluttering'
    ],
    durationEstimate: '3 – 5 hours per visit',
    whatsappMessage: 'Hello Royalcruise, I am inquiring about House & Residential Cleaning.'
  },
  {
    id: 'relocation-cleaning',
    title: 'Relocation Cleaning',
    category: 'Move-In / Out',
    description: 'Pre-move-in and post-move-out complete property turnover cleaning. Guarantees fresh starts and hassle-free lease handovers.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKPS46GO-p7PAxT0UAiyv-7UAKiLtPffdKA4cUsN2JwW2gkoaklI7GYSCAYdFuHTPPo21DoWD9nE4eUMjjrs6VNHRm7jUGa_ZxCjGW2p6T_imTnj9YI737eTsaFq3zN1t6sTQok6VXo80fVDbSvNMBiyMTKUkMi3ujOVRgw1ADlNno5Pj9byJMER0tlzaHMpZf_Iwmpd0fiMIpZXrZpVn9iaG9HqgcUokYkrbowg5M8lZTY0aKuFPJzA',
    altText: 'Empty, pristine clean modern apartment hallway and living space ready for tenant move-in, with spotless tiled floors reflecting warm natural sunlight',
    features: [
      'Complete interior cabinet, drawer & closet scrubbing',
      'Oven, refrigerator & exhaust filter deep cleaning',
      'Window tracks, sills & sliding glass door detailing',
      'Full wall spot removal & skirting board wipe down',
      'Deposit refund guarantee standard compliance'
    ],
    durationEstimate: '5 – 7 hours per turnover',
    whatsappMessage: 'Hello Royalcruise, I am inquiring about Relocation (Move-In / Move-Out) Cleaning.'
  },
  {
    id: 'deep-cleaning',
    title: 'Deep Cleaning',
    category: 'Intensive',
    description: 'Intensive sanitization tackling hidden corners, kitchen grease buildup, grout detailing, and hard-to-reach spaces.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgx3AiwbU3ghyFQ1EDUGSygoI9LgzLyoK-vxzDzEmF1oLpAhADnplT8L0nB_qUTTf4n_6dXAYo5uwsrKiqBc3AUs9wpaBOlxQ3Z8et0aPUr6rD8YZAG07HQC9Ihq2T8AthDG-s2QhlcibmzRtistFmXKaOcSxwdzenzLefDil3Asuzrn2o64zJjWTdnLH6fEqADJ57vFpssBQtMFYrIyvhzGlYtDXh1b4OugybRTOg68EpenhT32UOvA',
    altText: 'Gleaming stainless steel and marble residential kitchen counter detail with scrubbed fixtures, deep cleaned range hood, and sparkling surfaces',
    features: [
      'Intensive grout line restoration & calcium removal',
      'Behind & underneath major heavy furniture & appliances',
      'Door trims, switch plates & high-touch sanitization',
      'Deep steam or extraction on stubborn bathroom buildup',
      'Ceiling fan blades & air vent cover dust extraction'
    ],
    durationEstimate: '6 – 8 hours per session',
    whatsappMessage: 'Hello Royalcruise, I am inquiring about Specialized Deep Cleaning.'
  }
];

export const FAQS_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'services',
    question: 'What cleaning services does Royalcruise offer?',
    answer: 'Royalcruise offers four core professional services: Office & Commercial Cleaning, House & Residential Cleaning, Relocation (Move-In / Move-Out) Cleaning, and intensive Deep Cleaning. All packages are customizable to suit individual property requirements.'
  },
  {
    id: 'faq-2',
    category: 'pricing',
    question: 'How can I request a cleaning quote?',
    answer: 'You can request a free quote directly through WhatsApp using our interactive calculator below or clicking any "Get a Free Quote" button. We promptly gather details about your space and provide transparent pricing with no hidden charges.'
  },
  {
    id: 'faq-3',
    category: 'booking',
    question: 'Can I schedule a one-time cleaning?',
    answer: 'Yes, absolutely. We welcome one-time bookings for special events, post-renovation needs, seasonal deep cleans, or property appraisals, as well as recurring scheduled contracts.'
  },
  {
    id: 'faq-4',
    category: 'services',
    question: 'Do you offer relocation cleaning?',
    answer: 'Yes. Our relocation cleaning service ensures empty homes or offices are thoroughly scrubbed inside and out, including interior cabinetry, skirting boards, windows, and sanitization so the premises are pristine for new occupants.'
  },
  {
    id: 'faq-5',
    category: 'services',
    question: 'What does deep cleaning include?',
    answer: 'Deep cleaning goes far beyond surface dusting. It includes comprehensive degreasing of kitchen hood and appliances, bathroom tile descaling, grout scrub, disinfection of door handles, light switches, window tracks, and hard-to-reach areas.'
  },
  {
    id: 'faq-6',
    category: 'booking',
    question: 'Can I arrange recurring cleaning?',
    answer: 'Yes! We provide flexible recurring plans—weekly, bi-weekly, or monthly—tailored to keep residential spaces perpetually tidy and commercial workspaces clean and inviting for staff and guests.'
  },
  {
    id: 'faq-7',
    category: 'booking',
    question: 'How can I discuss my requirements?',
    answer: 'You can simply click the WhatsApp chat button on our website. A dedicated customer support specialist will review your property size, discuss specific problem areas, and outline the exact scope of work.'
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    quote: 'The crew arrived right on time and treated our home with absolute respect. They cleaned areas behind appliances that hadn\'t seen daylight in years. Everything smelled fresh and clean without harsh chemical odors.',
    service: 'House Cleaning',
    accentColor: 'gold'
  },
  {
    id: 'test-2',
    quote: 'Our open-plan office space and glass meeting pods were completely transformed. Having a dependable team that works efficiently after business hours has lifted a huge operational burden off our management.',
    service: 'Office Cleaning',
    accentColor: 'green'
  },
  {
    id: 'test-3',
    quote: 'Relocating is stressful enough, but Royalcruise made the handover completely seamless. The landlord was genuinely impressed with the condition of the apartment and released the security deposit with zero deductions.',
    service: 'Relocation Cleaning',
    accentColor: 'gold'
  }
];

export const TRUST_PILLARS = [
  {
    title: '100% Vetted',
    subtitle: 'Trained Professionals',
    icon: 'verified_user'
  },
  {
    title: 'Safe Products',
    subtitle: 'Eco-Friendly Supplies',
    icon: 'compost'
  },
  {
    title: 'Flexible Times',
    subtitle: 'Convenient Scheduling',
    icon: 'event_available'
  },
  {
    title: 'Tailored Care',
    subtitle: 'Customized Plans',
    icon: 'tune'
  }
];

export const WHY_CHOOSE_US_ITEMS = [
  {
    icon: 'checklist',
    title: 'Detail-Oriented Cleaning',
    description: 'We follow thorough inspection protocols, reaching spots commonly missed by conventional cleaners.'
  },
  {
    icon: 'schedule',
    title: 'Flexible Service Options',
    description: 'One-off deep cleans, weekly refreshes, or off-peak commercial hours designed around your lifestyle.'
  },
  {
    icon: 'psychology_alt',
    title: 'Professional Approach',
    description: 'Courteous, fully background-checked team members who honor your time, space, and confidentiality.'
  },
  {
    icon: 'task_alt',
    title: 'Quality-Focused Results',
    description: 'Satisfaction checks post-cleaning to make sure your space feels genuinely revitalized and pristine.'
  }
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Tell Us What You Need',
    description: 'Choose your service—residential, office, move-in, or deep clean—and share basic property details.',
    colorClass: 'bg-[#e8b323] text-[#242820]'
  },
  {
    step: '02',
    title: 'Discuss Requirements',
    description: 'Connect via WhatsApp for a rapid chat to specify priorities, special requests, and convenient times.',
    colorClass: 'bg-[#EAF2EB] text-[#236b45]'
  },
  {
    step: '03',
    title: 'Confirm the Details',
    description: 'Receive a transparent, customized quote and schedule your preferred arrival window instantly.',
    colorClass: 'bg-[#FFF5D6] text-[#B8860B]'
  },
  {
    step: '04',
    title: 'Enjoy a Cleaner Space',
    description: 'Relax while our dedicated crew delivers an immaculate transformation you can feel proud of.',
    colorClass: 'bg-[#17452F] text-white'
  }
];

export const ABOUT_PRINCIPLES = [
  {
    icon: 'search',
    title: 'Care in Every Detail',
    description: 'No corner overlooked, from baseboards to ceiling trims.',
    bg: 'bg-[#FFF5D6]',
    text: 'text-[#B8860B]'
  },
  {
    icon: 'handshake',
    title: 'Dependable Professionalism',
    description: 'Punctual, vetted, and respectful of your privacy and property.',
    bg: 'bg-[#EAF2EB]',
    text: 'text-[#236b45]'
  },
  {
    icon: 'verified',
    title: 'Quality-Focused Cleaning',
    description: 'Rigorous standards utilizing effective, eco-safe formulas.',
    bg: 'bg-[#FFF5D6]',
    text: 'text-[#B8860B]'
  }
];
