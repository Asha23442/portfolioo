import React, { createContext, useContext, useState, useEffect } from 'react';

export type PortfolioThemeId = 'midnight' | 'light' | 'emerald' | 'sapphire' | 'amber' | 'monochrome';

export interface ThemeColors {
  id: PortfolioThemeId;
  name: string;
  tagline: string;
  isDark: boolean;
  bgMain: string;
  bgSecondary: string;
  bgCard: string;
  bgCardHover: string;
  borderMain: string;
  borderHover: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  accentColor: string; // hex
  accentBg: string;
  accentText: string;
  accentBorder: string;
  btnPrimary: string;
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
  previewColors: {
    bg: string;
    card: string;
    border: string;
    accent: string;
    text: string;
  };
  contrastRatio: string;
  recommendationNote: string;
}

export const PORTFOLIO_THEMES: Record<PortfolioThemeId, ThemeColors> = {
  midnight: {
    id: 'midnight',
    name: 'Obsidian & Cobalt',
    tagline: 'Deep obsidian slate with electric sapphire accents — The Gold Standard',
    isDark: true,
    bgMain: 'bg-[#0B0F19]',
    bgSecondary: 'bg-[#111827]',
    bgCard: 'bg-[#111827]/90',
    bgCardHover: 'hover:bg-[#162033]',
    borderMain: 'border-[#1E293B]',
    borderHover: 'hover:border-[#334155]',
    textPrimary: 'text-[#F8FAFC]',
    textSecondary: 'text-[#94A3B8]',
    textMuted: 'text-[#64748B]',
    accentColor: '#3B82F6',
    accentBg: 'bg-blue-600',
    accentText: 'text-blue-400',
    accentBorder: 'border-blue-500/30',
    btnPrimary: 'bg-blue-600 hover:bg-blue-500 text-white shadow-xs',
    badgeBg: 'bg-blue-950/60',
    badgeText: 'text-blue-300',
    badgeBorder: 'border-blue-800/50',
    previewColors: {
      bg: '#0B0F19',
      card: '#111827',
      border: '#1E293B',
      accent: '#3B82F6',
      text: '#F8FAFC'
    },
    contrastRatio: '14.2:1 (AAA)',
    recommendationNote: 'Best for modern software engineering and AI portfolios. Highest readability and tech credibility.'
  },
  light: {
    id: 'light',
    name: 'Executive Studio Light',
    tagline: 'Architectural off-white canvas with deep charcoal typography and royal cobalt',
    isDark: false,
    bgMain: 'bg-[#F8FAFC]',
    bgSecondary: 'bg-[#FFFFFF]',
    bgCard: 'bg-[#FFFFFF]',
    bgCardHover: 'hover:bg-[#F1F5F9]',
    borderMain: 'border-[#E2E8F0]',
    borderHover: 'hover:border-[#CBD5E1]',
    textPrimary: 'text-[#0F172A]',
    textSecondary: 'text-[#475569]',
    textMuted: 'text-[#64748B]',
    accentColor: '#2563EB',
    accentBg: 'bg-blue-600',
    accentText: 'text-blue-600',
    accentBorder: 'border-blue-300',
    btnPrimary: 'bg-blue-600 hover:bg-blue-700 text-white shadow-xs',
    badgeBg: 'bg-blue-50',
    badgeText: 'text-blue-700',
    badgeBorder: 'border-blue-200',
    previewColors: {
      bg: '#F8FAFC',
      card: '#FFFFFF',
      border: '#E2E8F0',
      accent: '#2563EB',
      text: '#0F172A'
    },
    contrastRatio: '13.8:1 (AAA)',
    recommendationNote: 'Ideal for recruiters reviewing in bright daylight, executive presentations, and clean print.'
  },
  emerald: {
    id: 'emerald',
    name: 'Obsidian & Matrix Emerald',
    tagline: 'High-contrast charcoal with vibrant terminal emerald green',
    isDark: true,
    bgMain: 'bg-[#090C0B]',
    bgSecondary: 'bg-[#111714]',
    bgCard: 'bg-[#111714]/90',
    bgCardHover: 'hover:bg-[#16211C]',
    borderMain: 'border-[#1C2822]',
    borderHover: 'hover:border-[#283C33]',
    textPrimary: 'text-[#F0FDF4]',
    textSecondary: 'text-[#8BA496]',
    textMuted: 'text-[#5C7567]',
    accentColor: '#10B981',
    accentBg: 'bg-emerald-600',
    accentText: 'text-emerald-400',
    accentBorder: 'border-emerald-500/30',
    btnPrimary: 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-xs',
    badgeBg: 'bg-emerald-950/60',
    badgeText: 'text-emerald-300',
    badgeBorder: 'border-emerald-800/50',
    previewColors: {
      bg: '#090C0B',
      card: '#111714',
      border: '#1C2822',
      accent: '#10B981',
      text: '#F0FDF4'
    },
    contrastRatio: '14.6:1 (AAA)',
    recommendationNote: 'Classic developer terminal look. Accentuates algorithms, Python systems, and backend security.'
  },
  sapphire: {
    id: 'sapphire',
    name: 'Abyssal Navy & Glacier Cyan',
    tagline: 'Midnight oceanic navy with luminous glacier cyan highlights',
    isDark: true,
    bgMain: 'bg-[#060B14]',
    bgSecondary: 'bg-[#0B1324]',
    bgCard: 'bg-[#0B1324]/90',
    bgCardHover: 'hover:bg-[#0F1C36]',
    borderMain: 'border-[#16233B]',
    borderHover: 'hover:border-[#22365A]',
    textPrimary: 'text-[#F0F9FF]',
    textSecondary: 'text-[#8CA3BF]',
    textMuted: 'text-[#5B718D]',
    accentColor: '#06B6D4',
    accentBg: 'bg-cyan-600',
    accentText: 'text-cyan-400',
    accentBorder: 'border-cyan-500/30',
    btnPrimary: 'bg-cyan-600 hover:bg-cyan-500 text-white shadow-xs',
    badgeBg: 'bg-cyan-950/60',
    badgeText: 'text-cyan-300',
    badgeBorder: 'border-cyan-800/50',
    previewColors: {
      bg: '#060B14',
      card: '#0B1324',
      border: '#16233B',
      accent: '#06B6D4',
      text: '#F0F9FF'
    },
    contrastRatio: '14.8:1 (AAA)',
    recommendationNote: 'Deep AI & data science atmosphere. Calming, focused, and mathematically high contrast.'
  },
  amber: {
    id: 'amber',
    name: 'Espresso & Burnished Amber',
    tagline: 'Warm dark roast basalt with golden honey amber accents',
    isDark: true,
    bgMain: 'bg-[#12100E]',
    bgSecondary: 'bg-[#1C1815]',
    bgCard: 'bg-[#1C1815]/90',
    bgCardHover: 'hover:bg-[#25201C]',
    borderMain: 'border-[#2D251F]',
    borderHover: 'hover:border-[#3E342B]',
    textPrimary: 'text-[#FAF5F0]',
    textSecondary: 'text-[#A89C92]',
    textMuted: 'text-[#73685F]',
    accentColor: '#F59E0B',
    accentBg: 'bg-amber-600',
    accentText: 'text-amber-400',
    accentBorder: 'border-amber-500/30',
    btnPrimary: 'bg-amber-600 hover:bg-amber-500 text-white shadow-xs',
    badgeBg: 'bg-amber-950/60',
    badgeText: 'text-amber-300',
    badgeBorder: 'border-amber-800/50',
    previewColors: {
      bg: '#12100E',
      card: '#1C1815',
      border: '#2D251F',
      accent: '#F59E0B',
      text: '#FAF5F0'
    },
    contrastRatio: '13.9:1 (AAA)',
    recommendationNote: 'Sophisticated, human-centric warmth. Removes eye strain during prolonged code reviews.'
  },
  monochrome: {
    id: 'monochrome',
    name: 'Titanium Graphite & Platinum',
    tagline: 'Pure monochromatic carbon precision with high-contrast platinum white',
    isDark: true,
    bgMain: 'bg-[#0A0A0A]',
    bgSecondary: 'bg-[#141414]',
    bgCard: 'bg-[#141414]/90',
    bgCardHover: 'hover:bg-[#1C1C1C]',
    borderMain: 'border-[#262626]',
    borderHover: 'hover:border-[#383838]',
    textPrimary: 'text-[#FFFFFF]',
    textSecondary: 'text-[#A3A3A3]',
    textMuted: 'text-[#666666]',
    accentColor: '#E2E8F0',
    accentBg: 'bg-neutral-100',
    accentText: 'text-neutral-200',
    accentBorder: 'border-neutral-700',
    btnPrimary: 'bg-white hover:bg-neutral-200 text-neutral-900 font-semibold shadow-xs',
    badgeBg: 'bg-neutral-900',
    badgeText: 'text-neutral-200',
    badgeBorder: 'border-neutral-700',
    previewColors: {
      bg: '#0A0A0A',
      card: '#141414',
      border: '#262626',
      accent: '#E2E8F0',
      text: '#FFFFFF'
    },
    contrastRatio: '15.1:1 (AAA)',
    recommendationNote: 'Ultra-minimalist and distraction-free. Lets your engineering accomplishments speak purely.'
  }
};

const THEME_STORAGE_KEY = 'asha_portfolio_theme_id_v2';

interface ThemeContextType {
  themeId: PortfolioThemeId;
  theme: ThemeColors;
  setThemeId: (id: PortfolioThemeId) => void;
  isThemePickerOpen: boolean;
  setIsThemePickerOpen: (open: boolean) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const PortfolioThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [themeId, setThemeIdState] = useState<PortfolioThemeId>(() => {
    try {
      const saved = localStorage.getItem(THEME_STORAGE_KEY) as PortfolioThemeId;
      if (saved && PORTFOLIO_THEMES[saved]) {
        return saved;
      }
    } catch (e) {
      console.error(e);
    }
    return 'midnight';
  });

  const [isThemePickerOpen, setIsThemePickerOpen] = useState(false);

  const setThemeId = (id: PortfolioThemeId) => {
    setThemeIdState(id);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, id);
    } catch (e) {
      console.error(e);
    }
  };

  const theme = PORTFOLIO_THEMES[themeId] || PORTFOLIO_THEMES.midnight;

  return (
    <ThemeContext.Provider
      value={{
        themeId,
        theme,
        setThemeId,
        isThemePickerOpen,
        setIsThemePickerOpen
      }}
    >
      <div className={`transition-colors duration-300 ${theme.bgMain} ${theme.textPrimary}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const usePortfolioTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('usePortfolioTheme must be used within a PortfolioThemeProvider');
  }
  return ctx;
};
