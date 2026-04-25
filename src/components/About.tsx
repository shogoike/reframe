"use client";

import { motion } from "framer-motion";
import { company } from "@/lib/data";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-40 border-b border-border"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <div className="text-xs tracking-[0.3em] text-accent mb-6">
              01 — ABOUT
            </div>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-tight">
              想いを、
              <br />
              <span className="text-gradient">資産</span>に。
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7 space-y-8"
          >
            <p className="text-lg md:text-xl leading-relaxed">
              RE:FRAMEは、
              <span className="text-foreground font-bold">株式会社zumaica</span>
              が提供する戦略型SNS運用代行ブランドです。
              <br className="hidden md:block" />
              企画から撮影・編集・分析までを一気通貫で担い、御社のビジョンと魅力を
              <span className="text-accent font-bold">未来に残る資産</span>
              として動画で発信します。
            </p>

            <p className="text-base text-muted leading-relaxed">
              「光る原石」を見つける企画力、撮影から投稿までの圧倒的スピード、目的達成までの伴走サポート。
              この3軸で、SNSを単なる発信チャネルから、ブランドを成長させる戦略資産へとリフレームします。
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 border-t border-border">
              <Info label="社名" value={company.legalName} />
              <Info label="設立" value={company.founded} />
              <Info label="代表" value={company.representative} />
              <Info label="所在地" value={company.address} />
              <Info label="お問い合わせ" value={company.email} />
              <Info label="事業内容" value={company.business.join(" / ")} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[10px] tracking-[0.2em] text-muted uppercase mb-1.5">
        {label}
      </div>
      <div className="text-sm md:text-[15px] leading-relaxed">{value}</div>
    </div>
  );
}
