"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { faqs } from "@/lib/data";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative py-24 md:py-40 border-b border-border"
    >
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <div className="mb-16 md:mb-20 text-center">
          <div className="text-xs tracking-[0.3em] text-accent mb-6">
            08 — FAQ
          </div>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-tight">
            よくあるご質問
          </h2>
        </div>

        <div className="border-t border-border">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border-b border-border">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-start justify-between gap-6 py-6 md:py-8 text-left group"
                >
                  <span className="flex items-start gap-4 md:gap-6">
                    <span className="font-mono text-xs text-muted shrink-0 mt-1.5">
                      Q.{String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-xl md:text-2xl tracking-tight leading-tight">
                      {f.q}
                    </span>
                  </span>
                  <Plus
                    className={`size-5 md:size-6 shrink-0 mt-1 text-muted group-hover:text-foreground transition-all duration-300 ${
                      isOpen ? "rotate-45 text-accent" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-7 md:pb-9 pl-12 md:pl-20 pr-12">
                        <p className="text-sm md:text-base text-muted leading-relaxed">
                          {f.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
