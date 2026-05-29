import PageHeader from "@/components/ui/PageHeader";
import LeadForm from "@/components/ui/LeadForm";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Our Infrastructure Engineers | MegaTech Solutions",
  description: "Schedule a systems integration consultation, project survey, or request a technical quotation from MegaTech Solutions.",
};

export default function ContactPage() {
  return (
    <main className="min-h-[100svh] bg-[var(--color-surface-0)] text-white">
      <PageHeader 
        title="Get in Touch" 
        description="Ready to build smarter, resilient infrastructure? Reach out directly to our engineering and consultation teams."
        breadcrumb="Contact"
      />
      
      <section className="py-16 lg:py-12 lg:py-10 lg:py-16 relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-30 pointer-events-none" />
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Direct Offices & Contact Details */}
            <div className="lg:col-span-5 space-y-8">
              <ScrollReveal direction="left">
                <div className="section-label mb-4">Direct Channels</div>
                <div className="divider-gold" />
                <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">Connect with Senior Engineers</h2>
                <p className="text-[var(--color-text-secondary)] text-sm md:text-base leading-relaxed mb-12">
                  We don't route project discussions through junior sales representatives. Speak directly to certified infrastructure designers who understand operational continuity.
                </p>
              </ScrollReveal>
              
              {/* Headquarters Card */}
              <ScrollReveal direction="left" delay={1}>
                <div className="bg-[var(--color-surface-1)] border border-white/5 p-8 rounded-sm hover:border-[var(--color-gold)]/20 transition-colors">
                  <div className="text-[var(--color-gold)] text-xs font-bold uppercase tracking-widest mb-6">Corporate Headquarters</div>
                  <h3 className="text-2xl font-bold text-white font-display mb-6">Dhule Engineering Center</h3>
                  <div className="space-y-4 text-sm text-[var(--color-text-secondary)]">
                    <div className="flex gap-4">
                      <MapPin className="w-5 h-5 text-[var(--color-gold)] shrink-0 mt-0.5" />
                      <div>Dhule Office, Maharashtra, India</div>
                    </div>
                    <div className="flex gap-4">
                      <Phone className="w-5 h-5 text-[var(--color-gold)] shrink-0 mt-0.5" />
                      <div>+91 94231 91703</div>
                    </div>
                    <div className="flex gap-4">
                      <Mail className="w-5 h-5 text-[var(--color-gold)] shrink-0 mt-0.5" />
                      <div>info@megatechsolutions.com</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
              
              {/* Corporate Branch Card */}
              <ScrollReveal direction="left" delay={2}>
                <div className="bg-[var(--color-surface-1)] border border-white/5 p-8 rounded-sm hover:border-[var(--color-gold)]/20 transition-colors">
                  <div className="text-[var(--color-gold)] text-xs font-bold uppercase tracking-widest mb-6">Strategic Expansion</div>
                  <h3 className="text-2xl font-bold text-white font-display mb-6">Mumbai Expansion Office</h3>
                  <div className="space-y-4 text-sm text-[var(--color-text-secondary)]">
                    <div className="flex gap-4">
                      <MapPin className="w-5 h-5 text-[var(--color-gold)] shrink-0 mt-0.5" />
                      <div>Mumbai Office, Maharashtra, India</div>
                    </div>
                    <div className="flex gap-4">
                      <Clock className="w-5 h-5 text-[var(--color-gold)] shrink-0 mt-0.5" />
                      <div>Operational Hours: 9:00 AM – 6:00 PM (IST)</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
            
            {/* Inquiry Form Card */}
            <div className="lg:col-span-7">
              <ScrollReveal direction="right" delay={2}>
                <div className="bg-white p-8 md:p-12 rounded-sm shadow-2xl">
                  <h3 className="text-3xl font-bold text-[var(--color-navy)] font-display mb-2">Submit Project Inquiry</h3>
                  <p className="text-gray-400 text-sm mb-10">Fill out our structured request form, and our engineering desk will respond within 24 hours.</p>
                  <LeadForm />
                </div>
              </ScrollReveal>
            </div>
            
          </div>
        </div>
      </section>
    </main>
  );
}
