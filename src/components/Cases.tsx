"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  TrendingUp,
  Users,
  PlayCircle,
  Trophy,
} from "lucide-react";
import { InstagramIcon } from "@/components/icons/InstagramIcon";
import { cases } from "@/lib/data";

const decorations = [
  {
    icon: Users,
    gradient: "from-accent/40 via-accent/10 to-transparent",
  },
  {
    icon: TrendingUp,
    gradient: "from-accent-2/40 via-accent-2/10 to-transparent",
  },
  {
    icon: PlayCircle,
    gradient: "from-accent-3/35 via-accent-3/10 to-transparent",
  },
  {
    icon: Trophy,
    gradient: "from-accent/30 via-accent-2/15 to-transparent",
  },
];

export default function Cases() {
  return (
    <section
      id="cases"
      className="relative py-24 md:py-40 border-b border-border"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-end justify-between mb-16 md:mb-24">
          <div>
            <div className="text-xs tracking-[0.3em] text-accent mb-6">
              06 — CASE STUDIES
            </div>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-tight">
              実績紹介
            </h2>
          </div>
          <p className="hidden md:block max-w-sm text-sm text-muted">
            ジャンルを問わず、戦略設計とスピード感ある運用で結果を出してきました。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {cases.map((c, i) => {
            const deco = decorations[i % decorations.length];
            const Icon = deco.icon;
            return (
              <motion.article
                key={c.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: (i % 2) * 0.1 }}
                className="group relative rounded-3xl border border-border bg-surface overflow-hidden hover:border-foreground/50 transition-colors"
              >
                <div className="grid md:grid-cols-2">
                  <div
                    className={`aspect-[4/3] md:aspect-auto md:min-h-[280px] relative overflow-hidden bg-gradient-to-br ${deco.gradient}`}
                  >
                    <div className="absolute inset-0 bg-grid opacity-40" />
                    {/* Concentric ring pattern */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        <span className="absolute inset-0 -m-12 rounded-full border border-foreground/5 animate-pulse-glow" />
                        <span className="absolute inset-0 -m-6 rounded-full border border-foreground/8" />
                        <Icon
                          className="size-16 text-foreground/30 relative z-10 group-hover:scale-110 group-hover:text-foreground/50 transition-all duration-700"
                          strokeWidth={1.4}
                        />
                      </div>
                    </div>
                    {/* Tag pill */}
                    <div className="absolute top-5 left-5 text-[10px] tracking-[0.2em] uppercase rounded-full bg-background/70 backdrop-blur px-3 py-1 border border-border">
                      {c.tag}
                    </div>
                    {/* Index */}
                    <div className="absolute bottom-5 right-5 font-mono text-xs text-foreground/40">
                      0{i + 1} / 0{cases.length}
                    </div>
                  </div>

                  <div className="p-8 md:p-10 flex flex-col">
                    <h3 className="font-display text-2xl md:text-3xl tracking-tight mb-4">
                      {c.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed mb-8">
                      {c.body}
                    </p>
                    <div className="mt-auto pt-6 border-t border-border">
                      <div className="font-display text-5xl md:text-6xl text-gradient leading-none">
                        {c.metric}
                      </div>
                      <div className="text-xs text-muted tracking-wider uppercase mt-2">
                        {c.metricLabel}
                      </div>
                      {c.instagram && (
                        <a
                          href={c.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-5 inline-flex items-center gap-2 text-xs text-muted hover:text-accent transition-colors group/ig"
                        >
                          <InstagramIcon className="size-3.5" />
                          <span className="font-mono">
                            @{c.instagram.split("/").filter(Boolean).pop()}
                          </span>
                          <ArrowUpRight className="size-3 transition-transform group-hover/ig:-translate-y-0.5 group-hover/ig:translate-x-0.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
