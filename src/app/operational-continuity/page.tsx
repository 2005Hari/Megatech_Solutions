import PageHeader from "@/components/ui/PageHeader";
import LeadForm from "@/components/ui/LeadForm";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { ShieldCheck, Activity, RefreshCw, MonitorSmartphone, Clock, Settings, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Operational Continuity Services & AMC | MegaTech Solutions",
  description: "Enterprise-grade physical infrastructure maintenance, 24/7 remote monitoring NOC, and rigorous SLA management.",
};

const gaps = [
  { title: "Reactive Break-Fix Models", body: "Waiting for critical networking or security hardware to fail completely before initiating repairs, costing hours of valuable operational downtime." },
  { title: "Vague, Unenforceable SLAs", body: "Local vendor agreements lacking firm commitments on response latency, parts replacement speeds, and critical engineering availability." },
  { title: "Neglected Firmware & Security", body: "Infrastructure left unpatched for years, creating high-risk cybersecurity entry points and hardware compatibility glitches." },
  { title: "No Proactive Monitoring", body: "Operating with blind spots — discovering a surveillance camera or core link has been offline for weeks only AFTER a critical event." },
];

const tiers = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-[var(--color-gold)] mb-6" />,
    title: "Platinum SLA",
    desc: "Designed for mission-critical hospital grids and real-time security centers requiring immediate action.",
    features: ["4-Hour On-Site Engineering Response", "24/7 Proactive Remote NOC Monitoring", "Active-Passive Hot Standby Hardware", "Monthly Network Posture Audits"]
  },
  {
    icon: <Activity className="w-8 h-8 text-[var(--color-gold)] mb-6" />,
    title: "Gold SLA",
    desc: "Ideal for corporate offices and high-density educational environments seeking robust stability.",
    features: ["8-Hour On-Site Response Guarantee", "12/5 NOC Connectivity Monitoring", "Preventative Quarterly Health Checks", "Next-Business-Day Parts Replacement"]
  },
  {
    icon: <RefreshCw className="w-8 h-8 text-[var(--color-gold)] mb-6" />,
    title: "Preventative AMC",
    desc: "Structured maintenance schedules ensuring baseline operational compliance and hardware longevity.",
    features: ["Scheduled Bi-Monthly Site Sweeps", "Firmware & Software Upgrades", "Electronic Cleanup & Thermal Audits", "Discounted Incident Engineering"]
  }
];

const capabilities = [
  { icon: <MonitorSmartphone className="w-6 h-6 text-[var(--color-gold)] shrink-0" />, title: "24/7 Proactive NOC", desc: "Our central Network Operations Center tracks heartbeats of core switches and surveillance systems, resolving alerts before you feel them." },
  { icon: <Settings className="w-6 h-6 text-[var(--color-gold)] shrink-0" />, title: "Structured Lifecycle Planning", desc: "We track serial numbers, deployment years, and warranty cycles, engineering planned, cost-efficient upgrades rather than emergency spends." },
  { icon: <Clock className="w-6 h-6 text-[var(--color-gold)] shrink-0" />, title: "Emergency Dispatch", desc: "Active certified engineers on standby equipped with immediate replacement inventory, ready to restore systems within hours." }
];

export default function OperationalContinuityPage() {
  return (
    <main>
      <PageHeader 
        title="Operational Continuity Services" 
        description="Protecting your enterprise infrastructure investment with guaranteed response times, proactive remote monitoring, and systematic lifecycle audits."
        breadcrumb="Operational Continuity"
      />

      {/* ── Challenge Landscape ── */}
      <section className="py-32 bg-[var(--color-surface-0)] relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-30" />
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <ScrollReveal>
            <div className="section-label mb-4">Beyond Simple Maintenance</div>
            <div className="divider-gold" />
            <h2 className="text-5xl font-playfair font-bold text-white mb-6">Why Standard AMCs Fail</h2>
            <p className="text-[var(--color-text-secondary)] text-xl max-w-2xl mb-16">Traditional vendors react only after catastrophic system failure. MegaTech partners with industry leaders to guarantee continuous operation.</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
            {gaps.map((g, i) => (
              <ScrollReveal key={g.title} delay={((i % 2) + 1) as 1 | 2}>
                <div className="bg-[var(--color-surface-1)] p-10 h-full hover:bg-[var(--color-surface-2)] transition-colors">
                  <div className="text-[var(--color-gold)] font-display font-bold text-4xl mb-4 opacity-20">0{i + 1}</div>
                  <h3 className="text-xl font-bold text-white mb-3 font-display">{g.title}</h3>
                  <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">{g.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SLA Tiers ── */}
      <section className="py-32 bg-[var(--color-surface-1)] relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-20">
            <div className="section-label mb-4">Service Level Agreements</div>
            <div className="divider-gold mx-auto" />
            <h2 className="text-5xl font-playfair font-bold text-white mb-6">SLA Tiers Tailored to Your Scale</h2>
            <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed">
              We design structured commitments with legally binding uptime agreements, keeping your critical networks and surveillance grids fully operational.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {tiers.map((tier, index) => (
              <ScrollReveal key={tier.title} delay={((index + 1) as 1 | 2 | 3)}>
                <div className="bg-[var(--color-surface-2)] border border-white/5 p-10 rounded-sm h-full hover:border-[var(--color-gold)]/30 transition-all duration-300 flex flex-col justify-between">
                  <div>
                    {tier.icon}
                    <h3 className="text-2xl font-bold text-white mb-4 font-display">{tier.title}</h3>
                    <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-8">{tier.desc}</p>
                    <div className="w-full h-px bg-white/10 mb-8" />
                    <ul className="space-y-4">
                      {tier.features.map(feat => (
                        <li key={feat} className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)]">
                          <CheckCircle2 className="w-4 h-4 text-[var(--color-gold)] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Operational Capabilities ── */}
      <section className="py-32 bg-[var(--color-surface-0)] relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay-dense opacity-20" />
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="section-label mb-4">Proactive Engineering</div>
              <div className="divider-gold" />
              <h2 className="text-5xl font-playfair font-bold text-white mb-8">Engineering Continuous Resilience</h2>
              <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed mb-8">
                MegaTech’s Operations team isn’t just on standby — we actively monitor performance trends, identify physical cable degradations, and run proactive systems calibrations to avoid disruption.
              </p>
              <div className="bg-[var(--color-surface-1)] border border-white/5 p-6 rounded-sm">
                <p className="text-[var(--color-gold)] font-bold text-sm tracking-wider uppercase mb-1">NOC Incident Center</p>
                <p className="text-white text-lg font-bold font-display">+91 94231 91703</p>
                <p className="text-[var(--color-text-muted)] text-sm mt-1">SLA incidents resolved in real-time by certified engineers.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={2}>
              <div className="space-y-8">
                {capabilities.map((cap, i) => (
                  <div key={cap.title} className="bg-[var(--color-surface-1)] p-8 border border-white/5 rounded-sm flex gap-6">
                    {cap.icon}
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2 font-display">{cap.title}</h3>
                      <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">{cap.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Consultation CTA ── */}
      <section className="py-32 bg-[var(--color-surface-1)]">
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollReveal className="text-center mb-16">
            <div className="section-label mb-4">Secure Uptime</div>
            <div className="divider-gold mx-auto" />
            <h2 className="text-5xl font-playfair font-bold text-white mb-4">Request a Customized SLA Proposal</h2>
            <p className="text-[var(--color-text-secondary)]">Connect with our systems integration team to audit your current environment and secure operational continuity.</p>
          </ScrollReveal>
          
          <ScrollReveal delay={2}>
            <div className="bg-white p-8 md:p-12 rounded-sm shadow-2xl">
              <h3 className="text-2xl font-bold text-[var(--color-navy)] font-display mb-2 text-center">Submit Service Request</h3>
              <p className="text-gray-400 text-sm mb-8 text-center">We will analyze your requirements and provide a drafted SLA roadmap.</p>
              <LeadForm />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
