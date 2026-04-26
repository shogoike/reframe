"use client";

import { motion } from "framer-motion";
import { whyUs } from "@/lib/data";

export default function WhyUs() {
  return (
    <section
      id="why"
      className="relative py-24 md:py-40 border-b border-border bg-surface"
    >
      <div className="absolute inset-0 bg-grid opacity-30 -z-10" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="text-xs tracking-[0.3em] text-accent mb-6">
            03 — WHY US
          </div>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-tight mb-6">
            選ばれる、
            <span className="text-gradient">3つの理由</span>
          </h2>
          <p className="text-base text-muted leading-relaxed">
            広告に頼らず、ブランドの本質から差をつくる。
            <br />
            RE:FRAMEだから提供できる、3つの強み。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden border border-border">
          {whyUs.map((w, i) => (
            <motion.div
              key={w.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="bg-background p-8 md:p-12 group"
            >
              <div className="font-display text-7xl md:text-8xl text-gradient mb-8 leading-none">
                0{i + 1}
              </div>
              <div className="text-[10px] tracking-[0.3em] text-accent mb-3">
                {w.label}
              </div>
              <h3 className="font-display text-2xl md:text-3xl mb-5 leading-tight">
                {w.title}
              </h3>
              <p className="text-sm text-foreground/80 leading-relaxed mb-5">
                {w.body}
              </p>
              <p className="text-xs text-accent leading-relaxed border-t border-border pt-4">
                {w.diff}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
