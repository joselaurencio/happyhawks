"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Zap } from "lucide-react";

export function TeamGrid({ members }: { members: { name: string; role: string }[] }) {
  const [clicked, setClicked] = useState<number[]>([]);
  const [nukeMode, setNukeMode] = useState(false);

  const handleClick = (i: number) => {
    if (clicked.includes(i)) return;
    const next = [...clicked, i];
    setClicked(next);
    if (next.length >= members.length) {
      setNukeMode(true);
      setTimeout(() => {
        setNukeMode(false);
        setClicked([]);
      }, 3200);
    }
  };

  return (
    <div className="relative">
      <div className="mb-8 text-center">
        <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-slate-500 transition-colors">
          <span className="w-2 h-2 rounded-full bg-slate-600 animate-pulse" />
          Click the cards. All of them.
          <span className="w-2 h-2 rounded-full bg-slate-600 animate-pulse" />
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {members.map((member, i) => {
          const isSlammed = clicked.includes(i);

          return (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.08 }}
              whileHover={{ scale: 1.06, y: -8 }}
              animate={nukeMode ? { scale: 0.9, opacity: 0.4, rotate: -4 } : { scale: 1, opacity: 1, rotate: 0 }}
              className={`group relative text-center bg-slate-900/90 rounded-2xl border border-white/10 p-6 overflow-hidden cursor-pointer transition-[border-color,box-shadow] hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 ${isSlammed ? "border-blue-500/60" : ""}`}
              onClick={() => handleClick(i)}
            >
              {isSlammed && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 bg-blue-500/15 pointer-events-none"
                />
              )}

              <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-36 h-36 rounded-full bg-blue-500/15 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div
                className={`relative w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg ring-2 ring-blue-400/30 flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${isSlammed ? "animate-bounce" : ""}`}
              >
                <User className="w-8 h-8 text-white" />
              </div>

              <h3 className="relative text-lg font-bold text-white mb-1">{member.name}</h3>
              <p className="relative inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-blue-400">
                <Zap className="w-3.5 h-3.5" />
                {member.role}
              </p>

              <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-widest text-slate-600 flex items-center gap-1">
                {isSlammed ? <Zap className="w-3 h-3 text-blue-400" /> : <span className="opacity-0 group-hover:opacity-100 transition-opacity">#{i + 1}</span>}
              </span>
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        {nukeMode && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] pointer-events-none flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.4, opacity: 0 }}
              animate={{ scale: 1.15, opacity: 1 }}
              exit={{ scale: 0.6, opacity: 0 }}
              className="bg-slate-950/95 backdrop-blur-xl border border-blue-400/40 rounded-3xl px-10 py-8 text-center shadow-2xl shadow-blue-500/30"
            >
              <div className="text-5xl mb-4">🐦</div>
              <h2 className="text-3xl font-black text-white mb-2">FULL FLOCK</h2>
              <p className="text-blue-300 font-mono text-lg mb-2">You clicked every card. No one left behind.</p>
              <p className="text-slate-500 text-sm">The whole team clicked. That&apos;s the play.</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}