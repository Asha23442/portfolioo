import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { usePortfolioTheme } from '../../context/PortfolioThemeContext';
import { Mail, Phone, MapPin, Github, Linkedin, Copy, Check, Send, ArrowUpRight, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';

export const ContactSection: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;
  const { theme } = usePortfolioTheme();
  const [copied, setCopied] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.error('Failed to copy email', e);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:${personal.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
    window.location.href = mailto;
    setFormSent(true);
    setTimeout(() => setFormSent(false), 4000);
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-12"
        >
          <div
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider mb-1.5"
            style={{ color: theme.accentColor }}
          >
            <Mail className="w-4 h-4" />
            <span>Connect &amp; Collaborate</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Let's Build Something Impactful
          </h2>
          <p className={`text-sm mt-1 ${theme.isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Currently open to Software Engineering, AI/ML, Python, Java, and Android opportunities in Bangalore and remote teams.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Details Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Email Card */}
            <motion.div
              whileHover={{ y: -2 }}
              className={`p-5 rounded-2xl border flex items-center justify-between transition-all ${
                theme.isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-xs'
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl border flex items-center justify-center shrink-0"
                  style={{
                    backgroundColor: `${theme.accentColor}15`,
                    borderColor: `${theme.accentColor}30`,
                    color: theme.accentColor
                  }}
                >
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-semibold opacity-60 uppercase tracking-wider">
                    Direct Email
                  </div>
                  <a
                    href={`mailto:${personal.email}`}
                    className="text-sm font-bold hover:underline"
                    style={{ color: theme.isDark ? '#F1F5F9' : '#0F172A' }}
                  >
                    {personal.email}
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className={`p-2 rounded-lg border transition-colors ${
                  theme.isDark
                    ? 'bg-slate-800 border-slate-700 text-slate-300 hover:text-white'
                    : 'bg-slate-100 border-slate-200 text-slate-700 hover:text-slate-900'
                }`}
                title="Copy email to clipboard"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </motion.div>

            {/* Phone Card */}
            <motion.div
              whileHover={{ y: -2 }}
              className={`p-5 rounded-2xl border flex items-center gap-3 transition-all ${
                theme.isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-xs'
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-950/70 border border-emerald-800/60 flex items-center justify-center text-emerald-400 shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-semibold opacity-60 uppercase tracking-wider">
                  Phone
                </div>
                <a
                  href={`tel:${personal.phone.replace(/\s+/g, '')}`}
                  className="text-sm font-bold hover:text-emerald-400 transition-colors"
                >
                  {personal.phone}
                </a>
              </div>
            </motion.div>

            {/* Location Card */}
            <motion.div
              whileHover={{ y: -2 }}
              className={`p-5 rounded-2xl border flex items-center gap-3 transition-all ${
                theme.isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-xs'
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-amber-950/70 border border-amber-800/60 flex items-center justify-center text-amber-400 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-semibold opacity-60 uppercase tracking-wider">
                  Location
                </div>
                <div className="text-sm font-bold">
                  {personal.location}
                </div>
              </div>
            </motion.div>

            {/* Social Buttons */}
            <div className="pt-2 grid grid-cols-2 gap-3">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className={`p-4 rounded-xl border flex items-center justify-between transition-colors ${
                  theme.isDark
                    ? 'bg-slate-900/90 border-slate-800 hover:border-slate-700 text-slate-200 hover:text-white'
                    : 'bg-white border-slate-200 shadow-xs hover:border-slate-300 text-slate-800'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Github className="w-5 h-5" />
                  <span className="text-xs font-semibold">GitHub Profile</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className={`p-4 rounded-xl border flex items-center justify-between transition-colors ${
                  theme.isDark
                    ? 'bg-slate-900/90 border-slate-800 hover:border-slate-700 text-slate-200 hover:text-white'
                    : 'bg-white border-slate-200 shadow-xs hover:border-slate-300 text-slate-800'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Linkedin className="w-5 h-5 text-blue-500" />
                  <span className="text-xs font-semibold">LinkedIn Profile</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Message Form with Motion */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className={`p-6 sm:p-8 rounded-2xl border space-y-4 ${
                theme.isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-xs'
              }`}
            >
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4" style={{ color: theme.accentColor }} />
                <h3 className="text-base font-bold">
                  Send a Direct Message
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold opacity-70 uppercase mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Recruiter or Tech Lead"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full rounded-xl px-3.5 py-2.5 text-xs sm:text-sm border focus:outline-hidden transition-colors ${
                      theme.isDark
                        ? 'bg-slate-950 border-slate-800 text-slate-100 placeholder:text-slate-600 focus:border-blue-500'
                        : 'bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-blue-600'
                    }`}
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold opacity-70 uppercase mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full rounded-xl px-3.5 py-2.5 text-xs sm:text-sm border focus:outline-hidden transition-colors ${
                      theme.isDark
                        ? 'bg-slate-950 border-slate-800 text-slate-100 placeholder:text-slate-600 focus:border-blue-500'
                        : 'bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-blue-600'
                    }`}
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold opacity-70 uppercase mb-1">
                  Subject / Role Title
                </label>
                <input
                  type="text"
                  required
                  placeholder="Software Engineer Role / Project Discussion"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className={`w-full rounded-xl px-3.5 py-2.5 text-xs sm:text-sm border focus:outline-hidden transition-colors ${
                    theme.isDark
                      ? 'bg-slate-950 border-slate-800 text-slate-100 placeholder:text-slate-600 focus:border-blue-500'
                      : 'bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-blue-600'
                  }`}
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold opacity-70 uppercase mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Hello Asha, we reviewed your machine learning and software engineering portfolio and would like to invite you..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full rounded-xl p-3.5 text-xs sm:text-sm border focus:outline-hidden leading-relaxed transition-colors ${
                    theme.isDark
                      ? 'bg-slate-950 border-slate-800 text-slate-100 placeholder:text-slate-600 focus:border-blue-500'
                      : 'bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-blue-600'
                  }`}
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
                <span className="text-xs opacity-60">
                  Sends directly to ashareddy042@gmail.com
                </span>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className={`inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-xs sm:text-sm shadow-md transition-all ${theme.btnPrimary}`}
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </motion.button>
              </div>

              {formSent && (
                <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-800 text-emerald-300 text-xs text-center font-medium">
                  ✓ Opening mail client with your prefilled message to Asha!
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
