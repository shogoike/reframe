"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/data";

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-24 md:py-40 border-b border-border"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-end justify-between mb-16 md:mb-24">
          <div>
            <div className="text-xs tracking-[0.3em] text-accent mb-6">
              02 — SERVICES
            </div>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-tight">
              できること
            </h2>
          </div>
          <p className="hidden md:block max-w-sm text-sm text-muted">
            企画から運用、サイト制作まで。SNS時代のブランド成長に必要な要素を、
            すべて自社内で完結できます。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.no}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group relative rounded-3xl border border-border bg-surface p-8 md:p-10 hover:border-foreground transition-colors"
            >
              <div className="flex items-start justify-between mb-10">
                <span className="font-mono text-xs text-muted">{s.no}</span>
                <ArrowUpRight className="size-5 text-muted group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </div>

              <div className="text-[10px] tracking-[0.2em] text-accent mb-3">
                {s.titleEn}
              </div>
              <h3 className="font-display text-3xl md:text-4xl tracking-tight mb-5">
                {s.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed mb-8">
                {s.description}
              </p>

              <ul className="space-y-2.5 pt-6 border-t border-border">
                {s.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 text-sm leading-relaxed"
                  >
                    <span className="mt-1.5 size-1 rounded-full bg-accent shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
