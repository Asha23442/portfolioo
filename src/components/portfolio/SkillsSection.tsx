import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { usePortfolioTheme } from '../../context/PortfolioThemeContext';
import { Cpu, CheckCircle, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface SkillGroup {
  category: string;
  skills: string[];
}

export const SkillsSection: React.FC = () => {
  const { theme } = usePortfolioTheme();
  const [selectedGroup, setSelectedGroup] = useState<string>('All');

  const groups = ['All', ...PORTFOLIO_DATA.skills.map((c: SkillGroup) => c.category)];

  const displayedCategories =
    selectedGroup === 'All'
      ? PORTFOLIO_DATA.skills
      : PORTFOLIO_DATA.skills.filter((c: SkillGroup) => c.category === selectedGroup);

  return (
    <section id="skills" className={`py-16 md:py-24 border-b ${
      theme.isDark ? 'border-slate-900' : 'border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider mb-1.5"
              style={{ color: theme.accentColor }}
            >
              <Cpu className="w-4 h-4" />
              <span>Technical Competencies</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Skills &amp; Core Technologies
            </h2>
            <p className={`text-sm mt-1 max-w-xl ${theme.isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Mastery and practical production experience across programming languages, AI-ML pipelines, mobile apps, and cloud tools.
            </p>
          </div>

          {/* Filter Pills */}
          <div className={`flex flex-wrap items-center gap-1 p-1 rounded-xl border self-start md:self-auto ${
            theme.isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-100 border-slate-200'
          }`}>
            {groups.map((group: string) => {
              const isActive = selectedGroup === group;
              return (
                <button
                  key={group}
                  type="button"
                  onClick={() => setSelectedGroup(group)}
                  className="relative px-3 py-1.5 rounded-lg text-xs font-medium transition-colors"
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeSkillGroup"
                      className="absolute inset-0 rounded-lg shadow-xs"
                      style={{ backgroundColor: theme.accentColor }}
                      transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                    />
                  )}
                  <span className={`relative z-10 ${
                    isActive
                      ? 'text-white font-semibold'
                      : theme.isDark ? 'text-slate-400 hover:text-slate-200' : 'text-slate-600 hover:text-slate-900'
                  }`}>
                    {group}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Skill Category Cards with Motion */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {displayedCategories.map((cat: SkillGroup) => (
              <motion.div
                key={cat.category}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -3 }}
                className={`p-6 rounded-2xl border transition-all ${
                  theme.isDark
                    ? 'bg-slate-900/70 border-slate-800 hover:border-slate-750 hover:shadow-lg'
                    : 'bg-white border-slate-200 shadow-xs hover:border-slate-300 hover:shadow-md'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className={`text-base font-bold ${theme.isDark ? 'text-white' : 'text-slate-900'}`}>
                    {cat.category}
                  </h3>
                  <span
                    className="text-[10px] font-mono px-2 py-0.5 rounded-full border"
                    style={{
                      backgroundColor: `${theme.accentColor}12`,
                      color: theme.accentColor,
                      borderColor: `${theme.accentColor}30`
                    }}
                  >
                    {cat.skills.length} skills
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill: string) => (
                    <motion.div
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium border transition-colors ${
                        theme.isDark
                          ? 'bg-slate-950 text-slate-200 border-slate-800 hover:border-slate-700'
                          : 'bg-slate-50 text-slate-800 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <CheckCircle className="w-3 h-3" style={{ color: theme.accentColor }} />
                      <span>{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Highlighted Proficiency Summary */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`mt-10 p-5 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-4 ${
            theme.isDark ? 'bg-slate-900/40 border-slate-850' : 'bg-slate-50 border-slate-200'
          }`}
        >
          <div className="flex items-center gap-3 text-xs">
            <Award className="w-5 h-5 shrink-0" style={{ color: theme.accentColor }} />
            <div>
              <span className="font-bold">Verified Production Standards:</span> Python 3, Java 17+, CNN Image Processing, Android Jetpack, Git CI/CD, and Oracle Cloud Infrastructure.
            </div>
          </div>
          <div className="text-[11px] opacity-70 font-mono">
            Full-Stack &amp; AI-ML Capable
          </div>
        </motion.div>
      </div>
    </section>
  );
};
