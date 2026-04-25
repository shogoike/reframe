"use client";

import { motion } from "framer-motion";
import { process } from "@/lib/data";

export default function Process() {
  return (
    <section
      id="process"
      className="relative py-24 md:py-40 border-b border-border"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 md:mb-24 max-w-3xl">
          <div className="text-xs tracking-[0.3em] text-accent mb-6">
            04 — PROCESS
          </div>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-tight mb-6">
            ご契約までの流れ
          </h2>
          <p className="text-base text-muted leading-relaxed">
            まずは無料オンライン相談から。Zoom／LINEどちらも対応可。資料を見ながら丁寧にご説明します。
          </p>
        </div>

        <div className="relative">
          {/* connecting line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          <div className="space-y-12 md:space-y-20">
            {process.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className={`relative grid md:grid-cols-2 gap-6 md:gap-16 items-center ${
                  i % 2 === 1 ? "md:[direction:rtl]" : ""
                }`}
              >
                <div className="md:[direction:ltr] pl-20 md:pl-0 md:text-right md:pr-16">
                  <div className="font-display text-7xl md:text-9xl text-gradient leading-none mb-3">
                    {p.step}
                  </div>
                </div>
                <div className="md:[direction:ltr] pl-20 md:pl-16 relative">
                  {/* dot */}
                  <span className="absolute -left-1 md:left-[-4.5rem] top-3 size-4 rounded-full bg-accent ring-8 ring-background" />
                  <h3 className="font-display text-3xl md:text-4xl tracking-tight mb-4">
                    {p.title}
                  </h3>
                  <p className="text-base text-muted leading-relaxed max-w-md">
                    {p.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
