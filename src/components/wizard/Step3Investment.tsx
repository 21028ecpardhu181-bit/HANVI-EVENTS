'use client';

import React from 'react';
import { CheckCircle2, ShieldCheck } from 'lucide-react';
import { EventPlan, BUDGET_RANGES } from '@/lib/data/plannerConfig';

interface Step3Props {
  plan: EventPlan;
  onUpdate: (updates: Partial<EventPlan>) => void;
}

export const Step3Investment: React.FC<Step3Props> = ({ plan, onUpdate }) => {
  return (
    <div className="space-y-8">
      <div>
        <span className="font-sans-ui text-[11px] uppercase tracking-widest text-[#B88A44] font-semibold block">
          Step 3 • Investment Comfort
        </span>
        <h2 className="font-serif-editorial text-2xl sm:text-3xl text-[#34281F] font-normal mt-0.5">
          Estimated Investment Range
        </h2>
        <p className="font-sans-narrative text-xs sm:text-sm text-[#6E5D4F] mt-1">
          Select a comfortable bracket for planning, styling, floral architecture, and execution.
        </p>
      </div>

      {/* Investment Bracket Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {BUDGET_RANGES.map((tier) => {
          const isSelected = plan.budgetRange === tier.label;

          return (
            <button
              key={tier.id}
              type="button"
              onClick={() => onUpdate({ budgetRange: tier.label })}
              className={`p-4 sm:p-5 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between min-h-[105px] focus-visible:ring-2 focus-visible:ring-[#B88A44] focus:outline-none relative ${
                isSelected
                  ? 'bg-gradient-to-br from-[#FFF9F0] via-[#FDF3E3] to-[#F5E6CC] text-[#34281F] border-[#B88A44] ring-2 ring-[#B88A44]/60 shadow-[0_6px_20px_rgba(184,138,68,0.22)]'
                  : 'bg-[#F5ECDD]/40 text-[#34281F] border-[#E8DDCD] hover:bg-[#F5ECDD] hover:border-[#B88A44]/60'
              }`}
            >
              {tier.badge && (
                <span className={`absolute top-3.5 right-3.5 px-2 py-0.5 rounded-full font-sans-ui text-[10px] font-semibold uppercase tracking-wider ${
                  isSelected ? 'bg-[#B88A44] text-white shadow-xs' : 'bg-[#B88A44]/20 text-[#B88A44]'
                }`}>
                  {tier.badge}
                </span>
              )}

              <div className="flex items-center justify-between w-full">
                <span className={`font-serif-editorial text-xl sm:text-2xl font-semibold ${isSelected ? 'text-[#34281F]' : 'text-[#34281F]'}`}>
                  {tier.label}
                </span>
                {isSelected && <CheckCircle2 className="w-5 h-5 text-[#B88A44] shrink-0 ml-2" />}
              </div>

              <span
                className={`font-sans-narrative text-xs block mt-2 ${
                  isSelected ? 'text-[#6E5D4F] font-medium' : 'text-[#6E5D4F]'
                }`}
              >
                {tier.subtitle}
              </span>
            </button>
          );
        })}
      </div>

      {/* Reassurance Callout Card */}
      <div className="p-4 bg-[#F5ECDD]/50 border border-[#E8DDCD] rounded-2xl flex items-start gap-3 text-xs font-sans-narrative text-[#6E5D4F]">
        <ShieldCheck className="w-4 h-4 text-[#59624C] shrink-0 mt-0.5" />
        <div className="space-y-0.5">
          <span className="font-semibold text-[#34281F] block">Zero Commitment Consultation</span>
          <span>
            This estimate helps us tailor decor concepts and service combinations. Your exact customized proposal will be finalized after direct discussion with Ch. Kala Prasad.
          </span>
        </div>
      </div>
    </div>
  );
};
