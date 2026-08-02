'use client';

import React from 'react';
import { Check, Minus } from 'lucide-react';
import { packageTiers } from '@/lib/data/packages';

const comparisonFeatures = [
  { name: 'Custom Mandap Architecture', minimal: true, elegant: true, royal: true, luxury: true },
  { name: 'Fresh Floral Sculptures', minimal: 'Standard', elegant: 'Premium', royal: 'Lush Fresh', luxury: 'Exotic Imported' },
  { name: 'Welcome Girls & Hospitality Hostesses', minimal: false, elegant: true, royal: true, luxury: true },
  { name: 'Nail-Art & Bridal Makeup Stalls', minimal: false, elegant: false, royal: true, luxury: true },
  { name: 'Intelligent Moving Lights & Staging', minimal: false, elegant: true, royal: true, luxury: true },
  { name: 'Balloon Decor & Surprise Event Setup', minimal: true, elegant: true, royal: true, luxury: true },
  { name: 'Personal Event Manager Supervision (Ch. Kala Prasad)', minimal: true, elegant: true, royal: true, luxury: true },
  { name: 'Complete Catering Support & Buffet Styling', minimal: false, elegant: false, royal: true, luxury: true },
];

export const FeatureComparisonTable: React.FC = () => {
  return (
    <div className="w-full overflow-x-auto border border-[#E8DDCD] rounded-3xl bg-[#FCF9F5] shadow-sm">
      <table className="w-full text-left border-collapse min-w-[700px]">
        <thead>
          <tr className="border-b border-[#E8DDCD] bg-[#F5ECDD]/50">
            <th className="py-5 px-6 font-serif-editorial text-xl text-[#34281F]">Feature Details</th>
            {packageTiers.map((t) => (
              <th key={t.id} className="py-5 px-4 text-center">
                <span className="font-serif-editorial text-lg text-[#34281F] block">{t.title}</span>
                <span className="font-sans-ui text-xs text-[#B88A44] uppercase font-semibold">{t.price}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-[#E8DDCD] font-sans-narrative text-xs text-[#34281F]">
          {comparisonFeatures.map((feat, idx) => (
            <tr key={idx} className="hover:bg-[#F5ECDD]/20 transition-colors">
              <td className="py-4 px-6 font-medium text-[#34281F]">{feat.name}</td>
              
              <td className="py-4 px-4 text-center">
                {typeof feat.minimal === 'boolean' ? (
                  feat.minimal ? <Check className="w-4 h-4 text-[#59624C] mx-auto" /> : <Minus className="w-4 h-4 text-[#6E5D4F]/40 mx-auto" />
                ) : (
                  <span className="text-[#6E5D4F]">{feat.minimal}</span>
                )}
              </td>

              <td className="py-4 px-4 text-center">
                {typeof feat.elegant === 'boolean' ? (
                  feat.elegant ? <Check className="w-4 h-4 text-[#59624C] mx-auto" /> : <Minus className="w-4 h-4 text-[#6E5D4F]/40 mx-auto" />
                ) : (
                  <span className="text-[#6E5D4F]">{feat.elegant}</span>
                )}
              </td>

              <td className="py-4 px-4 text-center bg-[#B88A44]/5">
                {typeof feat.royal === 'boolean' ? (
                  feat.royal ? <Check className="w-4 h-4 text-[#B88A44] mx-auto font-bold" /> : <Minus className="w-4 h-4 text-[#6E5D4F]/40 mx-auto" />
                ) : (
                  <span className="text-[#B88A44] font-semibold">{feat.royal}</span>
                )}
              </td>

              <td className="py-4 px-4 text-center">
                {typeof feat.luxury === 'boolean' ? (
                  feat.luxury ? <Check className="w-4 h-4 text-[#59624C] mx-auto" /> : <Minus className="w-4 h-4 text-[#6E5D4F]/40 mx-auto" />
                ) : (
                  <span className="text-[#6E5D4F]">{feat.luxury}</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
