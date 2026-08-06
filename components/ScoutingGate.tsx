"use client";

import { useState, type ReactNode } from "react";
import { LockKeyhole, Loader2, Eye, EyeOff, ShieldCheck } from "lucide-react";
import { isScoutingUnlocked, lockScouting, verifyScoutingPassword } from "@/lib/scoutingAccess";

export default function ScoutingGate({ children }: { children: ReactNode }) {
  const [unlocked, setUnlocked] = useState(isScoutingUnlocked);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [checking, setChecking] = useState(false);
  const [error, setError] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password) return;
    setChecking(true);
    setError("");
    const ok = await verifyScoutingPassword(password);
    setChecking(false);
    if (ok) {
      setPassword("");
      setUnlocked(true);
    } else {
      setError("Incorrect password. Please try again.");
    }
  };

  if (unlocked) {
    return (
      <>
        {children}
        <button
          onClick={() => {
            lockScouting();
            setUnlocked(false);
          }}
          className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-xs font-medium text-slate-400"
        >
          <LockKeyhole className="w-3.5 h-3.5" /> Lock Scouting Page
        </button>
      </>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-[60vh] px-6">
      <div className="w-full max-w-md bg-slate-900 rounded-3xl border border-white/10 p-8 text-center">
        <div className="w-14 h-14 rounded-2xl bg-blue-600/20 flex items-center justify-center mx-auto mb-6">
          <LockKeyhole className="w-7 h-7 text-blue-400" />
        </div>
        <h1 className="text-2xl font-bold text-white mb-2">Scouting Portal Locked</h1>
        <p className="text-slate-400 text-sm mb-8 leading-relaxed">
          Match data and strategy are private to the Happy Hawks team. Enter the team password to continue.
        </p>

        <form onSubmit={submit} className="space-y-4">
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
              placeholder="Team password"
              autoFocus
              className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 pr-12"
            />
            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>

          {error && <p className="text-red-400 text-sm text-left">{error}</p>}

          <button
            type="submit"
            disabled={checking || !password}
            className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-slate-950 font-bold hover:scale-[1.01] transition-transform disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {checking ? <Loader2 className="w-5 h-5 animate-spin" /> : <ShieldCheck className="w-5 h-5" />}
            Unlock Scouting
          </button>
        </form>

        <p className="text-xs text-slate-600 mt-6">
          Session stays unlocked in this browser tab while you scout at competitions.
        </p>
      </div>
    </div>
  );
}
