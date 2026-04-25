"use client";

import { motion } from "framer-motion";
import { TrendingUp, ArrowUpRight } from "lucide-react";
import { InstagramIcon } from "@/components/icons/InstagramIcon";
import { cases } from "@/lib/data";

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
          {cases.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: (i % 2) * 0.1 }}
              className="group relative rounded-3xl border border-border bg-surface overflow-hidden hover:border-foreground transition-colors"
            >
              <div className="grid md:grid-cols-2">
                <div className="aspect-[4/3] md:aspect-auto md:min-h-[280px] relative overflow-hidden bg-gradient-to-br from-accent/30 via-surface-2 to-accent-3/20">
                  <div className="absolute inset-0 bg-grid opacity-50" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <TrendingUp className="size-20 text-foreground/20 group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="absolute top-5 left-5 text-[10px] tracking-[0.2em] uppercase rounded-full bg-background/70 backdrop-blur px-3 py-1 border border-border">
                    {c.tag}
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
          ))}
        </div>
      </div>
    </section>
  );
}
