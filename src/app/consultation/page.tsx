import Image from "next/image";
import PageHeader from "@/components/ui/PageHeader";
import LeadForm from "@/components/ui/LeadForm";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata = {
  title: "Consultation | MegaTech Solutions",
  description: "Schedule an infrastructure assessment, network audit, site survey, or security consultation.",
};

const consultTypes = [
  { code: "01", title: "Infrastructure Assessment", desc: "A comprehensive evaluation of your current network, security, and computing infrastructure against enterprise standards." },
  { code: "02", title: "Site Survey", desc: "Physical inspection of your facility to plan structured cabling, wireless coverage, and surveillance camera placement." },
  { code: "03", title: "Network Audit", desc: "In-depth analysis of your switching, routing, and wireless topology — identifying performance bottlenecks and security gaps." },
  { code: "04", title: "Security Audit", desc: "Assessment of your CCTV coverage, access control systems, and physical perimeter security effectiveness." },
  { code: "05", title: "Smart Infrastructure Planning", desc: "Technology roadmap for smart campus, boardroom AV, digital signage, and IoT integration initiatives." },
  { code: "06", title: "Enterprise Consultation", desc: "Strategic advisory session with our senior architects to discuss large-scale infrastructure programs and long-term partnerships." },
];

export default function ConsultationPage() {
  return (
    <main>
      <PageHeader
        title="Request a Consultation"
        description="Our infrastructure consultants are ready to evaluate your environment and design a customized technology roadmap."
        breadcrumb="Consultation"
      />

      <section className="py-16 lg:py-12 lg:py-10 lg:py-16 bg-[var(--color-surface-0)]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">

            {/* Left Column */}
            <div className="lg:col-span-5 space-y-16">
              <ScrollReveal direction="left">
                <div>
                  <div className="section-label mb-4">How We Work</div>
                  <div className="divider-gold" />
                  <h2 className="text-4xl font-playfair font-bold text-white mb-6">Expert Engineering Evaluation</h2>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed">
                    Every successful deployment begins with a rigorous assessment. Our infrastructure consultants evaluate your current environment, identify vulnerabilities, and engineer a customized roadmap aligned with your operational goals and budget.
                  </p>
                </div>
              </ScrollReveal>

              {/* Consultation Types */}
              <ScrollReveal direction="left" delay={2}>
                <div>
                  <h3 className="text-lg font-bold text-white mb-6 font-display">Consultation Services Available</h3>
                  <div className="space-y-px">
                    {consultTypes.map((t) => (
                      <div key={t.code} className="bg-[var(--color-surface-1)] p-5 border-l-2 border-transparent hover:border-[var(--color-gold)] hover:bg-[var(--color-surface-2)] transition-all cursor-default">
                        <div className="flex items-center gap-4">
                          <span className="text-[var(--color-gold)] font-bold text-xs font-display">{t.code}</span>
                          <div>
                            <p className="text-white font-semibold text-sm">{t.title}</p>
                            <p className="text-[var(--color-text-muted)] text-xs mt-0.5 leading-relaxed">{t.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Trust signals */}
              <ScrollReveal direction="left" delay={3}>
                <div className="bg-[var(--color-surface-1)] p-8 rounded-sm border border-white/5">
                  <h3 className="text-white font-bold font-display mb-6">Direct Contact</h3>
                  <div className="space-y-4 text-sm text-[var(--color-text-secondary)]">
                    <p><span className="text-[var(--color-gold)] font-bold">Phone:</span> +91 94231 91703</p>
                    <p><span className="text-[var(--color-gold)] font-bold">Email:</span> info@megatechsolutions.com</p>
                    <p><span className="text-[var(--color-gold)] font-bold">Response:</span> Within 24 business hours</p>
                    <p><span className="text-[var(--color-gold)] font-bold">Offices:</span> Dhule HQ · Mumbai Corporate</p>
                  </div>
                  <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-6 text-[10px] text-[var(--color-text-muted)] font-bold uppercase tracking-widest">
                    <span>500+ Assessments</span>
                    <span className="w-px h-3 bg-white/10" />
                    <span>25+ Years</span>
                    <span className="w-px h-3 bg-white/10" />
                    <span>Pan-India</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Form */}
            <ScrollReveal direction="right" delay={2} className="lg:col-span-7">
              <div className="sticky top-24 bg-white p-8 md:p-12 rounded-sm shadow-2xl">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-[var(--color-navy)] font-display mb-2">Submit Your Request</h3>
                  <p className="text-gray-400 text-sm">Complete the form below. Our consultants will review your requirements and schedule a discovery call within 24 hours.</p>
                </div>
                <LeadForm />
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>
    </main>
  );
}
