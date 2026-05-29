import Link from "next/link";

interface PageHeaderProps {
  title: string;
  description?: string;
  category?: string;
  breadcrumb?: string;
}

export default function PageHeader({ title, description, category, breadcrumb }: PageHeaderProps) {
  return (
    <section className="relative bg-[var(--color-surface-1)] text-white pt-36 pb-24 px-4 overflow-hidden">
      {/* Architectural Grid */}
      <div className="absolute inset-0 grid-overlay opacity-60" />

      {/* Gold gradient accent top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-gold)]/40 to-transparent" />

      {/* Subtle radial glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto relative z-10 max-w-5xl">
        {/* Breadcrumb */}
        {breadcrumb && (
          <div className="flex items-center gap-2 text-xs text-[var(--color-text-muted)] uppercase tracking-widest mb-6 font-medium">
            <Link href="/" className="hover:text-[var(--color-gold)] transition-colors">MegaTech</Link>
            <span>/</span>
            <span className="text-[var(--color-gold)]">{breadcrumb}</span>
          </div>
        )}

        {/* Category label */}
        {category && (
          <div className="section-label mb-4">{category}</div>
        )}

        {/* Gold accent line */}
        <div className="divider-gold" />

        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-bold font-playfair leading-tight mb-6 text-white">
          {title}
        </h1>

        {/* Description */}
        {description && (
          <p className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-3xl leading-relaxed">
            {description}
          </p>
        )}
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--color-surface-0)] to-transparent pointer-events-none" />
    </section>
  );
}
