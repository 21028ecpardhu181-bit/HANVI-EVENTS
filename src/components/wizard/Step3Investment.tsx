'use client';

import React from 'react';
import { CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { EventPlan, BUDGET_RANGES } from '@/lib/data/plannerConfig';

interface Step3Props {
  plan: EventPlan;
  onUpdate: (updates: Partial<EventPlan>) => void;
}

export const Step3Investment: React.FC<Step3Props> = ({ plan, onUpdate }) => {
  return (
    <div className="space-y-6 md:space-y-8">
      <div>
        <span className="font-sans-ui text-[11px] uppercase tracking-widest text-[#B88A44] font-semibold block">
          Step 3 of 4 • Investment Bracket
        </span>
        <h2 className="font-serif-editorial text-2xl sm:text-3xl text-[#34281F] font-normal mt-0.5">
          Select Investment Comfort
        </h2>
        <p className="font-sans-narrative text-xs sm:text-sm text-[#6E5D4F] mt-1">
          Select a comfortable bracket for planning, floral styling, sound, and execution.
        </p>
      </div>

      {/* 3-Tier Investment Cards (Compact on Mobile) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
        {BUDGET_RANGES.map((tier) => {
          const isSelected = plan.budgetRange === tier.label;

          return (
            <button
              key={tier.id}
              type="button"
              onClick={() => onUpdate({ budgetRange: tier.label })}
              className={`p-3.5 sm:p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between min-h-[90px] sm:min-h-[105px] focus-visible:ring-2 focus-visible:ring-[#B88A44] focus:outline-none relative ${
                isSelected
                  ? 'bg-gradient-to-br from-[#FFF9F0] via-[#FDF3E3] to-[#F5E6CC] text-[#34281F] border-[#B88A44] ring-2 ring-[#B88A44]/60 shadow-[0_4px_16px_rgba(184,138,68,0.2)]'
                  : 'bg-[#F5ECDD]/40 text-[#34281F] border-[#E8DDCD] hover:bg-[#F5ECDD]'
              }`}
            >
              {tier.badge && (
                <span className={`absolute top-3 right-3 px-2 py-0.5 rounded-full font-sans-ui text-[9px] font-semibold uppercase tracking-wider ${
                  isSelected ? 'bg-[#B88A44] text-white shadow-xs' : 'bg-[#B88A44]/15 text-[#B88A44]'
                }`}>
                  {tier.badge}
                </span>
              )}

              <div className="flex items-center justify-between w-full">
                <span className="font-serif-editorial text-lg sm:text-xl font-semibold text-[#34281F]">
                  {tier.label}
                </span>
                {isSelected && <CheckCircle2 className="w-4 h-4 text-[#B88A44] shrink-0 ml-2" />}
              </div>

              <span className="font-sans-narrative text-xs text-[#6E5D4F] block mt-1">
                {tier.subtitle}
              </span>
            </button>
          );
        })}
      </div>

      {/* Reassurance Callout Card */}
      <div className="p-3.5 bg-[#F5ECDD]/40 border border-[#E8DDCD] rounded-2xl flex items-center gap-2.5 text-xs font-sans-narrative text-[#6E5D4F]">
        <ShieldCheck className="w-4 h-4 text-[#59624C] shrink-0" />
        <span>
          <strong className="text-[#34281F] font-semibold">Zero-Commitment Consultation:</strong> Final customized quote is tailored in direct consultation with Ch. Kala Prasad.
        </span>
      </div>
    </div>
  );
};
