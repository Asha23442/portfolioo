import React from 'react';
import { ResumeCustomization, ThemeConfig, ThemeId, FontChoice, SpacingChoice, LayoutChoice } from '../types/resume';
import { RESUME_THEMES, COLOR_PRESETS } from '../data/themes';
import { Check, Eye, EyeOff, ArrowUp, ArrowDown, Sparkles, Layout, Type, MoveVertical, Palette } from 'lucide-react';

interface ThemeCustomizerProps {
  customization: ResumeCustomization;
  onChange: (updated: ResumeCustomization) => void;
  onReset: () => void;
}

export const ThemeCustomizer: React.FC<ThemeCustomizerProps> = ({
  customization,
  onChange,
  onReset
}) => {
  const currentTheme = RESUME_THEMES[customization.themeId];

  const handleThemeSelect = (themeId: ThemeId) => {
    const targetTheme = RESUME_THEMES[themeId];
    onChange({
      ...customization,
      themeId,
      accentColorHex: targetTheme.accentHex,
      font: targetTheme.fontFamily === 'font-serif' ? 'serif' : targetTheme.fontFamily === 'font-mono' ? 'mono' : customization.font
    });
  };

  const handleFontSelect = (font: FontChoice) => {
    onChange({ ...customization, font });
  };

  const handleSpacingSelect = (spacing: SpacingChoice) => {
    onChange({ ...customization, spacing });
  };

  const handleLayoutSelect = (layout: LayoutChoice) => {
    onChange({ ...customization, layout });
  };

  const handleColorSelect = (hex: string) => {
    onChange({ ...customization, accentColorHex: hex });
  };

  const toggleSection = (sectionKey: keyof typeof customization.visibleSections) => {
    onChange({
      ...customization,
      visibleSections: {
        ...customization.visibleSections,
        [sectionKey]: !customization.visibleSections[sectionKey]
      }
    });
  };

  const moveSection = (index: number, direction: 'up' | 'down') => {
    const newOrder = [...customization.sectionOrder];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= newOrder.length) return;
    const temp = newOrder[index];
    newOrder[index] = newOrder[targetIndex];
    newOrder[targetIndex] = temp;
    onChange({ ...customization, sectionOrder: newOrder });
  };

  const sectionLabels: Record<string, string> = {
    summary: 'Professional Summary',
    skills: 'Technical Skills',
    experience: 'Work Experience',
    projects: 'Projects',
    education: 'Education',
    certifications: 'Certifications',
    achievements: 'Achievements & Workshops'
  };

  return (
    <div className="space-y-6 text-sm">
      {/* 1. Theme Presets (6 Distinct Themes) */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Theme Styles (6 Presets)</span>
          </label>
          <span className="text-xs text-slate-400 font-mono">
            Active: {currentTheme.name}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {(Object.keys(RESUME_THEMES) as ThemeId[]).map((id) => {
            const t = RESUME_THEMES[id];
            const isSelected = customization.themeId === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => handleThemeSelect(id)}
                className={`p-3 rounded-xl text-left border transition-all relative flex flex-col justify-between ${
                  isSelected
                    ? 'border-blue-500 bg-blue-950/40 shadow-sm shadow-blue-500/10 ring-1 ring-blue-500'
                    : 'border-slate-800 bg-slate-900/90 hover:border-slate-700 hover:bg-slate-850'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <span
                        className="w-3 h-3 rounded-full shrink-0 border border-white/20"
                        style={{ backgroundColor: t.accentHex }}
                      />
                      <span className="font-semibold text-slate-100 text-xs">
                        {t.name}
                      </span>
                    </div>
                    {isSelected && (
                      <Check className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    )}
                  </div>
                  <p className="text-[11px] text-slate-400 leading-snug line-clamp-2">
                    {t.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Accent Color Palette */}
      <div>
        <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5 mb-2.5">
          <Palette className="w-3.5 h-3.5 text-blue-400" />
          <span>Accent Color</span>
        </label>
        <div className="flex flex-wrap items-center gap-2">
          {COLOR_PRESETS.map((color) => {
            const isSelected = customization.accentColorHex === color.hex;
            return (
              <button
                key={color.hex}
                type="button"
                title={color.name}
                onClick={() => handleColorSelect(color.hex)}
                className={`w-7 h-7 rounded-full transition-transform flex items-center justify-center border ${
                  isSelected
                    ? 'scale-110 ring-2 ring-white border-transparent'
                    : 'border-white/20 hover:scale-105'
                }`}
                style={{ backgroundColor: color.hex }}
              >
                {isSelected && <Check className="w-3.5 h-3.5 text-white stroke-[3]" />}
              </button>
            );
          })}
          <div className="flex items-center gap-1.5 ml-1 pl-2 border-l border-slate-700">
            <span className="text-[11px] text-slate-400">Custom:</span>
            <input
              type="color"
              value={customization.accentColorHex || currentTheme.accentHex}
              onChange={(e) => handleColorSelect(e.target.value)}
              className="w-6 h-6 rounded cursor-pointer border-0 bg-transparent"
            />
          </div>
        </div>
      </div>

      {/* 3. Typography & Spacing Options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Font Family */}
        <div>
          <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5 mb-2">
            <Type className="w-3.5 h-3.5 text-blue-400" />
            <span>Typography</span>
          </label>
          <div className="grid grid-cols-2 gap-1.5">
            {[
              { id: 'sans' as FontChoice, name: 'Inter (Clean Sans)' },
              { id: 'modern' as FontChoice, name: 'Jakarta (Modern)' },
              { id: 'serif' as FontChoice, name: 'Merriweather (Serif)' },
              { id: 'mono' as FontChoice, name: 'Fira (Developer Mono)' }
            ].map((font) => (
              <button
                key={font.id}
                type="button"
                onClick={() => handleFontSelect(font.id)}
                className={`py-1.5 px-2.5 rounded-lg text-xs font-medium border text-left transition-colors ${
                  customization.font === font.id
                    ? 'border-blue-500 bg-blue-950/40 text-blue-300'
                    : 'border-slate-800 bg-slate-900 text-slate-300 hover:border-slate-700'
                }`}
              >
                {font.name}
              </button>
            ))}
          </div>
        </div>

        {/* Spacing density */}
        <div>
          <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5 mb-2">
            <MoveVertical className="w-3.5 h-3.5 text-blue-400" />
            <span>Spacing Density</span>
          </label>
          <div className="grid grid-cols-2 gap-1.5">
            {[
              { id: 'compact' as SpacingChoice, name: 'Compact (ATS Fit)' },
              { id: 'comfortable' as SpacingChoice, name: 'Comfortable' }
            ].map((sp) => (
              <button
                key={sp.id}
                type="button"
                onClick={() => handleSpacingSelect(sp.id)}
                className={`py-1.5 px-2.5 rounded-lg text-xs font-medium border text-center transition-colors ${
                  customization.spacing === sp.id
                    ? 'border-blue-500 bg-blue-950/40 text-blue-300'
                    : 'border-slate-800 bg-slate-900 text-slate-300 hover:border-slate-700'
                }`}
              >
                {sp.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Layout Architecture: Single vs 2-Column Sidebar */}
      <div>
        <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5 mb-2">
          <Layout className="w-3.5 h-3.5 text-blue-400" />
          <span>Layout Architecture</span>
        </label>
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => handleLayoutSelect('single')}
            className={`p-2.5 rounded-lg border text-left flex items-start gap-2.5 transition-colors ${
              customization.layout === 'single'
                ? 'border-blue-500 bg-blue-950/40 text-blue-200'
                : 'border-slate-800 bg-slate-900 text-slate-300 hover:border-slate-700'
            }`}
          >
            <div className="w-7 h-9 border border-current rounded p-0.5 flex flex-col gap-0.5 shrink-0 opacity-75">
              <div className="h-1.5 w-full bg-current rounded-xs" />
              <div className="h-1 w-3/4 bg-current rounded-xs opacity-50" />
              <div className="h-1 w-full bg-current rounded-xs opacity-50" />
              <div className="h-1 w-5/6 bg-current rounded-xs opacity-50" />
            </div>
            <div>
              <div className="font-semibold text-xs">Standard 1-Column</div>
              <div className="text-[11px] text-slate-400">Strict ATS favorite & linear flow</div>
            </div>
          </button>

          <button
            type="button"
            onClick={() => handleLayoutSelect('sidebar')}
            className={`p-2.5 rounded-lg border text-left flex items-start gap-2.5 transition-colors ${
              customization.layout === 'sidebar'
                ? 'border-blue-500 bg-blue-950/40 text-blue-200'
                : 'border-slate-800 bg-slate-900 text-slate-300 hover:border-slate-700'
            }`}
          >
            <div className="w-7 h-9 border border-current rounded p-0.5 grid grid-cols-2 gap-0.5 shrink-0 opacity-75">
              <div className="flex flex-col gap-0.5">
                <div className="h-1.5 w-full bg-current rounded-xs" />
                <div className="h-1 w-full bg-current rounded-xs opacity-50" />
                <div className="h-1 w-full bg-current rounded-xs opacity-50" />
              </div>
              <div className="flex flex-col gap-0.5 border-l border-current pl-0.5">
                <div className="h-1 w-full bg-current rounded-xs opacity-70" />
                <div className="h-1 w-full bg-current rounded-xs opacity-50" />
              </div>
            </div>
            <div>
              <div className="font-semibold text-xs">Modern 2-Column</div>
              <div className="text-[11px] text-slate-400">Sidebar for skills, education & certs</div>
            </div>
          </button>
        </div>
      </div>

      {/* 5. Section Visibility & Order */}
      <div>
        <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center justify-between mb-2">
          <span>Section Visibility & Order</span>
          <span className="text-[11px] text-slate-400 lowercase font-normal">
            toggle or reorder sections
          </span>
        </label>
        <div className="space-y-1.5 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800">
          {customization.sectionOrder.map((sectionId, idx) => {
            const isVisible =
              customization.visibleSections[sectionId as keyof typeof customization.visibleSections];
            return (
              <div
                key={sectionId}
                className={`flex items-center justify-between p-2 rounded-lg border transition-colors ${
                  isVisible
                    ? 'border-slate-800 bg-slate-900/80 text-slate-200'
                    : 'border-slate-900 bg-slate-950/50 text-slate-500 opacity-60'
                }`}
              >
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      toggleSection(sectionId as keyof typeof customization.visibleSections)
                    }
                    className="p-1 hover:text-white rounded"
                    title={isVisible ? 'Hide Section' : 'Show Section'}
                  >
                    {isVisible ? (
                      <Eye className="w-3.5 h-3.5 text-blue-400" />
                    ) : (
                      <EyeOff className="w-3.5 h-3.5 text-slate-500" />
                    )}
                  </button>
                  <span className="text-xs font-medium">
                    {sectionLabels[sectionId] || sectionId}
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    disabled={idx === 0}
                    onClick={() => moveSection(idx, 'up')}
                    className="p-1 text-slate-400 hover:text-white disabled:opacity-30 disabled:hover:text-slate-400 rounded"
                    title="Move section up"
                  >
                    <ArrowUp className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    disabled={idx === customization.sectionOrder.length - 1}
                    onClick={() => moveSection(idx, 'down')}
                    className="p-1 text-slate-400 hover:text-white disabled:opacity-30 disabled:hover:text-slate-400 rounded"
                    title="Move section down"
                  >
                    <ArrowDown className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
