export default function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
}) {
  return (
    <header className="border-b border-line bg-cream-alt">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
        {eyebrow && (
          <span className="text-sm font-semibold uppercase tracking-wider text-gold">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-3 font-display text-4xl font-bold text-ink md:text-5xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
            {intro}
          </p>
        )}
      </div>
    </header>
  );
}
