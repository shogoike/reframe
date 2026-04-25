import { ReactNode } from "react";

type Props = {
  title: string;
  subtitle?: string;
  updatedAt: string;
  children: ReactNode;
};

export function LegalPage({ title, subtitle, updatedAt, children }: Props) {
  return (
    <article className="legal-prose">
      <header className="mb-12 md:mb-16 pb-10 border-b border-border">
        {subtitle && (
          <div className="text-xs tracking-[0.3em] text-accent mb-4">
            {subtitle}
          </div>
        )}
        <h1 className="font-display text-4xl md:text-6xl tracking-tight leading-[1.05]">
          {title}
        </h1>
        <p className="mt-6 font-mono text-xs text-muted">
          最終更新日: {updatedAt}
        </p>
      </header>
      <div className="space-y-10 leading-relaxed">{children}</div>
    </article>
  );
}

export function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="space-y-4">
      <h2 className="font-display text-2xl md:text-3xl tracking-tight">
        {title}
      </h2>
      <div className="space-y-3 text-[15px] text-foreground/85 leading-[1.9]">
        {children}
      </div>
    </section>
  );
}

export function Subsection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-2 pt-2">
      <h3 className="font-bold text-base">{title}</h3>
      <div className="space-y-2 text-[15px] text-foreground/85 leading-[1.9]">
        {children}
      </div>
    </div>
  );
}

export function Dl({
  items,
}: {
  items: { term: string; desc: string }[];
}) {
  return (
    <dl className="grid grid-cols-[max-content_1fr] gap-x-6 md:gap-x-10 gap-y-4 text-[15px] border border-border rounded-2xl p-6 md:p-8 bg-surface">
      {items.map((item) => (
        <div key={item.term} className="contents">
          <dt className="text-muted text-sm pt-0.5">{item.term}</dt>
          <dd className="leading-relaxed">{item.desc}</dd>
        </div>
      ))}
    </dl>
  );
}
