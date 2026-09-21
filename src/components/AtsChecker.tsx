import React, { useState } from 'react';
import { ResumeData } from '../types/resume';
import { calculateAtsScore, generatePlainTextResume, exportResumeAsJson } from '../utils/resumeUtils';
import { CheckCircle2, AlertCircle, Copy, Check, Download, FileText, Upload } from 'lucide-react';

interface AtsCheckerProps {
  resume: ResumeData;
  onImportJson: (data: ResumeData) => void;
}

export const AtsChecker: React.FC<AtsCheckerProps> = ({ resume, onImportJson }) => {
  const [copied, setCopied] = useState(false);
  const { score, checks } = calculateAtsScore(resume);

  const handleCopyText = async () => {
    const text = generatePlainTextResume(resume);
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  const handleDownloadTxt = () => {
    const text = generatePlainTextResume(resume);
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${resume.personalInfo.name.replace(/\s+/g, '_')}_Resume_ATS.txt`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  const handleFileImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        if (parsed.personalInfo && parsed.experience && parsed.education) {
          onImportJson(parsed);
        } else {
          alert('Invalid resume format in selected JSON file.');
        }
      } catch (err) {
        alert('Could not parse JSON file.');
      }
    };
    reader.readAsText(file);
  };

  const getScoreBadgeColor = () => {
    if (score >= 90) return 'text-emerald-400 border-emerald-500/40 bg-emerald-950/30';
    if (score >= 70) return 'text-amber-400 border-amber-500/40 bg-amber-950/30';
    return 'text-rose-400 border-rose-500/40 bg-rose-950/30';
  };

  return (
    <div className="space-y-5 text-xs sm:text-sm">
      {/* Score Overview Banner */}
      <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-sm font-bold text-slate-100">ATS Compliance Rating</span>
            <span className={`text-xs px-2.5 py-0.5 rounded-full border font-bold ${getScoreBadgeColor()}`}>
              {score}% Compliant
            </span>
          </div>
          <p className="text-xs text-slate-400">
            Assessed against automated applicant tracking criteria (formatting, keywords, structure, contact data).
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={handleCopyText}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs shadow-sm transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Copied Plaintext!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Plaintext</span>
              </>
            )}
          </button>
          <button
            type="button"
            onClick={handleDownloadTxt}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>.TXT</span>
          </button>
          <button
            type="button"
            onClick={() => exportResumeAsJson(resume)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition-colors"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>JSON Backup</span>
          </button>
          <label className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium border border-slate-700 cursor-pointer transition-colors">
            <Upload className="w-3.5 h-3.5" />
            <span>Restore JSON</span>
            <input
              type="file"
              accept=".json"
              onChange={handleFileImport}
              className="hidden"
            />
          </label>
        </div>
      </div>

      {/* Compliance Checklist */}
      <div className="space-y-2">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
          ATS Standard Checkpoints
        </h4>
        <div className="space-y-2">
          {checks.map((check, idx) => (
            <div
              key={idx}
              className={`p-3 rounded-xl border transition-colors ${
                check.passed
                  ? 'bg-slate-950/80 border-slate-800 text-slate-200'
                  : 'bg-rose-950/20 border-rose-900/40 text-slate-300'
              }`}
            >
              <div className="flex items-start gap-2.5">
                {check.passed ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                )}
                <div>
                  <span className="font-semibold text-xs block text-slate-100">
                    {check.title}
                  </span>
                  <p className="text-[11.5px] text-slate-400 mt-0.5 leading-snug">
                    {check.tip}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
