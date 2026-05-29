"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const industries = ["Education", "Healthcare", "Industrial", "Government", "Corporate Enterprise", "Other"];
const projectTypes = [
  "Infrastructure Assessment",
  "Site Survey",
  "Network Audit",
  "Security Audit",
  "Smart Campus Consultation",
  "Surveillance Consultation",
  "Project Quotation",
  "Tender Inquiry",
  "Other",
];
const timelines = ["Immediate (< 1 month)", "Short-term (1–3 months)", "Mid-term (3–6 months)", "Long-term (6+ months)", "Planning Stage"];

export default function LeadForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", organization: "", email: "", phone: "", industry: "",
    projectType: "", location: "", timeline: "", message: "",
  });

  const update = (key: string, value: string) => setForm(p => ({ ...p, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const text = `New Website Query:

Name: ${form.name}
Organization: ${form.organization}
Email: ${form.email}
Phone: ${form.phone || "N/A"}
Industry: ${form.industry}
Project Type: ${form.projectType}
Location: ${form.location || "N/A"}
Timeline: ${form.timeline || "N/A"}

Details:
${form.message}`;

    // WhatsApp URL
    const waUrl = `https://wa.me/919423191703?text=${encodeURIComponent(text)}`;
    // Email URL
    const emailUrl = `mailto:jatin@megatechsolutions.co.in?subject=${encodeURIComponent(`New Lead: ${form.organization} - ${form.projectType}`)}&body=${encodeURIComponent(text)}`;

    // Open WhatsApp in new tab
    window.open(waUrl, "_blank");
    // Trigger default email client
    window.location.href = emailUrl;

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
          <CheckCircle2 className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-[var(--color-navy)] mb-3 font-playfair">Request Received</h3>
        <p className="text-gray-500 max-w-sm leading-relaxed">Our infrastructure consultants will review your request and contact you within 24 hours.</p>
        <p className="text-gray-400 text-sm mt-4">MegaTech Solutions · +91 94231 91703</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-xs font-semibold text-gray-400 uppercase tracking-wider">
          <span className={step >= 1 ? "text-blue-600" : ""}>01 — Your Details</span>
          <span className={step >= 2 ? "text-blue-600" : ""}>02 — Project Info</span>
          <span className={step >= 3 ? "text-blue-600" : ""}>03 — Message</span>
        </div>
        <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-600 rounded-full transition-all duration-500"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>
      </div>

      {/* Step 1 */}
      {step === 1 && (
        <div className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Full Name *</label>
              <input required value={form.name} onChange={e => update("name", e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm"
                placeholder="John Doe" />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Organization *</label>
              <input required value={form.organization} onChange={e => update("organization", e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm"
                placeholder="City University" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Email Address *</label>
              <input required type="email" value={form.email} onChange={e => update("email", e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm"
                placeholder="john@org.com" />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Phone Number</label>
              <input type="tel" value={form.phone} onChange={e => update("phone", e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm"
                placeholder="+91 90000 00000" />
            </div>
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Industry *</label>
            <select required value={form.industry} onChange={e => update("industry", e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm">
              <option value="">Select your sector</option>
              {industries.map(i => <option key={i}>{i}</option>)}
            </select>
          </div>
          <button type="button" onClick={() => setStep(2)}
            className="w-full bg-[var(--color-navy)] text-white py-3.5 rounded-sm font-semibold flex items-center justify-center gap-2 hover:bg-[var(--color-steel)] transition-colors">
            Continue <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Step 2 */}
      {step === 2 && (
        <div className="space-y-5">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Project Type *</label>
            <select required value={form.projectType} onChange={e => update("projectType", e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm">
              <option value="">Select consultation type</option>
              {projectTypes.map(t => <option key={t}>{t}</option>)}
            </select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Project Location</label>
              <input value={form.location} onChange={e => update("location", e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm"
                placeholder="City, State" />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Project Timeline</label>
              <select value={form.timeline} onChange={e => update("timeline", e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm">
                <option value="">Select timeline</option>
                {timelines.map(t => <option key={t}>{t}</option>)}
              </select>
            </div>
          </div>
          <div className="flex gap-3">
            <button type="button" onClick={() => setStep(1)}
              className="flex-1 border border-gray-200 text-gray-600 py-3.5 rounded-sm font-semibold hover:bg-gray-50 transition-colors">
              Back
            </button>
            <button type="button" onClick={() => setStep(3)}
              className="flex-1 bg-[var(--color-navy)] text-white py-3.5 rounded-sm font-semibold flex items-center justify-center gap-2 hover:bg-[var(--color-steel)] transition-colors">
              Continue <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Step 3 */}
      {step === 3 && (
        <div className="space-y-5">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Project Details *</label>
            <textarea required value={form.message} onChange={e => update("message", e.target.value)} rows={5}
              className="w-full px-4 py-3 border border-gray-200 rounded-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm resize-none"
              placeholder="Describe your current infrastructure challenges, project scope, and any specific requirements..." />
          </div>
          <div className="bg-gray-50 p-4 rounded-sm border border-gray-100 text-sm text-gray-500">
            <strong className="text-gray-700">Summary:</strong> {form.name || "—"} from {form.organization || "—"} · {form.industry || "—"} · {form.projectType || "—"}
          </div>
          <div className="flex gap-3">
            <button type="button" onClick={() => setStep(2)}
              className="flex-1 border border-gray-200 text-gray-600 py-3.5 rounded-sm font-semibold hover:bg-gray-50 transition-colors">
              Back
            </button>
            <button type="submit"
              className="flex-1 btn-gold py-3.5 rounded-sm font-bold flex items-center justify-center gap-2">
              Submit Request <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </form>
  );
}
