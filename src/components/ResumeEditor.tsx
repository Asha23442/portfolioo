import React, { useState } from 'react';
import { ResumeData, WorkExperience, ProjectItem, EducationItem, SkillCategory, CertificationItem } from '../types/resume';
import { Plus, Trash2, User, FileText, Code, Briefcase, FolderGit2, GraduationCap, Award, ChevronDown, ChevronUp } from 'lucide-react';

interface ResumeEditorProps {
  data: ResumeData;
  onChange: (updated: ResumeData) => void;
}

export const ResumeEditor: React.FC<ResumeEditorProps> = ({ data, onChange }) => {
  const [activeSection, setActiveSection] = useState<string>('personal');

  const updatePersonalInfo = (field: keyof ResumeData['personalInfo'], val: string) => {
    onChange({
      ...data,
      personalInfo: {
        ...data.personalInfo,
        [field]: val
      }
    });
  };

  const updateSummary = (val: string) => {
    onChange({
      ...data,
      summary: val
    });
  };

  // Skill Categories Management
  const addSkillCategory = () => {
    const newCategory: SkillCategory = {
      id: `skill-${Date.now()}`,
      name: 'New Skill Category',
      skills: ['Skill 1', 'Skill 2']
    };
    onChange({
      ...data,
      skillCategories: [...data.skillCategories, newCategory]
    });
  };

  const removeSkillCategory = (id: string) => {
    onChange({
      ...data,
      skillCategories: data.skillCategories.filter((c) => c.id !== id)
    });
  };

  const updateCategoryName = (id: string, name: string) => {
    onChange({
      ...data,
      skillCategories: data.skillCategories.map((c) => (c.id === id ? { ...c, name } : c))
    });
  };

  const updateSkillsString = (id: string, rawSkills: string) => {
    const skills = rawSkills.split(',').map((s) => s.trim()).filter(Boolean);
    onChange({
      ...data,
      skillCategories: data.skillCategories.map((c) => (c.id === id ? { ...c, skills } : c))
    });
  };

  // Experience Management
  const addExperience = () => {
    const newExp: WorkExperience = {
      id: `exp-${Date.now()}`,
      title: 'Software Developer Intern',
      company: 'Company Name',
      location: 'Bangalore, India',
      startDate: '2026',
      endDate: 'Present',
      type: 'Internship',
      bullets: ['Contributed to engineering features and system design.']
    };
    onChange({
      ...data,
      experience: [newExp, ...data.experience]
    });
  };

  const removeExperience = (id: string) => {
    onChange({
      ...data,
      experience: data.experience.filter((e) => e.id !== id)
    });
  };

  const updateExperience = (id: string, field: keyof WorkExperience, val: any) => {
    onChange({
      ...data,
      experience: data.experience.map((e) => (e.id === id ? { ...e, [field]: val } : e))
    });
  };

  const updateExperienceBullet = (expId: string, bulletIndex: number, text: string) => {
    onChange({
      ...data,
      experience: data.experience.map((e) => {
        if (e.id !== expId) return e;
        const newBullets = [...e.bullets];
        newBullets[bulletIndex] = text;
        return { ...e, bullets: newBullets };
      })
    });
  };

  const addExperienceBullet = (expId: string) => {
    onChange({
      ...data,
      experience: data.experience.map((e) => {
        if (e.id !== expId) return e;
        return { ...e, bullets: [...e.bullets, 'Engineered new functionality achieving performance goals.'] };
      })
    });
  };

  const removeExperienceBullet = (expId: string, bulletIndex: number) => {
    onChange({
      ...data,
      experience: data.experience.map((e) => {
        if (e.id !== expId) return e;
        return { ...e, bullets: e.bullets.filter((_, idx) => idx !== bulletIndex) };
      })
    });
  };

  // Projects Management
  const addProject = () => {
    const newProj: ProjectItem = {
      id: `proj-${Date.now()}`,
      title: 'New Technical Project',
      technologies: ['Python', 'Flask'],
      description: 'Concise description of the system architecture and purpose.',
      bullets: ['Designed and deployed full-stack software components.'],
      githubUrl: 'https://github.com/Asha23442',
      featured: false
    };
    onChange({
      ...data,
      projects: [newProj, ...data.projects]
    });
  };

  const removeProject = (id: string) => {
    onChange({
      ...data,
      projects: data.projects.filter((p) => p.id !== id)
    });
  };

  const updateProject = (id: string, field: keyof ProjectItem, val: any) => {
    onChange({
      ...data,
      projects: data.projects.map((p) => (p.id === id ? { ...p, [field]: val } : p))
    });
  };

  const updateProjectTechnologies = (id: string, rawTech: string) => {
    const technologies = rawTech.split(',').map((t) => t.trim()).filter(Boolean);
    onChange({
      ...data,
      projects: data.projects.map((p) => (p.id === id ? { ...p, technologies } : p))
    });
  };

  const updateProjectBullet = (projId: string, bulletIndex: number, text: string) => {
    onChange({
      ...data,
      projects: data.projects.map((p) => {
        if (p.id !== projId) return p;
        const newBullets = [...p.bullets];
        newBullets[bulletIndex] = text;
        return { ...p, bullets: newBullets };
      })
    });
  };

  const addProjectBullet = (projId: string) => {
    onChange({
      ...data,
      projects: data.projects.map((p) => {
        if (p.id !== projId) return p;
        return { ...p, bullets: [...p.bullets, 'Engineered core feature optimizing data flow.'] };
      })
    });
  };

  const removeProjectBullet = (projId: string, bulletIndex: number) => {
    onChange({
      ...data,
      projects: data.projects.map((p) => {
        if (p.id !== projId) return p;
        return { ...p, bullets: p.bullets.filter((_, idx) => idx !== bulletIndex) };
      })
    });
  };

  // Education Management
  const addEducation = () => {
    const newEdu: EducationItem = {
      id: `edu-${Date.now()}`,
      degree: 'Degree / Specialization',
      institution: 'College / Institute Name',
      startDate: '2024',
      endDate: '2026',
      gradeLabel: 'CGPA',
      grade: '8.5 / 10'
    };
    onChange({
      ...data,
      education: [...data.education, newEdu]
    });
  };

  const removeEducation = (id: string) => {
    onChange({
      ...data,
      education: data.education.filter((e) => e.id !== id)
    });
  };

  const updateEducation = (id: string, field: keyof EducationItem, val: string) => {
    onChange({
      ...data,
      education: data.education.map((e) => (e.id === id ? { ...e, [field]: val } : e))
    });
  };

  // Certifications Management
  const addCertification = () => {
    const newCert: CertificationItem = {
      id: `cert-${Date.now()}`,
      name: 'Certification Name',
      issuer: 'Issuing Organization',
      date: '2025'
    };
    onChange({
      ...data,
      certifications: [...data.certifications, newCert]
    });
  };

  const removeCertification = (id: string) => {
    onChange({
      ...data,
      certifications: data.certifications.filter((c) => c.id !== id)
    });
  };

  const updateCertification = (id: string, field: keyof CertificationItem, val: string) => {
    onChange({
      ...data,
      certifications: data.certifications.map((c) => (c.id === id ? { ...c, [field]: val } : c))
    });
  };

  const sections = [
    { id: 'personal', label: 'Personal Info', icon: User },
    { id: 'summary', label: 'Summary', icon: FileText },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: FolderGit2 },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'certifications', label: 'Certifications', icon: Award }
  ];

  return (
    <div className="space-y-4 text-xs sm:text-sm">
      {/* Section Quick Pills */}
      <div className="flex flex-wrap gap-1.5 p-1 bg-slate-950/60 rounded-xl border border-slate-800">
        {sections.map((sec) => {
          const Icon = sec.icon;
          const isActive = activeSection === sec.id;
          return (
            <button
              key={sec.id}
              type="button"
              onClick={() => setActiveSection(sec.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all ${
                isActive
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{sec.label}</span>
            </button>
          );
        })}
      </div>

      {/* Editor Body */}
      <div className="bg-slate-900/70 p-4 rounded-xl border border-slate-800 space-y-4">
        {/* PERSONAL INFO */}
        {activeSection === 'personal' && (
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-slate-200">Personal Information & Header</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-semibold text-slate-400 mb-1">Full Name</label>
                <input
                  type="text"
                  value={data.personalInfo.name}
                  onChange={(e) => updatePersonalInfo('name', e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-slate-100 focus:border-blue-500 focus:outline-hidden"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-slate-400 mb-1">Professional Title</label>
                <input
                  type="text"
                  value={data.personalInfo.title}
                  onChange={(e) => updatePersonalInfo('title', e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-slate-100 focus:border-blue-500 focus:outline-hidden"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-slate-400 mb-1">Location</label>
                <input
                  type="text"
                  value={data.personalInfo.location}
                  onChange={(e) => updatePersonalInfo('location', e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-slate-100 focus:border-blue-500 focus:outline-hidden"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-slate-400 mb-1">Phone Number</label>
                <input
                  type="text"
                  value={data.personalInfo.phone}
                  onChange={(e) => updatePersonalInfo('phone', e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-slate-100 focus:border-blue-500 focus:outline-hidden"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-slate-400 mb-1">Email Address</label>
                <input
                  type="email"
                  value={data.personalInfo.email}
                  onChange={(e) => updatePersonalInfo('email', e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-slate-100 focus:border-blue-500 focus:outline-hidden"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-slate-400 mb-1">GitHub Profile Link</label>
                <input
                  type="text"
                  value={data.personalInfo.github}
                  onChange={(e) => updatePersonalInfo('github', e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-slate-100 focus:border-blue-500 focus:outline-hidden"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-slate-400 mb-1">LinkedIn Profile Link</label>
                <input
                  type="text"
                  value={data.personalInfo.linkedin}
                  onChange={(e) => updatePersonalInfo('linkedin', e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-slate-100 focus:border-blue-500 focus:outline-hidden"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-slate-400 mb-1">Portfolio / Live URL</label>
                <input
                  type="text"
                  value={data.personalInfo.portfolio}
                  onChange={(e) => updatePersonalInfo('portfolio', e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-slate-100 focus:border-blue-500 focus:outline-hidden"
                />
              </div>
            </div>
          </div>
        )}

        {/* PROFESSIONAL SUMMARY */}
        {activeSection === 'summary' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-200">Professional Summary</h3>
              <span className="text-[11px] text-slate-400">
                {data.summary.length} characters (ideal: 200–500)
              </span>
            </div>
            <textarea
              rows={5}
              value={data.summary}
              onChange={(e) => updateSummary(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-slate-100 focus:border-blue-500 focus:outline-hidden leading-relaxed text-xs sm:text-sm"
              placeholder="Write a concise, keyword-dense professional summary..."
            />
            <div className="text-[11px] text-slate-400 bg-slate-950/60 p-2.5 rounded-lg border border-slate-800">
              💡 <span className="font-semibold text-slate-300">ATS Recommendation:</span> Highlight your primary languages (Python, Java), core domain (Software Engineering, Full-Stack, AI-ML), and proven projects without unbacked buzzwords.
            </div>
          </div>
        )}

        {/* TECHNICAL SKILLS */}
        {activeSection === 'skills' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-200">Technical Skill Categories</h3>
              <button
                type="button"
                onClick={addSkillCategory}
                className="flex items-center gap-1 text-xs bg-blue-600/80 hover:bg-blue-600 text-white px-2.5 py-1 rounded-lg"
              >
                <Plus className="w-3.5 h-3.5" /> Add Category
              </button>
            </div>

            <div className="space-y-3">
              {data.skillCategories.map((category) => (
                <div key={category.id} className="p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <input
                      type="text"
                      value={category.name}
                      onChange={(e) => updateCategoryName(category.id, e.target.value)}
                      className="bg-transparent font-semibold text-slate-200 border-b border-transparent hover:border-slate-700 focus:border-blue-500 focus:outline-hidden text-xs sm:text-sm w-full"
                    />
                    <button
                      type="button"
                      onClick={() => removeSkillCategory(category.id)}
                      className="text-red-400 hover:text-red-300 p-1"
                      title="Remove Category"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-slate-500 mb-1">
                      Skills (comma-separated):
                    </label>
                    <input
                      type="text"
                      value={category.skills.join(', ')}
                      onChange={(e) => updateSkillsString(category.id, e.target.value)}
                      className="w-full bg-slate-900 border border-slate-800 rounded px-2 py-1.5 text-slate-200 text-xs focus:border-blue-500 focus:outline-hidden"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* WORK EXPERIENCE */}
        {activeSection === 'experience' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-200">Work Experience & Internships</h3>
              <button
                type="button"
                onClick={addExperience}
                className="flex items-center gap-1 text-xs bg-blue-600/80 hover:bg-blue-600 text-white px-2.5 py-1 rounded-lg"
              >
                <Plus className="w-3.5 h-3.5" /> Add Role
              </button>
            </div>

            <div className="space-y-4">
              {data.experience.map((exp) => (
                <div key={exp.id} className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-blue-400 uppercase tracking-wide">
                      {exp.type || 'Internship'}
                    </span>
                    <button
                      type="button"
                      onClick={() => removeExperience(exp.id)}
                      className="text-red-400 hover:text-red-300 p-1"
                      title="Remove Role"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div>
                      <label className="block text-[10px] text-slate-400 mb-0.5">Job Title</label>
                      <input
                        type="text"
                        value={exp.title}
                        onChange={(e) => updateExperience(exp.id, 'title', e.target.value)}
                        className="w-full bg-slate-900 border border-slate-800 rounded px-2.5 py-1.5 text-xs text-slate-200"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] text-slate-400 mb-0.5">Company / Organization</label>
                      <input
                        type="text"
                        value={exp.company}
                        onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                        className="w-full bg-slate-900 border border-slate-800 rounded px-2.5 py-1.5 text-xs text-slate-200"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] text-slate-400 mb-0.5">Location</label>
                      <input
                        type="text"
                        value={exp.location}
                        onChange={(e) => updateExperience(exp.id, 'location', e.target.value)}
                        className="w-full bg-slate-900 border border-slate-800 rounded px-2.5 py-1.5 text-xs text-slate-200"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-1.5">
                      <div>
                        <label className="block text-[10px] text-slate-400 mb-0.5">Start Date</label>
                        <input
                          type="text"
                          value={exp.startDate}
                          onChange={(e) => updateExperience(exp.id, 'startDate', e.target.value)}
                          className="w-full bg-slate-900 border border-slate-800 rounded px-2 py-1.5 text-xs text-slate-200"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] text-slate-400 mb-0.5">End Date</label>
                        <input
                          type="text"
                          value={exp.endDate}
                          onChange={(e) => updateExperience(exp.id, 'endDate', e.target.value)}
                          className="w-full bg-slate-900 border border-slate-800 rounded px-2 py-1.5 text-xs text-slate-200"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Bullet Points */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="text-[11px] font-semibold text-slate-300">
                        Bullet Points (Action verbs & outcomes)
                      </label>
                      <button
                        type="button"
                        onClick={() => addExperienceBullet(exp.id)}
                        className="text-[11px] text-blue-400 hover:text-blue-300 flex items-center gap-0.5"
                      >
                        <Plus className="w-3 h-3" /> Add bullet
                      </button>
                    </div>
                    <div className="space-y-1.5">
                      {exp.bullets.map((bullet, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-1.5">
                          <textarea
                            rows={2}
                            value={bullet}
                            onChange={(e) => updateExperienceBullet(exp.id, bIdx, e.target.value)}
                            className="flex-1 bg-slate-900 border border-slate-800 rounded px-2.5 py-1.5 text-xs text-slate-200 focus:border-blue-500 focus:outline-hidden"
                          />
                          <button
                            type="button"
                            onClick={() => removeExperienceBullet(exp.id, bIdx)}
                            className="text-slate-500 hover:text-red-400 p-1 mt-1"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PROJECTS */}
        {activeSection === 'projects' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-200">Technical Projects</h3>
              <button
                type="button"
                onClick={addProject}
                className="flex items-center gap-1 text-xs bg-blue-600/80 hover:bg-blue-600 text-white px-2.5 py-1 rounded-lg"
              >
                <Plus className="w-3.5 h-3.5" /> Add Project
              </button>
            </div>

            <div className="space-y-4">
              {data.projects.map((proj) => (
                <div key={proj.id} className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        value={proj.title}
                        onChange={(e) => updateProject(proj.id, 'title', e.target.value)}
                        className="bg-transparent font-bold text-slate-100 text-xs sm:text-sm border-b border-transparent hover:border-slate-700 focus:border-blue-500 focus:outline-hidden"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => removeProject(proj.id)}
                      className="text-red-400 hover:text-red-300 p-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[10px] text-slate-400 mb-0.5">Technologies (comma-separated)</label>
                      <input
                        type="text"
                        value={proj.technologies.join(', ')}
                        onChange={(e) => updateProjectTechnologies(proj.id, e.target.value)}
                        className="w-full bg-slate-900 border border-slate-800 rounded px-2.5 py-1.5 text-xs text-slate-200"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] text-slate-400 mb-0.5">GitHub Repository Link</label>
                      <input
                        type="text"
                        value={proj.githubUrl || ''}
                        onChange={(e) => updateProject(proj.id, 'githubUrl', e.target.value)}
                        className="w-full bg-slate-900 border border-slate-800 rounded px-2.5 py-1.5 text-xs text-slate-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] text-slate-400 mb-0.5">Brief Summary</label>
                    <input
                      type="text"
                      value={proj.description}
                      onChange={(e) => updateProject(proj.id, 'description', e.target.value)}
                      className="w-full bg-slate-900 border border-slate-800 rounded px-2.5 py-1.5 text-xs text-slate-200"
                    />
                  </div>

                  {/* Bullets */}
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="text-[11px] font-semibold text-slate-300">Project Highlights & Key Contributions</label>
                      <button
                        type="button"
                        onClick={() => addProjectBullet(proj.id)}
                        className="text-[11px] text-blue-400 hover:text-blue-300 flex items-center gap-0.5"
                      >
                        <Plus className="w-3 h-3" /> Add bullet
                      </button>
                    </div>
                    <div className="space-y-1.5">
                      {proj.bullets.map((b, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-1.5">
                          <textarea
                            rows={2}
                            value={b}
                            onChange={(e) => updateProjectBullet(proj.id, bIdx, e.target.value)}
                            className="flex-1 bg-slate-900 border border-slate-800 rounded px-2.5 py-1 text-xs text-slate-200"
                          />
                          <button
                            type="button"
                            onClick={() => removeProjectBullet(proj.id, bIdx)}
                            className="text-slate-500 hover:text-red-400 p-1"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* EDUCATION */}
        {activeSection === 'education' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-200">Education Background</h3>
              <button
                type="button"
                onClick={addEducation}
                className="flex items-center gap-1 text-xs bg-blue-600/80 hover:bg-blue-600 text-white px-2.5 py-1 rounded-lg"
              >
                <Plus className="w-3.5 h-3.5" /> Add Education
              </button>
            </div>

            <div className="space-y-3">
              {data.education.map((edu) => (
                <div key={edu.id} className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <input
                      type="text"
                      value={edu.institution}
                      onChange={(e) => updateEducation(edu.id, 'institution', e.target.value)}
                      className="bg-transparent font-bold text-slate-100 text-xs sm:text-sm w-full"
                    />
                    <button
                      type="button"
                      onClick={() => removeEducation(edu.id)}
                      className="text-red-400 hover:text-red-300 p-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[10px] text-slate-400 mb-0.5">Degree / Program</label>
                      <input
                        type="text"
                        value={edu.degree}
                        onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                        className="w-full bg-slate-900 border border-slate-800 rounded px-2 py-1 text-xs text-slate-200"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-1.5">
                      <div>
                        <label className="block text-[10px] text-slate-400 mb-0.5">Grade (CGPA / %)</label>
                        <input
                          type="text"
                          value={edu.grade}
                          onChange={(e) => updateEducation(edu.id, 'grade', e.target.value)}
                          className="w-full bg-slate-900 border border-slate-800 rounded px-2 py-1 text-xs text-slate-200"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] text-slate-400 mb-0.5">Timeline</label>
                        <input
                          type="text"
                          value={`${edu.startDate} - ${edu.endDate}`}
                          onChange={(e) => {
                            const [start, end] = e.target.value.split('-').map((s) => s.trim());
                            updateEducation(edu.id, 'startDate', start || '');
                            updateEducation(edu.id, 'endDate', end || '');
                          }}
                          className="w-full bg-slate-900 border border-slate-800 rounded px-2 py-1 text-xs text-slate-200"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CERTIFICATIONS */}
        {activeSection === 'certifications' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-200">Verified Certifications</h3>
              <button
                type="button"
                onClick={addCertification}
                className="flex items-center gap-1 text-xs bg-blue-600/80 hover:bg-blue-600 text-white px-2.5 py-1 rounded-lg"
              >
                <Plus className="w-3.5 h-3.5" /> Add Certification
              </button>
            </div>

            <div className="space-y-2">
              {data.certifications.map((cert) => (
                <div key={cert.id} className="p-2.5 bg-slate-950 rounded-lg border border-slate-800 flex items-center justify-between gap-2">
                  <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <input
                      type="text"
                      value={cert.name}
                      onChange={(e) => updateCertification(cert.id, 'name', e.target.value)}
                      placeholder="Certificate Name"
                      className="bg-slate-900 border border-slate-800 rounded px-2 py-1 text-xs text-slate-200 sm:col-span-2"
                    />
                    <input
                      type="text"
                      value={cert.issuer}
                      onChange={(e) => updateCertification(cert.id, 'issuer', e.target.value)}
                      placeholder="Issuer"
                      className="bg-slate-900 border border-slate-800 rounded px-2 py-1 text-xs text-slate-200"
                    />
                  </div>
                  <input
                    type="text"
                    value={cert.date}
                    onChange={(e) => updateCertification(cert.id, 'date', e.target.value)}
                    className="w-20 bg-slate-900 border border-slate-800 rounded px-2 py-1 text-xs text-slate-400 font-mono text-center shrink-0"
                  />
                  <button
                    type="button"
                    onClick={() => removeCertification(cert.id)}
                    className="text-red-400 hover:text-red-300 p-1"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
