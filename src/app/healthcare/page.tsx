import Image from "next/image";
import PageHeader from "@/components/ui/PageHeader";
import LeadForm from "@/components/ui/LeadForm";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Healthcare Infrastructure | MegaTech Solutions",
  description: "Mission-critical IT infrastructure, zero-downtime networks, and access control for hospitals and healthcare facilities.",
};

const challenges = [
  { title: "Zero-Downtime Requirement", body: "A network outage in a hospital can directly impact life-saving diagnostic equipment, patient monitoring systems, and emergency communications." },
  { title: "Patient Data Security", body: "Strict compliance requirements demand absolute protection of patient records — both digitally in servers and physically through access control." },
  { title: "Aging Analog Infrastructure", body: "Legacy analog CCTV and copper networks cannot support modern IP-based medical devices, telehealth platforms, or digital imaging systems." },
  { title: "Multi-Zone Access Control", body: "Pharmacies, ICUs, NICUs, and server rooms require granular access management that integrates with staff identity systems." },
];

const approach = [
  { step: "01", title: "Regulatory Compliance Audit", body: "We begin by mapping your current infrastructure against applicable healthcare data security and physical safety standards." },
  { step: "02", title: "Redundant Network Design", body: "We architect active-active redundant core networks with UPS-backed power, ensuring zero single points of failure." },
  { step: "03", title: "IP Surveillance Upgrade", body: "Legacy analog systems are replaced with high-definition IP cameras with video analytics, covering all critical zones." },
  { step: "04", title: "Biometric Access Deployment", body: "Restricted areas receive multi-factor biometric access control integrated with hospital Active Directory." },
  { step: "05", title: "24/7 NOC Monitoring", body: "Post-deployment, all critical infrastructure is continuously monitored from our NOC with AMC-guaranteed response times." },
];

const stack = [
  { category: "Network Infrastructure", products: ["Cisco Catalyst 9000", "Dell EMC PowerSwitch", "Panduit Cabling"] },
  { category: "Power & Continuity", products: ["APC by Schneider UPS", "Vertiv Rack PDU", "Eaton Backup Power"] },
  { category: "Surveillance", products: ["Hikvision IP Cameras", "Axis Network Cameras", "Milestone VMS"] },
  { category: "Access Control", products: ["HID Global Biometrics", "Honeywell Access", "Bosch Access Control"] },
];

const outcomes = [
  { metric: "99.99%", label: "Network Uptime", desc: "Redundant core architecture ensures continuous operation of all critical medical systems." },
  { metric: "100%", label: "Compliance", desc: "Full alignment with healthcare data security and physical access regulations." },
  { metric: "24/7", label: "Active Monitoring", desc: "Our NOC monitors every network node and security event in real time." },
];

export default function HealthcarePage() {
  return (
    <main>
      <PageHeader
        title="Healthcare Infrastructure"
        description="Ensuring operational continuity and data security for hospitals where every second counts."
        breadcrumb="Healthcare"
      />

      <section className="py-32 bg-[var(--color-surface-0)]">
        <div className="container mx-auto px-4 max-w-7xl">
          <ScrollReveal>
            <div className="section-label mb-4">The Challenge</div>
            <div className="divider-gold" />
            <h2 className="text-5xl font-playfair font-bold text-white mb-6">What Healthcare Facilities Face</h2>
            <p className="text-[var(--color-text-secondary)] text-xl max-w-2xl mb-16">In healthcare, infrastructure reliability is not a performance metric — it is a patient safety imperative.</p>
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
            <div className="section-label mb-4">Featured Project</div>
            <div className="divider-gold" />
          </ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-12">
            <ScrollReveal direction="left">
              <div className="relative h-[400px] rounded-sm overflow-hidden">
                <Image src="/img-healthcare.png" alt="Hospital Infrastructure" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-navy)]/60 to-transparent" />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={2}>
              <h3 className="text-4xl font-playfair font-bold text-white mb-4">City General Hospital — Full Infrastructure Overhaul</h3>
              <p className="text-[var(--color-text-secondary)] mb-8 leading-relaxed">Replaced outdated analog systems with high-definition IP surveillance. Deployed biometric access control across all restricted wards, alongside a redundant 10G optical fiber core with UPS-backed server infrastructure.</p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[["500+", "IP Cameras"], ["15", "Restricted Zones"], ["100%", "Compliance"]].map(([v, l]) => (
                  <div key={l} className="text-center bg-[var(--color-surface-0)] p-4 rounded-sm">
                    <div className="text-2xl font-bold text-white font-display">{v}</div>
                    <div className="text-[10px] text-[var(--color-text-muted)] uppercase tracking-wider mt-1">{l}</div>
                  </div>
                ))}
              </div>
              <div className="bg-[var(--color-surface-0)] border-l-2 border-[var(--color-gold)] pl-4 py-3 text-sm text-[var(--color-text-secondary)]">
                <strong className="text-[var(--color-gold)]">Stack:</strong> Dell EMC · APC UPS · Hikvision · HID Global Access Control
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-32 bg-[var(--color-surface-0)]">
        <div className="container mx-auto px-4 max-w-7xl">
          <ScrollReveal>
            <div className="section-label mb-4">Expected Outcomes</div>
            <div className="divider-gold" />
            <h2 className="text-5xl font-playfair font-bold text-white mb-16">Measurable Results</h2>
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

      {/* ── Client Credentials ── */}
      <section className="py-24 bg-[var(--color-surface-0)] border-t border-white/5">
        <div className="container mx-auto px-4 max-w-7xl">
          <ScrollReveal>
            <div className="section-label mb-4">Credentials Portfolio</div>
            <div className="divider-gold" />
            <h2 className="text-4xl font-playfair font-bold text-white mb-12">Healthcare Client Directory</h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
            {[
              "Tapan Mukeshbhai Patel Memorial Hospital"
            ].map((client, i) => (
              <ScrollReveal key={client} delay={1}>
                <div className="bg-[var(--color-surface-1)] border border-white/5 p-6 rounded-sm hover:border-[var(--color-gold)]/20 transition-all flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-gold)] shrink-0" />
                  <span className="text-white font-medium text-sm tracking-wide font-display">{client}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>



      <section className="py-32 bg-[var(--color-surface-1)]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <ScrollReveal direction="left">
              <div className="section-label mb-4">Start Your Project</div>
              <div className="divider-gold" />
              <h2 className="text-5xl font-playfair font-bold text-white mb-8">Secure Your Hospital Network</h2>
              <p className="text-[var(--color-text-secondary)] text-xl leading-relaxed mb-10">Request a comprehensive Security and Infrastructure Audit from our healthcare technology specialists.</p>
              <div className="space-y-3 mb-10">
                {["Infrastructure Assessment", "Security Audit", "Compliance Review", "Network Redesign"].map(s => (
                  <div key={s} className="flex items-center gap-3 text-sm text-[var(--color-text-secondary)]">
                    <CheckCircle2 className="w-4 h-4 text-[var(--color-gold)] shrink-0" />{s}
                  </div>
                ))}
              </div>
              <div className="bg-[var(--color-surface-0)] p-6 rounded-sm border border-white/5">
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
