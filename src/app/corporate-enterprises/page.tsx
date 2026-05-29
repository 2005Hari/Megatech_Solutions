import Image from "next/image";
import PageHeader from "@/components/ui/PageHeader";
import LeadForm from "@/components/ui/LeadForm";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Corporate Enterprise Infrastructure | MegaTech Solutions",
  description: "Scalable, secure IT infrastructure for corporate headquarters, office campuses, and enterprise facilities.",
};

const challenges = [
  { title: "High-Density Office Connectivity", body: "Open-plan offices with hundreds of concurrent devices overwhelm standard WiFi deployments, causing bottlenecks during peak hours." },
  { title: "Intellectual Property Protection", body: "Corporate environments require strict physical and logical access controls to protect sensitive data, boardrooms, and server rooms." },
  { title: "Premium Boardroom Experience", body: "Leadership teams expect seamless, one-touch AV conferencing systems that integrate with cloud platforms and global video calls." },
  { title: "Multi-Site Consistency", body: "Enterprises with multiple offices demand uniform network policies, security postures, and performance standards across all locations." },
];

const approach = [
  { step: "01", title: "Corporate Infrastructure Audit", body: "We evaluate your existing network topology, office layout, and security posture to identify gaps versus enterprise best practices." },
  { step: "02", title: "High-Density WiFi 6 Design", body: "Location-aware wireless planning using heat mapping tools to ensure full, high-performance coverage across every workspace." },
  { step: "03", title: "Unified Access Control", body: "Biometric entry systems at server rooms, executive areas, and sensitive zones — integrated with your Active Directory." },
  { step: "04", title: "Boardroom AV Integration", body: "One-touch conferencing systems, dual-screen displays, and noise-cancelling audio designed for executive-grade experience." },
  { step: "05", title: "Managed Continuity Agreement", body: "Post-deployment SLA covering preventive maintenance, software updates, and priority response for all corporate infrastructure." },
];

const stack = [
  { category: "Switching & Routing", products: ["Cisco Catalyst 9300", "Juniper EX Series", "Dell EMC PowerSwitch"] },
  { category: "Wireless", products: ["Aruba WiFi 6E", "Cisco Meraki MR", "Ruckus R750"] },
  { category: "Access Control", products: ["HID Mobile Access", "Suprema Biometrics", "Lenel OnGuard"] },
  { category: "AV & Collaboration", products: ["Crestron Control", "Barco ClickShare", "Poly Studio"] },
];

const outcomes = [
  { metric: "10x", label: "WiFi Capacity", desc: "WiFi 6E deployments deliver 10x the aggregate throughput of legacy AC networks across dense office environments." },
  { metric: "Zero", label: "Unauthorized Access", desc: "Layered biometric and logical access controls eliminate unauthorized entry to sensitive physical and digital assets." },
  { metric: "99.9%", label: "Network Uptime", desc: "Redundant core switching and ISP failover maintain continuous connectivity for business-critical applications." },
];

export default function CorporateEnterprisesPage() {
  return (
    <main>
      <PageHeader
        title="Corporate Enterprise Infrastructure"
        description="Scalable, secure, and premium technology environments for modern corporate headquarters and enterprise facilities."
        breadcrumb="Corporate Enterprises"
      />

      <section className="py-32 bg-[var(--color-surface-0)]">
        <div className="container mx-auto px-4 max-w-7xl">
          <ScrollReveal>
            <div className="section-label mb-4">The Challenge</div>
            <div className="divider-gold" />
            <h2 className="text-5xl font-playfair font-bold text-white mb-6">What Corporate Enterprises Face</h2>
            <p className="text-[var(--color-text-secondary)] text-xl max-w-2xl mb-16">Modern enterprises need infrastructure that matches their ambition — high-performance, secure, and elegantly managed.</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
            {challenges.map((c, i) => (
              <ScrollReveal key={c.title} delay={((i % 2) + 1) as 1|2}>
                <div className="bg-[var(--color-surface-1)] p-10 h-full">
                  <div className="text-[var(--color-gold)] font-display font-bold text-4xl mb-4 opacity-20">0{i + 1}</div>
                  <h3 className="text-xl font-bold text-white mb-3 font-display">{c.title}</h3>
                  <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">{c.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-[var(--color-surface-1)]">
        <div className="container mx-auto px-4 max-w-7xl">
          <ScrollReveal>
            <div className="section-label mb-4">The MegaTech Approach</div>
            <div className="divider-gold" />
            <h2 className="text-5xl font-playfair font-bold text-white mb-16">Our 5-Phase Methodology</h2>
          </ScrollReveal>
          <div className="space-y-px">
            {approach.map((a, i) => (
              <ScrollReveal key={a.step} delay={((i % 3) + 1) as 1|2|3}>
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

      <section className="py-32 bg-[var(--color-surface-0)]">
        <div className="container mx-auto px-4 max-w-7xl">
          <ScrollReveal>
            <div className="section-label mb-4">Technology Stack</div>
            <div className="divider-gold" />
            <h2 className="text-5xl font-playfair font-bold text-white mb-16">What We Deploy</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stack.map((s, i) => (
              <ScrollReveal key={s.category} delay={((i % 4) + 1) as 1|2|3|4}>
                <div className="bg-[var(--color-surface-1)] border border-white/5 p-8 rounded-sm h-full">
                  <div className="text-[var(--color-gold)] text-xs font-bold uppercase tracking-widest mb-4">{s.category}</div>
                  <ul className="space-y-3">{s.products.map(p => (
                    <li key={p} className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                      <div className="w-1 h-1 rounded-full bg-[var(--color-gold)] shrink-0" />{p}
                    </li>
                  ))}</ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-[var(--color-surface-1)]">
        <div className="container mx-auto px-4 max-w-7xl">
          <ScrollReveal>
            <div className="section-label mb-4">Expected Outcomes</div>
            <div className="divider-gold" />
            <h2 className="text-5xl font-playfair font-bold text-white mb-16">Measurable Results</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {outcomes.map((o, i) => (
              <ScrollReveal key={o.label} delay={((i + 1) as 1|2|3)}>
                <div className="text-center p-10 bg-[var(--color-surface-0)] rounded-sm border border-white/5 h-full">
                  <div className="text-6xl font-bold text-white font-display mb-2">{o.metric}</div>
                  <div className="text-[var(--color-gold)] text-sm font-bold uppercase tracking-widest mb-4">{o.label}</div>
                  <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">{o.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-[var(--color-surface-0)]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <ScrollReveal direction="left">
              <div className="section-label mb-4">Start Your Project</div>
              <div className="divider-gold" />
              <h2 className="text-5xl font-playfair font-bold text-white mb-8">Upgrade Your Headquarters</h2>
              <p className="text-[var(--color-text-secondary)] text-xl leading-relaxed mb-10">Schedule an infrastructure assessment with our corporate technology architects. We design environments that match your enterprise ambition.</p>
              <div className="space-y-3 mb-10">
                {["Corporate WiFi Survey", "Boardroom AV Consultation", "Access Control Design", "Network Audit"].map(s => (
                  <div key={s} className="flex items-center gap-3 text-sm text-[var(--color-text-secondary)]">
                    <CheckCircle2 className="w-4 h-4 text-[var(--color-gold)] shrink-0" />{s}
                  </div>
                ))}
              </div>
              <div className="bg-[var(--color-surface-1)] p-6 rounded-sm border border-white/5">
                <p className="text-white font-bold mb-1">Direct Line</p>
                <p className="text-[var(--color-gold)] text-xl font-bold">+91 94231 91703</p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={2}>
              <div className="bg-white p-8 md:p-10 rounded-sm shadow-2xl">
                <h3 className="text-2xl font-bold text-[var(--color-navy)] font-display mb-2">Submit Consultation Request</h3>
                <p className="text-gray-400 text-sm mb-8">We respond within 24 hours.</p>
                <LeadForm />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
