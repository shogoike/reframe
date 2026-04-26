"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { heroCopy } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-end overflow-hidden pt-28 pb-16"
    >
      {/* Hero background image + overlays */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero/bg.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-accent/20 blur-[140px] animate-pulse-glow" />
        <div className="absolute top-40 -left-40 w-[400px] h-[400px] rounded-full bg-accent-2/10 blur-[140px] animate-pulse-glow" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: copy */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3 text-xs md:text-sm tracking-[0.25em] text-accent mb-8 font-bold"
            >
              <span className="size-2 rounded-full bg-accent animate-pulse" />
              {heroCopy.eyebrow}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[clamp(2.75rem,8.5vw,8.5rem)] leading-[0.92] tracking-tight"
            >
              <span className="block">{heroCopy.titleA}</span>
              <span className="block text-gradient">{heroCopy.titleB}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 max-w-xl text-lg md:text-xl text-foreground/95 leading-relaxed font-bold whitespace-pre-line"
            >
              {heroCopy.subtitle}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="mt-4 max-w-xl text-sm md:text-base text-muted leading-relaxed"
            >
              {heroCopy.supplement}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href={heroCopy.ctaPrimary.href}
                className="group inline-flex items-center gap-2 rounded-full bg-accent text-foreground px-7 py-4 font-bold hover:bg-accent/90 transition-colors text-sm md:text-base"
              >
                {heroCopy.ctaPrimary.label}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={heroCopy.ctaSecondary.href}
                className="inline-flex items-center gap-2 rounded-full border border-foreground/30 px-7 py-4 font-medium hover:border-foreground hover:bg-foreground/5 transition-colors text-sm md:text-base"
              >
                {heroCopy.ctaSecondary.label}
              </a>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.65 }}
              className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs md:text-sm text-muted"
            >
              {heroCopy.assurance.map((item) => (
                <li key={item} className="inline-flex items-center gap-1.5">
                  <Check className="size-3.5 text-accent" strokeWidth={3} />
                  <span>{item}</span>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Right: key visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative aspect-square w-full max-w-md mx-auto lg:max-w-none"
          >
            <div className="absolute inset-0 -z-10 rounded-[2rem] bg-accent/30 blur-3xl scale-90 animate-pulse-glow" />

            <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-border bg-surface">
              <Image
                src="/images/hero/key-visual.jpg"
                alt="RE:FRAME — TikTokを起点にビジネスをリフレームする"
                fill
                priority
                sizes="(min-width: 1024px) 40vw, (min-width: 640px) 60vw, 90vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-background/10 pointer-events-none" />
            </div>

            <div className="absolute -bottom-3 -left-3 md:-bottom-4 md:-left-4 rounded-full bg-background border border-border px-4 py-2 text-xs tracking-[0.2em] uppercase font-mono">
              <span className="text-accent">●</span> NOW PLAYING
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 md:mt-24"
        >
          <div className="text-[10px] md:text-xs tracking-[0.3em] text-muted mb-4 uppercase">
            RE:FRAMEの実績
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
            {heroCopy.stats.map((s, i) => (
              <div
                key={s.label}
                className="group relative bg-background hover:bg-surface transition-colors p-5 md:p-7 flex flex-col gap-1.5 overflow-hidden"
              >
                <span className="absolute top-0 left-0 right-0 h-px bg-accent scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
                <span className="font-mono text-[10px] tracking-[0.3em] text-muted">
                  0{i + 1}
                </span>
                <span className="font-display text-4xl md:text-5xl tracking-tight text-gradient leading-none">
                  {s.value}
                </span>
                <span className="text-xs md:text-sm text-foreground/90 font-bold mt-1">
                  {s.label}
                </span>
                <span className="text-[11px] text-muted leading-snug">
                  {s.sub}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-[11px] text-muted">{heroCopy.statsCaveat}</p>
        </motion.div>
      </div>
    </section>
  );
}
