"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

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

            <div className="pt-4">
              <Link
                href="/company"
                className="group inline-flex items-center gap-2 text-sm border-b border-border pb-2 hover:border-accent hover:text-accent transition-colors"
              >
                会社概要を詳しく見る
                <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
