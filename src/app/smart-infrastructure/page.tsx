import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import LeadForm from "@/components/ui/LeadForm";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Smart Infrastructure & AV Integration | MegaTech Solutions",
  description: "Integrating high-fidelity audiovisual systems, interactive executive collaboration spaces, and automated building management systems.",
};

const challenges = [
  { title: "Fragmented Audiovisual Systems", body: "Siloed, non-integrated boardroom display monitors, audio echo, and legacy connectivity creating disjointed and embarrassing meeting environments." },
  { title: "Complex Control Interfacing", body: "Multiple remotes and intricate inputs causing massive delays, technical friction, and frustration during high-stakes executive board presentations." },
  { title: "Isolated Building Subsystems", body: "Uncoordinated lighting, climate systems, and power meters working independently and generating high energy waste and maintenance overhead." },
  { title: "Siloed Digital Communication", body: "Fragmented digital signage screens operated on localized USB players, preventing real-time, campus-wide branding and crisis announcements." },
];

const approach = [
  { step: "01", title: "Workspace Needs Analysis", body: "Our engineering team studies your architectural drawings, ambient light, acoustic profiles, and corporate usage workflows." },
  { step: "02", title: "Unified AV/IoT Blueprinting", body: "We map out high-fidelity audio paths, high-definition visual matrices, automated lighting controls, and building system hooks." },
  { step: "03", title: "Precision System Integration", body: "We deploy premium displays, active beamforming microphones, lighting relays, and central control processors." },
  { step: "04", title: "Smart Control Programming", body: "We program custom touch-panel interfaces, reducing system startup to a single button press (e.g. 'Start Meeting')." },
  { step: "05", title: "Operational Continuity Support", body: "We provide comprehensive firmware management, preventative audio calibrations, and 24/7 technical hotline access." },
];

const stack = [
  { category: "AV & Acoustics", products: ["Crestron Systems", "Biamp Systems", "Shure Microphones", "Bose Professional"] },
  { category: "Display & Signage", products: ["Samsung Business Displays", "LG Digital Signage", "Sony Professional", "Barco ClickShare"] },
  { category: "Smart Building Systems", products: ["Honeywell Building Tech", "Siemens Smart Infra", "Schneider Electric", "Johnson Controls"] },
  { category: "Unified Collaboration", products: ["Microsoft Teams Rooms", "Zoom Rooms Core", "Cisco Webex Devices", "Logitech Enterprise"] },
];

const outcomes = [
  { metric: "1-Touch", label: "Meeting Activation", desc: "Start visual displays, active ceiling arrays, smart lighting, and conference connections with a single command." },
  { metric: "Zero", label: "Technical Friction", desc: "Intelligent, user-friendly automation interfaces that allow executives to run critical presentations without dedicated IT support." },
  { metric: "35%", label: "Energy Optimization", desc: "Automated climate, occupancy sensors, and smart lighting grids working in sync to reduce operational utility costs." },
];

export default function SmartInfrastructurePage() {
  return (
    <main>
      <PageHeader
        title="Smart Infrastructure"
        description="Engineering high-fidelity, intelligent workspaces, enterprise AV integrations, and automated facility controls."
        breadcrumb="Smart Infrastructure"
      />

      {/* ── Challenge Landscape ── */}
      <section className="py-32 bg-[var(--color-surface-0)] relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-30" />
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <ScrollReveal>
            <div className="section-label mb-4">The Challenge</div>
            <div className="divider-gold" />
            <h2 className="text-5xl font-playfair font-bold text-white mb-6">Facility Integration Challenges</h2>
            <p className="text-[var(--color-text-secondary)] text-xl max-w-2xl mb-16">High-end facilities require modern, unified, and intuitive workspaces. Siloed hardware diminishes collaboration efficiency and building performance.</p>
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
            <h2 className="text-5xl font-playfair font-bold text-white mb-16">Our 5-Phase Integration Blueprint</h2>
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
            <h2 className="text-5xl font-playfair font-bold text-white mb-16">World-Class Integration Brands</h2>
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
                <Image src="/img-smart-infrastructure.png" alt="Executive Corporate Boardroom Integration" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-navy)]/60 to-transparent" />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={2}>
              <h3 className="text-4xl font-playfair font-bold text-white mb-4">Corporate Head Office — Ultra-Premium Executive Boardroom & Smart Campus</h3>
              <p className="text-[var(--color-text-secondary)] mb-8 leading-relaxed">Designed and integrated a unified workspace technology platform for an international conglomerate. Deployed single-touch control panels governing high-definition multi-screen arrays, dynamic beamforming ceiling microphones, smart LED lighting systems, and automated HVAC environmental zoning across 15+ premium meeting halls and auditoriums.</p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[["15+ Rooms", "Fully Automated"], ["1-Touch", "Control System"], ["35% Savings", "Utility Efficiency"]].map(([v, l]) => (
                  <div key={l} className="text-center bg-[var(--color-surface-2)] p-4 rounded-sm">
                    <div className="text-2xl font-bold text-white font-display">{v}</div>
                    <div className="text-[10px] text-[var(--color-text-muted)] uppercase tracking-wider mt-1">{l}</div>
                  </div>
                ))}
              </div>
              <div className="bg-[var(--color-surface-0)] border-l-2 border-[var(--color-gold)] pl-4 py-3 text-sm text-[var(--color-text-secondary)]">
                <strong className="text-[var(--color-gold)]">Stack:</strong> Crestron Processor · Shure Ceiling Microphone Arrays · Biamp Audio · Samsung Business Signage
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
            <h2 className="text-5xl font-playfair font-bold text-white mb-16">High-Performance Spaces</h2>
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
              <div className="section-label mb-4">Smart Consultation</div>
              <div className="divider-gold" />
              <h2 className="text-5xl font-playfair font-bold text-white mb-8">Modernize Your Environment</h2>
              <p className="text-[var(--color-text-secondary)] text-xl leading-relaxed mb-10">Connect with our senior AV and facility systems engineers to design a premium, smart technology plan for your workspace.</p>
              <div className="space-y-3 mb-10">
                {["On-Site Spatial AV Analysis", "Acoustic Reflection Surveys", "Lighting Relay & Smart Grid Feasibility", "Touch Control Interface Design"].map(s => (
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
                <h3 className="text-2xl font-bold text-[var(--color-navy)] font-display mb-2">Discuss Your AV Project</h3>
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
