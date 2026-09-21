import React, { useState } from 'react';
import { ExternalLink, Github, Plus, Search, Star, GitFork, Check } from 'lucide-react';
import { ProjectItem } from '../types/resume';

interface GitHubShowcaseProps {
  onAddProjectToResume: (project: ProjectItem) => void;
}

interface RepoData {
  name: string;
  description: string;
  language: string;
  url: string;
  defaultCategory: 'AI/ML' | 'Web' | 'Mobile' | 'Systems';
  suggestedBullets: string[];
}

export const GITHUB_REPOS: RepoData[] = [
  {
    name: 'AI_powered_pneumonia_diagnosis',
    description: 'AI-powered pneumonia diagnosis system using Deep Learning to detect pneumonia with high accuracy.',
    language: 'Python',
    url: 'https://github.com/Asha23442/AI_powered_pneumonia_diagnosis',
    defaultCategory: 'AI/ML',
    suggestedBullets: [
      'Engineered deep learning classification model detecting pathological abnormalities in chest radiography.',
      'Developed Flask REST API service for real-time diagnostic evaluation with high precision-recall rates.'
    ]
  },
  {
    name: 'diabetes_risk',
    description: 'AI-powered diabetes risk prediction web application built using Python, Flask, and Machine Learning.',
    language: 'Python',
    url: 'https://github.com/Asha23442/diabetes_risk',
    defaultCategory: 'AI/ML',
    suggestedBullets: [
      'Trained classification models on diagnostic biomarker datasets with feature scaling and cross-validation.',
      'Constructed responsive user interface for healthcare practitioners to input metrics and get risk estimates.'
    ]
  },
  {
    name: 'womensafety',
    description: 'Android application designed to provide immediate SOS alerts, live geolocation tracking, and emergency broadcast.',
    language: 'Java',
    url: 'https://github.com/Asha23442/womensafety',
    defaultCategory: 'Mobile',
    suggestedBullets: [
      'Implemented one-touch SOS triggering automated emergency SMS transmission with live GPS coordinates.',
      'Integrated Google Maps API and Firebase Realtime Database for continuous location streaming to trusted contacts.'
    ]
  },
  {
    name: 'Busly',
    description: 'A smart bus tracking and management Android application developed using Kotlin to provide route information and travel updates.',
    language: 'Kotlin',
    url: 'https://github.com/Asha23442/Busly',
    defaultCategory: 'Mobile',
    suggestedBullets: [
      'Engineered native Android tracking client offering live transit stop schedules, route paths, and arrival ETA.',
      'Utilized Kotlin coroutines and background location services for low-battery GPS tracking.'
    ]
  },
  {
    name: 'Bitebazar',
    description: 'Food e-commerce and restaurant ordering platform featuring shopping cart, menu catalogs, and user orders.',
    language: 'TypeScript',
    url: 'https://github.com/Asha23442/Bitebazar',
    defaultCategory: 'Web',
    suggestedBullets: [
      'Architected full-stack ordering workflow with cart management, order history, and relational database backend.',
      'Integrated Firebase for real-time status updates and order progress streaming.'
    ]
  },
  {
    name: 'Gatebell',
    description: 'Smart visitor premise management system with automated OTP verification and resident approval logs.',
    language: 'JavaScript',
    url: 'https://github.com/Asha23442/Gatebell',
    defaultCategory: 'Systems',
    suggestedBullets: [
      'Built automated two-factor OTP verification ensuring authenticated check-ins and security compliance.',
      'Created administrative log viewer and instant resident notifications for pending visitors.'
    ]
  },
  {
    name: 'portfolio',
    description: 'Personal portfolio website showcasing engineering projects, interactive 3D elements, and achievements.',
    language: 'JavaScript',
    url: 'https://github.com/Asha23442/portfolio',
    defaultCategory: 'Web',
    suggestedBullets: [
      'Rendered 3D interactive graphics using Three.js and React with responsive desktop/mobile optimization.',
      'Implemented modern UI architecture with project showcases and live demonstrations.'
    ]
  },
  {
    name: 'Resume-Screening-and-Ranking',
    description: 'Automated candidate resume screening and keyword ranking system using NLP and machine learning algorithms.',
    language: 'Python',
    url: 'https://github.com/Asha23442/Resume-Screening-and-Ranking',
    defaultCategory: 'AI/ML',
    suggestedBullets: [
      'Applied Natural Language Processing (NLP) techniques to parse unstructured resumes and match job descriptions.',
      'Calculated TF-IDF vector similarity scores to rank applicants objectively according to technical prerequisites.'
    ]
  },
  {
    name: 'GokulHealth',
    description: 'Healthcare and dairy customer management platform developed to manage records, updates, and payments.',
    language: 'HTML',
    url: 'https://github.com/Asha23442/GokulHealth',
    defaultCategory: 'Mobile',
    suggestedBullets: [
      'Integrated customer account ledger and real-time transaction updates for operational transparency.',
      'Developed clean administrative views for status management and payment records.'
    ]
  },
  {
    name: 'organopredict',
    description: 'Machine learning prediction of agricultural market prices and organic crop availability trends.',
    language: 'TypeScript',
    url: 'https://github.com/Asha23442/organopredict',
    defaultCategory: 'AI/ML',
    suggestedBullets: [
      'Analyzed market trend datasets to forecast seasonal pricing fluctuations for organic produce.',
      'Built interactive charts and dashboards for intuitive farmer decision-making.'
    ]
  },
  {
    name: 'interview-agent',
    description: 'Automated technical interview assistant using AI prompting and speech analysis.',
    language: 'Python',
    url: 'https://github.com/Asha23442/interview-agent',
    defaultCategory: 'AI/ML',
    suggestedBullets: [
      'Built automated question generation pipeline evaluating candidate responses across core CS competencies.',
      'Integrated generative AI APIs for personalized technical feedback.'
    ]
  },
  {
    name: 'Presswala',
    description: 'Digital news platform where users can read, publish, and bookmark categorized articles.',
    language: 'JavaScript',
    url: 'https://github.com/Asha23442/Presswala',
    defaultCategory: 'Web',
    suggestedBullets: [
      'Developed publishing frontend with markdown parsing, category filtering, and reader engagement.',
      'Connected cloud database for real-time article ingestion and search indexing.'
    ]
  }
];

export const GitHubShowcase: React.FC<GitHubShowcaseProps> = ({ onAddProjectToResume }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [addedRepoNames, setAddedRepoNames] = useState<string[]>([]);

  const filteredRepos = GITHUB_REPOS.filter(
    (repo) =>
      repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      repo.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      repo.language.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAdd = (repo: RepoData) => {
    const newProject: ProjectItem = {
      id: `gh-${Date.now()}-${repo.name}`,
      title: repo.name.replace(/[-_]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
      technologies: [repo.language, repo.defaultCategory === 'AI/ML' ? 'Machine Learning' : 'Full-Stack'],
      description: repo.description,
      bullets: repo.suggestedBullets,
      githubUrl: repo.url,
      featured: true,
      category: repo.defaultCategory
    };
    onAddProjectToResume(newProject);
    setAddedRepoNames((prev) => [...prev, repo.name]);
  };

  return (
    <div className="space-y-4 text-xs sm:text-sm">
      {/* GitHub Profile Banner */}
      <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0">
            <Github className="w-6 h-6 text-slate-200" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-100 text-sm">Asha23442</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-950 text-blue-300 border border-blue-800 font-mono">
                25 Repositories
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Software Engineer | Java | Python | SQL | Web Development | Bangalore
            </p>
          </div>
        </div>
        <a
          href="https://github.com/Asha23442"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium self-start sm:self-auto border border-slate-700"
        >
          <span>View on GitHub</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Search Filter */}
      <div className="relative">
        <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
        <input
          type="text"
          placeholder="Filter repositories by name, language, or tech..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-9 pr-3 py-2 text-xs text-slate-200 focus:border-blue-500 focus:outline-hidden"
        />
      </div>

      {/* Repo Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[500px] overflow-y-auto pr-1">
        {filteredRepos.map((repo) => {
          const isAdded = addedRepoNames.includes(repo.name);
          return (
            <div
              key={repo.name}
              className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-colors"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-1">
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noreferrer"
                    className="font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1 text-xs truncate"
                  >
                    <span>{repo.name}</span>
                    <ExternalLink className="w-3 h-3 shrink-0" />
                  </a>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300 font-mono shrink-0">
                    {repo.language}
                  </span>
                </div>
                <p className="text-[11.5px] text-slate-400 leading-snug mb-2 line-clamp-2">
                  {repo.description}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-900 flex items-center justify-between">
                <span className="text-[10px] text-slate-500 font-mono">
                  Tag: {repo.defaultCategory}
                </span>
                <button
                  type="button"
                  onClick={() => handleAdd(repo)}
                  disabled={isAdded}
                  className={`flex items-center gap-1 text-[11px] font-medium px-2.5 py-1 rounded-md transition-colors ${
                    isAdded
                      ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-800'
                      : 'bg-blue-600/20 text-blue-300 hover:bg-blue-600/40 border border-blue-500/40'
                  }`}
                >
                  {isAdded ? (
                    <>
                      <Check className="w-3 h-3" /> Added
                    </>
                  ) : (
                    <>
                      <Plus className="w-3 h-3" /> Add to Resume
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
