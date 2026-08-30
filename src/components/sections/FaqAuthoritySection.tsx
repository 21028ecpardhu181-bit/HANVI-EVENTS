'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sparkles, MapPin, Award, Star, Phone, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/lib/data/site';
import { getFAQSchema } from '@/lib/seo';
import { EditorialButton } from '@/components/ui/EditorialButton';

export interface FAQItem {
  question: string;
  answer: string;
  category: 'Overview' | 'Weddings' | 'Pricing & Booking' | 'Locations';
}

const FAQS: FAQItem[] = [
  {
    category: 'Overview',
    question: 'Who is the best event management company in Kakinada, Andhra Pradesh?',
    answer:
      'Hanvi Events is widely regarded as the best event management company in Kakinada and East Godavari. Directed by Event Director Ch. Kala Prasad, Hanvi Events brings over 8+ years of expertise and 500+ successful celebrations, offering end-to-end wedding planning, royal mandap design, milestone birthdays, catering coordination, and corporate galas with a 4.9-star client rating.',
  },
  {
    category: 'Overview',
    question: 'What event planning and decoration services does Hanvi Events offer in Kakinada?',
    answer:
      'Hanvi Events provides comprehensive turnkey event solutions across Kakinada, including traditional Telugu wedding mandaps, reception stage fabrication, Sangeet and Mehendi decor, themed 1st birthday parties, cradle and naming ceremonies (Barasala), house warming (Gruhapravesam), corporate summits, catering feasts, intelligent lighting, and candid photography coordination.',
  },
  {
    category: 'Weddings',
    question: 'Why choose Hanvi Events for traditional Telugu weddings and destination celebrations?',
    answer:
      'Hanvi Events specializes in authentic Vedic rituals and luxury Telugu wedding traditions such as Pellikuthuru, Snathakam, Kanyadanam, and Talambralu. Under the personal supervision of Ch. Kala Prasad, we craft bespoke floral mandaps, arrange 3D spatial stage previews, coordinate Vedic priests, and manage total guest hospitality for stress-free celebrations.',
  },
  {
    category: 'Pricing & Booking',
    question: 'What is the estimated cost of event management and wedding decor in Kakinada?',
    answer:
      'Hanvi Events customizes every celebration to your preferred investment range. Essential celebration packages start under ₹2 Lakhs, signature mandap and stage packages range from ₹2 Lakhs to ₹5 Lakhs, and premium full-scale wedding suites with catering and cinematography range from ₹5 Lakhs to ₹20 Lakhs+. We provide transparent itemized estimates with no hidden fees.',
  },
  {
    category: 'Locations',
    question: 'Which cities and districts are covered by Hanvi Events in Andhra Pradesh?',
    answer:
      'Hanvi Events is headquartered in Kakinada (Suryanarayana Puram) and actively serves clients across Rajahmundry, East Godavari, Dr. B. R. Ambedkar Konaseema District, Samalkota, Pithapuram, Amalapuram, Mandapeta, Peddapuram, Annavaram, Tuni, Visakhapatnam (Vizag), and Vijayawada.',
  },
  {
    category: 'Pricing & Booking',
    question: 'How can I book a digital consultation or visit the Hanvi Events studio in Kakinada?',
    answer:
      'You can connect directly with Event Director Ch. Kala Prasad via call at +91 97009 29650 or WhatsApp at +91 63054 57612. Our studio is located at 1st Floor, Subhamasthu Showroom, Majestic Street, Suryanarayana Puram, Kakinada, Andhra Pradesh 533001. You can also build your custom celebration blueprint online using our interactive Digital Planner.',
  },
];

export const FaqAuthoritySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories = ['All', 'Overview', 'Weddings', 'Pricing & Booking', 'Locations'];

  const filteredFaqs =
    activeCategory === 'All'
      ? FAQS
      : FAQS.filter((faq) => faq.category === activeCategory);

  const faqSchema = getFAQSchema(
    FAQS.map((f) => ({ question: f.question, answer: f.answer }))
  );

  return (
    <section
      id="faq-section"
      className="py-12 md:py-20 bg-[#FCF9F5] border-t border-[#E8DDCD] relative z-10 overflow-hidden"
    >
      {/* Schema.org FAQPage injection for Google Rich Snippets & AI Overviews */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5ECDD] border border-[#E8DDCD] mb-3">
            <Sparkles size={12} className="text-[#B88A44]" />
            <span className="font-sans-ui text-[10px] sm:text-xs uppercase tracking-widest text-[#B88A44] font-bold">
              Kakinada Event Management Guide & FAQ
            </span>
          </div>

          <h2 className="font-serif-editorial text-2xl sm:text-4xl md:text-5xl text-[#34281F] font-semibold tracking-tight">
            Planning Your Celebration in Kakinada & Andhra Pradesh
          </h2>

          <p className="font-sans-narrative text-xs sm:text-sm md:text-base text-[#6E5D4F] mt-2 sm:mt-3 leading-relaxed">
            Essential insights into luxury wedding coordination, traditional mandap architecture, pricing tiers, and why Hanvi Events is rated #1 across East Godavari.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 overflow-x-auto pb-3 mb-6 sm:mb-8 hide-scrollbar">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setActiveCategory(cat);
                  setOpenIndex(0);
                }}
                className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-sans-ui uppercase tracking-wider font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-[#34281F] text-white shadow-xs'
                    : 'bg-white text-[#6E5D4F] border border-[#E8DDCD] hover:border-[#B88A44]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* FAQ Accordion Grid */}
        <div className="max-w-4xl mx-auto space-y-3">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: idx * 0.04 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden bg-white ${
                  isOpen
                    ? 'border-[#B88A44] shadow-sm ring-1 ring-[#B88A44]/30'
                    : 'border-[#E8DDCD] hover:border-[#B88A44]/50'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between text-left gap-3 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-2.5 sm:gap-3">
                    <span className="font-serif-editorial text-[#B88A44] text-base sm:text-lg font-bold shrink-0 mt-0.5">
                      Q{idx + 1}.
                    </span>
                    <h3 className="font-serif-editorial text-base sm:text-xl text-[#34281F] font-semibold leading-snug">
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 border transition-transform duration-300 ${
                      isOpen
                        ? 'bg-[#B88A44] border-[#B88A44] text-white rotate-180'
                        : 'border-[#E8DDCD] bg-[#FCF9F5] text-[#6E5D4F]'
                    }`}
                  >
                    <ChevronDown size={16} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                    >
                      <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-1 border-t border-[#E8DDCD]/60 text-[#6E5D4F] font-sans-narrative text-xs sm:text-sm leading-relaxed pl-10 sm:pl-12">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Direct Connect Quick Box */}
        <div className="max-w-4xl mx-auto mt-8 sm:mt-12 bg-[#F5ECDD]/60 border border-[#E8DDCD] rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="font-serif-editorial text-lg sm:text-2xl text-[#34281F] font-semibold">
              Have questions about your event date or mandap scale?
            </h4>
            <p className="font-sans-ui text-xs sm:text-sm text-[#6E5D4F] mt-1">
              Speak directly with Event Director Ch. Kala Prasad for custom consultation.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href={`https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20Ch.%20Kala%20Prasad,%20I%20would%20like%20to%20inquire%20about%20event%20management%20in%20Kakinada.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#25D366] text-white text-xs font-sans-ui font-semibold shadow-xs hover:bg-[#20bd5a] transition-colors"
            >
              <MessageCircle size={14} />
              <span>WhatsApp</span>
            </a>

            <a
              href={`tel:${siteConfig.phoneRaw || siteConfig.phone.replace(/[^0-9]/g, '')}`}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#34281F] text-white text-xs font-sans-ui font-semibold shadow-xs hover:bg-[#B88A44] transition-colors"
            >
              <Phone size={14} />
              <span>Call Studio</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
