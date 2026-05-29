import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-surface-0)] text-[var(--color-text-secondary)] border-t border-white/5">

      {/* Main Footer Grid */}
      <div className="container mx-auto px-4 py-10 lg:py-16 grid grid-cols-1 md:grid-cols-12 gap-12">

        {/* Brand Column */}
        <div className="md:col-span-4 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[var(--color-gold)] rounded-sm flex items-center justify-center font-bold text-[var(--color-navy)] font-display">
              M
            </div>
            <div>
              <span className="text-lg font-bold text-white font-display">MegaTech Solutions</span>
              <span className="block text-[9px] text-[var(--color-text-muted)] tracking-[0.2em] uppercase">Enterprise Infrastructure</span>
            </div>
          </div>
          <p className="text-sm leading-relaxed max-w-xs">
            Enterprise Infrastructure & Smart Technology Systems Integrator. Engineering mission-critical environments for institutions, industries, and public sectors since 2000.
          </p>
          <div className="pt-2 space-y-2 text-sm">
            <p className="text-white font-semibold">Jatin A. Panchal — Managing Director</p>
            <p>+91 94231 91703</p>
            <p>info@megatechsolutions.com</p>
          </div>
        </div>

        {/* Industries */}
        <div className="md:col-span-2">
          <h4 className="text-white font-semibold text-xs uppercase tracking-widest mb-6">Industries</h4>
          <ul className="space-y-3 text-sm">
            {[
              ["Education", "/education"],
              ["Healthcare", "/healthcare"],
              ["Industrial", "/industrial"],
              ["Government", "/government"],
              ["Corporate", "/corporate-enterprises"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="hover:text-white transition-colors">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Solutions */}
        <div className="md:col-span-3">
          <h4 className="text-white font-semibold text-xs uppercase tracking-widest mb-6">Solutions</h4>
          <ul className="space-y-3 text-sm">
            {[
              ["Enterprise Networking", "/networking"],
              ["CCTV & Security Systems", "/security"],
              ["Smart Infrastructure", "/smart-infrastructure"],
              ["Operational Continuity", "/operational-continuity"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="hover:text-white transition-colors">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company & Offices */}
        <div className="md:col-span-3">
          <h4 className="text-white font-semibold text-xs uppercase tracking-widest mb-6">Company</h4>
          <ul className="space-y-3 text-sm mb-8">
            {[
              ["About Us", "/about"],
              ["Our Projects", "/projects"],
              ["Technology Partners", "/partners"],
              ["Insights", "/insights"],
              ["Why MegaTech", "/why-megatech"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="hover:text-white transition-colors">{label}</Link>
              </li>
            ))}
          </ul>
          <h4 className="text-white font-semibold text-xs uppercase tracking-widest mb-4">Offices</h4>
          <div className="space-y-3 text-sm">
            <div>
              <p className="text-white font-medium">Dhule, Maharashtra</p>
              <p className="text-xs">Main Headquarters</p>
            </div>
            <div>
              <p className="text-white font-medium">Mumbai, Maharashtra</p>
              <p className="text-xs">Corporate Branch</p>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Bar */}
      <div className="border-t border-white/5">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-8 text-[10px] text-[var(--color-text-muted)] tracking-widest uppercase font-semibold">
            <span>ISO 9001</span>
            <span className="w-px h-3 bg-white/10" />
            <span>Make in India</span>
            <span className="w-px h-3 bg-white/10" />
            <span>Since 2000</span>
            <span className="w-px h-3 bg-white/10" />
            <span>500+ Deployments</span>
          </div>
          <div className="flex items-center gap-6 text-xs text-[var(--color-text-muted)]">
            <p>© {new Date().getFullYear()} MegaTech Solutions. All rights reserved.</p>
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
