"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { company } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-40 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent/20 blur-[160px] animate-pulse-glow" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-accent-2/10 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-xs tracking-[0.3em] text-accent mb-6">
            CONTACT
          </div>
          <h2 className="font-display text-5xl md:text-8xl leading-[0.95] tracking-tight mb-8">
            未来に残る、
            <br />
            <span className="text-gradient">資産</span>を、一緒に。
          </h2>
          <p className="max-w-xl mx-auto text-base md:text-lg text-muted leading-relaxed mb-12">
            無料オンライン相談を実施中。御社の課題やご希望を丁寧にヒアリングし、
            最適なプランをご提案します。無理な営業は一切いたしません。
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${company.email}?subject=RE%3AFRAME%20%E7%84%A1%E6%96%99%E7%9B%B8%E8%AB%87%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6`}
              className="group inline-flex items-center gap-3 rounded-full bg-foreground text-background px-8 py-4 font-medium hover:bg-accent hover:text-foreground transition-colors"
            >
              <Mail className="size-4" />
              無料オンライン相談
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={`mailto:${company.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-4 font-mono text-sm hover:border-foreground transition-colors"
            >
              {company.email}
            </a>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border max-w-2xl mx-auto">
            {[
              { v: "Zoom / LINE", l: "対応" },
              { v: "0円", l: "相談料" },
              { v: "30分〜", l: "目安時間" },
            ].map((item) => (
              <div key={item.l} className="bg-background p-5">
                <div className="font-display text-xl md:text-2xl tracking-tight">
                  {item.v}
                </div>
                <div className="text-[11px] text-muted mt-1">{item.l}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
