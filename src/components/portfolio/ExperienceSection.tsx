import React from 'react';
import { PORTFOLIO_DATA, PortfolioExperience } from '../../data/portfolioData';
import { usePortfolioTheme } from '../../context/PortfolioThemeContext';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export const ExperienceSection: React.FC = () => {
  const { theme } = usePortfolioTheme();

  return (
    <section id="experience" className={`py-16 md:py-24 border-b ${
      theme.isDark ? 'border-slate-900' : 'border-slate-200'
    }`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider mb-1.5"
            style={{ color: theme.accentColor }}
          >
            <Briefcase className="w-4 h-4" />
            <span>Career History</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Work Experience &amp; Internships
          </h2>
          <p className={`text-sm mt-1 ${theme.isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Professional engineering internships with hands-on responsibilities, verified deliverables, and measurable impact.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12" style={{ borderColor: `${theme.accentColor}35` }}>
          {PORTFOLIO_DATA.experiences.map((exp: PortfolioExperience, idx: number) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              className="relative"
            >
              {/* Pulsing Timeline Dot */}
              <div
                className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full border-2 bg-slate-950 flex items-center justify-center"
                style={{ borderColor: theme.accentColor }}
              >
                <motion.div
                  animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: theme.accentColor }}
                />
              </div>

              {/* Card */}
              <motion.div
                whileHover={{ y: -3 }}
                className={`p-6 sm:p-7 rounded-2xl border transition-all ${
                  theme.isDark
                    ? 'bg-slate-900/80 border-slate-800 hover:border-slate-700 shadow-lg'
                    : 'bg-white border-slate-200 shadow-xs hover:border-slate-300 hover:shadow-md'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-semibold mt-0.5 flex items-center gap-1.5" style={{ color: theme.accentColor }}>
                      <span>{exp.company}</span>
                      <span className="opacity-40">•</span>
                      <span className="text-xs font-normal opacity-80 flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className={`inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full border font-mono ${
                      theme.isDark ? 'bg-slate-950 text-slate-300 border-slate-850' : 'bg-slate-100 text-slate-700 border-slate-200'
                    }`}>
                      <Calendar className="w-3 h-3" />
                      <span>{exp.duration}</span>
                    </span>
                  </div>
                </div>

                <p className={`text-xs sm:text-sm mb-4 leading-relaxed ${theme.isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  {exp.summary}
                </p>

                {/* Achievements */}
                <div className="space-y-2 mb-5">
                  <div className="text-xs font-semibold uppercase tracking-wider opacity-60">
                    Key Achievements &amp; Responsibilities:
                  </div>
                  {exp.achievements.map((item: string, i: number) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: theme.accentColor }} />
                      <span className={theme.isDark ? 'text-slate-300' : 'text-slate-700'}>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/60">
                  {exp.technologies.map((tech: string) => (
                    <span
                      key={tech}
                      className={`text-[11px] px-2.5 py-0.5 rounded font-mono border ${
                        theme.isDark ? 'bg-slate-950 text-slate-400 border-slate-850' : 'bg-slate-50 text-slate-600 border-slate-200'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
