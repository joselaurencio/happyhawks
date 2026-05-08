"use client";

import { useState } from "react";
import { Section } from "@/components/Section";
import { AnimatedCard } from "@/components/AnimatedCard";
import { Search, TrendingUp, Target, BarChart3, Clock, Map } from "lucide-react";
import { motion } from "framer-motion";

const timeline = [
  { event: "Season Kickoff", date: "Sept 2024", desc: "DECODE season revealed. Initial strategy brainstormed.", status: "completed" },
  { event: "First Scrimmage", date: "Nov 2024", desc: "Tested intake iterations and PedroPathing stability.", status: "completed" },
  { event: "League Meet #1", date: "Dec 2024", desc: "Secured top seed with consistent 80+ OPR.", status: "completed" },
  { event: "Regional Finals", date: "Feb 2025", desc: "Qualified for State with Inspire Award 1st Place.", status: "active" },
  { event: "State Championship", date: "March 2025", desc: "Preparing for high-stakes competition in San Antonio.", status: "upcoming" },
];

const mockTeams = [
  { rank: 1, id: "24813", name: "Happy Hawks", opr: "81.2", irp: "42.5", scoring: "Mixed" },
  { rank: 2, id: "12345", name: "Cyber Knights", opr: "74.8", irp: "38.2", scoring: "Far" },
  { rank: 3, id: "9988", name: "Robo Wizards", opr: "69.1", irp: "31.9", scoring: "Near" },
];

export default function Scouting() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <div className="pt-32 pb-16 bg-slate-950 border-b border-white/5">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Scouting & Strategy</h1>
          <p className="text-xl text-slate-400">Real-time data and individual performance tracking for our upcoming competitions.</p>
        </div>
      </div>

      <Section title="Road to Worlds">
        <div className="relative">
          {/* Vertical Line */}
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

      <Section darker title="Individual Performance Tracker (IRP)" subtitle="Experimental OpenCV Analysis">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-slate-950 rounded-3xl border border-white/10 overflow-hidden">
            <div className="p-6 border-b border-white/5 flex items-center justify-between bg-slate-900/50">
              <div className="flex items-center gap-4">
                <Search className="w-5 h-5 text-slate-500" />
                <input 
                  type="text" 
                  placeholder="Search team number..." 
                  className="bg-transparent border-none focus:ring-0 text-white placeholder:text-slate-600 w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                LIVE DATA
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-xs font-bold text-slate-500 uppercase tracking-wider border-b border-white/5">
                    <th className="px-8 py-4">Team</th>
                    <th className="px-8 py-4">OPR (Alliance)</th>
                    <th className="px-8 py-4 text-blue-400">IRP (Individual)</th>
                    <th className="px-8 py-4">Score Zone</th>
                    <th className="px-8 py-4">Trend</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {mockTeams.map((team) => (
                    <tr key={team.id} className="hover:bg-white/[0.02] transition-colors group">
                      <td className="px-8 py-6">
                        <div className="font-bold text-white">#{team.id}</div>
                        <div className="text-xs text-slate-500">{team.name}</div>
                      </td>
                      <td className="px-8 py-6 text-slate-300 font-mono">{team.opr}</td>
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-2">
                          <span className="text-blue-400 font-bold font-mono">{team.irp}</span>
                          <div className="w-16 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: `${(parseFloat(team.irp)/50)*100}%` }}
                              className="h-full bg-blue-500" 
                            />
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <span className={`px-2 py-1 rounded text-[10px] font-bold ${
                          team.scoring === 'Far' ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20' :
                          team.scoring === 'Near' ? 'bg-orange-500/10 text-orange-400 border border-orange-500/20' :
                          'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                        }`}>
                          {team.scoring}
                        </span>
                      </td>
                      <td className="px-8 py-6">
                        <TrendingUp className="w-4 h-4 text-green-500" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-6">
            <AnimatedCard>
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-5 h-5 text-blue-400" />
                <h4 className="font-bold text-white">Scouting Intel</h4>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Our computer vision model is currently optimized for detecting **Individual Points Scored** vs **Alliance Totals**.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-xs text-slate-300">
                  <Map className="w-3 h-3 text-blue-500" /> Near-Goal Accuracy: 94%
                </li>
                <li className="flex items-center gap-2 text-xs text-slate-300">
                  <Map className="w-3 h-3 text-purple-500" /> Far-Goal Accuracy: 82%
                </li>
              </ul>
            </AnimatedCard>

            <div className="p-8 rounded-3xl bg-blue-600 relative overflow-hidden group cursor-pointer">
              <div className="relative z-10">
                <BarChart3 className="w-10 h-10 text-white mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Detailed Analysis</h3>
                <p className="text-blue-100 text-sm">Download the full CSV dataset for the current league meets.</p>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-110 transition-transform" />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
