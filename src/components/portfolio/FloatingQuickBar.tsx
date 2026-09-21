import React, { useState, useEffect } from 'react';
import { usePortfolioTheme } from '../../context/PortfolioThemeContext';
import { Palette, FileText, ArrowUp, Mail, Check, Github } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

interface FloatingQuickBarProps {
  onOpenResume: () => void;
}

export const FloatingQuickBar: React.FC<FloatingQuickBarProps> = ({ onOpenResume }) => {
  const { theme, setIsThemePickerOpen } = usePortfolioTheme();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (e) {
      console.error(e);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2"
    >
      {/* Quick Action Pill */}
      <div className={`p-1.5 rounded-full border shadow-2xl backdrop-blur-md flex items-center gap-1 transition-colors ${
        theme.isDark
          ? 'bg-slate-900/90 border-slate-700 text-slate-200 shadow-slate-950/60'
          : 'bg-white/95 border-slate-300 text-slate-800 shadow-slate-400/20'
      }`}>
        {/* Theme Picker Trigger */}
        <button
          type="button"
          onClick={() => setIsThemePickerOpen(true)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
            theme.isDark
              ? 'hover:bg-slate-800 text-slate-200'
              : 'hover:bg-slate-100 text-slate-800'
          }`}
          title={`Theme: ${theme.name} (Click to change)`}
        >
          <span
            className="w-2.5 h-2.5 rounded-full ring-2 ring-slate-800"
            style={{ backgroundColor: theme.accentColor }}
          />
          <Palette className="w-3.5 h-3.5 opacity-70" />
          <span className="hidden sm:inline text-[11px]">{theme.name}</span>
        </button>

        {/* View Resume Button */}
        <button
          type="button"
          onClick={onOpenResume}
          className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${theme.btnPrimary}`}
          title="Open Official Resume"
        >
          <FileText className="w-3.5 h-3.5" />
          <span className="text-[11px]">Resume</span>
        </button>

        {/* Copy Email */}
        <button
          type="button"
          onClick={handleCopyEmail}
          className={`p-2 rounded-full transition-colors ${
            theme.isDark
              ? 'hover:bg-slate-800 text-slate-300 hover:text-white'
              : 'hover:bg-slate-100 text-slate-600 hover:text-slate-900'
          }`}
          title="Quick Copy Email"
        >
          {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Mail className="w-3.5 h-3.5" />}
        </button>

        {/* Scroll To Top */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              type="button"
              onClick={scrollToTop}
              className={`p-2 rounded-full transition-colors ${
                theme.isDark
                  ? 'hover:bg-slate-800 text-slate-300 hover:text-white'
                  : 'hover:bg-slate-100 text-slate-600 hover:text-slate-900'
              }`}
              title="Scroll to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
