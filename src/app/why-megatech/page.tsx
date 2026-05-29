import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Why MegaTech | Enterprise Infrastructure Consultancy",
  description: "25+ years of enterprise infrastructure engineering — why top enterprises, hospitals, and institutions trust MegaTech Solutions.",
};

const reasons = [
  { code: "01", title: "25+ Years of Legacy", body: "Founded in 2000, we have built, maintained, and upgraded infrastructure across hundreds of enterprises. This depth of experience is irreplaceable — and it is what clients feel in every engagement." },
  { code: "02", title: "Enterprise-Scale Expertise", body: "Our team specializes in the hardest deployments — 100-acre campuses, multi-building hospitals, 50-acre factories, and city-wide surveillance networks. Scale is not a challenge for us; it is our normal." },
  { code: "03", title: "Multi-Vendor Independence", body: "We hold no exclusive dealership with any manufacturer. This means every recommendation is driven by what performs best in your specific environment — not by our vendor margin." },
  { code: "04", title: "Long-Term Partnerships", body: "The majority of our client relationships span over a decade. We don't just complete a deployment and leave — we embed ourselves as a permanent operational partner." },
  { code: "05", title: "Certified Engineering Team", body: "Our engineers carry active certifications from Cisco, Aruba, Hikvision, Dell, and more — ensuring expert-level design, deployment, and troubleshooting at every stage." },
  { code: "06", title: "SLA-Driven Continuity", body: "Every post-deployment engagement includes a formal SLA with guaranteed response times, preventive maintenance schedules, and 24/7 NOC monitoring for critical infrastructure." },
];

export default function WhyMegaTechPage() {
  return (
    <main>
      <PageHeader
        title="Why MegaTech"
        description="The enterprise infrastructure partner trusted by hospitals, universities, manufacturers, and government bodies for over 25 years."
        breadcrumb="Why MegaTech"
      />

      {/* Reasons */}
      <section className="py-32 bg-[var(--color-surface-0)]">
        <div className="container mx-auto px-4 max-w-7xl">
          <ScrollReveal>
            <div className="section-label mb-4">Six Reasons</div>
            <div className="divider-gold" />
            <h2 className="text-5xl font-playfair font-bold text-white mb-16">Why Industry Leaders Choose MegaTech</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
            {reasons.map((r, i) => (
              <ScrollReveal key={r.code} delay={((i % 2) + 1) as 1|2}>
                <div className="bg-[var(--color-surface-1)] p-10 h-full hover:bg-[var(--color-surface-2)] transition-colors">
                  <div className="text-[var(--color-gold)] font-display font-bold text-4xl mb-4 opacity-20">{r.code}</div>
                  <h3 className="text-xl font-bold text-white mb-4 font-display">{r.title}</h3>
                  <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">{r.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial statement */}
      <section className="py-32 bg-[var(--color-surface-1)] relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-30" />
        <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
          <ScrollReveal>
            <div className="divider-gold mx-auto mb-8" />
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-8 leading-tight">
              We don't sell infrastructure.<br />
              <span className="gradient-text">We engineer operational resilience.</span>
            </h2>
            <p className="text-[var(--color-text-secondary)] text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
              Standard vendors ship boxes. MegaTech architects environments. When you engage our team, you gain engineers who think about your operational continuity, your 10-year technology roadmap, and your compliance requirements — not just today's purchase order.
            </p>
            <Link href="/consultation" className="btn-gold inline-flex items-center gap-2 px-8 py-4 rounded-sm text-base">
              Request Infrastructure Assessment <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
