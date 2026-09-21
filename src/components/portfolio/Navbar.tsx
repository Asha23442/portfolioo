import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { usePortfolioTheme } from '../../context/PortfolioThemeContext';
import { Github, Linkedin, FileText, Menu, X, Palette, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const { theme, themeId, setThemeId, setIsThemePickerOpen } = usePortfolioTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' }
  ];

  const toggleQuickLightDark = () => {
    if (theme.isDark) {
      setThemeId('light');
    } else {
      setThemeId('midnight');
    }
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`sticky top-0 z-40 backdrop-blur-md border-b transition-colors ${
        theme.isDark
          ? 'bg-slate-950/80 border-slate-800/80 text-slate-100'
          : 'bg-white/85 border-slate-200/80 text-slate-900 shadow-xs'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-2.5 group">
          <motion.div
            whileHover={{ scale: 1.05, rotate: 3 }}
            whileTap={{ scale: 0.95 }}
            className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-white shadow-md text-sm"
            style={{ backgroundColor: theme.accentColor }}
          >
            AH
          </motion.div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold tracking-tight text-base group-hover:text-blue-500 transition-colors">
                {PORTFOLIO_DATA.personal.name}
              </span>
              <span
                className="text-[10px] px-1.5 py-0.5 rounded font-mono font-medium border"
                style={{
                  backgroundColor: `${theme.accentColor}15`,
                  color: theme.accentColor,
                  borderColor: `${theme.accentColor}30`
                }}
              >
                dev
              </span>
            </div>
            <p className="text-[11px] opacity-70 hidden sm:block leading-none">
              {PORTFOLIO_DATA.personal.role}
            </p>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-5">
          <div className="flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                  theme.isDark
                    ? 'text-slate-300 hover:text-white hover:bg-slate-900'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className={`h-4 w-px ${theme.isDark ? 'bg-slate-800' : 'bg-slate-200'}`} />

          {/* Theme Switcher Button */}
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => setIsThemePickerOpen(true)}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-xs font-medium transition-all ${
                theme.isDark
                  ? 'border-slate-800 hover:border-slate-700 bg-slate-900 text-slate-300 hover:text-white'
                  : 'border-slate-200 hover:border-slate-300 bg-slate-100 text-slate-700 hover:text-slate-900'
              }`}
              title="Change Theme Palette"
            >
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: theme.accentColor }}
              />
              <span className="hidden lg:inline">{theme.name}</span>
              <Palette className="w-3.5 h-3.5 opacity-70" />
            </button>

            <button
              type="button"
              onClick={toggleQuickLightDark}
              className={`p-2 rounded-lg transition-colors ${
                theme.isDark
                  ? 'text-slate-400 hover:text-white hover:bg-slate-900'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
              title={theme.isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme.isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
            </button>
          </div>

          {/* Socials & Resume CTA */}
          <div className="flex items-center gap-2">
            <a
              href={PORTFOLIO_DATA.personal.github}
              target="_blank"
              rel="noreferrer"
              className={`p-2 rounded-lg transition-colors ${
                theme.isDark
                  ? 'text-slate-400 hover:text-white hover:bg-slate-900'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PORTFOLIO_DATA.personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className={`p-2 rounded-lg transition-colors ${
                theme.isDark
                  ? 'text-slate-400 hover:text-white hover:bg-slate-900'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="button"
              onClick={onOpenResume}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold shadow-sm transition-all ${theme.btnPrimary}`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </motion.button>
          </div>
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-1.5">
          <button
            type="button"
            onClick={() => setIsThemePickerOpen(true)}
            className={`p-2 rounded-lg ${
              theme.isDark ? 'text-slate-300 bg-slate-900' : 'text-slate-700 bg-slate-100'
            }`}
            title="Theme"
          >
            <Palette className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={onOpenResume}
            className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold ${theme.btnPrimary}`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-lg ${
              theme.isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
            }`}
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className={`md:hidden border-b px-4 pt-2 pb-4 space-y-2 overflow-hidden ${
              theme.isDark ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'
            }`}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 text-sm font-medium rounded-lg ${
                  theme.isDark
                    ? 'text-slate-300 hover:text-white hover:bg-slate-900'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className={`pt-2 border-t flex items-center justify-between ${
              theme.isDark ? 'border-slate-800' : 'border-slate-200'
            }`}>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsThemePickerOpen(true);
                }}
                className="flex items-center gap-1.5 text-xs font-semibold text-blue-500"
              >
                <Palette className="w-4 h-4" />
                <span>Theme: {theme.name}</span>
              </button>
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs opacity-80"
              >
                <Github className="w-4 h-4" />
                <span>GitHub (25 Repos)</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
