import React from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { usePortfolioTheme } from '../../context/PortfolioThemeContext';
import { Code2, Cpu, Smartphone, Cloud, CheckCircle, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export const AboutSection: React.FC = () => {
  const { about } = PORTFOLIO_DATA;
  const { theme } = usePortfolioTheme();

  const pillarIcons = [Code2, Cpu, Smartphone, Cloud];

  return (
    <section id="about" className={`py-16 md:py-24 border-b ${
      theme.isDark ? 'border-slate-900' : 'border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-4"
          >
            <div
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider mb-1"
              style={{ color: theme.accentColor }}
            >
              <Sparkles className="w-4 h-4" />
              <span>Background &amp; Philosophy</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-snug">
              {about.heading}
            </h2>

            <div className={`space-y-3 text-sm leading-relaxed ${
              theme.isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>
              {about.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="pt-2">
              <div className={`p-5 rounded-2xl border ${
                theme.isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200 shadow-xs'
              }`}>
                <div className={`text-xs font-semibold uppercase tracking-wider mb-2.5 ${
                  theme.isDark ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  Academic Focus Areas:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                  {[
                    'Data Structures & Algorithms',
                    'Machine Learning Pipelines',
                    'Object-Oriented Design (OOP)',
                    'Cloud Architecture (OCI)'
                  ].map((topic) => (
                    <div key={topic} className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 shrink-0" style={{ color: theme.accentColor }} />
                      <span className={theme.isDark ? 'text-slate-300' : 'text-slate-700'}>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 4 Engineering Pillars with Staggered Entrance */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {about.pillars.map((pillar, i) => {
              const Icon = pillarIcons[i % pillarIcons.length];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className={`p-6 rounded-2xl border transition-all flex flex-col justify-between ${
                    theme.isDark
                      ? 'bg-slate-900/70 border-slate-800 hover:border-slate-700 hover:shadow-lg'
                      : 'bg-white border-slate-200 shadow-xs hover:border-slate-300 hover:shadow-md'
                  }`}
                >
                  <div>
                    <div
                      className="w-11 h-11 rounded-xl border flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                      style={{
                        backgroundColor: `${theme.accentColor}18`,
                        borderColor: `${theme.accentColor}35`,
                        color: theme.accentColor
                      }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold mb-2">
                      {pillar.title}
                    </h3>
                    <p className={`text-xs sm:text-sm leading-relaxed ${
                      theme.isDark ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                      {pillar.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
