import React from 'react';
import { usePortfolioTheme, PORTFOLIO_THEMES, PortfolioThemeId } from '../../context/PortfolioThemeContext';
import { Palette, Check, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const ThemePickerModal: React.FC = () => {
  const { themeId, setThemeId, isThemePickerOpen, setIsThemePickerOpen } = usePortfolioTheme();

  if (!isThemePickerOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.2 }}
          className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-4"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-blue-950 text-blue-400 border border-blue-800/60">
                <Palette className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Curated Color Combinations</h3>
                <p className="text-xs text-slate-400">Hand-calibrated for high contrast, zero eye strain, and executive engineering presence</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsThemePickerOpen(false)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Recommended Callout Banner */}
          <div className="p-3 rounded-xl bg-blue-950/40 border border-blue-800/50 flex items-start gap-2.5 text-xs text-blue-200">
            <Sparkles className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <span className="font-semibold text-white">Recommended Choice: </span> 
              <span className="font-medium text-blue-300">Obsidian &amp; Cobalt</span> is chosen as the gold standard for software engineering and AI developers due to its 14.2:1 AAA contrast ratio and distraction-free visual depth.
            </p>
          </div>

          {/* Theme Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[60vh] overflow-y-auto pr-1">
            {(Object.keys(PORTFOLIO_THEMES) as PortfolioThemeId[]).map((id) => {
              const t = PORTFOLIO_THEMES[id];
              const isSelected = themeId === id;

              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => {
                    setThemeId(id);
                    setIsThemePickerOpen(false);
                  }}
                  className={`p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between relative group ${
                    isSelected
                      ? 'border-blue-500 bg-slate-800/90 shadow-md shadow-blue-500/10'
                      : 'border-slate-800 bg-slate-950 hover:border-slate-700 hover:bg-slate-900/60'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <span
                          className="w-3.5 h-3.5 rounded-full ring-2 ring-slate-800 shadow-xs"
                          style={{ backgroundColor: t.accentColor }}
                        />
                        <span className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
                          {t.name}
                        </span>
                      </div>
                      {isSelected && (
                        <span className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs">
                          <Check className="w-3 h-3" />
                        </span>
                      )}
                    </div>

                    <p className="text-[11.5px] text-slate-400 leading-snug mb-2.5">
                      {t.tagline}
                    </p>

                    {/* Visual Color Palette Swatches */}
                    <div className="flex items-center gap-1.5 mb-2.5">
                      <span className="text-[10px] text-slate-500 font-mono">Palette:</span>
                      <div className="flex items-center gap-1 p-1 rounded-md bg-slate-900 border border-slate-800">
                        <span
                          className="w-3.5 h-3.5 rounded-xs border border-white/20"
                          style={{ backgroundColor: t.previewColors.bg }}
                          title={`Canvas: ${t.previewColors.bg}`}
                        />
                        <span
                          className="w-3.5 h-3.5 rounded-xs border border-white/20"
                          style={{ backgroundColor: t.previewColors.card }}
                          title={`Surface: ${t.previewColors.card}`}
                        />
                        <span
                          className="w-3.5 h-3.5 rounded-xs border border-white/20"
                          style={{ backgroundColor: t.previewColors.border }}
                          title={`Border: ${t.previewColors.border}`}
                        />
                        <span
                          className="w-3.5 h-3.5 rounded-xs border border-white/20"
                          style={{ backgroundColor: t.previewColors.accent }}
                          title={`Accent: ${t.previewColors.accent}`}
                        />
                        <span
                          className="w-3.5 h-3.5 rounded-xs border border-white/20"
                          style={{ backgroundColor: t.previewColors.text }}
                          title={`Text: ${t.previewColors.text}`}
                        />
                      </div>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-900 text-emerald-400 border border-emerald-900/40">
                        {t.contrastRatio}
                      </span>
                    </div>

                    <p className="text-[10.5px] text-slate-500 italic leading-tight">
                      {t.recommendationNote}
                    </p>
                  </div>

                  <div className="mt-3 pt-2 border-t border-slate-850 flex items-center justify-between text-[10.5px]">
                    <span className="px-1.5 py-0.5 rounded bg-slate-900 text-slate-400 font-mono">
                      {t.isDark ? 'Dark Mode' : 'Light Mode'}
                    </span>
                    <span
                      className="px-1.5 py-0.5 rounded font-mono font-medium"
                      style={{ color: t.accentColor, backgroundColor: `${t.accentColor}18` }}
                    >
                      {t.accentColor}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="pt-2 flex items-center justify-between text-[11px] text-slate-500">
            <span>Themes are remembered on this browser</span>
            <button
              type="button"
              onClick={() => setIsThemePickerOpen(false)}
              className="text-xs font-semibold text-blue-400 hover:underline"
            >
              Done
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
