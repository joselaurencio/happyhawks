import { Section } from "@/components/Section";
import { AnimatedCard } from "@/components/AnimatedCard";
import { Trophy, TrendingUp, Medal, Star, Award, Target } from "lucide-react";

export default function Performance() {
  return (
    <>
      <div className="pt-32 pb-16 bg-slate-950 border-b border-white/5 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#052680]/30 via-slate-950 to-slate-950" />
        
        <div className="container mx-auto px-6 md:px-12 text-center max-w-4xl relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-[#E2EDFA]/30 text-[#E2EDFA] mb-6 font-medium text-sm">
            <TrendingUp className="w-4 h-4" />
            <span>Consistent Competitive Growth</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Performance Statistics</h1>
          <p className="text-xl text-slate-400">
            A data-driven look at our competitive trajectory across seasons, highlighting our continuous improvement in OPR, global rankings, and award recognition.
          </p>
        </div>
      </div>

      {/* CURRENT SEASON: DECODE */}
      <Section title="Decode Season (2025)" subtitle="Our strongest performance yet at the Adventist Robotics Championship">
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <AnimatedCard delay={0} className="bg-gradient-to-br from-[#052680]/40 to-slate-900 border-[#E2EDFA]/20">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-[#E2EDFA]/10 flex items-center justify-center">
                <Target className="w-6 h-6 text-[#E2EDFA]" />
              </div>
              <div>
                <div className="text-3xl font-bold text-white">81.25</div>
                <div className="text-sm text-slate-400">Offensive Power Rating (OPR)</div>
              </div>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={0.1} className="bg-gradient-to-br from-[#052680]/40 to-slate-900 border-[#E2EDFA]/20">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-[#E2EDFA]/10 flex items-center justify-center">
                <Medal className="w-6 h-6 text-[#E2EDFA]" />
              </div>
              <div>
                <div className="text-3xl font-bold text-white">Top 12%</div>
                <div className="text-sm text-slate-400">Global Rank (941st)</div>
              </div>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={0.2} className="bg-gradient-to-br from-[#052680]/40 to-slate-900 border-[#E2EDFA]/20">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-[#E2EDFA]/10 flex items-center justify-center">
                <Star className="w-6 h-6 text-[#E2EDFA]" />
              </div>
              <div>
                <div className="text-3xl font-bold text-white">4-1-0</div>
                <div className="text-sm text-slate-400">Qualifying Record</div>
              </div>
            </div>
          </AnimatedCard>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-900 rounded-2xl border border-white/5 p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Trophy className="w-6 h-6 text-[#E2EDFA]" />
              Season Awards
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Award className="w-5 h-5 text-[#E2EDFA] shrink-0 mt-1" />
                <div>
                  <div className="font-bold text-white">Inspire Award Winner</div>
                  <div className="text-sm text-slate-400">Recognizing excellence across all aspects of FIRST Tech Challenge.</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Award className="w-5 h-5 text-[#E2EDFA] shrink-0 mt-1" />
                <div>
                  <div className="font-bold text-white">Finalist Alliance 1st Pick</div>
                  <div className="text-sm text-slate-400">Chosen for superior robot performance and reliability.</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Award className="w-5 h-5 text-[#E2EDFA] shrink-0 mt-1" />
                <div>
                  <div className="font-bold text-white">FIRST Leadership Award Semifinalist</div>
                  <div className="text-sm text-slate-400">Awarded to Jose Laurencio Soriano for exceptional team leadership.</div>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-slate-900 rounded-2xl border border-white/5 p-8 flex flex-col justify-center">
            <h3 className="text-xl font-bold text-white mb-4">Growth Analysis</h3>
            <p className="text-slate-300 leading-relaxed">
              Our OPR jumped from 30.26 last year to an incredible 81.25 this season. This 168% increase in scoring power is a direct result of our new Finite State Machine architecture, PedroPathing integration, and rapid 3D-printed iterations on our intake mechanism.
            </p>
          </div>
        </div>
      </Section>

      {/* PAST SEASONS */}
      <Section darker title="Past Seasons" subtitle="The foundation of our success">
        <div className="space-y-8 max-w-4xl mx-auto">
          {/* Into the Deep */}
          <AnimatedCard delay={0} className="border-l-4 border-l-[#E2EDFA]">
            <div className="md:flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Into The Deep (2024)</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-medium">OPR: 30.26</span>
                  <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-medium">Top 12% Endgame</span>
                </div>
              </div>
              <div className="bg-[#052680]/20 text-[#E2EDFA] px-4 py-2 rounded-lg font-bold border border-[#E2EDFA]/20 inline-block mt-4 md:mt-0">
                Inspire Award Winner
              </div>
            </div>
            <p className="text-slate-400 mt-2">
              Our sophomore season saw us double our offensive capabilities and establish the strong outreach and business programs that earned us our first Inspire Award.
            </p>
          </AnimatedCard>

          {/* Centerstage */}
          <AnimatedCard delay={0.1} className="border-l-4 border-l-slate-700">
            <div className="md:flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Centerstage (2023)</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-medium">OPR: 13.75</span>
                  <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-medium">Rookie Year</span>
                </div>
              </div>
              <div className="space-y-2 mt-4 md:mt-0 text-right">
                <div className="bg-slate-800 text-slate-300 px-4 py-2 rounded-lg font-bold border border-white/5 inline-block ml-2">
                  Control Award (2nd)
                </div>
                <div className="bg-slate-800 text-slate-300 px-4 py-2 rounded-lg font-bold border border-white/5 inline-block ml-2">
                  Think Award (2nd)
                </div>
              </div>
            </div>
            <p className="text-slate-400 mt-2">
              Our rookie year laid the groundwork. We focused heavily on learning proper engineering documentation (Think Award) and experimenting with sensor-based programming (Control Award).
            </p>
          </AnimatedCard>
        </div>
      </Section>
    </>
  );
}
