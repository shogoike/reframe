"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Check } from "lucide-react";
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
            TikTok・SNS運用を、
            <br />
            <span className="text-gradient">事業成果</span>につながる資産に。
          </h2>
          <p className="max-w-xl mx-auto text-base md:text-lg text-foreground/85 leading-relaxed mb-3">
            「何から始めればいいか分からない」
            <br className="md:hidden" />
            「自社のSNSが伸び悩んでいる」
            <br />
            そんな段階からのご相談を、もっとも歓迎しています。
          </p>
          <p className="max-w-xl mx-auto text-sm text-muted leading-relaxed mb-12">
            無料オンライン相談を実施中。ご相談後の強引な営業は一切いたしません。
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${company.email}?subject=RE%3AFRAME%20%E7%84%A1%E6%96%99%E7%9B%B8%E8%AB%87%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6`}
              className="group inline-flex items-center gap-3 rounded-full bg-accent text-foreground px-9 py-4 font-bold hover:bg-accent/90 transition-colors text-base"
            >
              <Mail className="size-4" />
              無料でSNS課題を相談する
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={`mailto:${company.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-4 font-mono text-sm hover:border-foreground transition-colors"
            >
              {company.email}
            </a>
          </div>

          <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs md:text-sm text-muted">
            {[
              "相談無料",
              "Zoom／LINEで対応",
              "強引な営業は一切なし",
            ].map((item) => (
              <li key={item} className="inline-flex items-center gap-1.5">
                <Check className="size-3.5 text-accent" strokeWidth={3} />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-16 grid grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border max-w-2xl mx-auto">
            {[
              { v: "Zoom / LINE", l: "対応方式" },
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
