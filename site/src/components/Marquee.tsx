"use client";

const items = [
  "TIKTOK MANAGEMENT",
  "SNS CONSULTING",
  "BRANDING",
  "WEB PRODUCTION",
  "VIDEO DIRECTION",
  "RECRUITMENT",
];

export default function Marquee() {
  return (
    <div className="relative border-y border-border py-6 overflow-hidden bg-surface">
      <div className="flex gap-12 whitespace-nowrap animate-marquee w-max">
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <span
            key={i}
            className="font-display text-3xl md:text-5xl tracking-tight flex items-center gap-12"
          >
            <span className={i % 3 === 1 ? "text-accent" : ""}>{item}</span>
            <span className="text-muted">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
