import React, { useState, useMemo } from 'react';
import { PORTFOLIO_DATA, PortfolioProject } from '../../data/portfolioData';
import { usePortfolioTheme } from '../../context/PortfolioThemeContext';
import { ExternalLink, Github, FolderGit2, Star, CheckCircle2, Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const ProjectsSection: React.FC = () => {
  const { theme } = usePortfolioTheme();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalProject, setActiveModalProject] = useState<PortfolioProject | null>(null);

  const categories = ['All', 'AI/ML', 'Mobile', 'Web', 'Systems'];

  const filteredProjects = useMemo(() => {
    return PORTFOLIO_DATA.projects.filter((p) => {
      const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const matchesSearch =
        p.title.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.technologies.some((t) => t.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="projects" className={`py-16 md:py-24 border-b ${
      theme.isDark ? 'border-slate-900' : 'border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Title & Live Search */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <div
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider mb-1.5"
              style={{ color: theme.accentColor }}
            >
              <FolderGit2 className="w-4 h-4" />
              <span>Engineered Work</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Featured Software Projects
            </h2>
            <p className={`text-sm mt-1 max-w-xl ${theme.isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Authentic applications engineered across Artificial Intelligence, Machine Learning, Android mobility, and Full-Stack systems.
            </p>
          </div>

          {/* Search & Category Filter Controls */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Live Search Bar */}
            <div className="relative">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search Python, Android, React..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`pl-8 pr-8 py-1.5 text-xs rounded-xl border w-full sm:w-56 focus:outline-hidden transition-all ${
                  theme.isDark
                    ? 'bg-slate-900 border-slate-800 text-slate-200 focus:border-blue-500 placeholder:text-slate-500'
                    : 'bg-white border-slate-300 text-slate-800 focus:border-blue-600 placeholder:text-slate-400 shadow-xs'
                }`}
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className={`flex flex-wrap items-center gap-1 p-1 rounded-xl border ${
              theme.isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-100 border-slate-200'
            }`}>
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className="relative px-3 py-1.5 rounded-lg text-xs font-medium transition-colors"
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeCategoryPill"
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
                      {cat === 'All' ? 'All' : cat}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Projects Grid with layout animation */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -4 }}
                className={`p-5 rounded-2xl border transition-all flex flex-col justify-between group ${
                  theme.isDark
                    ? 'bg-slate-900/80 border-slate-800 hover:border-slate-700 hover:shadow-xl'
                    : 'bg-white border-slate-200 shadow-xs hover:border-slate-300 hover:shadow-lg'
                }`}
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span
                      className="text-[10px] font-mono px-2 py-0.5 rounded-full border"
                      style={{
                        backgroundColor: `${theme.accentColor}15`,
                        color: theme.accentColor,
                        borderColor: `${theme.accentColor}30`
                      }}
                    >
                      {project.category}
                    </span>
                    <div className="flex items-center gap-1">
                      {project.featured && (
                        <span className="flex items-center gap-0.5 text-[10px] font-medium text-amber-400 bg-amber-950/40 px-2 py-0.5 rounded-full border border-amber-800/40">
                          <Star className="w-2.5 h-2.5 fill-current" /> Featured
                        </span>
                      )}
                    </div>
                  </div>

                  <h3 className={`text-lg font-bold transition-colors ${
                    theme.isDark ? 'text-white group-hover:text-blue-400' : 'text-slate-900 group-hover:text-blue-600'
                  }`}>
                    {project.title}
                  </h3>
                  <p className="text-xs font-medium mb-3 opacity-80" style={{ color: theme.accentColor }}>
                    {project.tagline}
                  </p>

                  <p className={`text-xs leading-relaxed mb-4 ${
                    theme.isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className={`space-y-1.5 mb-5 border-t pt-3 ${
                    theme.isDark ? 'border-slate-800' : 'border-slate-100'
                  }`}>
                    {project.highlights.map((bullet, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-[11.5px] leading-snug">
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: theme.accentColor }} />
                        <span className={theme.isDark ? 'text-slate-300' : 'text-slate-700'}>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer: Tags and links */}
                <div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className={`text-[10px] px-2 py-0.5 rounded font-mono border ${
                          theme.isDark
                            ? 'bg-slate-950 text-slate-400 border-slate-850'
                            : 'bg-slate-50 text-slate-600 border-slate-200'
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className={`flex items-center justify-between pt-3 border-t ${
                    theme.isDark ? 'border-slate-800' : 'border-slate-100'
                  }`}>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold hover:opacity-80 transition-opacity"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code Repository</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => setActiveModalProject(project)}
                      className="text-xs font-medium hover:underline"
                      style={{ color: theme.accentColor }}
                    >
                      Architecture & Specs
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-400 text-sm">No projects matching your search criteria.</p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-2 text-xs text-blue-500 font-semibold hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* GitHub 25 Repos Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`mt-12 p-6 rounded-2xl border flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
            theme.isDark
              ? 'bg-gradient-to-r from-slate-900 to-slate-900/60 border-slate-800'
              : 'bg-gradient-to-r from-slate-100 to-slate-50 border-slate-200 shadow-xs'
          }`}
        >
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border ${
              theme.isDark ? 'bg-slate-800 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-800 shadow-xs'
            }`}>
              <Github className="w-6 h-6" />
            </div>
            <div>
              <div className="text-base font-bold">
                Explore All 25 Public Repositories
              </div>
              <p className={`text-xs mt-0.5 ${theme.isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Discover additional utilities, machine learning notebooks, algorithmic implementations, and backend modules on Asha H's GitHub.
              </p>
            </div>
          </div>
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href={PORTFOLIO_DATA.personal.github}
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-xs border shrink-0 self-start sm:self-auto transition-colors ${
              theme.isDark
                ? 'bg-slate-800 hover:bg-slate-700 text-white border-slate-700'
                : 'bg-white hover:bg-slate-50 text-slate-900 border-slate-300 shadow-xs'
            }`}
          >
            <span>Visit github.com/Asha23442</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </motion.a>
        </motion.div>
      </div>

      {/* Project Details Modal with motion */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full p-6 space-y-4 shadow-2xl relative text-slate-100"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-950 text-blue-300 border border-blue-800">
                    {activeModalProject.category}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-1">
                    {activeModalProject.title}
                  </h3>
                  <p className="text-xs text-blue-400 font-medium">
                    {activeModalProject.tagline}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveModalProject(null)}
                  className="text-slate-400 hover:text-white p-1 text-sm font-bold"
                >
                  ✕
                </button>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                {activeModalProject.description}
              </p>

              <div>
                <div className="text-xs font-semibold text-slate-200 mb-2">
                  Engineering Highlights & Key Contributions:
                </div>
                <ul className="space-y-1.5">
                  {activeModalProject.highlights.map((h, i) => (
                    <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="text-xs font-semibold text-slate-200 mb-1.5">
                  Technologies & Frameworks:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {activeModalProject.technologies.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] px-2 py-0.5 rounded bg-slate-950 text-slate-300 border border-slate-800 font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                <a
                  href={activeModalProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-xl transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>View Repository</span>
                </a>

                <button
                  type="button"
                  onClick={() => setActiveModalProject(null)}
                  className="text-xs text-slate-400 hover:text-slate-200"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
