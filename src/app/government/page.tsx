import Image from "next/image";
import PageHeader from "@/components/ui/PageHeader";
import LeadForm from "@/components/ui/LeadForm";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Government Infrastructure | MegaTech Solutions",
  description: "Smart city surveillance, secure government datacenters, and public infrastructure for government bodies and municipalities.",
};

const challenges = [
  { title: "Scale and Bureaucratic Complexity", body: "City-wide technology deployments require navigating existing legacy infrastructure, multi-department coordination, and strict regulatory procurement frameworks." },
  { title: "Public Safety Monitoring", body: "Securing vast public spaces, critical government buildings, and high-traffic intersections requires large-scale, integrated surveillance architecture." },
  { title: "Data Sovereignty & Security", body: "Government data must be stored on secure, compliant local infrastructure with strict controls over access and data sovereignty." },
  { title: "Operational Resilience", body: "Emergency services, civic administration, and public utilities require infrastructure with zero tolerance for downtime or single points of failure." },
];

const approach = [
  { step: "01", title: "Government Needs Assessment", body: "We evaluate existing infrastructure, security posture, procurement constraints, and compliance requirements specific to your government body." },
  { step: "02", title: "City-Wide Network Planning", body: "Municipal fiber ring design connecting government buildings, camera nodes, and data centers to a central hub with full redundancy." },
  { step: "03", title: "Smart City Surveillance Deployment", body: "Strategic installation of HD PTZ cameras with license plate recognition and crowd analytics across critical intersections and public spaces." },
  { step: "04", title: "Secure Datacenter Build", body: "Compliant server infrastructure with encrypted storage, disaster recovery replication, and tiered access controls for sensitive civic data." },
  { step: "05", title: "Command Center Commissioning", body: "Ergonomic Police/Operations Command Centers with video walls, PSIM, and real-time situational awareness dashboards." },
];

const stack = [
  { category: "City Networking", products: ["Juniper MX Routing", "Cisco ASR Edge", "Dark Fiber Rings"] },
  { category: "Surveillance", products: ["Bosch Flexidome IP", "PTZ ALPR Cameras", "Milestone XProtect VMS"] },
  { category: "Secure Infrastructure", products: ["Dell EMC PowerEdge", "NetApp Secure Storage", "CyberArk PAM"] },
  { category: "Command Centers", products: ["Christie Video Walls", "Lenel OnGuard PSIM", "Barco Display"] },
];

const outcomes = [
  { metric: "30%", label: "Crime Reduction", desc: "AI-powered video analytics enable proactive public safety monitoring and rapid incident response." },
  { metric: "500+", label: "Camera Nodes", desc: "Integrated city-wide surveillance infrastructure monitored from a single command center." },
  { metric: "100%", label: "Data Sovereignty", desc: "All data hosted on compliant local government infrastructure with strict access controls." },
];

export default function GovernmentPage() {
  return (
    <main>
      <PageHeader
        title="Government Infrastructure"
        description="Deploying highly secure, scalable, and compliant public infrastructure for modern smart cities."
        breadcrumb="Government"
      />

      <section className="py-32 bg-[var(--color-surface-0)]">
        <div className="container mx-auto px-4 max-w-7xl">
          <ScrollReveal>
            <div className="section-label mb-4">The Challenge</div>
            <div className="divider-gold" />
            <h2 className="text-5xl font-playfair font-bold text-white mb-6">What Government Bodies Face</h2>
            <p className="text-[var(--color-text-secondary)] text-xl max-w-2xl mb-16">Public sector infrastructure must balance massive scale, absolute security, and strict compliance — within complex procurement frameworks.</p>
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
          <ScrollReveal><div className="section-label mb-4">The MegaTech Approach</div><div className="divider-gold" /><h2 className="text-5xl font-playfair font-bold text-white mb-16">Our 5-Phase Methodology</h2></ScrollReveal>
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
          <ScrollReveal><div className="section-label mb-4">Technology Stack</div><div className="divider-gold" /><h2 className="text-5xl font-playfair font-bold text-white mb-16">What We Deploy</h2></ScrollReveal>
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
          <ScrollReveal><div className="section-label mb-4">Featured Project</div><div className="divider-gold" /></ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-12">
            <ScrollReveal direction="left">
              <div className="relative h-[400px] rounded-sm overflow-hidden">
                <Image src="/img-government.png" alt="Government Command Center" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-navy)]/60 to-transparent" />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={2}>
              <h3 className="text-4xl font-playfair font-bold text-white mb-4">Municipal Smart City — Traffic & Surveillance</h3>
              <p className="text-[var(--color-text-secondary)] mb-8 leading-relaxed">Executed a multi-phase public tender to deploy 500+ HD surveillance cameras across critical intersections. Established a centralized Police Command Center with AI-driven traffic analytics and automated incident response.</p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[["500+", "Cameras"], ["24/7", "Monitoring"], ["30%", "Crime Reduction"]].map(([v, l]) => (
                  <div key={l} className="text-center bg-[var(--color-surface-0)] p-4 rounded-sm">
                    <div className="text-2xl font-bold text-white font-display">{v}</div>
                    <div className="text-[10px] text-[var(--color-text-muted)] uppercase tracking-wider mt-1">{l}</div>
                  </div>
                ))}
              </div>
              <div className="bg-[var(--color-surface-0)] border-l-2 border-[var(--color-gold)] pl-4 py-3 text-sm text-[var(--color-text-secondary)]">
                <strong className="text-[var(--color-gold)]">Stack:</strong> Bosch Surveillance · Milestone XProtect · Juniper Core Routing
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-32 bg-[var(--color-surface-0)]">
        <div className="container mx-auto px-4 max-w-7xl">
          <ScrollReveal><div className="section-label mb-4">Expected Outcomes</div><div className="divider-gold" /><h2 className="text-5xl font-playfair font-bold text-white mb-16">Measurable Results</h2></ScrollReveal>
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

      <section className="py-32 bg-[var(--color-surface-1)]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <ScrollReveal direction="left">
              <div className="section-label mb-4">Start Your Project</div>
              <div className="divider-gold" />
              <h2 className="text-5xl font-playfair font-bold text-white mb-8">Partner for Public Progress</h2>
              <p className="text-[var(--color-text-secondary)] text-xl leading-relaxed mb-10">Submit a Tender Inquiry or request a proposal from our government infrastructure consulting team.</p>
              <div className="space-y-3 mb-10">
                {["Tender Inquiry", "Infrastructure Assessment", "Smart City Planning", "Command Center Design"].map(s => (
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
