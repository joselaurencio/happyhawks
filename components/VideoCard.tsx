"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ExternalLink } from "lucide-react";
import Image from "next/image";

const BUFFER_LINES = [
  "Rewinding the flock...",
  "Scouting VHS tapes...",
  "Polishing talons...",
  "Summoning the nest cam...",
  "Asking the head hawk...",
];

export function VideoCard({ title, thumbnail, link }: { title: string; thumbnail: string; link: string }) {
  const [state, setState] = useState<"idle" | "buffering" | "done">("idle");

  const handlePlay = () => {
    if (state !== "idle") return;
    if (link && link !== "#") {
      window.open(link, "_blank", "noopener,noreferrer");
      return;
    }
    setState("buffering");
    setTimeout(() => setState("done"), 2200);
  };

  const line = BUFFER_LINES[title.length % BUFFER_LINES.length];

  return (
    <div className="group relative rounded-3xl overflow-hidden bg-slate-900 border border-white/10 aspect-video flex items-center justify-center cursor-pointer block">
      <Image src={thumbnail} alt={title} fill className="object-cover opacity-70 group-hover:opacity-50 transition-opacity" />
      <div className="absolute inset-0 bg-slate-900/50 group-hover:bg-slate-900/30 transition-colors z-10" />
      <button onClick={handlePlay} className="relative z-20 w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
        <Play className="w-6 h-6 text-white ml-1" />
      </button>
      <div className="absolute top-4 right-4 z-20 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-950/60 text-xs font-medium text-slate-300 backdrop-blur-sm">
        <ExternalLink className="w-3.5 h-3.5" /> Video Link Pending
      </div>
      <span className="absolute bottom-6 left-6 z-20 font-bold text-white text-xl">{title}</span>

      <AnimatePresence>
        {state === "buffering" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-30 bg-slate-950/95 backdrop-blur-xl flex flex-col items-center justify-center gap-4 cursor-pointer"
            onClick={handlePlay}
          >
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              className="w-12 h-12 border-4 border-blue-500/30 border-t-blue-500 rounded-full"
            />
            <p className="text-white font-bold tracking-widest uppercase text-sm animate-pulse">
              Buffering the eggs...
            </p>
            <p className="text-slate-500 text-xs font-mono">{line}</p>
          </motion.div>
        )}
        {state === "done" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-30 bg-slate-950/95 backdrop-blur-xl flex flex-col items-center justify-center gap-3 px-8 text-center cursor-pointer"
            onClick={() => setState("idle")}
          >
            <div className="text-4xl">📼</div>
            <p className="text-white font-bold text-lg">No flock feed yet</p>
            <p className="text-slate-400 text-sm">
              There&apos;s nothing behind this button... yet. <br /> Real video link coming soon.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export { DEFAULT_THUMBNAIL, DEFAULT_BG };