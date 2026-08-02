export interface CulturalTheme {
  id: 'hindu' | 'christian' | 'muslim';
  name: string;
  shortName: string;
  primary: string;
  secondary: string;
  accent: string;
  bgMain: string;
  bgHeroGradient: string;
  bgCard: string;
  borderColor: string;
  textColor: string;
  subtitleColor: string;
  motif: {
    iconName: 'flower' | 'cross' | 'moon';
    headerScript: string;
    decorStyle: string;
  };
  swatches: { name: string; hex: string }[];
}

export const culturalThemes: Record<'hindu' | 'christian' | 'muslim', CulturalTheme> = {
  hindu: {
    id: 'hindu',
    name: 'Hindu Marriage Ceremonies',
    shortName: 'Hindu Weddings',
    primary: '#7A1C29',
    secondary: '#344A32',
    accent: '#B88A44',
    bgMain: '#FDF9F3',
    bgHeroGradient: 'from-[#34281F] via-[#5C1A24] to-[#34281F]',
    bgCard: '#FCF9F5',
    borderColor: '#E8DDCD',
    textColor: '#34281F',
    subtitleColor: '#6E5D4F',
    motif: {
      iconName: 'flower',
      headerScript: 'Sacred Agni Homa • Vedic Architecture • Temple Artistry',
      decorStyle: '40,000 Fresh Jasmine Strands, Rajanigandha Columns & Marigold Walls',
    },
    swatches: [
      { name: 'Temple Vermilion', hex: '#7A1C29' },
      { name: 'Sacred Turmeric Gold', hex: '#B88A44' },
      { name: 'Ivory Jasmine', hex: '#FCF9F5' },
      { name: 'Vedic Banana Leaf', hex: '#344A32' },
    ],
  },
  christian: {
    id: 'christian',
    name: 'Christian Cathedral & Beach Unions',
    shortName: 'Christian Weddings',
    primary: '#3E4A3E',
    secondary: '#59624C',
    accent: '#B88A44',
    bgMain: '#F6F8F5',
    bgHeroGradient: 'from-[#34281F] via-[#2F3D32] to-[#34281F]',
    bgCard: '#FCF9F5',
    borderColor: '#E8DDCD',
    textColor: '#34281F',
    subtitleColor: '#59624C',
    motif: {
      iconName: 'cross',
      headerScript: 'Understated Elegance • White Floral Aisles • Candlelight Magic',
      decorStyle: 'Ecuadorian White Roses, Gypsophila (Baby’s Breath), White Orchids & Hydrangeas',
    },
    swatches: [
      { name: 'Ivory Silk', hex: '#FDFBF7' },
      { name: 'Eucalyptus Sage', hex: '#59624C' },
      { name: 'Dusty Rose Quartz', hex: '#C68F87' },
      { name: 'Champagne Gold', hex: '#B88A44' },
    ],
  },
  muslim: {
    id: 'muslim',
    name: 'Muslim Nikah & Walima Galas',
    shortName: 'Muslim Weddings',
    primary: '#0D3B2E',
    secondary: '#661720',
    accent: '#B88A44',
    bgMain: '#F4F8F6',
    bgHeroGradient: 'from-[#34281F] via-[#123B2A] to-[#34281F]',
    bgCard: '#FCF9F5',
    borderColor: '#E8DDCD',
    textColor: '#34281F',
    subtitleColor: '#0D3B2E',
    motif: {
      iconName: 'moon',
      headerScript: 'Imperial Opulence • Velvet Purdah Partitions • Crystal Chandeliers',
      decorStyle: 'Royal Emerald Orchids, Red Velvet Roses, White Jasmine Partitions & Gold Brocade Drapes',
    },
    swatches: [
      { name: 'Royal Emerald Green', hex: '#0D3B2E' },
      { name: 'Imperial Ruby Velvet', hex: '#661720' },
      { name: 'Metallic Gold Brocade', hex: '#B88A44' },
      { name: 'Pearl Cream', hex: '#FCF9F5' },
    ],
  },
};
