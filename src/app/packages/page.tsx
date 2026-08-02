import React from 'react';
import { Check } from 'lucide-react';
import { packageTiers } from '@/lib/data/packages';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { EditorialButton } from '@/components/ui/EditorialButton';
import { EditorialBadge } from '@/components/ui/EditorialBadge';
import { FeatureComparisonTable } from '@/components/features/packages/FeatureComparisonTable';

export default function PackagesPage() {
  return (
    <div className="pt-28 pb-24 bg-[#FCF9F5]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">

        <SectionHeader
          scriptEyebrow="Est. 2018 in Kakinada"
          title="Celebration Packages & Experience Tiers"
          description="Managed by Ch. Kala Prasad. Transparent investment tiers tailored for marriages, birthdays, sangeet, and corporate galas."
          align="center"
        />

        {/* Tier Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {packageTiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative bg-[#FCF9F5] border rounded-3xl p-6 md:p-8 flex flex-col justify-between transition-all duration-500 ${tier.isPopular
                  ? 'border-[#B88A44] shadow-2xl scale-[1.02] bg-gradient-to-b from-[#FCF9F5] via-[#F5ECDD]/40 to-[#FCF9F5]'
                  : 'border-[#E8DDCD] shadow-sm hover:shadow-hover'
                }`}
            >
              {tier.badge && (
                <div className="absolute -top-3.5 right-6 z-10">
                  <EditorialBadge variant={tier.isPopular ? 'gold' : 'muted'}>
                    {tier.badge}
                  </EditorialBadge>
                </div>
              )}

              <div className="space-y-4">
                <div className="pb-4 border-b border-[#E8DDCD]">
                  <span className="font-script-accent text-2xl text-[#B88A44]">{tier.title}</span>
                  <h2 className="font-serif-editorial text-3xl text-[#34281F] font-normal mt-1">{tier.price}</h2>
                  <p className="font-sans-narrative text-xs text-[#6E5D4F] mt-2">{tier.tagline}</p>
                  <span className="font-sans-ui text-[11px] text-[#59624C] font-semibold block mt-3">
                    Target: {tier.recommendedFor}
                  </span>
                </div>

                <ul className="space-y-2.5">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2.5 text-xs font-sans-narrative text-[#34281F]">
                      <Check className="w-4 h-4 text-[#B88A44] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6">
                <EditorialButton
                  variant={tier.isPopular ? 'primary' : 'outline'}
                  className="w-full"
                >
                  Select {tier.title}
                </EditorialButton>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Comparison Table */}
        <div className="mt-20">
          <SectionHeader
            scriptEyebrow="Side-by-Side Analysis"
            title="Package Feature Matrix"
            description="Compare every detail included across our minimal, elegant, royal, and luxury tiers."
            align="center"
          />
          <div className="mt-8">
            <FeatureComparisonTable />
          </div>
        </div>

      </div>
    </div>
  );
}
