"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/Section";

const pills = ["Limelight Regression Guide", "FSM Best Practices"];

export function TechnicalGuides() {
  const [burst, setBurst] = useState(false);
  const clicks = useRef(0);

  const handleClick = () => {
    clicks.current += 1;
    if (clicks.current >= 5) {
      setBurst(true);
      clicks.current = 0;
      setTimeout(() => setBurst(false), 4000);
    }
  };

  useEffect(() => {
    return () => {
      clicks.current = 0;
    };
  }, []);

  return (
    <Section darker title="Technical Guides">
      <div className="bg-slate-900/50 rounded-3xl border border-white/10 p-8 md:p-12 text-center relative overflow-hidden">
        <h2 className="text-3xl font-bold text-white mb-6">More coming soon</h2>
        <p className="text-slate-400 max-w-2xl mx-auto mb-8">
          We are currently drafting technical articles on our Limelight distance regression models and our experience with PedroPathing vs. Roadrunner.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          {pills.map((label) => (
            <button
              key={label}
              onClick={handleClick}
              className="px-6 py-2 rounded-full bg-slate-950 border border-white/10 text-slate-500 text-sm italic hover:text-slate-300 hover:border-blue-500/40 transition-colors cursor-pointer select-none"
            >
              {label}
            </button>
          ))}
        </div>

        <p className="mt-6 text-[10px] uppercase tracking-[0.3em] text-slate-600">
          rapid click the pills — 5 clicks
        </p>

        <AnimatePresence>
          {burst && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="absolute inset-0 z-10 flex items-center justify-center bg-slate-950/95 backdrop-blur-xl"
            >
              <div className="text-center px-8">
                <div className="text-5xl mb-4">🥚</div>
                <h3 className="text-2xl font-black text-white mb-2">Just kidding.</h3>
                <p className="text-slate-400 text-sm">
                  The docs don&apos;t exist yet, but at least you found the egg. Respect for the clicks.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Section>
  );
}