"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { heroCopy } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-end overflow-hidden pt-24 pb-16"
    >
      {/* Background gradient mesh */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-60" />
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-accent/30 blur-[140px] animate-pulse-glow" />
        <div className="absolute top-40 -left-40 w-[500px] h-[500px] rounded-full bg-accent-2/20 blur-[140px] animate-pulse-glow" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full bg-accent-3/10 blur-[120px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3 text-xs tracking-[0.3em] text-muted mb-8"
        >
          <span className="size-2 rounded-full bg-accent animate-pulse" />
          {heroCopy.eyebrow}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[clamp(3rem,11vw,11rem)] leading-[0.92] tracking-tight"
        >
          <span className="block">{heroCopy.titleA}</span>
          <span className="block text-gradient">{heroCopy.titleB}</span>
        </motion.h1>

        <div className="mt-10 grid md:grid-cols-2 gap-10 md:items-end">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-xl text-base md:text-lg text-muted leading-relaxed"
          >
            {heroCopy.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap items-center gap-4 md:justify-end"
          >
            <a
              href={heroCopy.ctaPrimary.href}
              className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-7 py-3.5 font-medium hover:bg-accent hover:text-foreground transition-colors"
            >
              {heroCopy.ctaPrimary.label}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={heroCopy.ctaSecondary.href}
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 font-medium hover:border-foreground transition-colors"
            >
              <Play className="size-4" />
              {heroCopy.ctaSecondary.label}
            </a>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border"
        >
          {heroCopy.stats.map((s) => (
            <div
              key={s.label}
              className="bg-background p-5 md:p-7 flex flex-col gap-1"
            >
              <span className="font-display text-3xl md:text-5xl tracking-tight">
                {s.value}
              </span>
              <span className="text-xs md:text-sm text-muted">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
