import React from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { usePortfolioTheme } from '../../context/PortfolioThemeContext';
import { Github, Linkedin, Mail, ArrowUp, Palette } from 'lucide-react';
import { motion } from 'motion/react';

export const Footer: React.FC = () => {
  const { theme, setIsThemePickerOpen } = usePortfolioTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`border-t py-12 text-xs transition-colors ${
      theme.isDark ? 'border-slate-900 bg-slate-950/80 text-slate-400' : 'border-slate-200 bg-white text-slate-600'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2">
            <span className={`font-bold text-sm ${theme.isDark ? 'text-white' : 'text-slate-900'}`}>
              {PORTFOLIO_DATA.personal.name}
            </span>
            <span className="opacity-40">•</span>
            <span>{PORTFOLIO_DATA.personal.role}</span>
          </div>
          <p className="text-[11px] opacity-60 mt-1">
            Engineered with React, TypeScript, Tailwind CSS &amp; Motion • Designed around verified credentials &amp; 25 GitHub projects.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => setIsThemePickerOpen(true)}
            className="flex items-center gap-1.5 opacity-70 hover:opacity-100 transition-opacity"
            title="Theme Picker"
          >
            <Palette className="w-3.5 h-3.5" style={{ color: theme.accentColor }} />
            <span>Theme: {theme.name}</span>
          </button>

          <div className={`w-px h-3.5 ${theme.isDark ? 'bg-slate-800' : 'bg-slate-200'}`} />

          <a
            href={PORTFOLIO_DATA.personal.github}
            target="_blank"
            rel="noreferrer"
            className="opacity-70 hover:opacity-100 transition-opacity"
            title="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={PORTFOLIO_DATA.personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="opacity-70 hover:opacity-100 transition-opacity"
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${PORTFOLIO_DATA.personal.email}`}
            className="opacity-70 hover:opacity-100 transition-opacity"
            title="Email"
          >
            <Mail className="w-4 h-4" />
          </a>

          <div className={`w-px h-3.5 ${theme.isDark ? 'bg-slate-800' : 'bg-slate-200'}`} />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            onClick={scrollToTop}
            className={`flex items-center gap-1 p-1.5 rounded-lg border transition-colors ${
              theme.isDark
                ? 'bg-slate-900 border-slate-800 hover:bg-slate-800 text-slate-300'
                : 'bg-slate-100 border-slate-200 hover:bg-slate-200 text-slate-700'
            }`}
            title="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};
