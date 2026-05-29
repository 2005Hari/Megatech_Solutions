import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Technology Partners & Brands | MegaTech Solutions",
  description: "Strategic partnerships with leading enterprise technology manufacturers — desktops, servers, security, networking, and power systems.",
};

const PARTNER_LOGOS = {
  "Dell": (
    <svg viewBox="0 0 100 100" className="w-12 h-12 fill-current">
      <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="6" />
      <text x="50" y="58" fontStyle="italic" fontWeight="bold" fontSize="20" fontFamily="sans-serif" textAnchor="middle">DELL</text>
    </svg>
  ),
  "HP": (
    <svg viewBox="0 0 100 100" className="w-12 h-12 fill-current">
      <circle cx="50" cy="50" r="42" fill="currentColor" />
      <circle cx="50" cy="50" r="38" fill="none" stroke="var(--background)" strokeWidth="2" />
      <text x="47" y="62" fontStyle="italic" fontWeight="extrabold" fontSize="34" fontFamily="serif" fill="#050810" textAnchor="middle">hp</text>
    </svg>
  ),
  "Lenovo": (
    <svg viewBox="0 0 120 45" className="w-20 h-8 fill-current">
      <rect width="120" height="40" fill="currentColor" rx="2" />
      <text x="60" y="26" fontWeight="bold" fontSize="16" fontFamily="sans-serif" fill="#050810" textAnchor="middle" letterSpacing="1">lenovo</text>
    </svg>
  ),
  "Apple": (
    <svg viewBox="0 0 100 100" className="w-10 h-10 fill-current">
      <path d="M50,15 C45,15 41,20 41,27 C41,35 46,39 50,39 C55,39 58,35 58,27 C58,20 54,15 50,15 Z M32,45 C28,50 25,58 25,68 C25,82 33,90 39,90 C42,90 45,88 49,88 C53,88 56,90 59,90 C65,90 73,82 73,68 C71,67 67,63 67,56 C67,49 72,44 74,43 C70,37 63,35 60,35 C52,34 49,38 45,38 C41,38 37,35 32,45 Z" />
    </svg>
  ),
  "APC": (
    <svg viewBox="0 0 100 40" className="w-16 h-8 fill-current">
      <path d="M15,5 L5,35 L12,35 L15,26 L27,26 L30,35 L37,35 Z M21,8 L25,20 L17,20 Z M42,5 L42,35 L58,35 C64,35 68,31 68,20 C68,9 64,5 58,5 Z M49,11 L56,11 C60,11 61,13 61,20 C61,27 60,29 56,29 L49,29 Z M72,30 L82,20 L73,10 L80,10 L89,20 L80,30 Z" />
    </svg>
  ),
  "Emerson": (
    <svg viewBox="0 0 120 30" className="w-24 h-6 fill-current">
      <text x="0" y="22" fontWeight="bold" fontSize="18" fontFamily="sans-serif" letterSpacing="1">EMERSON</text>
    </svg>
  ),
  "Luminous": (
    <svg viewBox="0 0 120 30" className="w-24 h-6 fill-current">
      <text x="0" y="22" fontWeight="extrabold" fontSize="15" fontFamily="sans-serif" letterSpacing="0.5">LUMINOUS</text>
    </svg>
  ),
  "Cisco": (
    <svg viewBox="0 0 100 55" className="w-16 h-10 fill-current">
      <path d="M10,35 L10,25 M20,35 L20,15 M30,35 L30,5 M40,35 L40,15 M50,35 L50,25 M60,35 L60,15 M70,35 L70,5 M80,35 L80,15 M90,35 L90,25" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <text x="50" y="50" fontWeight="bold" fontSize="11" fontFamily="sans-serif" textAnchor="middle" letterSpacing="2">CISCO</text>
    </svg>
  ),
  "HP Aruba": (
    <svg viewBox="0 0 100 40" className="w-20 h-8 fill-current">
      <path d="M10,25 C20,5 40,5 50,25 C60,5 80,5 90,25" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <text x="50" y="36" fontWeight="bold" fontSize="9" fontFamily="sans-serif" textAnchor="middle" letterSpacing="1">HP ARUBA</text>
    </svg>
  ),
  "Honeywell": (
    <svg viewBox="0 0 140 30" className="w-28 h-6 fill-current">
      <text x="0" y="22" fontWeight="900" fontSize="20" fontFamily="sans-serif" letterSpacing="0.5">Honeywell</text>
    </svg>
  ),
  "D-Link": (
    <svg viewBox="0 0 100 30" className="w-16 h-6 fill-current">
      <text x="0" y="22" fontWeight="bold" fontSize="22" fontFamily="sans-serif">D-Link</text>
    </svg>
  ),
  "Prama": (
    <svg viewBox="0 0 100 30" className="w-16 h-6 fill-current">
      <text x="0" y="22" fontWeight="bold" fontSize="18" fontFamily="sans-serif" letterSpacing="1">PRAMA</text>
    </svg>
  ),
  "Matrix": (
    <svg viewBox="0 0 100 30" className="w-16 h-6 fill-current">
      <text x="0" y="22" fontWeight="bold" fontSize="20" fontFamily="sans-serif" letterSpacing="1.5">MATRIX</text>
    </svg>
  ),
  "CP Plus": (
    <svg viewBox="0 0 100 30" className="w-18 h-6 fill-current">
      <text x="0" y="22" fontWeight="bold" fontSize="18" fontFamily="sans-serif" letterSpacing="0.5">CP PLUS</text>
    </svg>
  ),
  "Hanwha": (
    <svg viewBox="0 0 100 35" className="w-20 h-6 fill-current">
      <circle cx="15" cy="18" r="8" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="31" cy="18" r="8" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="47" cy="18" r="8" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <text x="60" y="22" fontWeight="bold" fontSize="10" fontFamily="sans-serif">Hanwha</text>
    </svg>
  ),
  "Kramer": (
    <svg viewBox="0 0 100 30" className="w-16 h-6 fill-current">
      <text x="0" y="22" fontWeight="bold" fontSize="20" fontFamily="sans-serif" letterSpacing="1">KRAMER</text>
    </svg>
  ),
  "Belden": (
    <svg viewBox="0 0 100 30" className="w-18 h-6 fill-current">
      <text x="0" y="22" fontWeight="extrabold" fontSize="20" fontFamily="sans-serif" letterSpacing="1">BELDEN</text>
    </svg>
  ),
  "ICE": (
    <svg viewBox="0 0 80 30" className="w-12 h-6 fill-current">
      <text x="0" y="22" fontWeight="900" fontSize="26" fontFamily="sans-serif" letterSpacing="2">ICE</text>
    </svg>
  ),
  "Canon": (
    <svg viewBox="0 0 100 30" className="w-16 h-6 fill-current">
      <text x="0" y="22" fontWeight="bold" fontSize="24" fontFamily="serif" letterSpacing="0.5">Canon</text>
    </svg>
  ),
  "Epson": (
    <svg viewBox="0 0 100 30" className="w-18 h-6 fill-current">
      <text x="0" y="22" fontWeight="extrabold" fontSize="22" fontFamily="sans-serif" letterSpacing="1">EPSON</text>
    </svg>
  ),
  "Brother": (
    <svg viewBox="0 0 100 30" className="w-16 h-6 fill-current">
      <text x="0" y="22" fontWeight="bold" fontSize="20" fontFamily="serif" letterSpacing="0.5">brother</text>
    </svg>
  ),
  "ViewSonic": (
    <svg viewBox="0 0 120 30" className="w-24 h-6 fill-current">
      <text x="0" y="22" fontWeight="bold" fontSize="16" fontFamily="sans-serif">ViewSonic</text>
    </svg>
  ),
  "BenQ": (
    <svg viewBox="0 0 100 30" className="w-16 h-6 fill-current">
      <text x="0" y="22" fontWeight="extrabold" fontSize="24" fontFamily="sans-serif" fontStyle="italic">BenQ</text>
    </svg>
  ),
  "Senses": (
    <svg viewBox="0 0 100 30" className="w-16 h-6 fill-current">
      <text x="0" y="22" fontWeight="bold" fontSize="18" fontFamily="sans-serif" letterSpacing="1">Senses</text>
    </svg>
  ),
  "Hikvision": (
    <svg viewBox="0 0 120 30" className="w-24 h-6 fill-current">
      <text x="0" y="22" fontWeight="extrabold" fontSize="18" fontFamily="sans-serif" letterSpacing="0.5">HIKVISION</text>
    </svg>
  ),
  "Fortinet": (
    <svg viewBox="0 0 100 100" className="w-10 h-10 fill-current">
      <path d="M50,5 L15,20 L15,50 C15,75 50,95 50,95 C50,95 85,75 85,50 L85,20 Z" fill="none" stroke="currentColor" strokeWidth="6" />
      <path d="M35,35 L65,35 L65,45 L45,45 L45,55 L65,55 L65,65 L35,65 Z" fill="currentColor" />
    </svg>
  ),
  "Checkpoint": (
    <svg viewBox="0 0 100 40" className="w-20 h-8 fill-current">
      <path d="M5,5 L15,5 L15,15 L25,15 L25,5 L35,5 L35,35 L25,35 L25,25 L15,25 L15,35 L5,35 Z M45,5 C55,5 60,10 60,20 C60,30 55,35 45,35 L40,35 L40,5 Z M47,12 L47,28 C51,28 53,26 53,20 C53,14 51,12 47,12 Z M68,5 L88,5 L88,12 L75,12 L75,18 L85,18 L85,25 L75,25 L75,35 L68,35 Z" />
    </svg>
  ),
  "Palo Alto": (
    <svg viewBox="0 0 100 100" className="w-10 h-10 fill-current">
      <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="4" strokeDasharray="4 4" />
      <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="4" />
      <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="4" />
      <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="4" />
      <circle cx="50" cy="50" r="10" fill="currentColor" />
    </svg>
  ),
};

const ecosystems = [
  {
    name: "Desktops, Servers & Workstations",
    desc: "Enterprise compute architectures, high-performance processing nodes, and premium user endpoints.",
    partners: [
      { name: "HP", desc: "ProLiant rack servers, EliteDesk corporate PCs, and Z-series workloads." },
      { name: "Lenovo", desc: "ThinkSystem hyperconverged server grids and high-reliability ThinkCentre stations." },
      { name: "Dell", desc: "PowerEdge computational servers, Latitude notebooks, and Precision graphics workstations." },
      { name: "Apple", desc: "Premium M-series compute endpoints, iPad deployments, and macOS creative stations." },
    ],
  },
  {
    name: "UPS, Inverters & Stabilizers",
    desc: "Uninterruptible power, clean energy conditioning, and industrial voltage regulation backplanes.",
    partners: [
      { name: "APC", desc: "Smart-UPS setups, high-density server room power racks, and active surge grids." },
      { name: "Emerson", desc: "Vertiv-class critical digital power backup, modular UPS, and industrial stabilizer rings." },
      { name: "Luminous", desc: "Smart commercial sine-wave inverters, backup battery stacks, and corporate power units." },
    ],
  },
  {
    name: "Networking, Switching & Wireless",
    desc: "Structured active switching backplanes, high-density secure routing, and corporate wireless coverage.",
    partners: [
      { name: "Cisco", desc: "Catalyst switching cores, advanced enterprise edge routers, and secure Meraki fabrics." },
      { name: "HP Aruba", desc: "Enterprise campus CX switching nodes and intelligent high-density WiFi 6/6E coverage." },
      { name: "Honeywell", desc: "Intelligent building controls, active IoT physical routers, and integration panels." },
      { name: "D-Link", desc: "Layer 2/3 business switching, smart hubs, and localized optical transceivers." },
    ],
  },
  {
    name: "CCTV Surveillance Systems",
    desc: "AI-driven optical capture, dynamic night-color cameras, and centralized VMS recording systems.",
    partners: [
      { name: "Prama", desc: "High-definition indigenous surveillance, deep optical processing, and cost-effective DVRs." },
      { name: "Matrix", desc: "Unified IP cameras, hybrid recording systems, and advanced physical biometric controls." },
      { name: "CP Plus", desc: "Active network video records, deep-view dome optics, and automated plate recognizers." },
      { name: "Hanwha", desc: "Wisenet premium analytics, extreme low-light optical domes, and secure IP grids." },
    ],
  },
  {
    name: "HDMI Cables, Converters & Splitters",
    desc: "High-fidelity AV signal routing, copper/optical HDMI extension, and robust matrix switchers.",
    partners: [
      { name: "Kramer", desc: "Professional studio-grade matrix switchers, signal extenders, and visual converters." },
      { name: "Belden", desc: "High-spec shielded copper cables, multi-conductor cabling, and precision connectors." },
      { name: "ICE", desc: "Premium structural audio-visual cabling, high-bandwidth HDMI trunks, and interfaces." },
    ],
  },
  {
    name: "Printers, Scanners & Copiers",
    desc: "Enterprise document hubs, high-speed multi-function copiers, and network digitization arrays.",
    partners: [
      { name: "HP", desc: "LaserJet Enterprise multi-function hubs, secure workgroup arrays, and plotting nodes." },
      { name: "Canon", desc: "imageRUNNER enterprise digital copiers, high-definition photography, and scanner rings." },
      { name: "Epson", desc: "WorkForce inkless business systems, large-format graphics scanners, and point-of-sale grids." },
      { name: "Brother", desc: "Heavy-duty compact office laser systems, high-speed network scanners, and label units." },
    ],
  },
  {
    name: "Projectors, Screens & Accessories",
    desc: "Cinematic boardroom visual projectors, specialized ambient-light rejecting screens, and AV mounts.",
    partners: [
      { name: "ViewSonic", desc: "Premium laser business projectors, interactive displays, and ceiling audio arrays." },
      { name: "Dell", desc: "High-brightness corporate conference projectors, mobile setups, and visual accessories." },
      { name: "Epson", desc: "3LCD cinematic auditorium projection, short-throw teaching arrays, and optical layers." },
      { name: "BenQ", desc: "High-contrast commercial meeting room projectors, smart mounts, and optical setups." },
    ],
  },
  {
    name: "Smartboards & Interactive Panels",
    desc: "Collaborative boardroom whiteboards, interactive teaching grids, and high-fidelity panel overlays.",
    partners: [
      { name: "ViewSonic", desc: "ViewBoard ultra-HD collaboration screens, interactive whiteboard toolkits, and software." },
      { name: "Senses", desc: "Premium touch-interactive whiteboard panels and integrated multimedia sound backplanes." },
      { name: "Hikvision", desc: "Intelligent interactive corporate flat panels, board cameras, and unified meeting panels." },
    ],
  },
  {
    name: "Firewalls & Network Security",
    desc: "Next-generation gateway protection, real-time threat prevention, and zero-trust remote access grids.",
    partners: [
      { name: "Fortinet", desc: "FortiGate high-throughput physical firewalls and unified threat manager fabrics." },
      { name: "Checkpoint", desc: "Quantum security gateways, cloud threat detection systems, and advanced virtual grids." },
      { name: "Palo Alto", desc: "Zero-trust next-gen firewalls, AI-driven DNS security, and cloud network nodes." },
    ],
  },
  {
    name: "Refurbished Compute & Imaging",
    desc: "High-durability, rigorously tested, and certified refurbished enterprise hardware with full warranty support.",
    partners: [
      { name: "HP", desc: "Refurbished LaserJet workgroups, EliteDesk computational cores, and storage nodes." },
      { name: "Dell", desc: "Refurbished high-capacity PowerEdge servers and heavy-duty Precision work stations." },
      { name: "Canon", desc: "Refurbished high-speed imageRUNNER digital multi-function systems and scanners." },
    ],
  },
];

export default function PartnersPage() {
  return (
    <main>
      <PageHeader
        title="Technology Ecosystem"
        description="Strategic alliance partnerships with the world's leading enterprise technology manufacturers — integrated into unified, future-ready solutions."
        breadcrumb="Partners"
      />

      {/* ── Partner Philosophy ── */}
      <section className="py-24 bg-[var(--color-surface-0)] border-b border-white/5">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "No Vendor Lock-In", body: "We hold no exclusive dealing agreements. Every recommendation is based purely on the best fit for your infrastructure." },
              { title: "Multi-Vendor Integration", body: "We specialize in integrating products from multiple manufacturers into cohesive, interoperable enterprise systems." },
              { title: "Certified Engineering", body: "Our team maintains active certifications from Cisco, Aruba, Hikvision, and Dell — ensuring expert-level deployment quality." },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={((i + 1) as 1|2|3)}>
                <div className="border-l-2 border-[var(--color-gold)] pl-6">
                  <h3 className="text-white font-bold text-lg font-display mb-3">{item.title}</h3>
                  <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">{item.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ecosystem Grids ── */}
      <section className="py-32 bg-[var(--color-surface-0)]">
        <div className="container mx-auto px-4 max-w-7xl space-y-32">
          {ecosystems.map((eco, idx) => (
            <div key={eco.name}>
              <ScrollReveal>
                <div className="mb-12">
                  <div className="section-label mb-4">Ecosystem — {String(idx + 1).padStart(2, "0")}</div>
                  <div className="divider-gold" />
                  <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                    <h2 className="text-3xl font-playfair font-bold text-white leading-tight">{eco.name}</h2>
                    <p className="text-[var(--color-text-secondary)] max-w-md text-sm leading-relaxed">{eco.desc}</p>
                  </div>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {eco.partners.map((partner, pi) => {
                  const logo = PARTNER_LOGOS[partner.name as keyof typeof PARTNER_LOGOS];
                  return (
                    <ScrollReveal key={`${eco.name}-${partner.name}`} delay={((pi % 4) + 1) as 1|2|3|4}>
                      <div className="bg-[var(--color-surface-1)] border border-white/5 p-8 rounded-sm h-full group hover:border-[var(--color-gold)]/30 hover:bg-[var(--color-surface-2)] transition-all card-hover flex flex-col justify-between">
                        <div>
                          {/* Logo container */}
                          <div className="h-14 flex items-center mb-6 text-[var(--color-text-muted)] group-hover:text-[var(--color-gold)] transition-colors">
                            {logo || (
                              <span className="text-xl font-bold text-white font-display tracking-tight transition-colors">{partner.name}</span>
                            )}
                          </div>
                          {/* Title */}
                          <div className="text-white font-display font-semibold text-sm mb-2">{partner.name} Solutions</div>
                          <p className="text-[var(--color-text-secondary)] text-xs leading-relaxed">{partner.desc}</p>
                        </div>
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-[var(--color-surface-1)] border-t border-white/5">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <ScrollReveal>
            <h2 className="text-4xl font-playfair font-bold text-white mb-6">Not sure which technology is right for your environment?</h2>
            <p className="text-[var(--color-text-secondary)] text-xl mb-10">Our infrastructure architects will conduct a vendor-neutral assessment and recommend the best-fit technology ecosystem for your specific requirements.</p>
            <Link href="/consultation" className="btn-gold inline-flex items-center gap-2 px-8 py-4 rounded-sm text-base">
              Request Technology Assessment <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
