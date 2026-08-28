"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, HandMetal, Skull } from "lucide-react";

const alumni = [
  { name: "Sean", role: "Design Lead", classOf: 26, initials: "S", emoji: "✊" },
  { name: "Victoria", role: "Builder", classOf: 26, initials: "V", emoji: "🔧" },
  { name: "Daniel M.", role: "Builder", classOf: 24, initials: "D", emoji: "🏗️" },
  { name: "Hunter G.", role: "Programming", classOf: 25, initials: "H", emoji: "💻" },
  { name: "Gael J.", role: "Build Lead", classOf: 27, initials: "G", emoji: "⚙️" },
  { name: "Frank C.", role: "Building Lead", classOf: 27, initials: "F", emoji: "🛠️" },
  { name: "Nicola C.", role: "Programmer", classOf: 27, initials: "N", emoji: "💽" },
  { name: "Bianca C.", role: "Builder", classOf: 27, initials: "B", emoji: "🔩" },
  { name: "Johanna A.", role: "Business & Programming", classOf: 28, initials: "J", emoji: "📊" },
  { name: "Brisa M.", role: "Business & Marketing", classOf: 28, initials: "B", emoji: "🎨" },
  { name: "Jordynn R.", role: "Business & Marketing", classOf: 28, initials: "J", emoji: "📣" },
];

const CARD_WIDTH = 260;
const GAP = 24;

export function AlumniCarousel() {
  const [easterEggActive, setEasterEggActive] = useState(false);
  const [ripYear, setRipYear] = useState(26);

  const track = [...alumni, ...alumni];

  const triggerRip = (year: number) => {
    if (!easterEggActive) {
      setRipYear(year);
      setEasterEggActive(true);
      setTimeout(() => setEasterEggActive(false), 3500);
    }
  };

  return (
    <div className="relative overflow-hidden py-6 cursor-pointer select-none" onClick={() => triggerRip(ripYear)}>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-20 bg-gradient-to-r from-slate-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-20 bg-gradient-to-l from-slate-950 to-transparent" />

      <div className="mb-6 text-center">
        <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-slate-500 transition-colors">
          <span className="w-2 h-2 rounded-full bg-slate-600 animate-pulse" />
          Click to pay respects
          <span className="w-2 h-2 rounded-full bg-slate-600 animate-pulse" />
        </p>
      </div>

      <motion.div
        className="flex w-max"
        animate={{ x: [0, -(alumni.length * (CARD_WIDTH + GAP))] }}
        transition={{ repeat: Infinity, duration: 24, ease: "linear" }}
      >
        {track.map((member, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.06, rotateY: 8, y: -6 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            className="group relative shrink-0 rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur-sm p-6 text-center mx-3 overflow-hidden hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 transition-[border-color,box-shadow]"
            style={{ width: CARD_WIDTH }}
            onClick={(e) => {
              e.stopPropagation();
              triggerRip(member.classOf);
            }}
          >
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full bg-blue-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-4 shadow-lg shadow-blue-500/30 ring-2 ring-blue-400/30 group-hover:ring-blue-400/70 transition-all group-hover:scale-110">
              <span className="text-xl font-black text-white relative z-10">{member.initials}</span>
              <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping group-hover:opacity-50 text-white flex items-center justify-center">
                {member.emoji}
              </span>
            </div>

            <h3 className="relative text-lg font-bold text-white mb-1">{member.name}</h3>
            <p className="relative inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-blue-400">
              <GraduationCap className="w-3.5 h-3.5" />
              {member.role}
            </p>

            <p className="relative mt-2 text-[11px] font-bold text-slate-500">Class of &apos;{member.classOf}</p>

            <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-widest text-slate-600 group-hover:text-blue-500 transition-colors flex items-center gap-1">
              <Skull className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              RIP
            </span>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {easterEggActive && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="absolute inset-x-0 bottom-4 z-30 flex justify-center px-6 pointer-events-none"
          >
            <div className="bg-slate-950/95 border border-blue-500/30 rounded-2xl px-6 py-4 flex items-center gap-4 shadow-2xl shadow-blue-500/20 backdrop-blur-xl max-w-xl">
              <div className="flex flex-col items-center pr-4 border-r border-white/10">
                <span className="text-3xl">🕯️</span>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Rest in peace</span>
              </div>
              <div className="flex-1">
                <div className="text-sm font-bold text-white flex items-center gap-2">
                  <HandMetal className="w-4 h-4 text-blue-400" />
                  Rip these uncs...</div>
                <p className="text-slate-400 text-sm mt-0.5">They left the team. It was real.</p>
              </div>
              <div className="flex flex-col items-center pl-4 border-l border-white/10">
                <span className="text-2xl">🥀</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">Class of &apos;{ripYear}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}