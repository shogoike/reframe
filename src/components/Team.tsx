"use client";

import { motion } from "framer-motion";
import { team } from "@/lib/data";

export default function Team() {
  return (
    <section
      id="team"
      className="relative py-24 md:py-40 border-b border-border bg-surface"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 md:mb-24 max-w-3xl">
          <div className="text-xs tracking-[0.3em] text-accent mb-6">
            07 — TEAM
          </div>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-tight">
            チーム
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {team.map((m, i) => (
            <motion.div
              key={m.nameEn}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="rounded-3xl border border-border bg-background overflow-hidden"
            >
              <div className="aspect-[4/3] relative overflow-hidden bg-gradient-to-br from-accent/30 via-surface-2 to-accent-3/20">
                <div className="absolute inset-0 bg-grid opacity-40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-[8rem] md:text-[10rem] text-foreground/10 leading-none tracking-tighter">
                    {m.nameEn.split(" ").map((s) => s[0]).join("")}
                  </span>
                </div>
              </div>
              <div className="p-8 md:p-10">
                <div className="text-[10px] tracking-[0.3em] text-accent mb-3">
                  {m.role}
                </div>
                <h3 className="font-display text-3xl tracking-tight">
                  {m.name}
                </h3>
                <div className="font-mono text-xs text-muted mt-1 mb-5">
                  {m.nameEn}
                </div>
                <p className="text-sm text-muted leading-relaxed">{m.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
