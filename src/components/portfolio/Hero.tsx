import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { usePortfolioTheme, PORTFOLIO_THEMES, PortfolioThemeId } from '../../context/PortfolioThemeContext';
import { ArrowRight, FileText, Github, Mail, MapPin, Terminal, Sparkles, Check, Copy, Palette } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeroProps {
  onOpenResume: () => void;
}

const ROLES = [
  'Software Engineer',
  'AI / ML Developer',
  'Android Application Engineer',
  'Python & Java Developer',
  'Full-Stack Solutions Builder'
];

const CODE_SNIPPET = `# Asha H — AI Diagnostic & Clinical Model Pipeline
import numpy as np
from sklearn.model_selection import cross_val_score
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Conv2D, Dense

class DiseaseDiagnosticPipeline:
    def __init__(self, candidate_cgpa=8.7):
        self.engineer = "Asha H (VVIT CSE 2022-2026)"
        self.certifications = ["Oracle OCI", "IBM Python Data Science"]
        self.accuracy_threshold = 0.94

    def predict_risk(self, patient_biomarkers):
        """Trained on medical radiographic and clinical dataset"""
        return {"status": "Analysis Complete", "confidence": 0.962}

# Ready for Software Engineering & AI-ML Opportunities
status = "Open to Technical Roles in Bangalore & Remote"`;

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const { personal } = PORTFOLIO_DATA;
  const { theme, themeId, setThemeId, setIsThemePickerOpen } = usePortfolioTheme();
  const [roleIndex, setRoleIndex] = useState(0);
  const [codeCopied, setCodeCopied] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(CODE_SNIPPET);
      setCodeCopied(true);
      setTimeout(() => setCodeCopied(false), 2000);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <section className={`relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 border-b ${
      theme.isDark ? 'border-[#1E293B]' : 'border-slate-200'
    }`}>
      {/* Subtle structural background grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20 -z-10"
        style={{
          backgroundImage: `radial-gradient(${theme.accentColor}22 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline, dynamic roles & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6 border ${
                theme.isDark
                  ? 'bg-slate-900/90 border-slate-800 text-slate-300'
                  : 'bg-white border-slate-200 text-slate-700 shadow-xs'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Technical Roles</span>
              <span className="opacity-40">•</span>
              <span className="flex items-center opacity-80">
                <MapPin className="w-3 h-3 mr-0.5 inline" /> {personal.location}
              </span>
            </motion.div>

            {/* Main Name & Title - Crisp High Contrast Typography */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Hi, I'm{' '}
              <span className={theme.isDark ? 'text-white' : 'text-slate-950'}>
                {personal.name}
              </span>
            </h1>

            {/* Dynamic Rotating Role */}
            <div className="mt-3 text-lg sm:text-2xl font-bold flex items-center gap-2 h-9 sm:h-10">
              <span className="opacity-60 font-mono text-sm sm:text-lg">&gt;</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="font-semibold"
                  style={{ color: theme.accentColor }}
                >
                  {ROLES[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Bio */}
            <p className={`mt-4 text-sm sm:text-base leading-relaxed ${
              theme.isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>
              {personal.bio}
            </p>

            {/* Tech Badges */}
            <div className="mt-6 flex flex-wrap items-center gap-1.5">
              <span className="text-xs opacity-70 flex items-center gap-1 mr-1">
                <Terminal className="w-3.5 h-3.5" style={{ color: theme.accentColor }} />
                <span>Primary Stack:</span>
              </span>
              {['Python', 'Java', 'Android Studio', 'Scikit-learn', 'Flask', 'React.js', 'MySQL', 'Firebase', 'Oracle Cloud'].map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.05, y: -1 }}
                  className={`text-xs px-2.5 py-1 rounded-lg font-mono border transition-colors ${
                    theme.isDark
                      ? 'bg-slate-900 border-slate-800 text-slate-300'
                      : 'bg-white border-slate-200 text-slate-800 shadow-xs'
                  }`}
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#projects"
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm shadow-sm transition-all ${theme.btnPrimary}`}
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="button"
                onClick={onOpenResume}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm border transition-all ${
                  theme.isDark
                    ? 'bg-slate-900 hover:bg-slate-850 text-slate-200 border-slate-800 hover:border-slate-700'
                    : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-300 shadow-xs'
                }`}
              >
                <FileText className="w-4 h-4" style={{ color: theme.accentColor }} />
                <span>View Full Resume</span>
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium border transition-colors ${
                  theme.isDark
                    ? 'bg-slate-950 hover:bg-slate-900 text-slate-300 border-slate-800'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200'
                }`}
              >
                <Github className="w-4 h-4" />
                <span>GitHub (25 Repos)</span>
              </motion.a>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-medium opacity-80 hover:opacity-100 transition-opacity"
              >
                <Mail className="w-4 h-4" />
                <span>Connect</span>
              </a>
            </div>

            {/* Curated Color Combination Quick Switcher */}
            <div className={`mt-8 pt-5 border-t flex flex-wrap items-center gap-3 ${
              theme.isDark ? 'border-slate-850' : 'border-slate-200'
            }`}>
              <div className="flex items-center gap-1.5 text-xs font-semibold">
                <Palette className="w-3.5 h-3.5" style={{ color: theme.accentColor }} />
                <span className={theme.isDark ? 'text-slate-300' : 'text-slate-700'}>
                  Curated Combinations:
                </span>
              </div>

              {/* Color Swatch Dots */}
              <div className={`flex items-center gap-1 p-1 rounded-xl border ${
                theme.isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200 shadow-2xs'
              }`}>
                {(Object.keys(PORTFOLIO_THEMES) as PortfolioThemeId[]).map((id) => {
                  const t = PORTFOLIO_THEMES[id];
                  const isSelected = themeId === id;
                  return (
                    <button
                      key={id}
                      type="button"
                      onClick={() => setThemeId(id)}
                      className={`relative p-1 rounded-lg transition-all ${
                        isSelected
                          ? 'ring-2 ring-blue-500 scale-110 bg-slate-800/80 shadow-xs'
                          : 'opacity-70 hover:opacity-100 hover:scale-105'
                      }`}
                      title={`${t.name} (${t.contrastRatio})`}
                    >
                      <span
                        className="w-3.5 h-3.5 rounded-sm block border border-white/20 shadow-2xs"
                        style={{ backgroundColor: t.accentColor }}
                      />
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-bold" style={{ color: theme.accentColor }}>
                  {theme.name}
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-900 text-emerald-400 border border-emerald-900/40">
                  {theme.contrastRatio}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setIsThemePickerOpen(true)}
                className="text-[11px] font-medium text-blue-400 hover:underline ml-auto"
              >
                Inspect Palette &amp; Contrast &rarr;
              </button>
            </div>
          </motion.div>

          {/* Right Column: Interactive Code Terminal Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className={`rounded-2xl border shadow-2xl overflow-hidden font-mono text-xs ${
              theme.isDark
                ? 'bg-slate-900/90 border-slate-800 text-slate-300'
                : 'bg-slate-900 border-slate-800 text-slate-200 shadow-xl'
            }`}>
              {/* Terminal Window Bar */}
              <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-[11px] text-slate-500 ml-2">asha_pipeline.py</span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyCode}
                  className="flex items-center gap-1 px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors text-[10px]"
                >
                  {codeCopied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Code Contents */}
              <div className="p-4 overflow-x-auto text-[11px] leading-relaxed max-h-[360px] bg-slate-950/60">
                <pre className="text-slate-300">
                  <code>{CODE_SNIPPET}</code>
                </pre>
              </div>

              {/* Terminal Footer Indicator */}
              <div className="px-4 py-2 bg-slate-950/90 border-t border-slate-800 flex items-center justify-between text-[10.5px] text-slate-500">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>Python 3.11 • CNN Trained</span>
                </div>
                <span>CGPA 8.7 / 10</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Strip with entrance animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`mt-14 pt-8 border-t grid grid-cols-2 md:grid-cols-4 gap-4 ${
            theme.isDark ? 'border-slate-900' : 'border-slate-200'
          }`}
        >
          {personal.stats.map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -3 }}
              className={`p-4 rounded-xl border transition-all ${
                theme.isDark
                  ? 'bg-slate-900/60 border-slate-850 hover:border-slate-700'
                  : 'bg-white border-slate-200 shadow-xs hover:border-slate-300'
              }`}
            >
              <div className="text-2xl sm:text-3xl font-extrabold font-mono tracking-tight" style={{ color: theme.accentColor }}>
                {stat.value}
              </div>
              <div className={`text-xs font-semibold mt-1 ${theme.isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                {stat.label}
              </div>
              <div className="text-[11px] opacity-60 mt-0.5">
                {stat.helper}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
