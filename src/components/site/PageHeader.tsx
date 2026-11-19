export function PageHeader({ eyebrow, title, children }: { eyebrow?: string; title: string; children?: React.ReactNode }) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 pt-12 pb-8 sm:pt-16">
      {eyebrow && <p className="text-meta text-olive mb-3">{eyebrow}</p>}
      <h1 className="heading-display text-4xl sm:text-5xl lg:text-6xl text-ink max-w-3xl">{title}</h1>
      {children && <div className="mt-5 max-w-2xl text-lg text-text-secondary leading-relaxed">{children}</div>}
    </section>
  );
}
