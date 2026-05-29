import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import LeadForm from "@/components/ui/LeadForm";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "AI surveillance, Command Centers & Security Systems | MegaTech Solutions",
  description: "Comprehensive physical security systems powered by advanced AI video analytics and centralized command architectures.",
};

const challenges = [
  { title: "Siloed Surveillance & Blind Spots", body: "Legacy security architectures with disconnected cameras, analog feeds, and standalone access panels that delay incident response." },
  { title: "Alarm Fatigue & False Triggers", body: "Operations centers flooded with hundreds of irrelevant alert notifications, reducing efficiency and critical focus." },
  { title: "Compliance & Audit Vulnerabilities", body: "Incoherent visitor tracking, weak access logs, and incomplete video archives failing to meet strict corporate and regulatory requirements." },
  { title: "Poor Low-Light Incident Detail", body: "Grainy, low-resolution nighttime footage rendering facial recognition and license plate analysis entirely ineffective during investigations." },
];

const approach = [
  { step: "01", title: "Vulnerability Assessment", body: "Our engineering team performs a physical threat assessment to identify security blind spots, weak entry points, and network vulnerabilities." },
  { step: "02", title: "Centralized Topology Design", body: "We architect an integrated security network uniting IP cameras, biometric locks, and intrusion sensors into a coherent system." },
  { step: "03", title: "Precision Deployment", body: "We install enterprise-grade optics, robust access control panels, and failover network infrastructure with minimum physical footprint." },
  { step: "04", title: "AI Analytics Integration", body: "We configure deep learning algorithms on the edge and core nodes for immediate automated event verification." },
  { step: "05", title: "NOC & Command Center Setup", body: "We design and build operational command centers featuring ergonomic layouts, premium display walls, and responsive VMS systems." },
];

const stack = [
  { category: "Surveillance & Optics", products: ["Axis Communications", "Hikvision DeepinMind", "Hanwha Vision", "Bosch Security"] },
  { category: "Video Management (VMS)", products: ["Milestone XProtect", "Genetec Security Center", "Network Optix", "Avigilon Control Center"] },
  { category: "Access Control", products: ["HID Global", "Suprema Biometrics", "Honeywell Pro-Watch", "LenelS2 Systems"] },
  { category: "Intrusion & Command", products: ["Gallagher Security", "Texecom Premier", "Barco Display Walls", "Crestron Control"] },
];

const outcomes = [
  { metric: "99.999%", label: "System Availability", desc: "Redundant edge recording and active-passive VMS servers ensure uninterrupted security capture." },
  { metric: "60%", label: "Faster Response Times", desc: "Automated AI-driven alert verification filters out noise, focusing operators on real security incidents." },
  { metric: "100%", label: "Compliance Auditing", desc: "Immutable logs, centralized access registry, and long-term storage configurations for flawless regulatory audits." },
];

export default function SecurityPage() {
  return (
    <main>
      <PageHeader
        title="AI Surveillance & Security Systems"
        description="Engineering enterprise physical security networks, high-end VMS integrations, and centralized command centers."
        breadcrumb="CCTV & Security"
      />

      {/* ── Challenge Landscape ── */}
      <section className="py-32 bg-[var(--color-surface-0)] relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-30" />
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <ScrollReveal>
            <div className="section-label mb-4">The Challenge</div>
            <div className="divider-gold" />
            <h2 className="text-5xl font-playfair font-bold text-white mb-6">Threats to Modern Facilities</h2>
            <p className="text-[var(--color-text-secondary)] text-xl max-w-2xl mb-16">Enterprise operations require responsive, intelligent physical security networks — not just passive camera installations.</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
            {challenges.map((c, i) => (
              <ScrollReveal key={c.title} delay={((i % 2) + 1) as 1 | 2}>
                <div className="bg-[var(--color-surface-1)] p-10 h-full hover:bg-[var(--color-surface-2)] transition-colors">
                  <div className="text-[var(--color-gold)] font-display font-bold text-4xl mb-4 opacity-20">0{i + 1}</div>
                  <h3 className="text-xl font-bold text-white mb-3 font-display">{c.title}</h3>
                  <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">{c.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── MegaTech Approach ── */}
      <section className="py-32 bg-[var(--color-surface-1)]">
        <div className="container mx-auto px-4 max-w-7xl">
          <ScrollReveal>
            <div className="section-label mb-4">The MegaTech Approach</div>
            <div className="divider-gold" />
            <h2 className="text-5xl font-playfair font-bold text-white mb-16">Our 5-Phase Security Framework</h2>
          </ScrollReveal>

          <div className="space-y-px">
            {approach.map((a, i) => (
              <ScrollReveal key={a.step} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <div className="bg-[var(--color-surface-2)] p-8 flex flex-col md:flex-row gap-8 hover:bg-[var(--color-surface-3)] transition-colors">
                  <div className="text-[var(--color-gold)] font-display font-bold text-5xl shrink-0 leading-none">{a.step}</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 font-display">{a.title}</h3>
                    <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">{a.body}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Technology Stack ── */}
      <section className="py-32 bg-[var(--color-surface-0)]">
        <div className="container mx-auto px-4 max-w-7xl">
          <ScrollReveal>
            <div className="section-label mb-4">Technology Stack</div>
            <div className="divider-gold" />
            <h2 className="text-5xl font-playfair font-bold text-white mb-16">Enterprise Security Partnerships</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stack.map((s, i) => (
              <ScrollReveal key={s.category} delay={((i % 4) + 1) as 1|2|3|4}>
                <div className="bg-[var(--color-surface-1)] border border-white/5 p-8 rounded-sm h-full">
                  <div className="text-[var(--color-gold)] text-xs font-bold uppercase tracking-widest mb-4">{s.category}</div>
                  <ul className="space-y-3">
                    {s.products.map(p => (
                      <li key={p} className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                        <div className="w-1 h-1 rounded-full bg-[var(--color-gold)] shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Project ── */}
      <section className="py-32 bg-[var(--color-surface-1)]">
        <div className="container mx-auto px-4 max-w-7xl">
          <ScrollReveal>
            <div className="section-label mb-4">Featured Project</div>
            <div className="divider-gold" />
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-12">
            <ScrollReveal direction="left">
              <div className="relative h-[400px] rounded-sm overflow-hidden border border-white/5">
                <Image src="/img-security.png" alt="District Surveillance & Centralized Control Room" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-navy)]/60 to-transparent" />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={2}>
              <h3 className="text-4xl font-playfair font-bold text-white mb-4">District-Wide City Surveillance & Safe City Initiative</h3>
              <p className="text-[var(--color-text-secondary)] mb-8 leading-relaxed">Designed and deployed a state-of-the-art municipal CCTV and security grid covering 50 square kilometers. Integrated over 1,200 intelligent IP cameras equipped with automatic license plate recognition (ANPR), behavioral analytics, and deep low-light optics reporting to a unified emergency command center.</p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[["1,200+", "Active AI Nodes"], ["30ms", "Alert Latency"], ["99.999%", "Storage Availability"]].map(([v, l]) => (
                  <div key={l} className="text-center bg-[var(--color-surface-2)] p-4 rounded-sm">
                    <div className="text-2xl font-bold text-white font-display">{v}</div>
                    <div className="text-[10px] text-[var(--color-text-muted)] uppercase tracking-wider mt-1">{l}</div>
                  </div>
                ))}
              </div>
              <div className="bg-[var(--color-surface-0)] border-l-2 border-[var(--color-gold)] pl-4 py-3 text-sm text-[var(--color-text-secondary)]">
                <strong className="text-[var(--color-gold)]">Stack:</strong> Axis IP Optics · Milestone XProtect VMS · Barco Command Display · Texecom Premier Intrusion
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Expected Outcomes ── */}
      <section className="py-32 bg-[var(--color-surface-0)]">
        <div className="container mx-auto px-4 max-w-7xl">
          <ScrollReveal>
            <div className="section-label mb-4">Expected Outcomes</div>
            <div className="divider-gold" />
            <h2 className="text-5xl font-playfair font-bold text-white mb-16">Measurable Threat Reduction</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {outcomes.map((o, i) => (
              <ScrollReveal key={o.label} delay={((i + 1) as 1|2|3)}>
                <div className="text-center p-10 bg-[var(--color-surface-1)] rounded-sm border border-white/5 h-full">
                  <div className="text-6xl font-bold text-white font-display mb-2">{o.metric}</div>
                  <div className="text-[var(--color-gold)] text-sm font-bold uppercase tracking-widest mb-4">{o.label}</div>
                  <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">{o.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Consultation CTA ── */}
      <section className="py-32 bg-[var(--color-surface-1)]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <ScrollReveal direction="left">
              <div className="section-label mb-4">Request Assessment</div>
              <div className="divider-gold" />
              <h2 className="text-5xl font-playfair font-bold text-white mb-8">Secure Your Infrastructure</h2>
              <p className="text-[var(--color-text-secondary)] text-xl leading-relaxed mb-10">Engage our senior systems integration team for a comprehensive, on-site vulnerability and physical threat audit of your enterprise facilities.</p>
              <div className="space-y-3 mb-10">
                {["On-Site Threat Assessment", "CCTV Density Coverage Mapping", "VMS Topology Feasibility", "Access Control Log Audits"].map(s => (
                  <div key={s} className="flex items-center gap-3 text-sm text-[var(--color-text-secondary)]">
                    <CheckCircle2 className="w-4 h-4 text-[var(--color-gold)] shrink-0" />
                    {s}
                  </div>
                ))}
              </div>
              <div className="bg-[var(--color-surface-0)] p-6 rounded-sm border border-white/5">
                <p className="text-white font-bold mb-1">Direct Engineering Line</p>
                <p className="text-[var(--color-gold)] text-xl font-bold">+91 94231 91703</p>
                <p className="text-[var(--color-text-muted)] text-sm mt-1">info@megatechsolutions.com</p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={2}>
              <div className="bg-white p-8 md:p-10 rounded-sm shadow-2xl">
                <h3 className="text-2xl font-bold text-[var(--color-navy)] font-display mb-2">Schedule Security Audit</h3>
                <p className="text-gray-400 text-sm mb-8">All inquiries held in strict confidence.</p>
                <LeadForm />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
