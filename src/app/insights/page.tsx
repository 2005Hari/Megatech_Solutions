import PageHeader from "@/components/ui/PageHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, User, BookOpen } from "lucide-react";

export const metadata = {
  title: "Engineering Insights & Thought Leadership | MegaTech Solutions",
  description: "Enterprise infrastructure insights, structured cabling best practices, AI-powered physical security, and systems integration thought leadership.",
};

const insights = [
  {
    title: "Smart Campus Infrastructure: The WiFi 6/6E Revolution",
    category: "Education",
    readTime: "5 min read",
    author: "Senior Network Architect",
    desc: "How modern universities are overhauling their legacy physical networks to support thousands of concurrent devices, smart classrooms, and cloud exams."
  },
  {
    title: "Securing Hospital Data Through Physical Infrastructure",
    category: "Healthcare",
    readTime: "7 min read",
    author: "Security Systems Integrator",
    desc: "A deep dive into why medical cybersecurity starts with physical access control, dual-factor biometrics, and robust AI surveillance around server rooms."
  },
  {
    title: "The Anatomy of Enterprise Structured Cabling",
    category: "Networking",
    readTime: "6 min read",
    author: "Principal Cable Engineer",
    desc: "Best practices for designing optical fiber backbones and Category 6A/7 copper networks that will scale seamlessly for the next 15 years."
  },
  {
    title: "AI in CCTV Surveillance: Beyond Passive Capture",
    category: "Security",
    readTime: "4 min read",
    author: "Lead Analytics Specialist",
    desc: "Exploring how facial recognition, license plate recognition, and behavior analytics are transforming modern industrial control rooms."
  },
  {
    title: "Why AMCs Matter More Than Hardware Specs",
    category: "Managed Services",
    readTime: "5 min read",
    author: "Director of NOC Operations",
    desc: "When critical network nodes fail, the recovery time objective (RTO) dictated by your service agreement is the only metric that preserves business continuity."
  },
  {
    title: "Ruggedizing Industrial Network Topologies",
    category: "Industrial",
    readTime: "8 min read",
    author: "Industrial Systems Architect",
    desc: "Overcoming extreme operating temperatures, intense vibration, and electromagnetic interference in manufacturing plant automation networks."
  }
];

export default function InsightsPage() {
  return (
    <main>
      <PageHeader 
        title="Engineering Insights" 
        description="Thought leadership, best practices, and technical strategies for large-scale enterprise physical infrastructure."
        breadcrumb="Insights"
      />

      {/* ── Featured Whitepaper / Article ── */}
      <section className="py-16 lg:py-12 lg:py-10 lg:py-16 bg-[var(--color-surface-0)] relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-30" />
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <ScrollReveal>
            <div className="section-label mb-4">Featured Whitepaper</div>
            <div className="divider-gold" />
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mt-12 bg-[var(--color-surface-1)] border border-white/5 p-8 md:p-12 rounded-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="lg:col-span-7 flex flex-col justify-between">
              <ScrollReveal direction="left">
                <div className="flex items-center gap-4 text-xs font-bold text-[var(--color-gold)] uppercase tracking-widest mb-6">
                  <span className="flex items-center gap-1"><BookOpen className="w-3.5 h-3.5" /> High-Value Study</span>
                  <span>•</span>
                  <span>12 min read</span>
                </div>
                <h3 className="text-3xl md:text-5xl font-playfair font-bold text-white mb-6 leading-tight">
                  The Architecture of Resilience: Engineering Optical Fiber Rings for 15-Year Campus Lifespans
                </h3>
                <p className="text-[var(--color-text-secondary)] text-sm md:text-base leading-relaxed mb-8">
                  A comprehensive technical guide investigating structural cable bend radii, single-mode vs multi-mode attenuation, dynamic network failover protocols, and pre-planning pathway systems to eliminate future high-cost civil excavations.
                </p>
                <div className="flex items-center gap-6 mb-8 text-xs text-[var(--color-text-muted)] font-medium">
                  <span className="flex items-center gap-2"><User className="w-4 h-4 text-[var(--color-gold)]" /> By Jatin Panchal, MD</span>
                  <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-[var(--color-gold)]" /> Published May 2026</span>
                </div>
                <Link href="#" className="btn-gold inline-flex items-center gap-2 px-6 py-3 rounded-sm text-sm self-start">
                  Read Full Whitepaper <ArrowRight className="w-4 h-4" />
                </Link>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-5 relative h-[300px] lg:h-full min-h-[250px] rounded-sm overflow-hidden border border-white/5">
              <ScrollReveal direction="right" className="h-full w-full">
                <Image src="/hero-infrastructure.png" alt="Engineering Optical Fiber Infrastructure" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-navy)]/80 to-transparent" />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Insights Grid ── */}
      <section className="py-16 lg:py-12 lg:py-10 lg:py-16 bg-[var(--color-surface-1)]">
        <div className="container mx-auto px-4 max-w-7xl">
          <ScrollReveal>
            <div className="section-label mb-4">Latest Knowledge</div>
            <div className="divider-gold" />
            <h2 className="text-5xl font-playfair font-bold text-white mb-16">Technical Thought Leadership</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insights.map((insight, index) => (
              <ScrollReveal key={insight.title} delay={((index % 3) + 1) as 1|2|3}>
                <Link href="#" className="group bg-[var(--color-surface-2)] p-8 border border-white/5 rounded-sm hover:border-[var(--color-gold)]/30 card-hover flex flex-col h-full justify-between">
                  <div>
                    <div className="flex justify-between items-center mb-6 text-[10px] font-bold tracking-wider uppercase">
                      <span className="text-[var(--color-gold)]">{insight.category}</span>
                      <span className="text-[var(--color-text-muted)]">{insight.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[var(--color-gold-light)] transition-colors font-display">
                      {insight.title}
                    </h3>
                    <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-6">
                      {insight.desc}
                    </p>
                  </div>
                  <div>
                    <div className="w-full h-px bg-white/5 my-6" />
                    <div className="flex justify-between items-center text-xs text-[var(--color-text-muted)] font-medium">
                      <span>{insight.author}</span>
                      <span className="flex items-center text-[var(--color-gold)] font-bold group-hover:translate-x-1 transition-transform">
                        Read Article <ArrowRight className="w-3.5 h-3.5 ml-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
