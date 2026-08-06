"use client";

import { useEffect, useState } from "react";
import { RefreshCw, WifiOff, Activity, TrendingUp, Radio, Trophy, ExternalLink, Clock, Loader2 } from "lucide-react";
import { fetchScoutSnapshot, type ScoutSnapshot } from "@/lib/scoutData";

function fmt(n: number | null, digits = 1): string {
  if (n === null) return "—";
  return n.toFixed(digits);
}

export default function LiveTeamWidget() {
  const [snapshot, setSnapshot] = useState<ScoutSnapshot | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const data = await fetchScoutSnapshot();
      if (cancelled) return;
      setSnapshot(data);
      setError(!data);
      setLoading(false);
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const refresh = async () => {
    setLoading(true);
    setError(false);
    const data = await fetchScoutSnapshot();
    setSnapshot(data);
    setError(!data);
    setLoading(false);
  };

  if (loading && !snapshot) {
    return (
      <div className="bg-slate-900 rounded-3xl border border-white/10 p-8 flex items-center justify-center gap-3 text-slate-400">
        <Loader2 className="w-5 h-5 animate-spin text-blue-500" />
        Pulling live FTCScout data for #24813…
      </div>
    );
  }

  if (error || !snapshot) {
    return (
      <div className="bg-slate-900 rounded-3xl border border-white/10 p-8">
        <div className="flex items-center gap-3 text-amber-400 font-semibold mb-2">
          <WifiOff className="w-5 h-5" />
          Live stats temporarily unavailable
        </div>
        <p className="text-slate-400 text-sm mb-4">
          FTCScout data could not be reached right now. Try the refresh button, or check back after the next event update.
        </p>
        <button
          onClick={refresh}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30 font-medium hover:bg-blue-600/30 transition-colors text-sm"
        >
          <RefreshCw className="w-4 h-4" /> Retry
        </button>
      </div>
    );
  }

  const qs = snapshot.quickStats;
  const latestEvent = snapshot.events[0] ?? null;

  return (
    <div className="bg-slate-900 rounded-3xl border border-white/10 overflow-hidden">
      <div className="p-6 border-b border-white/5 flex flex-wrap items-center justify-between gap-3 bg-slate-900/60">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center">
            <Activity className="w-5 h-5 text-blue-400" />
          </div>
          <div>
            <h2 className="font-bold text-white">Live Match Data — #{snapshot.teamNumber}</h2>
            <p className="text-xs text-slate-500">{snapshot.name}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 text-xs text-slate-500">
            <Clock className="w-3.5 h-3.5" />
            {new Date(snapshot.fetchedAt).toLocaleString(undefined, { hour: "numeric", minute: "2-digit" })}
          </span>
          <button
            onClick={refresh}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-xs font-medium text-slate-300"
            title="Refresh live data"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
            Refresh
          </button>
        </div>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-slate-950 rounded-2xl p-4 border border-white/5">
            <div className="flex items-center gap-2 text-slate-500 text-xs mb-2">
              <TrendingUp className="w-3.5 h-3.5 text-blue-400" /> Season OPR
            </div>
            <div className="text-2xl font-bold text-white font-mono">{fmt(qs?.tot)}</div>
            <div className="text-xs text-slate-500 mt-1">
              {qs?.totRank != null ? `#${qs.totRank} of ${qs.count ?? "—"}` : "—"}
            </div>
          </div>
          <div className="bg-slate-950 rounded-2xl p-4 border border-white/5">
            <div className="flex items-center gap-2 text-slate-500 text-xs mb-2">
              <Radio className="w-3.5 h-3.5 text-purple-400" /> Auto OPR
            </div>
            <div className="text-2xl font-bold text-white font-mono">{fmt(qs?.auto)}</div>
            <div className="text-xs text-slate-500 mt-1">30s of the match</div>
          </div>
          <div className="bg-slate-950 rounded-2xl p-4 border border-white/5">
            <div className="flex items-center gap-2 text-slate-500 text-xs mb-2">
              <Activity className="w-3.5 h-3.5 text-green-400" /> Driver-Controlled OPR
            </div>
            <div className="text-2xl font-bold text-white font-mono">{fmt(qs?.dc)}</div>
            <div className="text-xs text-slate-500 mt-1">Teleop contribution</div>
          </div>
          <div className="bg-slate-950 rounded-2xl p-4 border border-white/5">
            <div className="flex items-center gap-2 text-slate-500 text-xs mb-2">
              <Trophy className="w-3.5 h-3.5 text-amber-400" /> Endgame OPR
            </div>
            <div className="text-2xl font-bold text-white font-mono">{fmt(qs?.eg)}</div>
            <div className="text-xs text-slate-500 mt-1">Final 30s contribution</div>
          </div>
        </div>

        {latestEvent && (
          <div className="bg-slate-950 rounded-2xl border border-white/5 p-4 flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="text-xs text-slate-500 mb-1">Latest Event</div>
              <div className="font-semibold text-white">
                {latestEvent.name}
                <span className="text-slate-500 font-normal text-sm ml-2">{latestEvent.start}</span>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <div className="text-center">
                <div className="text-lg font-bold text-white font-mono">{latestEvent.rank ?? "—"}</div>
                <div className="text-[10px] text-slate-500 uppercase tracking-wider">Rank</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-white font-mono">
                  {latestEvent.wins != null ? `${latestEvent.wins}-${latestEvent.losses ?? 0}-${latestEvent.ties ?? 0}` : "—"}
                </div>
                <div className="text-[10px] text-slate-500 uppercase tracking-wider">Record</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-white font-mono">{latestEvent.opr != null ? latestEvent.opr.toFixed(1) : "—"}</div>
                <div className="text-[10px] text-slate-500 uppercase tracking-wider">OPR</div>
              </div>
              <a
                href="https://ftcscout.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-xs font-medium text-slate-300 ml-2"
              >
                FTCScout <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
