import React from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { usePortfolioTheme } from '../../context/PortfolioThemeContext';
import { GraduationCap, Award, Calendar, MapPin, CheckCircle, BookOpen, ExternalLink, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export const EducationCertifications: React.FC = () => {
  const { education, certifications, workshops } = PORTFOLIO_DATA;
  const { theme } = usePortfolioTheme();

  return (
    <section id="education" className={`py-16 md:py-24 border-b ${
      theme.isDark ? 'border-slate-900' : 'border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div>
              <div
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider mb-1.5"
                style={{ color: theme.accentColor }}
              >
                <GraduationCap className="w-4 h-4" />
                <span>Academic Foundation</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Education
              </h2>
            </div>

            <div className="space-y-4">
              {education.map((item) => (
                <motion.div
                  key={item.id}
                  whileHover={{ y: -3 }}
                  className={`p-6 rounded-2xl border transition-all ${
                    theme.isDark
                      ? 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
                      : 'bg-white border-slate-200 shadow-xs hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span
                      className="text-[10px] font-mono px-2 py-0.5 rounded-full border"
                      style={{
                        backgroundColor: `${theme.accentColor}15`,
                        color: theme.accentColor,
                        borderColor: `${theme.accentColor}30`
                      }}
                    >
                      {item.period}
                    </span>
                    <span className="text-xs font-bold text-emerald-400 font-mono">
                      {item.scoreType}: {item.score}
                    </span>
                  </div>

                  <h3 className="text-base font-bold">
                    {item.institution}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold mt-0.5" style={{ color: theme.accentColor }}>
                    {item.degree}
                  </p>

                  <div className="flex items-center gap-1 text-[11px] opacity-60 mt-1 mb-2">
                    <MapPin className="w-3 h-3" />
                    <span>{item.location}</span>
                  </div>

                  {item.highlights && (
                    <p className={`text-xs leading-relaxed border-t pt-2 mt-2 ${
                      theme.isDark ? 'border-slate-800 text-slate-400' : 'border-slate-100 text-slate-600'
                    }`}>
                      {item.highlights}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Workshops & Research */}
            <div className="pt-2">
              <h3 className="text-sm font-bold flex items-center gap-2 mb-3">
                <BookOpen className="w-4 h-4" style={{ color: theme.accentColor }} />
                <span>Academic Workshops &amp; Applied Research</span>
              </h3>
              <div className="space-y-2.5">
                {workshops.map((w, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.01 }}
                    className={`p-4 rounded-xl border text-xs transition-colors ${
                      theme.isDark ? 'bg-slate-900/50 border-slate-850' : 'bg-slate-50 border-slate-200'
                    }`}
                  >
                    <div className="font-semibold flex items-center justify-between">
                      <span>• {w.title}</span>
                      <span className="text-[10px] opacity-60 font-mono">{w.date}</span>
                    </div>
                    <div className="text-[11px] opacity-75 mt-0.5">
                      {w.org}
                    </div>
                    <p className="text-[11px] opacity-70 mt-1">
                      {w.details}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-7 space-y-6"
          >
            <div>
              <div
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider mb-1.5"
                style={{ color: theme.accentColor }}
              >
                <Award className="w-4 h-4" />
                <span>Industry Credentials</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Verified Certifications
              </h2>
              <p className={`text-xs sm:text-sm mt-1 ${theme.isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Official certificates in Cloud Infrastructure, Data Science, AI/ML pipelines, and Mobile Engineering.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {certifications.map((cert) => (
                <motion.div
                  key={cert.id}
                  whileHover={{ y: -3 }}
                  className={`p-5 rounded-xl border transition-all flex flex-col justify-between ${
                    theme.isDark
                      ? 'bg-slate-900/70 border-slate-800 hover:border-slate-700 hover:shadow-md'
                      : 'bg-white border-slate-200 shadow-xs hover:border-slate-300 hover:shadow-sm'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                        theme.isDark ? 'bg-slate-950 text-slate-400 border-slate-850' : 'bg-slate-50 text-slate-600 border-slate-200'
                      }`}>
                        {cert.category}
                      </span>
                      <span className="text-[10px] font-mono opacity-60">
                        {cert.date}
                      </span>
                    </div>
                    <h3 className="text-xs sm:text-sm font-bold leading-snug">
                      {cert.name}
                    </h3>
                  </div>

                  <div className="flex items-center justify-between text-xs font-medium mt-3 pt-3 border-t border-slate-800/40">
                    <span style={{ color: theme.accentColor }}>{cert.issuer}</span>
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
