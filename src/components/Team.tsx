"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { InstagramIcon } from "@/components/icons/InstagramIcon";
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
              className="group/card rounded-3xl border border-border bg-background overflow-hidden hover:border-foreground/40 transition-colors"
            >
              <div className="aspect-[4/3] relative overflow-hidden bg-surface-2">
                {m.photo ? (
                  <>
                    <Image
                      src={m.photo}
                      alt={m.name}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover scale-100 group-hover/card:scale-[1.04] transition-transform duration-700 ease-out"
                    />
                    {/* Subtle bottom gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                  </>
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-surface-2 to-accent-3/20">
                    <div className="absolute inset-0 bg-grid opacity-40" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-display text-[8rem] md:text-[10rem] text-foreground/10 leading-none tracking-tighter">
                        {m.nameEn.split(" ").map((s) => s[0]).join("")}
                      </span>
                    </div>
                  </div>
                )}
                {/* Initials watermark in corner */}
                <span className="absolute bottom-4 right-5 font-display text-2xl text-foreground/40 mix-blend-overlay tracking-tighter">
                  {m.nameEn.split(" ").map((s) => s[0]).join("")}
                </span>
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
                {m.instagram && (
                  <a
                    href={m.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors group/link"
                  >
                    <InstagramIcon className="size-4" />
                    <span className="font-mono text-xs">
                      @{m.instagram.split("/").filter(Boolean).pop()}
                    </span>
                    <ArrowUpRight className="size-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
