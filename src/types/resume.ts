export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  portfolio: string;
}

export interface WorkExperience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  isCurrent?: boolean;
  type?: 'Internship' | 'Full-time' | 'Contract';
  bullets: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  technologies: string[];
  description: string;
  bullets: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  category?: 'AI/ML' | 'Web' | 'Mobile' | 'Systems';
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location?: string;
  startDate: string;
  endDate: string;
  gradeLabel: string;
  grade: string;
  details?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: string[];
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  summary: string;
  skillCategories: SkillCategory[];
  experience: WorkExperience[];
  projects: ProjectItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
  achievements: AchievementItem[];
  languages?: string[];
  interests?: string[];
}

export type ThemeId =
  | 'minimal'
  | 'modern-blue'
  | 'developer-dark'
  | 'elegant'
  | 'creative-tech'
  | 'executive';

export type FontChoice = 'sans' | 'serif' | 'modern' | 'mono';
export type SpacingChoice = 'compact' | 'comfortable';
export type LayoutChoice = 'single' | 'sidebar';

export interface ThemeConfig {
  id: ThemeId;
  name: string;
  description: string;
  accentColor: string;
  accentHex: string;
  bgPage: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  borderSubtle: string;
  headerBg?: string;
  sidebarBg?: string;
  badgeBg: string;
  badgeText: string;
  fontFamily: string;
  isDark?: boolean;
}

export interface ResumeCustomization {
  themeId: ThemeId;
  accentColorHex?: string;
  font: FontChoice;
  spacing: SpacingChoice;
  layout: LayoutChoice;
  visibleSections: {
    summary: boolean;
    skills: boolean;
    experience: boolean;
    projects: boolean;
    education: boolean;
    certifications: boolean;
    achievements: boolean;
  };
  sectionOrder: string[];
}
