import { company, navItems } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 md:py-24">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-6">
            <div className="font-display text-5xl md:text-7xl tracking-tight">
              RE<span className="text-accent">:</span>FRAME
            </div>
            <p className="mt-6 text-sm text-muted max-w-md leading-relaxed">
              SNSを通じて御社のビジョンと魅力を、未来に残る資産として動画で発信する。
              戦略型SNS運用代行ブランド。
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="text-[10px] tracking-[0.3em] text-muted uppercase mb-4">
              Sitemap
            </div>
            <ul className="space-y-2.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm hover:text-accent transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="text-sm hover:text-accent transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="text-[10px] tracking-[0.3em] text-muted uppercase mb-4">
              Company
            </div>
            <ul className="space-y-2.5 text-sm">
              <li>{company.legalName}</li>
              <li className="text-muted">{company.address}</li>
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="hover:text-accent transition-colors font-mono text-xs"
                >
                  {company.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-wrap items-center justify-between gap-4 text-xs text-muted">
          <div>© {new Date().getFullYear()} ZUMAICA Inc. All rights reserved.</div>
          <div className="font-mono">
            BUILT WITH <span className="text-accent">♥</span> IN OSAKA
          </div>
        </div>
      </div>
    </footer>
  );
}
