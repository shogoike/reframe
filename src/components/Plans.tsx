"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { plans, plansLead, plansFooterNote } from "@/lib/data";

export default function Plans() {
  return (
    <section
      id="plans"
      className="relative py-24 md:py-40 border-b border-border bg-surface"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 md:mb-24 max-w-3xl">
          <div className="text-xs tracking-[0.3em] text-accent mb-6">
            05 — PLANS
          </div>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-tight mb-6">
            料金プラン
          </h2>
          <p className="text-base text-foreground/85 leading-relaxed">
            {plansLead}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className={`relative rounded-3xl p-8 md:p-10 flex flex-col ${
                p.highlight
                  ? "bg-foreground text-background border border-foreground"
                  : "bg-background border border-border"
              }`}
            >
              {p.highlight && (
                <span className="absolute -top-3 right-8 inline-flex items-center rounded-full bg-accent text-foreground px-3 py-1 text-[11px] tracking-widest font-bold">
                  人気 / RECOMMENDED
                </span>
              )}

              <div className="text-[10px] tracking-[0.3em] text-accent mb-3">
                {p.nameEn}
              </div>
              <h3 className="font-display text-2xl tracking-tight">
                {p.name}
              </h3>
              <p
                className={`text-sm mt-1.5 ${
                  p.highlight ? "text-background/70" : "text-foreground/80"
                }`}
              >
                {p.subtitle}
              </p>

              <div className="flex items-baseline gap-1 mt-6">
                <span className="font-display text-5xl md:text-6xl tracking-tight">
                  ¥{p.price}
                </span>
              </div>
              <div
                className={`text-sm mt-1 ${
                  p.highlight ? "text-background/60" : "text-muted"
                }`}
              >
                {p.unit}
              </div>
              <div
                className={`text-xs mt-3 leading-relaxed ${
                  p.highlight ? "text-background/60" : "text-muted"
                }`}
              >
                {p.note}
                <br />
                {p.contract}
              </div>

              <div
                className={`mt-6 px-3 py-2 rounded-lg text-[11px] ${
                  p.highlight
                    ? "bg-background/10 text-background/80"
                    : "bg-surface-2 text-muted"
                }`}
              >
                <span className="font-bold">対象：</span>
                {p.target}
              </div>

              <ul className="mt-6 space-y-3 border-t border-current/10 pt-6 grow">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check className="size-4 shrink-0 mt-0.5 text-accent" />
                    <span className="leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-bold transition-colors ${
                  p.highlight
                    ? "bg-accent text-foreground hover:opacity-90"
                    : "bg-foreground text-background hover:bg-accent hover:text-foreground"
                }`}
              >
                このプランで相談する
              </a>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-muted leading-relaxed max-w-2xl mx-auto">
          {plansFooterNote}
        </p>
      </div>
    </section>
  );
}
