"use client";

import { useState, useMemo } from "react";
import { Section } from "@/components/Section";
import { AnimatedCard } from "@/components/AnimatedCard";
import { Search, TrendingUp, Target, BarChart3, Clock, Map, ChevronUp, ChevronDown, Award, Zap, Cpu } from "lucide-react";
import { motion } from "framer-motion";

interface TeamData {
  rank: number;
  team_number: string;
  name: string;
  opr: number;
  auto_avg: number;
  rs: number;
  record: string;
  driving_score: number;
  auto_focus: string;
}

const teamsData: TeamData[] = [
  { rank: 1, team_number: "21993", name: "Tech Titans", opr: 68.17, auto_avg: 19.8, rs: 4.40, record: "5-0-0", driving_score: 48.37, auto_focus: "29.0%" },
  { rank: 2, team_number: "24813", name: "SHCA Happy Hawks", opr: 70.08, auto_avg: 22.0, rs: 3.20, record: "4-1-0", driving_score: 48.08, auto_focus: "31.4%" },
  { rank: 3, team_number: "5198", name: "Wingnuts", opr: 51.27, auto_avg: 12.6, rs: 3.20, record: "3-2-0", driving_score: 38.67, auto_focus: "24.6%" },
  { rank: 4, team_number: "24480", name: "JagTech", opr: 66.95, auto_avg: 11.2, rs: 3.00, record: "4-1-0", driving_score: 55.75, auto_focus: "16.7%" },
  { rank: 5, team_number: "27795", name: "The Sentinels", opr: 50.74, auto_avg: 12.4, rs: 3.00, record: "4-1-0", driving_score: 38.34, auto_focus: "24.4%" },
  { rank: 6, team_number: "32314", name: "Marcus Bartholomew III Sr.", opr: 49.54, auto_avg: 25.0, rs: 2.80, record: "3-2-0", driving_score: 24.54, auto_focus: "50.5%" },
  { rank: 7, team_number: "32350", name: "CODEIAKS", opr: 50.38, auto_avg: 11.8, rs: 2.40, record: "3-2-0", driving_score: 38.58, auto_focus: "23.4%" },
  { rank: 8, team_number: "19712", name: "NDAASentinels", opr: 34.59, auto_avg: 12.6, rs: 2.40, record: "3-2-0", driving_score: 21.99, auto_focus: "36.4%" },
  { rank: 9, team_number: "18783", name: "Eagle Tech", opr: 26.25, auto_avg: 11.6, rs: 2.40, record: "3-2-0", driving_score: 14.65, auto_focus: "44.2%" },
  { rank: 10, team_number: "32453", name: "TIGERBOTICS", opr: 11.73, auto_avg: 11.0, rs: 2.40, record: "3-2-0", driving_score: 0.73, auto_focus: "93.8%" },
  { rank: 11, team_number: "32299", name: "Wisconsin Academy", opr: 14.22, auto_avg: 2.5, rs: 2.00, record: "2-3-0", driving_score: 11.72, auto_focus: "17.6%" },
  { rank: 12, team_number: "32345", name: "Wait4iT", opr: 28.91, auto_avg: 8.4, rs: 2.00, record: "2-3-0", driving_score: 20.51, auto_focus: "29.0%" },
  { rank: 13, team_number: "19882", name: "Mile High Academy", opr: 22.15, auto_avg: 6.2, rs: 1.80, record: "2-3-0", driving_score: 15.95, auto_focus: "28.0%" },
  { rank: 14, team_number: "25567", name: "Robo-Raptors", opr: 18.45, auto_avg: 4.1, rs: 1.60, record: "1-4-0", driving_score: 14.35, auto_focus: "22.2%" },
  { rank: 15, team_number: "32401", name: "Cyber Wolves", opr: 9.88, auto_avg: 1.2, rs: 1.20, record: "1-4-0", driving_score: 8.68, auto_focus: "12.1%" }
];

const timeline = [
  { event: "Season Kickoff", date: "Sept 2025", desc: "DECODE season revealed. Initial strategy brainstormed.", status: "completed" },
  { event: "First Scrimmage", date: "Nov 2025", desc: "Tested intake iterations and PedroPathing stability.", status: "completed" },
  { event: "League Meet #1", date: "Jan 2026", desc: "Secured top seed with consistent 80+ OPR.", status: "completed" },
  { event: "Regional Finals", date: "Feb 2026", desc: "Qualified for State with Inspire Award 1st Place.", status: "active" },
  { event: "Adventist Championship", date: "April 2026", desc: "Final championship event at Forest Lake Academy.", status: "upcoming" },
];

export default function Scouting() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortConfig, setSortConfig] = useState<{ key: keyof TeamData; direction: 'asc' | 'desc' }>({ key: 'rank', direction: 'asc' });

  const handleSort = (key: keyof TeamData) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const sortedTeams = useMemo(() => {
    let items = [...teamsData];
    
    if (searchQuery) {
      items = items.filter(team => 
        team.team_number.includes(searchQuery) || 
        team.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    items.sort((a, b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];

      if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });

    return items;
  }, [searchQuery, sortConfig]);

  const SortIcon = ({ column }: { column: keyof TeamData }) => {
    if (sortConfig.key !== column) return <div className="w-4 h-4" />;
    return sortConfig.direction === 'asc' ? <ChevronUp className="w-4 h-4 text-blue-400" /> : <ChevronDown className="w-4 h-4 text-blue-400" />;
  };

  return (
    <>
      <div className="pt-32 pb-16 bg-slate-950 border-b border-white/5">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Scouting & Analysis</h1>
          <p className="text-xl text-slate-400">Deep dive into every team in the Adventist Robotics League DECODE Season.</p>
        </div>
      </div>

      <Section title="Championship Timeline">
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block" />
          <div className="space-y-12">
            {timeline.map((item, i) => (
              <div key={item.event} className={`flex flex-col md:flex-row items-start md:items-center gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="flex-1 w-full">
                  <AnimatedCard delay={i * 0.1}>
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-widest ${
                        item.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                        item.status === 'active' ? 'bg-blue-500/20 text-blue-400 animate-pulse' :
                        'bg-slate-800 text-slate-500'
                      }`}>
                        {item.status}
                      </span>
                      <span className="text-slate-500 text-xs font-mono">{item.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.event}</h3>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </AnimatedCard>
                </div>
                <div className="relative z-10">
                  <div className={`w-8 h-8 rounded-full border-4 border-slate-950 flex items-center justify-center ${
                    item.status === 'completed' ? 'bg-green-500' :
                    item.status === 'active' ? 'bg-blue-500' :
                    'bg-slate-800'
                  }`}>
                    {item.status === 'completed' && <Clock className="w-4 h-4 text-white" />}
                  </div>
                </div>
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section darker title="League Standings & Custom Metrics" subtitle="Sorting by Driving Skill (D-Score) and Autonomous Efficiency">
        <div className="bg-slate-950 rounded-3xl border border-white/10 overflow-hidden mb-12">
          <div className="p-6 border-b border-white/5 flex items-center justify-between bg-slate-900/50">
            <div className="flex items-center gap-4 flex-1">
              <Search className="w-5 h-5 text-slate-500" />
              <input 
                type="text" 
                placeholder="Search team number or name..." 
                className="bg-transparent border-none focus:ring-0 text-white placeholder:text-slate-600 w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="hidden md:flex items-center gap-2 text-xs font-mono text-slate-500">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              UPDATED LIVE: APRIL 2026
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-[10px] font-bold text-slate-500 uppercase tracking-wider border-b border-white/5 bg-slate-900/30">
                  <th className="px-6 py-4 cursor-pointer hover:text-white transition-colors" onClick={() => handleSort('rank')}>
                    Rank <SortIcon column="rank" />
                  </th>
                  <th className="px-6 py-4 cursor-pointer hover:text-white transition-colors" onClick={() => handleSort('team_number')}>
                    Team <SortIcon column="team_number" />
                  </th>
                  <th className="px-6 py-4 cursor-pointer hover:text-white transition-colors" onClick={() => handleSort('opr')}>
                    OPR <SortIcon column="opr" />
                  </th>
                  <th className="px-6 py-4 cursor-pointer hover:text-white transition-colors" onClick={() => handleSort('auto_avg')}>
                    Auto <SortIcon column="auto_avg" />
                  </th>
                  <th className="px-6 py-4 cursor-pointer hover:text-white transition-colors text-blue-400" onClick={() => handleSort('driving_score')}>
                    D-Score <SortIcon column="driving_score" />
                  </th>
                  <th className="px-6 py-4 cursor-pointer hover:text-white transition-colors text-purple-400" onClick={() => handleSort('auto_focus')}>
                    Auto Focus <SortIcon column="auto_focus" />
                  </th>
                  <th className="px-6 py-4">Record</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {sortedTeams.map((team) => (
                  <tr key={team.team_number} className="hover:bg-white/[0.02] transition-colors group">
                    <td className="px-6 py-5">
                      <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center font-bold text-white text-sm border border-white/5">
                        {team.rank}
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="font-bold text-white">#{team.team_number}</div>
                      <div className="text-xs text-slate-500 truncate max-w-[150px]">{team.name}</div>
                    </td>
                    <td className="px-6 py-5 text-slate-300 font-mono text-sm">{team.opr}</td>
                    <td className="px-6 py-5 text-slate-300 font-mono text-sm">{team.auto_avg}</td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2">
                        <span className="text-blue-400 font-bold font-mono text-sm">{team.driving_score}</span>
                        <div className="w-12 h-1 bg-slate-800 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-500" style={{ width: `${Math.min(100, (team.driving_score / 60) * 100)}%` }} />
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2">
                        <span className="text-purple-400 font-bold font-mono text-sm">{team.auto_focus}</span>
                        {parseFloat(team.auto_focus) > 40 && <Zap className="w-3 h-3 text-purple-400" />}
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="text-xs font-mono text-slate-400">{team.record}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <AnimatedCard>
            <div className="flex items-center gap-3 mb-4 text-blue-400">
              <Zap className="w-5 h-5" />
              <h4 className="font-bold text-white">D-Score (Driver Skill)</h4>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Calculated as **OPR - Auto Average**. This high-precision metric isolates Teleop and Endgame performance, filtering out code-driven autonomous points to reveal raw driving efficiency.
            </p>
          </AnimatedCard>

          <AnimatedCard delay={0.1}>
            <div className="flex items-center gap-3 mb-4 text-purple-400">
              <Cpu className="w-5 h-5" />
              <h4 className="font-bold text-white">Auto Focus</h4>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              The percentage of total points scored during the first 30 seconds. Teams above 40% are **Auto Specialists**, often possessing superior vision and odometry systems.
            </p>
          </AnimatedCard>

          <AnimatedCard delay={0.2}>
            <div className="flex items-center gap-3 mb-4 text-green-400">
              <Award className="w-5 h-5" />
              <h4 className="font-bold text-white">League Meta</h4>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              The Adventist Championship current meta favors high-speed intakes and reliable hang systems. Keep an eye on teams with D-Scores above 40.
            </p>
          </AnimatedCard>
        </div>
      </Section>
    </>
  );
}
