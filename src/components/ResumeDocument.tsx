import React from 'react';
import { ResumeData, ResumeCustomization, ThemeConfig } from '../types/resume';
import { Mail, Phone, MapPin, Globe, Linkedin, Github, ExternalLink } from 'lucide-react';

interface ResumeDocumentProps {
  data: ResumeData;
  theme: ThemeConfig;
  customization: ResumeCustomization;
  isPrintPreview?: boolean;
}

export const ResumeDocument: React.FC<ResumeDocumentProps> = ({
  data,
  theme,
  customization,
  isPrintPreview = false
}) => {
  const { personalInfo, summary, skillCategories, experience, projects, education, certifications, achievements } = data;
  const isDark = theme.isDark && !isPrintPreview;
  const isCompact = customization.spacing === 'compact';
  const isSidebarLayout = customization.layout === 'sidebar';

  // Typography font class
  const getFontFamilyClass = () => {
    switch (customization.font) {
      case 'serif':
        return 'font-[Merriweather]';
      case 'mono':
        return 'font-[Fira_Code]';
      case 'modern':
        return 'font-[Plus_Jakarta_Sans]';
      case 'sans':
      default:
        return 'font-[Inter]';
    }
  };

  const accentColorStyle = customization.accentColorHex
    ? { color: customization.accentColorHex, borderColor: customization.accentColorHex }
    : undefined;

  const accentBgStyle = customization.accentColorHex
    ? { backgroundColor: customization.accentColorHex }
    : undefined;

  // Header Component
  const renderHeader = () => (
    <header className={`border-b ${theme.borderSubtle} pb-4 mb-4 ${isCompact ? 'pb-3 mb-3' : 'pb-5 mb-5'}`}>
      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
        <div>
          <h1
            className={`text-2xl md:text-3xl font-bold tracking-tight uppercase ${theme.textPrimary}`}
            style={accentColorStyle}
          >
            {personalInfo.name}
          </h1>
          <p className={`text-sm md:text-base font-medium tracking-wide mt-0.5 ${theme.textSecondary}`}>
            {personalInfo.title}
          </p>
        </div>
        <div className={`flex items-center text-xs md:text-sm font-medium ${theme.textMuted}`}>
          <MapPin className="w-3.5 h-3.5 mr-1 inline opacity-75 shrink-0" />
          <span>{personalInfo.location}</span>
        </div>
      </div>

      {/* Contact & Links Bar */}
      <div className={`mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs ${theme.textSecondary}`}>
        {personalInfo.phone && (
          <a
            href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <Phone className="w-3.5 h-3.5 mr-1 opacity-70 shrink-0" />
            <span>{personalInfo.phone}</span>
          </a>
        )}
        {personalInfo.email && (
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center hover:opacity-80 transition-opacity underline-offset-2 hover:underline"
          >
            <Mail className="w-3.5 h-3.5 mr-1 opacity-70 shrink-0" />
            <span>{personalInfo.email}</span>
          </a>
        )}
        {personalInfo.github && (
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center hover:opacity-80 transition-opacity underline-offset-2 hover:underline"
          >
            <Github className="w-3.5 h-3.5 mr-1 opacity-70 shrink-0" />
            <span>github.com/Asha23442</span>
          </a>
        )}
        {personalInfo.linkedin && (
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center hover:opacity-80 transition-opacity underline-offset-2 hover:underline"
          >
            <Linkedin className="w-3.5 h-3.5 mr-1 opacity-70 shrink-0" />
            <span>LinkedIn</span>
          </a>
        )}
        {personalInfo.portfolio && (
          <a
            href={personalInfo.portfolio}
            target="_blank"
            rel="noreferrer"
            className="flex items-center hover:opacity-80 transition-opacity underline-offset-2 hover:underline"
          >
            <Globe className="w-3.5 h-3.5 mr-1 opacity-70 shrink-0" />
            <span>Portfolio</span>
          </a>
        )}
      </div>
    </header>
  );

  // Section Title Component
  const renderSectionHeading = (title: string) => (
    <div className={`flex items-center gap-2 mb-2 pb-1 border-b ${theme.borderSubtle}`}>
      <h2
        className={`text-xs md:text-sm font-bold uppercase tracking-wider ${theme.textPrimary}`}
        style={accentColorStyle}
      >
        {title}
      </h2>
      <div className="flex-1 h-px bg-current opacity-15" style={accentBgStyle} />
    </div>
  );

  // Summary Section
  const renderSummary = () => {
    if (!customization.visibleSections.summary || !summary) return null;
    return (
      <section className={`break-inside-avoid ${isCompact ? 'mb-3' : 'mb-4'}`}>
        {renderSectionHeading('Professional Summary')}
        <p className={`text-xs md:text-[13px] leading-relaxed text-justify ${theme.textSecondary}`}>
          {summary}
        </p>
      </section>
    );
  };

  // Technical Skills Section
  const renderSkills = () => {
    if (!customization.visibleSections.skills || !skillCategories.length) return null;
    return (
      <section className={`break-inside-avoid ${isCompact ? 'mb-3' : 'mb-4'}`}>
        {renderSectionHeading('Technical Skills')}
        <div className="space-y-1.5">
          {skillCategories.map((category) => (
            <div key={category.id} className="text-xs md:text-[13px] leading-snug flex flex-col sm:flex-row sm:items-baseline">
              <span className={`font-semibold sm:w-44 shrink-0 ${theme.textPrimary}`}>
                {category.name}:
              </span>
              <span className={`${theme.textSecondary} flex-1`}>
                {category.skills.join(', ')}
              </span>
            </div>
          ))}
        </div>
      </section>
    );
  };

  // Work Experience Section
  const renderExperience = () => {
    if (!customization.visibleSections.experience || !experience.length) return null;
    return (
      <section className={`break-inside-avoid ${isCompact ? 'mb-3' : 'mb-4'}`}>
        {renderSectionHeading('Work Experience & Internships')}
        <div className={isCompact ? 'space-y-3' : 'space-y-4'}>
          {experience.map((exp) => (
            <div key={exp.id} className="break-inside-avoid">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-0.5">
                <div className="flex flex-wrap items-center gap-1.5">
                  <h3 className={`text-xs md:text-[13px] font-bold ${theme.textPrimary}`}>
                    {exp.title}
                  </h3>
                  <span className={`text-xs font-semibold ${theme.textMuted}`}>|</span>
                  <span className={`text-xs md:text-[13px] font-medium ${theme.textSecondary}`}>
                    {exp.company}
                  </span>
                </div>
                <span className={`text-[11px] font-medium shrink-0 ${theme.textMuted}`}>
                  {exp.startDate} – {exp.endDate}
                </span>
              </div>
              <div className="text-[11px] text-neutral-500 mb-1 flex items-center gap-2">
                <span>{exp.location}</span>
                {exp.type && (
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 font-mono">
                    {exp.type}
                  </span>
                )}
              </div>
              <ul className="list-disc list-outside ml-4 space-y-0.5 text-xs md:text-[12.5px] leading-relaxed">
                {exp.bullets.map((bullet, idx) => (
                  <li key={idx} className={theme.textSecondary}>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    );
  };

  // Projects Section
  const renderProjects = () => {
    if (!customization.visibleSections.projects || !projects.length) return null;
    return (
      <section className={`break-inside-avoid ${isCompact ? 'mb-3' : 'mb-4'}`}>
        {renderSectionHeading('Technical Projects')}
        <div className={isCompact ? 'space-y-2.5' : 'space-y-3.5'}>
          {projects.map((project) => (
            <div key={project.id} className="break-inside-avoid">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className={`text-xs md:text-[13px] font-bold ${theme.textPrimary}`}>
                    {project.title}
                  </h3>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] text-blue-600 dark:text-blue-400 hover:underline print:text-neutral-800"
                    >
                      <ExternalLink className="w-2.5 h-2.5" />
                      <span>Code</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] text-emerald-600 dark:text-emerald-400 hover:underline"
                    >
                      <ExternalLink className="w-2.5 h-2.5" />
                      <span>Live</span>
                    </a>
                  )}
                </div>
                <div className={`text-[11px] font-mono shrink-0 ${theme.textMuted}`}>
                  [{project.technologies.slice(0, 4).join(', ')}]
                </div>
              </div>
              <p className={`text-xs md:text-[12px] italic text-neutral-500 mb-1`}>
                {project.description}
              </p>
              <ul className="list-disc list-outside ml-4 space-y-0.5 text-xs md:text-[12.5px] leading-relaxed">
                {project.bullets.map((bullet, idx) => (
                  <li key={idx} className={theme.textSecondary}>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    );
  };

  // Education Section
  const renderEducation = () => {
    if (!customization.visibleSections.education || !education.length) return null;
    return (
      <section className={`break-inside-avoid ${isCompact ? 'mb-3' : 'mb-4'}`}>
        {renderSectionHeading('Education')}
        <div className={isCompact ? 'space-y-2' : 'space-y-3'}>
          {education.map((item) => (
            <div key={item.id} className="break-inside-avoid">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5">
                <h3 className={`text-xs md:text-[13px] font-bold ${theme.textPrimary}`}>
                  {item.institution}
                </h3>
                <span className={`text-[11px] font-medium shrink-0 ${theme.textMuted}`}>
                  {item.startDate} – {item.endDate}
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between text-xs md:text-[12px]">
                <span className={`font-medium ${theme.textSecondary}`}>
                  {item.degree}
                </span>
                <span className={`font-semibold ${theme.textPrimary}`}>
                  {item.gradeLabel}: {item.grade}
                </span>
              </div>
              {item.details && (
                <p className={`text-[11px] text-neutral-500 mt-0.5 leading-snug`}>
                  {item.details}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
    );
  };

  // Certifications Section
  const renderCertifications = () => {
    if (!customization.visibleSections.certifications || !certifications.length) return null;
    return (
      <section className={`break-inside-avoid ${isCompact ? 'mb-3' : 'mb-4'}`}>
        {renderSectionHeading('Certifications')}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-xs md:text-[12px]">
          {certifications.map((cert) => (
            <div key={cert.id} className="flex items-baseline justify-between gap-2">
              <div className="truncate">
                <span className={`font-semibold ${theme.textPrimary}`}>• {cert.name}</span>
                <span className={`text-[11px] ml-1 ${theme.textMuted}`}>– {cert.issuer}</span>
              </div>
              <span className={`text-[10px] font-mono shrink-0 ${theme.textMuted}`}>
                {cert.date}
              </span>
            </div>
          ))}
        </div>
      </section>
    );
  };

  // Achievements Section
  const renderAchievements = () => {
    if (!customization.visibleSections.achievements || !achievements.length) return null;
    return (
      <section className={`break-inside-avoid ${isCompact ? 'mb-3' : 'mb-4'}`}>
        {renderSectionHeading('Academic Workshops & Achievements')}
        <div className="space-y-1.5 text-xs md:text-[12px]">
          {achievements.map((ach) => (
            <div key={ach.id} className="leading-snug">
              <span className={`font-semibold ${theme.textPrimary}`}>• {ach.title}</span>
              <span className={`text-[11px] font-medium ml-1.5 ${theme.textMuted}`}>
                [{ach.organization}, {ach.date}]
              </span>
              <p className={`text-[11.5px] ml-3 mt-0.5 ${theme.textSecondary}`}>
                {ach.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  };

  // Section renderer mapper
  const renderSectionById = (id: string) => {
    switch (id) {
      case 'summary':
        return renderSummary();
      case 'skills':
        return renderSkills();
      case 'experience':
        return renderExperience();
      case 'projects':
        return renderProjects();
      case 'education':
        return renderEducation();
      case 'certifications':
        return renderCertifications();
      case 'achievements':
        return renderAchievements();
      default:
        return null;
    }
  };

  return (
    <div
      id="resume-document"
      className={`relative w-full max-w-[850px] mx-auto transition-colors duration-200 ${getFontFamilyClass()} ${
        isDark ? 'bg-slate-950 text-slate-100' : `${theme.bgPage} text-neutral-900`
      } p-6 sm:p-8 md:p-10 shadow-xl print:shadow-none print:p-0 print:m-0 print:w-full print:max-w-none print:bg-white print:text-neutral-900 border ${
        isDark ? 'border-slate-800' : 'border-neutral-200'
      } print:border-none`}
    >
      {/* Header is always primary */}
      {renderHeader()}

      {/* Main Content Layout */}
      {!isSidebarLayout ? (
        // Single Column ATS Standard Layout
        <div className="space-y-1">
          {customization.sectionOrder.map((sectionId) => (
            <React.Fragment key={sectionId}>
              {renderSectionById(sectionId)}
            </React.Fragment>
          ))}
        </div>
      ) : (
        // Modern 2-Column Layout
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main Column (7 cols) */}
          <div className="md:col-span-7 space-y-1">
            {renderSummary()}
            {renderExperience()}
            {renderProjects()}
          </div>

          {/* Sidebar Column (5 cols) */}
          <div className={`md:col-span-5 space-y-1 md:border-l ${theme.borderSubtle} md:pl-5`}>
            {renderSkills()}
            {renderEducation()}
            {renderCertifications()}
            {renderAchievements()}
          </div>
        </div>
      )}
    </div>
  );
};
