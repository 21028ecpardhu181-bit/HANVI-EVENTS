import React from 'react';
import { MessageCircle, Phone, Sparkles } from 'lucide-react';
import { siteConfig } from '@/lib/data/site';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: 'What event planning and decoration services does Hanvi Events offer in Kakinada?',
    answer: 'Hanvi Events can discuss wedding planning, mandap and stage decor, milestone celebrations, catering coordination, and corporate-event requirements. Availability and scope are confirmed during a consultation.',
  },
  {
    question: 'How early should I contact an event planner?',
    answer: 'Contact the studio as early as possible after confirming the date and venue. This allows time to discuss the event brief, venue requirements, vendors, and a suitable planning schedule.',
  },
  {
    question: 'How is event pricing decided?',
    answer: 'Pricing depends on the event date, venue, guest count, design scope, materials, vendors, and coordination required. Ask for a written itemized estimate for your specific celebration.',
  },
  {
    question: 'Can Hanvi Events support traditional Telugu wedding requirements?',
    answer: 'Discuss your family traditions, ceremony schedule, and decor requirements with the studio. The team can then confirm the services and coordination suitable for your event.',
  },
  {
    question: 'How can I contact the studio?',
    answer: 'Call +91 97009 29650 or message +91 63054 57612 on WhatsApp to discuss event dates, services, and a consultation.',
  },
];

export function FaqAuthoritySection() {
  const whatsappNumber = siteConfig.whatsapp.replace(/[^0-9]/g, '');

  return (
    <section id="faq-section" className="py-12 md:py-20 bg-[#FCF9F5] border-t border-[#E8DDCD] relative z-10 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5ECDD] border border-[#E8DDCD] mb-3">
            <Sparkles size={12} className="text-[#B88A44]" />
            <span className="font-sans-ui text-[10px] sm:text-xs uppercase tracking-widest text-[#B88A44] font-bold">Kakinada Event Planning FAQ</span>
          </div>
          <h2 className="font-serif-editorial text-2xl sm:text-4xl md:text-5xl text-[#34281F] font-semibold tracking-tight">Planning Your Celebration</h2>
          <p className="font-sans-narrative text-xs sm:text-sm md:text-base text-[#6E5D4F] mt-2 sm:mt-3 leading-relaxed">Practical answers about planning, pricing, and speaking with the Hanvi Events team.</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-3">
          {FAQS.map((faq, index) => (
            <details key={faq.question} open={index === 0} className="rounded-2xl border border-[#E8DDCD] bg-white open:border-[#B88A44]">
              <summary className="cursor-pointer list-none p-4 sm:p-5 font-serif-editorial text-base sm:text-xl text-[#34281F] font-semibold leading-snug">
                <span className="mr-2 text-[#B88A44]">Q{index + 1}.</span>{faq.question}
              </summary>
              <p className="px-4 pb-4 sm:px-5 sm:pb-5 font-sans-narrative text-xs sm:text-sm leading-relaxed text-[#6E5D4F]">{faq.answer}</p>
            </details>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-8 sm:mt-12 bg-[#F5ECDD]/60 border border-[#E8DDCD] rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h3 className="font-serif-editorial text-lg sm:text-2xl text-[#34281F] font-semibold">Want to discuss your event?</h3>
            <p className="font-sans-ui text-xs sm:text-sm text-[#6E5D4F] mt-1">Contact the studio for availability and a tailored estimate.</p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <a data-cta="faq_whatsapp" href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#25D366] text-white text-xs font-sans-ui font-semibold"><MessageCircle size={14} />WhatsApp</a>
            <a data-cta="faq_call" href={`tel:${siteConfig.phoneRaw}`} className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#34281F] text-white text-xs font-sans-ui font-semibold"><Phone size={14} />Call Studio</a>
          </div>
        </div>
      </div>
    </section>
  );
}
