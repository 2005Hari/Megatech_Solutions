import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "About MegaTech Solutions | Enterprise Infrastructure Consultancy Since 2000",
  description: "Learn how MegaTech Solutions evolved over 25 years from a regional IT consultancy into a premier enterprise infrastructure integrator.",
};

const timeline = [
  { year: "2000", title: "Koparkar Infokrafts Pvt. Ltd.", body: "Founded in Dhule as a regional IT infrastructure consultancy, serving local enterprises with networking and computing solutions." },
  { year: "2010", title: "Enterprise IT Infrastructure", body: "Expanded capabilities to include enterprise-grade storage systems, core switching, and large-scale structured cabling deployments." },
  { year: "2017", title: "Networking & Security Expansion", body: "Integrated advanced IP surveillance, access control, and enterprise security systems into our core service portfolio." },
  { year: "2023", title: "MegaTech Solutions", body: "Rebranded and repositioned as a premier Smart Technology Systems Integrator — with offices in Dhule and Mumbai." },
  { year: "Today", title: "Future-Ready Infrastructure", body: "Engineering smart campuses, city surveillance systems, industrial networks, and AI-driven operational centers across India." },
];

const philosophy = [
  { title: "Systems Should Be Invisible", body: "When infrastructure is engineered correctly, no one notices it. There are no outages, no slowdowns, no security breaches. That invisibility is the highest standard we build to." },
  { title: "Long-Term Partnership Over Transactions", body: "We don't measure success by the number of hardware units shipped. We measure it by how long our clients choose to work with us — which is why most relationships last over a decade." },
  { title: "Multi-Vendor Independence", body: "We maintain no exclusive dealership with any single manufacturer. Our recommendations are always driven by what is best for your infrastructure, not our margins." },
  { title: "Design for 15 Years, Not 15 Months", body: "Enterprise infrastructure is a long-term investment. Every topology, every cable route, and every system we design is reviewed for its relevance to your needs a decade from now." },
];

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        title="Our Legacy"
        description="From IT infrastructure pioneers to enterprise technology integrators — a 25-year journey built on operational excellence."
        breadcrumb="About"
      />

      {/* ── Vision & Mission ── */}
      <section className="py-16 lg:py-12 lg:py-10 lg:py-16 bg-[var(--color-surface-0)]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <ScrollReveal direction="left">
              <div className="section-label mb-4">Our Vision</div>
              <div className="divider-gold" />
              <h2 className="text-5xl font-playfair font-bold text-white mb-8 leading-tight">
                A world where enterprise infrastructure operates silently, securely, and at full scale.
              </h2>
              <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed">
                We envision a future where every hospital, university, industrial plant, and government institution operates on infrastructure that is invisible in its reliability — fully connected, completely secure, and permanently future-ready.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={2}>
              <div className="section-label mb-4">Our Mission</div>
              <div className="divider-gold" />
              <h2 className="text-5xl font-playfair font-bold text-white mb-8 leading-tight">
                Absolute operational continuity. For every client. In every environment.
              </h2>
              <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed">
                To deliver robust, end-to-end technology solutions — from structured cabling and fiber backbones to AI surveillance and command centers — ensuring zero-downtime operations for every organisation we serve.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Leadership ── */}
      <section className="py-16 lg:py-12 lg:py-10 lg:py-16 bg-[var(--color-surface-1)]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">

            <ScrollReveal direction="left" className="lg:col-span-4">
              <div className="relative">
                <div className="relative h-[540px] rounded-sm overflow-hidden">
                  <Image
                    src="/jatin-panchal.jpg"
                    alt="Jatin A. Panchal — Managing Director, MegaTech Solutions"
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface-1)] via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-bold text-xl font-display">Jatin A. Panchal</p>
                  <p className="text-[var(--color-gold)] text-xs font-bold uppercase tracking-widest mt-1">Managing Director · MegaTech Solutions</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={2} className="lg:col-span-8">
              <div className="section-label mb-4">Leadership</div>
              <div className="divider-gold" />
              <h2 className="text-5xl font-playfair font-bold text-white mb-10 leading-tight">
                Infrastructure is about<br />
                <span className="gradient-text">trust built over decades.</span>
              </h2>
              <blockquote className="border-l-2 border-[var(--color-gold)] pl-8 mb-8">
                <p className="text-xl text-[var(--color-text-secondary)] leading-relaxed italic mb-6">
                  "At MegaTech, we are not hardware resellers — we are architects of enterprise resilience. Our two-decade evolution has been driven by a singular, unyielding focus: delivering absolute operational continuity to environments where failure is not an option."
                </p>
                <p className="text-xl text-[var(--color-text-secondary)] leading-relaxed italic">
                  "For a modern hospital, university, or government institution, technology is not an accessory — it is the lifeblood of operations. Every project we take on is a long-term partnership, not a transaction. We embed ourselves as a strategic technology partner, not a vendor."
                </p>
              </blockquote>
              <Link href="/consultation" className="btn-gold inline-flex items-center gap-2 px-6 py-3 rounded-sm text-sm">
                Talk to Our Team <ArrowRight className="w-4 h-4" />
              </Link>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ── Infrastructure Philosophy ── */}
      <section className="py-16 lg:py-12 lg:py-10 lg:py-16 bg-[var(--color-surface-0)]">
        <div className="container mx-auto px-4 max-w-7xl">
          <ScrollReveal>
            <div className="section-label mb-4">Our Philosophy</div>
            <div className="divider-gold" />
            <h2 className="text-5xl font-playfair font-bold text-white mb-16">How We Think About Infrastructure</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
            {philosophy.map((p, i) => (
              <ScrollReveal key={p.title} delay={((i % 2) + 1) as 1|2}>
                <div className="bg-[var(--color-surface-1)] p-10 h-full hover:bg-[var(--color-surface-2)] transition-colors">
                  <div className="text-[var(--color-gold)] font-display font-bold text-4xl mb-4 opacity-15">0{i + 1}</div>
                  <h3 className="text-xl font-bold text-white mb-4 font-display">{p.title}</h3>
                  <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">{p.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="py-16 lg:py-12 lg:py-10 lg:py-16 bg-[var(--color-surface-1)]">
        <div className="container mx-auto px-4 max-w-5xl">
          <ScrollReveal>
            <div className="text-center mb-20">
              <div className="section-label mb-4 text-center">Company Timeline</div>
              <div className="divider-gold mx-auto" />
              <h2 className="text-5xl font-playfair font-bold text-white">25 Years of Evolution</h2>
            </div>
          </ScrollReveal>

          <div className="relative">
            <div className="absolute left-[18px] top-4 bottom-4 w-px bg-gradient-to-b from-[var(--color-gold)] via-white/10 to-transparent hidden md:block" />
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <ScrollReveal key={item.year} delay={((i % 3) + 1) as 1|2|3}>
                  <div className="flex gap-10 items-start">
                    <div className="hidden md:flex flex-col items-center shrink-0">
                      <div className="w-9 h-9 rounded-full border-2 border-[var(--color-gold)] bg-[var(--color-surface-1)] flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-[var(--color-gold)]" />
                      </div>
                    </div>
                    <div className="flex-1 pb-4">
                      <div className="text-[var(--color-gold)] font-display font-bold text-2xl mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-white mb-3 font-display">{item.title}</h3>
                      <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed max-w-2xl">{item.body}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-12 lg:py-10 lg:py-16 bg-[var(--color-surface-0)] border-t border-white/5">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <ScrollReveal>
            <h2 className="text-4xl font-playfair font-bold text-white mb-6">Partner with MegaTech</h2>
            <p className="text-[var(--color-text-secondary)] text-xl mb-10 leading-relaxed">
              Join 500+ enterprises, institutions, and government bodies that trust MegaTech Solutions as their long-term infrastructure partner.
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
