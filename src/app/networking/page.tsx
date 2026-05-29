import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import LeadForm from "@/components/ui/LeadForm";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Enterprise Networking & Optical Fiber Infrastructure | MegaTech Solutions",
  description: "High-performance structured cabling, multi-gigabit fiber backbones, and redundant switching topologies for enterprise campuses.",
};

const challenges = [
  { title: "Bandwidth Congestion & Bottlenecks", body: "Legacy switching configurations and low-bandwidth trunk lines buckling under massive concurrent connections, database replication, and cloud traffic." },
  { title: "Single Points of Failure", body: "Lack of core hardware redundancy and active failover protocols, turning localized line cuts into catastrophic business outages." },
  { title: "Lateral Security Exposure", body: "Flat, unsegmented network environments allowing unauthorized access to cross sensitive company, financial, and client directories." },
  { title: "Legacy Cabling Chaos", body: "Undocumented, poorly terminated copper trunks in server racks causing transmission loss, cooling bottlenecks, and diagnostic delays." },
];

const approach = [
  { step: "01", title: "Cabling & Topology Audit", body: "Our certified network architects map all active links, audit physical cable terminations, and run comprehensive traffic tests." },
  { step: "02", title: "Redundant Backbone Design", body: "We engineer a multi-gigabit fiber ring with automated failover and secure virtual local area network (VLAN) structures." },
  { step: "03", title: "Deployment Optimization", body: "We pull optical fiber and deploy structured copper backplanes with meticulous labeling and industry-certified testing." },
  { step: "04", title: "Switching & Wireless Setup", body: "We configure advanced core/edge switches and deploy enterprise-grade WiFi 6/6E access points for complete coverage." },
  { step: "05", title: "Automated Monitoring", body: "We connect the infrastructure to our central Network Operations Center (NOC) for proactive alerting and AMC compliance." },
];

const stack = [
  { category: "Core Switching & Fabric", products: ["Cisco Catalyst 9000", "Aruba CX Switching", "Juniper EX Series", "Ruckus ICX Fabric"] },
  { category: "Structured Cabling & Fiber", products: ["CommScope Systimax", "Panduit Enterprise", "Corning Optical", "Legrand Linkeo"] },
  { category: "Security & SD-WAN", products: ["Fortinet FortiGate", "Palo Alto Networks", "Cisco Meraki", "Sophos XGS Firewall"] },
  { category: "Wireless & Management", products: ["Aruba WiFi 6E APs", "Ruckus SmartZone", "Cisco DNA Center", "Ubiquiti UniFi Enterprise"] },
];

const outcomes = [
  { metric: "99.999%", label: "Network Uptime", desc: "Designed with full dual-homed switching paths and physical ring redundancy to eliminate operational downtime." },
  { metric: "10 Gbps+", label: "Backbone Capacity", desc: "High-speed optical fiber trunks linking servers and campus nodes with zero packet drop at maximum load." },
  { metric: "Zero", label: "Security Leaks", desc: "Complete cryptographic network segmentation and secure access control lists preventing lateral system exposure." },
];

export default function NetworkingPage() {
  return (
    <main>
      <PageHeader
        title="Enterprise Networking"
        description="The physical foundation of digital commerce. We build resilient, high-speed corporate networking fabrics that scale for decades."
        breadcrumb="Networking"
      />

      {/* ── Challenge Landscape ── */}
      <section className="py-32 bg-[var(--color-surface-0)] relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-30" />
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <ScrollReveal>
            <div className="section-label mb-4">The Challenge</div>
            <div className="divider-gold" />
            <h2 className="text-5xl font-playfair font-bold text-white mb-6">Enterprise Infrastructure Pain Points</h2>
            <p className="text-[var(--color-text-secondary)] text-xl max-w-2xl mb-16">High-growth businesses cannot rely on residential-grade network standards. Modern operations demand high availability, density, and security.</p>
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
            <h2 className="text-5xl font-playfair font-bold text-white mb-16">Our 5-Phase Network Architecture</h2>
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
            <h2 className="text-5xl font-playfair font-bold text-white mb-16">World-Class Network Standards</h2>
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
                <Image src="/img-networking.png" alt="Corporate Tech Park Optical Backbone & WiFi 6 Campus" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-navy)]/60 to-transparent" />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={2}>
              <h3 className="text-4xl font-playfair font-bold text-white mb-4">Corporate Tech Park — Optical Backbone & WiFi 6 Campus Upgrade</h3>
              <p className="text-[var(--color-text-secondary)] mb-8 leading-relaxed">Engineered and installed a unified multi-gigabit network campus for a prominent technology hub. Deployed redundant 40Gbps single-mode optical rings connecting 4 corporate structures, integrated over 800 managed switching ports, and optimized a high-density corporate WiFi 6 network serving 5,000+ active users daily with isolated, secure virtual network paths.</p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[["40 Gbps", "Fiber Core"], ["5,000+", "Concurrent Users"], ["99.999%", "Network Guarantee"]].map(([v, l]) => (
                  <div key={l} className="text-center bg-[var(--color-surface-2)] p-4 rounded-sm">
                    <div className="text-2xl font-bold text-white font-display">{v}</div>
                    <div className="text-[10px] text-[var(--color-text-muted)] uppercase tracking-wider mt-1">{l}</div>
                  </div>
                ))}
              </div>
              <div className="bg-[var(--color-surface-0)] border-l-2 border-[var(--color-gold)] pl-4 py-3 text-sm text-[var(--color-text-secondary)]">
                <strong className="text-[var(--color-gold)]">Stack:</strong> Cisco Catalyst 9500 Core · Aruba CX Access Switching · CommScope Systimax Cabling · Fortinet Firewall
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
            <h2 className="text-5xl font-playfair font-bold text-white mb-16">Guaranteed Uptime & Speed</h2>
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
              <div className="section-label mb-4">Network Consultation</div>
              <div className="divider-gold" />
              <h2 className="text-5xl font-playfair font-bold text-white mb-8">Ready to Accelerate Operations?</h2>
              <p className="text-[var(--color-text-secondary)] text-xl leading-relaxed mb-10">Schedule an enterprise-wide network and structured cabling audit with our certified system integration engineers.</p>
              <div className="space-y-3 mb-10">
                {["Comprehensive Optical Fiber Audit", "Fluke Performance Testing", "VLAN & Security Topology Audit", "WiFi Heatmap & Coverage Survey"].map(s => (
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
                <h3 className="text-2xl font-bold text-[var(--color-navy)] font-display mb-2">Request Network Assessment</h3>
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
