import Link from "next/link";
import { InstagramIcon } from "@/components/icons/InstagramIcon";
import { company, navItems } from "@/lib/data";

const legalLinks = [
  { label: "会社概要", href: "/company" },
  { label: "プライバシーポリシー", href: "/privacy" },
  { label: "特定商取引法に基づく表記", href: "/tokushoho" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 md:py-24">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <Link
              href="/"
              className="font-display text-5xl md:text-7xl tracking-tight inline-block"
            >
              RE<span className="text-accent">:</span>FRAME
            </Link>
            <p className="mt-6 text-sm text-muted max-w-md leading-relaxed">
              SNSを通じて御社のビジョンと魅力を、未来に残る資産として動画で発信する。
              戦略型SNS運用代行ブランド。
            </p>
            <p className="mt-6 text-xs text-muted leading-relaxed">
              {company.legalName}
              <br />
              {company.address}
              <br />
              <a
                href={`mailto:${company.email}`}
                className="hover:text-accent transition-colors font-mono"
              >
                {company.email}
              </a>
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={company.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram (@kazumaica)"
                className="inline-flex items-center justify-center size-10 rounded-full border border-border hover:border-accent hover:text-accent transition-colors"
              >
                <InstagramIcon className="size-4" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="text-[10px] tracking-[0.3em] text-muted uppercase mb-4">
              Sitemap
            </div>
            <ul className="space-y-2.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={`/${item.href}`}
                    className="text-sm hover:text-accent transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/#contact"
                  className="text-sm hover:text-accent transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-[10px] tracking-[0.3em] text-muted uppercase mb-4">
              Legal
            </div>
            <ul className="space-y-2.5">
              {legalLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-accent transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-wrap items-center justify-between gap-4 text-xs text-muted">
          <div>
            © {new Date().getFullYear()} {company.legalNameEn}. All rights
            reserved.
          </div>
          <div className="font-mono">
            BUILT WITH <span className="text-accent">♥</span> IN OSAKA
          </div>
        </div>
      </div>
    </footer>
  );
}
