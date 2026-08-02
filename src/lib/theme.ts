export interface ColorPalette {
  id: string;
  name: string;
  subtitle: string;
  swatches: string[];
  tokens: {
    bgPrimary: string;
    surface: string;
    textPrimary: string;
    accentGold: string;
    accentOlive: string;
    accentRose: string;
    borderColor: string;
  };
}

export const colorPalettes: ColorPalette[] = [
  {
    id: 'peach-gold',
    name: 'Peach & Gold',
    subtitle: 'Signature Royal Telugu Marriage (Top Pick 👍🏻)',
    swatches: ['#FCF9F5', '#F5ECDD', '#34281F', '#B88A44'],
    tokens: {
      bgPrimary: '#FCF9F5',
      surface: '#F5ECDD',
      textPrimary: '#34281F',
      accentGold: '#B88A44',
      accentOlive: '#59624C',
      accentRose: '#C68F87',
      borderColor: '#E8DDCD',
    },
  },
  {
    id: 'lavender-grey',
    name: 'Lavender & Silver',
    subtitle: 'Soft Lilac & Royal Silver Elegance (Featured Theme 💜)',
    swatches: ['#F5F3F8', '#E9E5F0', '#2D2638', '#8B7AA8'],
    tokens: {
      bgPrimary: '#F5F3F8',
      surface: '#E9E5F0',
      textPrimary: '#2D2638',
      accentGold: '#8B7AA8',
      accentOlive: '#5F5278',
      accentRose: '#C7BDD9',
      borderColor: '#D4CCE0',
    },
  },
  {
    id: 'emerald-champagne',
    name: 'Emerald & Champagne',
    subtitle: 'Opulent Luxury & High Receptions',
    swatches: ['#F2F6F3', '#E0EAE2', '#14261C', '#B5944D'],
    tokens: {
      bgPrimary: '#F2F6F3',
      surface: '#E0EAE2',
      textPrimary: '#14261C',
      accentGold: '#B5944D',
      accentOlive: '#233D2F',
      accentRose: '#9E805B',
      borderColor: '#C5D6C7',
    },
  },
  {
    id: 'dusty-rose',
    name: 'Dusty Rose & Blush',
    subtitle: 'Romantic & Floral Artistry',
    swatches: ['#FAF3F3', '#EFE0E0', '#3D2527', '#C68F87'],
    tokens: {
      bgPrimary: '#FAF3F3',
      surface: '#EFE0E0',
      textPrimary: '#3D2527',
      accentGold: '#C68F87',
      accentOlive: '#85565A',
      accentRose: '#D99B93',
      borderColor: '#E0C6C6',
    },
  },
  {
    id: 'navy-gold',
    name: 'Navy & Gold',
    subtitle: 'Regal Night Staging & Receptions',
    swatches: ['#F0F4F8', '#DEE7F2', '#0B1726', '#C9A430'],
    tokens: {
      bgPrimary: '#F0F4F8',
      surface: '#DEE7F2',
      textPrimary: '#0B1726',
      accentGold: '#C9A430',
      accentOlive: '#1A3350',
      accentRose: '#526E88',
      borderColor: '#C0D0E2',
    },
  },
  {
    id: 'terracotta-cream',
    name: 'Terracotta & Cream',
    subtitle: 'Warm Earthy Boho Artistry',
    swatches: ['#F9F3EF', '#EFE0D7', '#361E16', '#C86D51'],
    tokens: {
      bgPrimary: '#F9F3EF',
      surface: '#EFE0D7',
      textPrimary: '#361E16',
      accentGold: '#C86D51',
      accentOlive: '#7A4333',
      accentRose: '#D48169',
      borderColor: '#E2C9BC',
    },
  },
];

export function applyPalette(paletteId: string) {
  const palette = colorPalettes.find((p) => p.id === paletteId) || colorPalettes[0];
  const root = document.documentElement;

  root.style.setProperty('--bg-primary', palette.tokens.bgPrimary);
  root.style.setProperty('--surface', palette.tokens.surface);
  root.style.setProperty('--text-primary', palette.tokens.textPrimary);
  root.style.setProperty('--accent-gold', palette.tokens.accentGold);
  root.style.setProperty('--accent-olive', palette.tokens.accentOlive);
  root.style.setProperty('--accent-rose', palette.tokens.accentRose);
  root.style.setProperty('--border-color', palette.tokens.borderColor);

  document.documentElement.style.backgroundColor = palette.tokens.bgPrimary;
  document.body.style.backgroundColor = palette.tokens.bgPrimary;
  document.body.style.color = palette.tokens.textPrimary;

  if (typeof window !== 'undefined') {
    localStorage.setItem('hanvi_color_palette', paletteId);
  }
}
