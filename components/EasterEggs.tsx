"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const KONAMI = [
  "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
  "b", "a",
];

const MAGIC_WORDS = ["hawk tuah", "swoop", "fly hawks fly", "hawks fly"];

function useKonami(callback: () => void) {
  useEffect(() => {
    let index = 0;
    const handler = (e: KeyboardEvent) => {
      index = e.key === KONAMI[index] ? index + 1 : e.key === KONAMI[0] ? 1 : 0;
      if (index === KONAMI.length) {
        index = 0;
        callback();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [callback]);
}

export function EasterEggs() {
  const [konamiActive, setKonamiActive] = useState(false);
  const [hawkRain, setHawkRain] = useState(0);
  const [vhs, setVhs] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const typeBuffer = useRef("");
  const rainTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showToast = (msg: string) => {
    setToast(msg);
    if (rainTimer.current) clearTimeout(rainTimer.current);
    rainTimer.current = setTimeout(() => setToast(null), 3500);
  };

  useKonami(() => {
    setKonamiActive(true);
    showToast("🕹️ Konami code! Rainbow mode engaged.");
    if (rainTimer.current) clearTimeout(rainTimer.current);
    rainTimer.current = setTimeout(() => setKonamiActive(false), 8000);
  });

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "v" && window.location.pathname.startsWith("/media")) {
        setVhs((v) => !v);
        showToast(`📼 VHS mode ${(vhs ? "off" : "on")}`);
      }

      if (e.key.length === 1) {
        typeBuffer.current = (typeBuffer.current + e.key.toLowerCase()).slice(-32);
        const buffer = typeBuffer.current;
        if (MAGIC_WORDS.some((w) => buffer.includes(w))) {
          typeBuffer.current = "";
          setHawkRain((n) => n + 1);
        }
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [vhs]);

  return (
    <>
      {konamiActive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[300] pointer-events-none"
          style={{
            background: "linear-gradient(90deg, rgba(255,0,0,.15), rgba(255,165,0,.15), rgba(255,255,0,.15), rgba(0,255,0,.15), rgba(0,0,255,.15), rgba(238,130,238,.15))",
            backgroundSize: "600% 100%",
            animation: "hawkHueShift 12s linear infinite",
          }}
        />
      )}

      {vhs && (
        <div className="fixed inset-0 z-[299] pointer-events-none" style={{ animation: "hawkVhs 0.4s steps(2) infinite" }}>
          <div className="absolute inset-0 opacity-20" style={{ background: "repeating-linear-gradient(0deg, transparent 0px, transparent 2px, #000 2px, #000 4px)" }} />
          <div className="absolute left-0 right-0 top-1/2 h-10 bg-white opacity-10" style={{ animation: "hawkVhsRoll 0.3s linear infinite" }} />
        </div>
      )}

      <HawkRain key={hawkRain} />

      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[400] px-6 py-3 rounded-2xl bg-slate-950/90 border border-blue-500/30 backdrop-blur-xl text-sm font-bold text-white shadow-2xl shadow-blue-500/20"
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

const RAIN_HAWKS = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  delay: Math.random() * 2,
}));

function HawkRain() {
  const [hawks, setHawks] = useState<typeof RAIN_HAWKS>(RAIN_HAWKS);

  useEffect(() => {
    const timer = setTimeout(() => setHawks([]), 6000);
    return () => clearTimeout(timer);
  }, []);

  if (hawks.length === 0) return null;

  return (
    <div className="fixed inset-0 z-[299] pointer-events-none overflow-hidden">
      {hawks.map((h) => (
        <motion.span
          key={h.id}
          initial={{ y: -60, x: h.left, rotate: 0, opacity: 1 }}
          animate={{ y: "110vh", rotate: 360 }}
          transition={{ duration: 5, delay: h.delay, ease: "linear" }}
          className="absolute text-3xl"
          style={{ left: `${h.left}%` }}
        >
          🦅
        </motion.span>
      ))}
    </div>
  );
}