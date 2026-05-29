import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Featured Projects | MegaTech Solutions",
  description: "Case studies from enterprise infrastructure deployments across education, healthcare, industrial, and government sectors.",
};

const projects = [
  {
    category: "Education",
    title: "State University Smart Campus Upgrade",
    scale: "100-acre, 40 buildings",
    challenge: "Legacy copper network causing persistent outages for 10,000 students. No centralized campus surveillance.",
    solution: "End-to-end 40G fiber backbone, 1,200+ WiFi 6 APs, and a centralized command center with AI-powered video analytics across 500 cameras.",
    stack: "Cisco Catalyst · Aruba WiFi 6 · CommScope Fiber · Milestone VMS",
    outcomes: [["10,000+", "Concurrent Users"], ["500", "IP Cameras"], ["99.99%", "Uptime SLA"]],
    image: "/img-education.png",
  },
  {
    category: "Healthcare",
    title: "City General Hospital Infrastructure Overhaul",
    scale: "300-bed multi-specialty hospital",
    challenge: "Outdated analog CCTV, unprotected server rooms, and no access control on restricted medical areas.",
    solution: "Full IP surveillance network with biometric access control on ICU, NICU, pharmacy, and server rooms. Redundant 10G fiber core with UPS-backed infrastructure.",
    stack: "Dell EMC · APC Schneider · Hikvision IP · HID Global Access",
    outcomes: [["500+", "IP Cameras"], ["15", "Secured Zones"], ["100%", "Compliance"]],
    image: "/img-healthcare.png",
  },
  {
    category: "Industrial",
    title: "Automotive Plant Network Modernization",
    scale: "50-acre manufacturing campus",
    challenge: "Standard switches failing in extreme factory heat. Multiple surveillance blind spots in high-risk machinery zones.",
    solution: "Ruggedized industrial Ethernet ring with armored fiber optic. Thermal and explosion-proof IP cameras covering full plant floor and perimeter.",
    stack: "Cisco Industrial IE3400 · Axis Thermal · CommScope Armored Fiber",
    outcomes: [["0", "Hardware Failures (3yr)"], ["360°", "Plant Coverage"], ["50 Acres", "Monitored"]],
    image: "/img-industrial.png",
  },
  {
    category: "Government",
    title: "Municipal Smart City Surveillance",
    scale: "City-wide, 500+ camera nodes",
    challenge: "No coordinated city surveillance. Manual incident response at intersections. Limited public safety visibility.",
    solution: "500+ HD PTZ cameras with ALPR across critical intersections, connected to a dedicated fiber ring. Police Command Center with AI traffic analytics and incident dashboards.",
    stack: "Bosch Flexidome · Milestone XProtect · Juniper Core Routing",
    outcomes: [["500+", "Camera Nodes"], ["30%", "Crime Reduction"], ["24/7", "Command Ops"]],
    image: "/img-government.png",
  },
];

export default function ProjectsPage() {
  return (
    <main>
      <PageHeader
        title="Featured Projects"
        description="Engineering future-ready infrastructure for large-scale enterprises and institutions across India."
        breadcrumb="Projects"
      />

      {/* ── Project Cards ── */}
      <section className="py-32 bg-[var(--color-surface-0)]">
        <div className="container mx-auto px-4 max-w-7xl space-y-40">
          {projects.map((project, idx) => (
            <div key={project.title} className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

              {/* Image */}
              <ScrollReveal
                direction={idx % 2 === 0 ? "left" : "right"}
                className={`lg:col-span-6 ${idx % 2 !== 0 ? "lg:order-2" : ""}`}
              >
                <div className="relative h-[440px] rounded-sm overflow-hidden">
                  <Image src={project.image} alt={project.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  {/* Category Badge */}
                  <div className="absolute top-6 left-6">
                    <span className="section-label bg-[var(--color-surface-0)]/80 px-3 py-1.5 rounded-sm backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                  {/* Scale tag */}
                  <div className="absolute bottom-6 left-6">
                    <span className="text-white/60 text-xs font-medium">{project.scale}</span>
                  </div>
                </div>
              </ScrollReveal>

              {/* Content */}
              <ScrollReveal
                direction={idx % 2 === 0 ? "right" : "left"}
                delay={2}
                className={`lg:col-span-6 ${idx % 2 !== 0 ? "lg:order-1" : ""}`}
              >
                <div className="section-label mb-4">{project.category}</div>
                <div className="divider-gold" />
                <h2 className="text-4xl font-playfair font-bold text-white mb-8 leading-tight">{project.title}</h2>

                <div className="space-y-6 mb-8">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--color-text-muted)] mb-2">The Challenge</h4>
                    <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">{project.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--color-text-muted)] mb-2">Our Solution</h4>
                    <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">{project.solution}</p>
                  </div>
                </div>

                {/* Outcomes */}
                <div className="grid grid-cols-3 gap-3 mb-8">
                  {project.outcomes.map(([val, lbl]) => (
                    <div key={lbl} className="bg-[var(--color-surface-1)] border border-white/5 p-4 rounded-sm text-center">
                      <div className="text-xl font-bold text-white font-display">{val}</div>
                      <div className="text-[9px] text-[var(--color-text-muted)] uppercase tracking-wider mt-1">{lbl}</div>
                    </div>
                  ))}
                </div>

                {/* Stack */}
                <div className="bg-[var(--color-surface-1)] border-l-2 border-[var(--color-gold)] pl-5 py-3 rounded-r-sm">
                  <p className="text-[10px] text-[var(--color-gold)] font-bold uppercase tracking-widest mb-1">Technology Stack</p>
                  <p className="text-[var(--color-text-secondary)] text-sm">{project.stack}</p>
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-[var(--color-surface-1)] border-t border-white/5">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <ScrollReveal>
            <h2 className="text-4xl font-playfair font-bold text-white mb-6">Start Your Infrastructure Project</h2>
            <p className="text-[var(--color-text-secondary)] text-xl mb-10">Request a comprehensive site survey and engineering consultation for your next deployment.</p>
            <Link href="/consultation" className="btn-gold inline-flex items-center gap-2 px-8 py-4 rounded-sm text-base">
              Request Site Survey <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
