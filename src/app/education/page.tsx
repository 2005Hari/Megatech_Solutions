import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import LeadForm from "@/components/ui/LeadForm";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Educational Infrastructure | MegaTech Solutions",
  description: "Smart campus infrastructure, high-density WiFi 6, surveillance, and AV systems for universities and schools.",
};

const challenges = [
  { title: "High Device Density", body: "Thousands of concurrent students with multiple devices overwhelming legacy network infrastructure across lecture halls, libraries, and dormitories." },
  { title: "Campus-Wide Physical Security", body: "Managing coherent access control and surveillance across vast, open, multi-building campus environments with limited security personnel." },
  { title: "Legacy Classroom Technology", body: "Outdated AV systems and disconnected projectors creating poor learning experiences and operational inefficiencies." },
  { title: "Unplanned Downtime", body: "Network outages disrupting critical exams, online learning platforms, and administrative systems with no rapid response mechanism." },
];

const approach = [
  { step: "01", title: "Infrastructure Assessment", body: "Our engineers audit every building, floor plan, and network node to identify coverage gaps, bandwidth bottlenecks, and security vulnerabilities." },
  { step: "02", title: "Architecture Design", body: "We design a unified fiber backbone, high-density wireless topology, and integrated surveillance plan using best-fit multi-vendor technologies." },
  { step: "03", title: "Phased Deployment", body: "Campus upgrades are executed building-by-building to ensure zero academic disruption during deployment phases." },
  { step: "04", title: "Command Center Integration", body: "All systems — network, surveillance, and access control — are unified into a single, centralized operations console." },
  { step: "05", title: "AMC-Backed Continuity", body: "Post-deployment, our NOC monitors campus infrastructure 24/7 with guaranteed response times under our Operational Continuity Agreement." },
];

const stack = [
  { category: "Core Networking", products: ["Cisco Catalyst 9000", "Aruba CX Switching", "CommScope Fiber"] },
  { category: "Wireless", products: ["Aruba WiFi 6/6E APs", "Cisco Meraki", "Ruckus Enterprise"] },
  { category: "Surveillance", products: ["Axis IP Cameras", "Milestone VMS", "Hikvision Analytics"] },
  { category: "AV & Smart Rooms", products: ["Crestron Control", "Sony Laser Projectors", "Biamp Audio"] },
];

const outcomes = [
  { metric: "99.99%", label: "Network Uptime", desc: "Guaranteed through redundant fiber rings and active-active failover configurations." },
  { metric: "40%", label: "Security Response Improvement", desc: "AI-powered camera analytics reduce incident detection and response time significantly." },
  { metric: "3x", label: "Bandwidth Capacity", desc: "WiFi 6 deployment triples effective per-user throughput versus legacy 802.11ac networks." },
];

export default function EducationPage() {
  return (
    <main>
      <PageHeader
        title="Educational Infrastructure"
        description="Engineering smart, secure, and highly connected campuses for the next generation of learning."
        breadcrumb="Education"
      />

      {/* ── Challenge Landscape ── */}
      <section className="py-16 lg:py-12 lg:py-10 lg:py-16 bg-[var(--color-surface-0)]">
        <div className="container mx-auto px-4 max-w-7xl">
          <ScrollReveal>
            <div className="section-label mb-4">The Challenge</div>
            <div className="divider-gold" />
            <h2 className="text-5xl font-playfair font-bold text-white mb-6">What Educational Institutions Face</h2>
            <p className="text-[var(--color-text-secondary)] text-xl max-w-2xl mb-16">Modern campuses demand infrastructure that operates at the scale of a small city — yet must remain transparent to students and faculty.</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
            {challenges.map((c, i) => (
              <ScrollReveal key={c.title} delay={((i % 2) + 1) as 1 | 2}>
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

      {/* ── MegaTech Approach ── */}
      <section className="py-16 lg:py-12 lg:py-10 lg:py-16 bg-[var(--color-surface-1)]">
        <div className="container mx-auto px-4 max-w-7xl">
          <ScrollReveal>
            <div className="section-label mb-4">The MegaTech Approach</div>
            <div className="divider-gold" />
            <h2 className="text-5xl font-playfair font-bold text-white mb-16">Our 5-Phase Methodology</h2>
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
      <section className="py-16 lg:py-12 lg:py-10 lg:py-16 bg-[var(--color-surface-0)]">
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
      <section className="py-16 lg:py-12 lg:py-10 lg:py-16 bg-[var(--color-surface-1)]">
        <div className="container mx-auto px-4 max-w-7xl">
          <ScrollReveal>
            <div className="section-label mb-4">Featured Project</div>
            <div className="divider-gold" />
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-12">
            <ScrollReveal direction="left">
              <div className="relative h-[400px] rounded-sm overflow-hidden">
                <Image src="/img-education.png" alt="State University Campus Upgrade" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-navy)]/60 to-transparent" />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={2}>
              <h3 className="text-4xl font-playfair font-bold text-white mb-4">State University — 100-Acre Smart Campus</h3>
              <p className="text-[var(--color-text-secondary)] mb-8 leading-relaxed">Overhauled the entire legacy infrastructure across 40 buildings. Deployed a 40G fiber core, 1,200+ WiFi 6 APs, and a centralized command center with 500 IP cameras operating on AI-powered analytics.</p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[["40 Bldgs", "Covered"], ["10,000+", "Concurrent Users"], ["99.99%", "Uptime Guarantee"]].map(([v, l]) => (
                  <div key={l} className="text-center bg-[var(--color-surface-2)] p-4 rounded-sm">
                    <div className="text-2xl font-bold text-white font-display">{v}</div>
                    <div className="text-[10px] text-[var(--color-text-muted)] uppercase tracking-wider mt-1">{l}</div>
                  </div>
                ))}
              </div>
              <div className="bg-[var(--color-surface-0)] border-l-2 border-[var(--color-gold)] pl-4 py-3 text-sm text-[var(--color-text-secondary)]">
                <strong className="text-[var(--color-gold)]">Stack:</strong> Cisco Catalyst Core · Aruba WiFi 6 · CommScope Fiber · Milestone VMS
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Expected Outcomes ── */}
      <section className="py-16 lg:py-12 lg:py-10 lg:py-16 bg-[var(--color-surface-0)]">
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
      <section className="py-12 lg:py-10 lg:py-16 bg-[var(--color-surface-0)] border-t border-white/5">
        <div className="container mx-auto px-4 max-w-7xl">
          <ScrollReveal>
            <div className="section-label mb-4">Credentials Portfolio</div>
            <div className="divider-gold" />
            <h2 className="text-4xl font-playfair font-bold text-white mb-12">Educational Client Directory</h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "NMIMS Shirpur",
              "North Maharashtra University",
              "SSVPS Engineering College",
              "Dadasaheb Raval Engineering College",
              "Jawahar Dental College",
              "Dhule Education Society",
              "VWS College"
            ].map((client, i) => (
              <ScrollReveal key={client} delay={((i % 3) + 1) as 1|2|3}>
                <div className="bg-[var(--color-surface-1)] border border-white/5 p-6 rounded-sm hover:border-[var(--color-gold)]/20 transition-all flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-gold)] shrink-0" />
                  <span className="text-white font-medium text-sm tracking-wide font-display">{client}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>



      {/* ── Consultation CTA ── */}
      <section className="py-16 lg:py-12 lg:py-10 lg:py-16 bg-[var(--color-surface-1)]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <ScrollReveal direction="left">
              <div className="section-label mb-4">Start Your Project</div>
              <div className="divider-gold" />
              <h2 className="text-5xl font-playfair font-bold text-white mb-8">Modernize Your Campus</h2>
              <p className="text-[var(--color-text-secondary)] text-xl leading-relaxed mb-10">Schedule a Smart Campus Consultation with our engineering team. We will assess your current infrastructure and design a phased upgrade roadmap.</p>
              <div className="space-y-3 mb-10">
                {["Smart Campus Assessment", "WiFi Coverage Survey", "Surveillance Design", "AV Integration Planning"].map(s => (
                  <div key={s} className="flex items-center gap-3 text-sm text-[var(--color-text-secondary)]">
                    <CheckCircle2 className="w-4 h-4 text-[var(--color-gold)] shrink-0" />
                    {s}
                  </div>
                ))}
              </div>
              <div className="bg-[var(--color-surface-0)] p-6 rounded-sm border border-white/5">
                <p className="text-white font-bold mb-1">Direct Line</p>
                <p className="text-[var(--color-gold)] text-xl font-bold">+91 94231 91703</p>
                <p className="text-[var(--color-text-muted)] text-sm mt-1">info@megatechsolutions.com</p>
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
