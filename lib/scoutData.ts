"use client";

export interface ScoutEvent {
  code: string;
  name: string;
  start: string;
  finished: boolean;
  rank: number | null;
  rp: number | null;
  wins: number | null;
  losses: number | null;
  ties: number | null;
  qualMatchesPlayed: number | null;
  opr: number | null;
}

export interface ScoutQuickStat {
  season: number;
  tot: number | null;
  auto: number | null;
  dc: number | null;
  eg: number | null;
  totRank: number | null;
  count: number | null;
}

export interface ScoutSnapshot {
  teamNumber: number;
  name: string;
  quickStats: ScoutQuickStat | null;
  events: ScoutEvent[];
  fetchedAt: string;
}

const SEASON = 2025;

const QUERY = `
  query {
    teamByNumber(number: 24813) {
      number
      name
      quickStats(season: ${SEASON}) {
        season
        number
        tot { value rank }
        auto { value }
        dc { value }
        eg { value }
        count
      }
      events(season: ${SEASON}) {
        season
        eventCode
        stats {
          ... on TeamEventStats2025 {
            rank
            rp
            wins
            losses
            ties
            qualMatchesPlayed
            opr { totalPoints }
          }
        }
        event {
          code
          name
          start
          finished
        }
      }
    }
  }
`;

interface RawResponse {
  data?: {
    teamByNumber?: {
      number: number;
      name: string;
      quickStats?: {
        season: number;
        tot?: { value: number; rank: number };
        auto?: { value: number };
        dc?: { value: number };
        eg?: { value: number };
        count?: number;
      } | null;
      events?: Array<{
        season: number;
        eventCode: string;
        stats?: {
          rank?: number;
          rp?: number;
          wins?: number;
          losses?: number;
          ties?: number;
          qualMatchesPlayed?: number;
          opr?: { totalPoints?: number };
        } | null;
        event?: { code: string; name: string; start: string; finished: boolean };
      }>;
    };
  };
}

export async function fetchScoutSnapshot(): Promise<ScoutSnapshot | null> {
  try {
    const res = await fetch("https://api.ftcscout.org/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: QUERY }),
      cache: "no-store",
    });
    if (!res.ok) return null;
    const json: RawResponse = await res.json();
    const team = json?.data?.teamByNumber;
    if (!team) return null;

    const qs = team.quickStats;
    const events = (team.events ?? []).map((e) => ({
      code: e.eventCode,
      name: e.event?.name ?? e.eventCode,
      start: e.event?.start ?? "",
      finished: e.event?.finished ?? false,
      rank: e.stats?.rank ?? null,
      rp: e.stats?.rp ?? null,
      wins: e.stats?.wins ?? null,
      losses: e.stats?.losses ?? null,
      ties: e.stats?.ties ?? null,
      qualMatchesPlayed: e.stats?.qualMatchesPlayed ?? null,
      opr: e.stats?.opr?.totalPoints ?? null,
    }));

    return {
      teamNumber: team.number,
      name: team.name,
      quickStats: qs
        ? {
            season: qs.season,
            tot: qs.tot?.value ?? null,
            auto: qs.auto?.value ?? null,
            dc: qs.dc?.value ?? null,
            eg: qs.eg?.value ?? null,
            totRank: qs.tot?.rank ?? null,
            count: qs.count ?? null,
          }
        : null,
      events,
      fetchedAt: new Date().toISOString(),
    };
  } catch {
    return null;
  }
}
