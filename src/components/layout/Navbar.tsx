import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Premium Trust Bar */}
      <div className="bg-[var(--color-surface-0)] border-b border-white/5 px-4 py-2 hidden md:block">
        <div className="container mx-auto flex items-center justify-between text-[10px] text-[var(--color-text-muted)] tracking-widest uppercase">
          <span>MegaTech Solutions — Enterprise Infrastructure Since 2000 · Dhule & Mumbai</span>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3 h-3" /> +91 94231 91703
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="w-3 h-3" /> info@megatechsolutions.com
            </span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="glass border-b border-white/6">
        <div className="container mx-auto px-4 h-[68px] flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 bg-[var(--color-gold)] rounded-sm flex items-center justify-center font-bold text-[var(--color-navy)] text-sm font-display">
              M
            </div>
            <div>
              <span className="text-lg font-bold text-white font-display tracking-tight">MegaTech</span>
              <span className="block text-[9px] text-[var(--color-text-muted)] tracking-[0.2em] uppercase -mt-0.5">Solutions</span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[var(--color-text-secondary)]">
            <Link href="/about" className="hover:text-white transition-colors tracking-wide">About</Link>
            <Link href="/#solutions" className="hover:text-white transition-colors tracking-wide">Solutions</Link>
            <Link href="/projects" className="hover:text-white transition-colors tracking-wide">Projects</Link>
            <Link href="/partners" className="hover:text-white transition-colors tracking-wide">Partners</Link>
            <Link href="/insights" className="hover:text-white transition-colors tracking-wide">Insights</Link>
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <Link
              href="/consultation"
              className="hidden md:inline-flex btn-gold items-center gap-2 px-5 py-2.5 rounded-sm text-sm font-bold"
            >
              Request Assessment
              <span className="text-xs opacity-70">→</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
