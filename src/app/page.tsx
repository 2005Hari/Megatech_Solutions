import Link from "next/link";
import Image from "next/image";
import StatCounter from "@/components/ui/StatCounter";
import ScrollReveal from "@/components/ui/ScrollReveal";
import MarqueeStrip from "@/components/ui/MarqueeStrip";
import { ArrowRight, CheckCircle2, Network, Shield, Building2, Server, Quote } from "lucide-react";


const industries = [
  {
    name: "Education",
    tagline: "Smart campuses for the next generation of learning.",
    href: "/education",
    image: "/img-education.png",
  },
  {
    name: "Healthcare",
    tagline: "Zero-downtime infrastructure for patient-critical environments.",
    href: "/healthcare",
    image: "/img-healthcare.png",
  },
  {
    name: "Industrial",
    tagline: "Ruggedized networks for demanding manufacturing environments.",
    href: "/industrial",
    image: "/img-industrial.png",
  },
  {
    name: "Government",
    tagline: "Secure, scalable infrastructure for public institutions.",
    href: "/government",
    image: "/img-government.png",
  },
];

const capabilities = [
  {
    icon: <Network className="w-7 h-7" />,
    title: "Enterprise Networking",
    desc: "High-capacity optical fiber backbones, WiFi 6 deployments, and resilient switching topologies engineered for extreme data density and 99.99% uptime.",
    href: "/networking",
    tags: ["Cisco", "Juniper", "Aruba", "WiFi 6"],
  },
  {
    icon: <Shield className="w-7 h-7" />,
    title: "CCTV & Security Systems",
    desc: "IP-based surveillance, AI video analytics, biometric access control, and centralized command centers for comprehensive physical asset protection.",
    href: "/security",
    tags: ["Hikvision", "Axis", "Bosch", "AI Analytics"],
  },
  {
    icon: <Building2 className="w-7 h-7" />,
    title: "Smart Infrastructure",
    desc: "Boardroom AV automation, digital signage arrays, IoT sensor integration, and intelligent building management systems.",
    href: "/smart-infrastructure",
    tags: ["AV Integration", "IoT", "SCADA", "BMS"],
  },
  {
    icon: <Server className="w-7 h-7" />,
    title: "Operational Continuity",
    desc: "AMC-backed preventive maintenance, 24/7 remote NOC monitoring, asset lifecycle management, and rapid emergency deployment.",
    href: "/operational-continuity",
    tags: ["AMC Management", "Remote NOC", "24/7 Support"],
  },
];

const timeline = [
  { year: "2000", event: "Founded as Koparkar Infokrafts Pvt. Ltd., pioneering local IT infrastructure." },
  { year: "2010", event: "Expanded into enterprise-grade storage, switching, and structured cabling." },
  { year: "2017", event: "Integrated advanced CCTV surveillance and enterprise security systems." },
  { year: "2023", event: "Rebranded as MegaTech Solutions — Premier Smart Technology Systems Integrator." },
  { year: "Today", event: "Engineering future-ready infrastructure for enterprises, campuses, and cities." },
];



const trustPoints = [
  "Certified engineering team with 25+ years of field experience",
  "Multi-vendor partnerships — no vendor lock-in",
  "AMC-driven maintenance and 24/7 operational support",
  "Deployed across education, healthcare, industrial, and government sectors",
  "Dhule HQ and Mumbai corporate office — pan-India reach",
];

export default function Home() {
  return (
    <main>

      {/* ═══ 1. CINEMATIC HERO ═══════════════════════════════════════════════ */}
      <section className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden bg-[var(--color-surface-0)]">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/hero-infrastructure.png"
            alt="Enterprise Infrastructure"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface-0)] via-[var(--color-surface-0)]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-surface-0)]/80 to-transparent" />
        </div>

        {/* Grid overlay */}
        <div className="absolute inset-0 grid-overlay" />

        {/* Gold top accent */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-gold)]/50 to-transparent" />

        {/* Hero Content */}
        <div className="container mx-auto px-4 pb-16 pt-32 lg:pb-24 lg:pt-40 relative z-10 max-w-7xl">
          <div className="max-w-4xl">
            <div className="section-label mb-6">Enterprise Infrastructure & Smart Technology</div>
            <div className="divider-gold" />

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-playfair text-white leading-[1.1] tracking-tight mb-6">
              Engineering<br />
              <span className="gradient-text">Future-Ready</span><br />
              Infrastructure.
            </h1>

            <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed max-w-2xl mb-10 font-light">
              Delivering enterprise networking, intelligent security systems, smart infrastructure, and operational continuity solutions for institutions, industries, healthcare organizations, and government bodies.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/consultation" className="btn-gold inline-flex items-center gap-2 px-8 py-4 rounded-sm text-sm font-semibold tracking-wide uppercase">
                Schedule Infrastructure Assessment
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/projects" className="inline-flex items-center gap-2 px-8 py-4 rounded-sm text-sm font-semibold tracking-wide uppercase border border-white/20 text-white hover:bg-white/5 transition-colors">
                View Projects
              </Link>
            </div>
          </div>
        </div>

        {/* ── Stats Bar ── */}
        <div className="relative z-10 border-t border-white/8 bg-[var(--color-surface-1)]/80 backdrop-blur-md">
          <div className="container mx-auto px-4 py-10 max-w-7xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/8">
              <StatCounter end={25} suffix="+" label="Years Legacy" sublabel="Since 2000" />
              <StatCounter end={500} suffix="+" label="Clients Served" sublabel="Pan-India" />
              <StatCounter end={100} suffix="+" label="Deployments" sublabel="Completed" />
              <StatCounter end={24} suffix="/7" label="Support" sublabel="Operational Continuity" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 2. TRUSTED BY ═══════════════════════════════════════════════════ */}
      <section className="py-10 lg:py-16 bg-[var(--color-surface-1)] border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-30 pointer-events-none" />
        <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center mb-12">
          <p className="text-center text-[10px] font-bold tracking-[0.25em] uppercase text-[var(--color-gold)] mb-2">
            Trusted By Leading Institutions &amp; Enterprises
          </p>
          <p className="text-[var(--color-text-muted)] text-sm">Education · Healthcare · Industrial &amp; Manufacturing</p>
        </div>

        {/* Row 1 — Education */}
        <div className="mb-4">
          <p className="text-[9px] font-bold tracking-[0.2em] uppercase text-white/20 mb-4 text-center">Education &amp; Institutions</p>
          <MarqueeStrip duration={28}>
            {[
              "NMIMS (SVKM)",
              "North Maharashtra University",
              "SSVPS Engineering College",
              "Dadasaheb Raval Engineering College",
              "Jawahar Dental College",
              "Dhule Education Society",
              "VWS College",
            ].map((name) => (
              <span key={name} className="whitespace-nowrap px-5 py-2.5 bg-white/4 border border-white/8 rounded-sm text-[var(--color-text-muted)] text-xs font-medium tracking-wide hover:border-[var(--color-gold)]/40 hover:text-white/80 transition-colors cursor-default">
                {name}
              </span>
            ))}
          </MarqueeStrip>
        </div>

        {/* Row 2 — Healthcare (reverse) */}
        <div className="mb-4">
          <p className="text-[9px] font-bold tracking-[0.2em] uppercase text-white/20 mb-4 text-center">Healthcare</p>
          <MarqueeStrip duration={22} reverse>
            {[
              "Tapan Mukeshbhai Patel Memorial Hospital",
              "•",
              "Jawahar Dental College, Dhule",
              "•",
              "Patient-Critical Infrastructure",
              "•",
              "Zero-Downtime Medical Networks",
              "•",
            ].map((name, i) => (
              <span key={`${name}-${i}`} className="whitespace-nowrap px-5 py-2.5 bg-white/4 border border-white/8 rounded-sm text-[var(--color-text-muted)] text-xs font-medium tracking-wide hover:border-[var(--color-gold)]/40 hover:text-white/80 transition-colors cursor-default">
                {name}
              </span>
            ))}
          </MarqueeStrip>
        </div>

        {/* Row 3 — Industrial */}
        <div className="mb-10">
          <p className="text-[9px] font-bold tracking-[0.2em] uppercase text-white/20 mb-4 text-center">Industrial &amp; Manufacturing</p>
          <MarqueeStrip duration={36}>
            {[
              "R M Chemical Pvt. Ltd.",
              "R M Phosphates and Chemicals",
              "Madhya Bharat Fertilizers",
              "Deesan Textiles",
              "Arna Textile",
              "Krishna Cotex",
              "Pramukh Cotex",
              "Yogi Textiles",
              "Priyadarshani Sudgirni",
              "Jindal Industries",
            ].map((name) => (
              <span key={name} className="whitespace-nowrap px-5 py-2.5 bg-white/4 border border-white/8 rounded-sm text-[var(--color-text-muted)] text-xs font-medium tracking-wide hover:border-[var(--color-gold)]/40 hover:text-white/80 transition-colors cursor-default">
                {name}
              </span>
            ))}
          </MarqueeStrip>
        </div>

        <div className="container mx-auto px-4 max-w-7xl">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />
          <p className="text-[var(--color-text-secondary)] text-sm md:text-base font-medium max-w-3xl mx-auto leading-relaxed text-center">
            25+ Years of Trusted Partnerships Across Education, Healthcare, Industrial, and Enterprise Sectors
          </p>
        </div>
      </section>

      {/* ═══ 3. LEGACY / WHO WE ARE ══════════════════════════════════════════ */}
      <section className="py-16 lg:py-12 lg:py-10 lg:py-16 bg-[var(--color-surface-0)]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

            {/* Left: Copy */}
            <ScrollReveal direction="left">
              <div className="section-label mb-4">Our Legacy</div>
              <div className="divider-gold" />
              <h2 className="text-5xl md:text-6xl font-playfair font-bold text-white mb-8 leading-tight">
                25+ Years of<br />Engineering Excellence.
              </h2>
              <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed mb-10">
                Since 2000, MegaTech has evolved from a pioneering regional consultancy into a premier enterprise systems integrator. We don't supply hardware — we architect solutions that guarantee absolute operational continuity for environments that cannot afford to go offline.
              </p>
              <ul className="space-y-4 mb-10">
                {trustPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-[var(--color-text-secondary)] text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[var(--color-gold)] shrink-0 mt-0.5" />
                    {point}
                  </li>
                ))}
              </ul>
              <Link href="/why-megatech" className="inline-flex items-center gap-2 text-[var(--color-gold)] font-semibold hover:gap-4 transition-all text-sm">
                Why MegaTech <ArrowRight className="w-4 h-4" />
              </Link>
            </ScrollReveal>

            {/* Right: Timeline */}
            <ScrollReveal direction="right" delay={2}>
              <div className="relative pl-8 space-y-10">
                <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-[var(--color-gold)] via-white/10 to-transparent" />
                {timeline.map((item, i) => (
                  <div key={i} className="relative">
                    <div className="absolute -left-[33px] top-1 w-3 h-3 rounded-full border-2 border-[var(--color-gold)] bg-[var(--color-surface-0)]" />
                    <div className="text-[var(--color-gold)] font-display font-bold text-sm tracking-widest uppercase mb-1">{item.year}</div>
                    <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">{item.event}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ═══ 4. INDUSTRIES WE SERVE ══════════════════════════════════════════ */}
      <section className="py-16 lg:py-12 lg:py-10 lg:py-16 bg-[var(--color-surface-1)]">
        <div className="container mx-auto px-4 max-w-7xl">
          <ScrollReveal>
            <div className="text-center mb-20">
              <div className="section-label mb-4 text-center">Industries We Serve</div>
              <div className="divider-gold mx-auto" />
              <h2 className="text-5xl md:text-6xl font-playfair font-bold text-white mb-6">Specialized by Sector</h2>
              <p className="text-[var(--color-text-secondary)] text-xl max-w-2xl mx-auto">Each vertical demands unique infrastructure approaches. We bring deep domain expertise to every deployment.</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industries.map((industry, idx) => (
              <ScrollReveal key={industry.name} delay={(idx % 2 === 0 ? 1 : 2) as 1 | 2}>
                <Link href={industry.href} className="group relative h-96 overflow-hidden rounded-sm block card-hover">
                  <Image
                    src={industry.image}
                    alt={industry.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute inset-0 bg-[var(--color-navy)]/30 group-hover:bg-[var(--color-navy)]/10 transition-colors duration-300" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 p-8">
                    <div className="section-label mb-2">{industry.name}</div>
                    <h3 className="text-3xl font-playfair font-bold text-white mb-3">{industry.name} Infrastructure</h3>
                    <p className="text-white/70 text-sm mb-4 max-w-sm leading-relaxed">{industry.tagline}</p>
                    <span className="inline-flex items-center gap-2 text-[var(--color-gold)] text-sm font-semibold group-hover:gap-4 transition-all">
                      Explore Solutions <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 5. ENTERPRISE CAPABILITIES ══════════════════════════════════════ */}
      <section id="solutions" className="py-16 lg:py-12 lg:py-10 lg:py-16 bg-[var(--color-surface-0)]">
        <div className="container mx-auto px-4 max-w-7xl">
          <ScrollReveal>
            <div className="mb-20">
              <div className="section-label mb-4">Enterprise Capabilities</div>
              <div className="divider-gold" />
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                <h2 className="text-5xl md:text-6xl font-playfair font-bold text-white max-w-xl leading-tight">
                  What We Engineer
                </h2>
                <p className="text-[var(--color-text-secondary)] max-w-md">
                  Four core competencies, delivered with multi-vendor expertise and absolute commitment to operational continuity.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 rounded-sm overflow-hidden">
            {capabilities.map((cap, idx) => (
              <ScrollReveal key={cap.title} delay={(idx % 2 === 0 ? 1 : 2) as 1 | 2}>
                <div className="bg-[var(--color-surface-1)] p-10 h-full group hover:bg-[var(--color-surface-2)] transition-colors">
                  <div className="text-[var(--color-gold)] mb-6">{cap.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4 font-display">{cap.title}</h3>
                  <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-6">{cap.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {cap.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 bg-white/5 border border-white/10 rounded-sm text-[var(--color-text-muted)]">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link href={cap.href} className="inline-flex items-center gap-2 text-[var(--color-gold)] text-sm font-semibold group-hover:gap-4 transition-all">
                    View Capability <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 6. FEATURED PROJECT ═════════════════════════════════════════════ */}
      <section className="py-16 lg:py-12 lg:py-10 lg:py-16 bg-[var(--color-surface-1)]">
        <div className="container mx-auto px-4 max-w-7xl">
          <ScrollReveal>
            <div className="section-label mb-4">Featured Project</div>
            <div className="divider-gold" />
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mt-12">
            <ScrollReveal direction="left" className="lg:col-span-5">
              <span className="text-[var(--color-gold)] text-xs font-bold uppercase tracking-widest mb-4 block">Education Sector</span>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6 leading-tight">
                State University Smart Campus Upgrade
              </h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-8">
                Overhauled 100-acre campus across 40 buildings with a new 40G fiber backbone, 1,200+ WiFi 6 APs, and a centralized command center monitoring 500 IP cameras — resulting in 99.99% uptime for 10,000 concurrent users.
              </p>

              {/* Outcome Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[["10K+", "Concurrent Users"], ["500", "IP Cameras"], ["99.99%", "Uptime"]].map(([val, lbl]) => (
                  <div key={lbl} className="bg-[var(--color-surface-2)] p-4 rounded-sm border border-white/5 text-center">
                    <div className="text-2xl font-bold text-white font-display mb-1">{val}</div>
                    <div className="text-[9px] text-[var(--color-text-muted)] uppercase tracking-wider">{lbl}</div>
                  </div>
                ))}
              </div>

              {/* Stack */}
              <div className="bg-[var(--color-surface-2)] p-4 rounded-sm border-l-2 border-[var(--color-gold)] mb-8">
                <p className="text-[10px] text-[var(--color-gold)] uppercase tracking-widest font-bold mb-1">Technology Stack</p>
                <p className="text-[var(--color-text-secondary)] text-sm">Cisco Catalyst · Aruba WiFi · CommScope Fiber · Milestone VMS</p>
              </div>

              <Link href="/projects" className="btn-gold inline-flex items-center gap-2 px-6 py-3 rounded-sm text-sm">
                View All Projects <ArrowRight className="w-4 h-4" />
              </Link>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={2} className="lg:col-span-7">
              <div className="relative h-[500px] rounded-sm overflow-hidden">
                <Image
                  src="/img-education.png"
                  alt="Smart Campus Deployment"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-navy)]/60 to-transparent" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══ 7. TECHNOLOGY ECOSYSTEM ═════════════════════════════════════════ */}
      <section className="py-12 lg:py-10 lg:py-16 bg-[var(--color-surface-0)] border-y border-white/5">
        <div className="container mx-auto px-4 max-w-7xl mb-16">
          <ScrollReveal>
            <div className="text-center">
              <p className="section-label mb-4 text-center">Technology Ecosystem</p>
              <h2 className="text-4xl font-playfair font-bold text-white mb-4">Strategic Alliance Partners</h2>
              <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto text-sm">We maintain strategic partnerships with global technology leaders — engineered into unified, future-ready solutions.</p>
            </div>
          </ScrollReveal>
        </div>

        {/* Row 1 — Compute & Networking */}
        <div className="mb-5">
          <p className="text-[9px] font-bold tracking-[0.2em] uppercase text-white/20 mb-4 text-center">Compute · Networking · Storage</p>
          <MarqueeStrip duration={30}>
            {[
              { name: "CISCO",   color: "#049fd9" },
              { name: "HP",      color: "#0096d6" },
              { name: "Dell",    color: "#007db8" },
              { name: "Lenovo",  color: "#e2231a" },
              { name: "Apple",   color: "#e8e8e8" },
              { name: "Aruba",   color: "#ff6900" },
              { name: "IBM",     color: "#1f70c1" },
              { name: "ASUS",    color: "#00539b" },
            ].map((p) => (
              <div key={p.name} className="whitespace-nowrap px-7 py-3 bg-[var(--color-surface-1)] border border-white/6 rounded-sm cursor-default hover:border-white/20 transition-all">
                <span className="text-base font-bold font-display tracking-wide" style={{ color: p.color }}>{p.name}</span>
              </div>
            ))}
          </MarqueeStrip>
        </div>

        {/* Row 2 — Security (reverse) */}
        <div className="mb-5">
          <p className="text-[9px] font-bold tracking-[0.2em] uppercase text-white/20 mb-4 text-center">Security &amp; Surveillance</p>
          <MarqueeStrip duration={24} reverse>
            {[
              { name: "HIKVISION",  color: "#e41e26" },
              { name: "MATRIX",     color: "#00a0e3" },
              { name: "CP PLUS",    color: "#c8102e" },
              { name: "Honeywell",  color: "#e8e8e8" },
              { name: "Fortinet",   color: "#ee3124" },
              { name: "Prama",      color: "#9aa3b2" },
              { name: "Hanwha",     color: "#005bac" },
            ].map((p) => (
              <div key={p.name} className="whitespace-nowrap px-7 py-3 bg-[var(--color-surface-1)] border border-white/6 rounded-sm cursor-default hover:border-white/20 transition-all">
                <span className="text-base font-bold font-display tracking-wide" style={{ color: p.color }}>{p.name}</span>
              </div>
            ))}
          </MarqueeStrip>
        </div>

        {/* Row 3 — Print, AV, Power */}
        <div className="mb-10">
          <p className="text-[9px] font-bold tracking-[0.2em] uppercase text-white/20 mb-4 text-center">Print · AV · Power</p>
          <MarqueeStrip duration={38}>
            {[
              { name: "Canon",      color: "#c8102e" },
              { name: "EPSON",      color: "#003087" },
              { name: "brother",    color: "#009bde" },
              { name: "ViewSonic",  color: "#0066cc" },
              { name: "BenQ",       color: "#9aa3b2" },
              { name: "APC",        color: "#cc0000" },
              { name: "LUMINOUS",   color: "#ff6600" },
              { name: "D-Link",     color: "#005eaa" },
              { name: "Emerson",    color: "#009a44" },
            ].map((p) => (
              <div key={p.name} className="whitespace-nowrap px-7 py-3 bg-[var(--color-surface-1)] border border-white/6 rounded-sm cursor-default hover:border-white/20 transition-all">
                <span className="text-base font-bold font-display tracking-wide" style={{ color: p.color }}>{p.name}</span>
              </div>
            ))}
          </MarqueeStrip>
        </div>

        <div className="text-center">
          <Link href="/partners" className="text-[var(--color-gold)] text-sm font-semibold hover:underline inline-flex items-center gap-2">
            Explore Full Ecosystem <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ═══ 8. LEADERSHIP ═══════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-12 lg:py-10 lg:py-16 bg-[var(--color-surface-1)]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">

            <ScrollReveal direction="left" className="lg:col-span-4">
              <div className="relative">
                <div className="relative h-[500px] rounded-sm overflow-hidden">
                  <Image
                    src="/jatin-panchal.png"
                    alt="Jatin A. Panchal — Managing Director"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                {/* Name plate */}
                <div className="absolute bottom-6 left-6 right-6 glass p-4 rounded-sm">
                  <p className="text-white font-bold font-display">Jatin A. Panchal</p>
                  <p className="text-[var(--color-gold)] text-xs font-semibold uppercase tracking-widest mt-0.5">Managing Director</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={2} className="lg:col-span-8">
              <div className="section-label mb-4">Leadership</div>
              <div className="divider-gold" />
              <h2 className="text-5xl font-playfair font-bold text-white mb-8 leading-tight">
                Infrastructure is about<br />
                <span className="gradient-text">trust built over decades.</span>
              </h2>

              <blockquote className="border-l-2 border-[var(--color-gold)] pl-8 mb-10">
                <p className="text-xl text-[var(--color-text-secondary)] leading-relaxed italic mb-2">
                  "At MegaTech, we are not hardware resellers — we are architects of enterprise resilience. Our two-decade evolution has been driven by a singular focus: delivering absolute operational continuity to environments where failure is not an option."
                </p>
                <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed italic">
                  "We understand that for a modern hospital, university, or government body, technology is not an accessory — it is the lifeblood of operations. Every project we take on is a long-term partnership, not a transaction."
                </p>
              </blockquote>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: "Infrastructure Philosophy", body: "Systems should be invisible. When they work, no one notices. That is our standard." },
                  { title: "Long-Term Vision", body: "We design for the next 15 years, not the next quarterly review." },
                  { title: "Partnership Model", body: "We embed ourselves as an operational partner, not a one-time vendor." },
                ].map((item) => (
                  <div key={item.title} className="bg-[var(--color-surface-0)] p-6 rounded-sm border border-white/5">
                    <h4 className="text-white font-bold text-sm mb-3 font-display">{item.title}</h4>
                    <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ═══ 9. TESTIMONIAL ══════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-12 lg:py-10 lg:py-16 bg-[var(--color-surface-0)] relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay-dense opacity-40" />
        <div className="container mx-auto px-4 max-w-5xl relative z-10 text-center">
          <ScrollReveal>
            <Quote className="w-12 h-12 text-[var(--color-gold)]/20 mx-auto mb-10" />
            <blockquote className="text-3xl md:text-4xl font-playfair text-white leading-relaxed mb-12 font-light">
              "MegaTech completely transformed our hospital's infrastructure. Their engineering team didn't just install hardware — they built a secure, compliant ecosystem that lets our doctors focus entirely on patients, not IT outages."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-px h-8 bg-[var(--color-gold)]" />
              <div className="text-left">
                <p className="text-white font-bold font-display">Director of IT Operations</p>
                <p className="text-[var(--color-text-muted)] text-sm">City General Hospital</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ 10. FINAL CTA ════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-12 lg:py-10 lg:py-16 bg-[var(--color-surface-1)] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-gold)]/30 to-transparent" />
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <ScrollReveal direction="left">
              <div className="section-label mb-4">Get Started</div>
              <div className="divider-gold" />
              <h2 className="text-5xl md:text-6xl font-playfair font-bold text-white mb-8 leading-tight">
                Ready to Upgrade Your Infrastructure?
              </h2>
              <p className="text-[var(--color-text-secondary)] text-xl leading-relaxed mb-10">
                Partner with MegaTech for enterprise-grade consulting, deployment, and long-term operational continuity. Our engineering team is ready to assess your environment.
              </p>
              <div className="space-y-3">
                {["Infrastructure Assessment", "Site Survey", "Network Audit", "Security Audit"].map(s => (
                  <div key={s} className="flex items-center gap-3 text-sm text-[var(--color-text-secondary)]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)]" />
                    {s}
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={2}>
              <div className="bg-white p-8 md:p-10 rounded-sm shadow-2xl">
                <h3 className="text-2xl font-bold text-[var(--color-navy)] font-display mb-2">Submit Request</h3>
                <p className="text-gray-400 text-sm mb-8">Our consultants respond within 24 hours.</p>
                {/* Inline mini CTA to full form */}
                <div className="space-y-4">
                  <input placeholder="Your Name" className="w-full px-4 py-3 border border-gray-200 rounded-sm text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600" />
                  <input placeholder="Organization" className="w-full px-4 py-3 border border-gray-200 rounded-sm text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600" />
                  <input type="email" placeholder="Email Address" className="w-full px-4 py-3 border border-gray-200 rounded-sm text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600" />
                  <Link href="/consultation" className="w-full btn-gold py-3.5 rounded-sm font-bold text-center block">
                    Continue to Full Form →
                  </Link>
                </div>
                <p className="text-center text-gray-400 text-xs mt-4">500+ assessments completed · Responded within 24hrs</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

    </main>
  );
}
