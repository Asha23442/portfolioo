import { ResumeData } from '../types/resume';

export function generatePlainTextResume(resume: ResumeData): string {
  const { personalInfo, summary, skillCategories, experience, projects, education, certifications, achievements } = resume;

  let text = '';

  // Header
  text += `${personalInfo.name.toUpperCase()}\n`;
  text += `${personalInfo.title}\n`;
  text += `${personalInfo.location} | Phone: ${personalInfo.phone} | Email: ${personalInfo.email}\n`;
  text += `LinkedIn: ${personalInfo.linkedin} | GitHub: ${personalInfo.github}\n`;
  if (personalInfo.portfolio) {
    text += `Portfolio: ${personalInfo.portfolio}\n`;
  }
  text += `\n${'='.repeat(70)}\n\n`;

  // Summary
  if (summary) {
    text += `PROFESSIONAL SUMMARY\n`;
    text += `${'-'.repeat(30)}\n`;
    text += `${summary}\n\n`;
  }

  // Technical Skills
  if (skillCategories && skillCategories.length > 0) {
    text += `TECHNICAL SKILLS\n`;
    text += `${'-'.repeat(30)}\n`;
    skillCategories.forEach((cat) => {
      text += `• ${cat.name}: ${cat.skills.join(', ')}\n`;
    });
    text += `\n`;
  }

  // Experience / Internships
  if (experience && experience.length > 0) {
    text += `WORK EXPERIENCE & INTERNSHIPS\n`;
    text += `${'-'.repeat(30)}\n`;
    experience.forEach((exp) => {
      text += `${exp.title} | ${exp.company} | ${exp.location} | ${exp.startDate} – ${exp.endDate}\n`;
      exp.bullets.forEach((bullet) => {
        text += `  - ${bullet}\n`;
      });
      text += `\n`;
    });
  }

  // Projects
  if (projects && projects.length > 0) {
    text += `TECHNICAL PROJECTS\n`;
    text += `${'-'.repeat(30)}\n`;
    projects.forEach((proj) => {
      text += `${proj.title} [${proj.technologies.join(', ')}]\n`;
      if (proj.githubUrl) text += `  GitHub: ${proj.githubUrl}\n`;
      if (proj.liveUrl) text += `  Live: ${proj.liveUrl}\n`;
      proj.bullets.forEach((bullet) => {
        text += `  - ${bullet}\n`;
      });
      text += `\n`;
    });
  }

  // Education
  if (education && education.length > 0) {
    text += `EDUCATION\n`;
    text += `${'-'.repeat(30)}\n`;
    education.forEach((edu) => {
      text += `${edu.degree}\n`;
      text += `${edu.institution}, ${edu.location || ''} | ${edu.startDate} – ${edu.endDate} | ${edu.gradeLabel}: ${edu.grade}\n`;
      if (edu.details) text += `  ${edu.details}\n`;
      text += `\n`;
    });
  }

  // Certifications
  if (certifications && certifications.length > 0) {
    text += `CERTIFICATIONS\n`;
    text += `${'-'.repeat(30)}\n`;
    certifications.forEach((cert) => {
      text += `• ${cert.name} – ${cert.issuer} (${cert.date})\n`;
    });
    text += `\n`;
  }

  // Achievements
  if (achievements && achievements.length > 0) {
    text += `HONORS & WORKSHOPS\n`;
    text += `${'-'.repeat(30)}\n`;
    achievements.forEach((ach) => {
      text += `• ${ach.title} | ${ach.organization} (${ach.date}): ${ach.description}\n`;
    });
    text += `\n`;
  }

  return text;
}

export function calculateAtsScore(resume: ResumeData) {
  const checks = [
    {
      title: 'Full Contact Information Provided',
      passed: Boolean(resume.personalInfo.email && resume.personalInfo.phone && resume.personalInfo.location),
      tip: 'Ensure email, phone number, and location are accessible at the top.'
    },
    {
      title: 'GitHub & LinkedIn Links Present',
      passed: Boolean(resume.personalInfo.github && resume.personalInfo.linkedin),
      tip: 'Technical recruiters look for verified code repositories and profiles.'
    },
    {
      title: 'Concise, Action-Oriented Professional Summary',
      passed: resume.summary.length > 120 && resume.summary.length < 600,
      tip: 'Summary should be between 30 and 80 words emphasizing core stack.'
    },
    {
      title: 'Categorized Technical Skills',
      passed: resume.skillCategories.length >= 4 && resume.skillCategories.some(c => c.skills.length >= 3),
      tip: 'Grouping by Languages, Web, Databases, AI/ML helps ATS keyword parsers.'
    },
    {
      title: 'Work Experience & Internship History',
      passed: resume.experience.length >= 1 && resume.experience.every(e => e.bullets.length >= 2),
      tip: 'Include clear role title, organization, dates, and accomplishment bullets.'
    },
    {
      title: 'Technical Projects with Stack Tags',
      passed: resume.projects.length >= 3 && resume.projects.every(p => p.technologies.length >= 2),
      tip: 'Detail software projects with explicit technologies, repositories, and outcomes.'
    },
    {
      title: 'Education with Degree & Performance Score',
      passed: resume.education.length >= 1 && Boolean(resume.education[0].grade),
      tip: 'Specify degree, institution, completion timeline, and CGPA/percentage.'
    },
    {
      title: 'Verified Technical Certifications',
      passed: resume.certifications.length >= 2,
      tip: 'Certifications from recognized institutions (Oracle, IBM, Cisco) validate competency.'
    },
    {
      title: 'Action Verbs in Experience & Projects',
      passed: checkActionVerbs(resume),
      tip: 'Start bullet points with strong verbs (Engineered, Architected, Implemented, Designed).'
    }
  ];

  const passedCount = checks.filter(c => c.passed).length;
  const score = Math.round((passedCount / checks.length) * 100);

  return { score, checks };
}

function checkActionVerbs(resume: ResumeData): boolean {
  const strongVerbs = ['engineered', 'developed', 'architected', 'implemented', 'designed', 'built', 'integrated', 'optimized', 'trained', 'evaluated', 'analyzed', 'created', 'configured'];
  const allBullets = [
    ...resume.experience.flatMap(e => e.bullets),
    ...resume.projects.flatMap(p => p.bullets)
  ];
  if (allBullets.length === 0) return false;

  let matches = 0;
  for (const bullet of allBullets) {
    const firstWord = bullet.trim().split(/\s+/)[0]?.toLowerCase() || '';
    if (strongVerbs.includes(firstWord)) {
      matches++;
    }
  }
  return matches >= 4;
}

export function exportResumeAsJson(resume: ResumeData, filename = 'Asha_H_Resume.json') {
  const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(resume, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute('href', dataStr);
  downloadAnchor.setAttribute('download', filename);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}
