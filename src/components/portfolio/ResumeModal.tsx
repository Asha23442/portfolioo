import React, { useState } from 'react';
import { INITIAL_RESUME_DATA } from '../../data/initialResume';
import { RESUME_THEMES } from '../../data/themes';
import { ResumeDocument } from '../ResumeDocument';
import { generatePlainTextResume } from '../../utils/resumeUtils';
import { Printer, Copy, Check, X, FileText, Download } from 'lucide-react';
import { ResumeCustomization, ThemeId } from '../../types/resume';
import { motion, AnimatePresence } from 'motion/react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [selectedResumeTheme, setSelectedResumeTheme] = useState<ThemeId>('modern-blue');

  if (!isOpen) return null;

  const currentTheme = RESUME_THEMES[selectedResumeTheme] || RESUME_THEMES['modern-blue'];

  const modalCustomization: ResumeCustomization = {
    themeId: selectedResumeTheme,
    accentColorHex: currentTheme.accentHex,
    font: 'sans',
    spacing: 'compact',
    layout: 'single',
    visibleSections: {
      summary: true,
      skills: true,
      experience: true,
      projects: true,
      education: true,
      certifications: true,
      achievements: true
    },
    sectionOrder: [
      'summary',
      'skills',
      'experience',
      'projects',
      'education',
      'certifications',
      'achievements'
    ]
  };

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = async () => {
    const text = generatePlainTextResume(INITIAL_RESUME_DATA);
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.error('Failed to copy', e);
    }
  };

  const handleDownloadTxt = () => {
    const text = generatePlainTextResume(INITIAL_RESUME_DATA);
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Asha_H_Resume.txt`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-xs flex justify-center items-start p-2 sm:p-4 md:p-6 print:p-0 print:bg-white">
        {/* Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.2 }}
          className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-4xl overflow-hidden shadow-2xl my-4 sm:my-8 print:border-none print:shadow-none print:bg-white print:my-0"
        >
          {/* Top Control Bar (Hidden in Print) */}
          <div className="no-print bg-slate-950 px-4 py-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-blue-400" />
              <span className="text-xs sm:text-sm font-bold text-white">
                Asha H — Official ATS Resume
              </span>
            </div>

            {/* Quick Resume Theme Selector */}
            <div className="hidden lg:flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800 text-[11px]">
              <span className="text-slate-500 px-1 font-mono">Resume Style:</span>
              {(['modern-blue', 'developer-dark', 'minimal', 'executive'] as ThemeId[]).map((tid) => (
                <button
                  key={tid}
                  type="button"
                  onClick={() => setSelectedResumeTheme(tid)}
                  className={`px-2 py-0.5 rounded capitalize transition-colors ${
                    selectedResumeTheme === tid
                      ? 'bg-blue-600 text-white font-medium'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {tid.replace('-', ' ')}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCopyText}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Copy Plaintext</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleDownloadTxt}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>.TXT</span>
              </button>

              <button
                type="button"
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-xs transition-colors"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / PDF</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                aria-label="Close Resume"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Resume Preview Canvas */}
          <div className="p-3 sm:p-6 bg-slate-900/90 flex justify-center overflow-x-auto print:p-0 print:bg-white">
            <div className="w-full flex justify-center">
              <ResumeDocument
                data={INITIAL_RESUME_DATA}
                theme={currentTheme}
                customization={modalCustomization}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
