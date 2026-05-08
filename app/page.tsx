import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Trophy, Users, Eye, Calendar, Award } from "lucide-react";
import { Section } from "@/components/Section";
import { AnimatedCard } from "@/components/AnimatedCard";

import { HeroCarousel } from "@/components/HeroCarousel";

const stats = [
  { icon: Trophy, value: "81.25", label: "Offensive Power (OPR)" },
  { icon: Award, value: "Top 12%", label: "Global Rank (941st)" },
  { icon: Users, value: "Inspire", label: "Award Winner" },
  { icon: Eye, value: "4-1-0", label: "Season Record" },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-950">
        <HeroCarousel />
        
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-slate-950/30 to-slate-950 z-10"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay z-10"></div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Logo */}
            <div className="flex justify-center mb-8">
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl shadow-blue-500/20 ring-4 ring-[#052680]/40">
                <Image src="/images/logo.jpeg" alt="Happy Hawks Logo" width={144} height={144} className="object-cover w-full h-full" />
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-[#E2EDFA]/30 text-[#E2EDFA] mb-8 font-medium text-sm">
              <Trophy className="w-4 h-4" />
              <span>FTC Team #24813 DECODE Season</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-br from-white via-slate-200 to-slate-500">
              Happy Hawks
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Innovating through robotics, outreach, and STEM leadership. Building the future one line of code at a time.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/robot"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-slate-950 font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25"
              >
                View Our Robot
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="/portfolio"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900 border border-white/10 text-white font-bold text-lg hover:bg-slate-800 transition-colors flex items-center justify-center"
              >
                View Our Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <Section darker className="border-t border-white/5 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <AnimatedCard key={stat.label} delay={i * 0.1} className="text-center p-8 bg-slate-950">
              <stat.icon className="w-8 h-8 mx-auto text-blue-500 mb-4" />
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-slate-400 font-medium text-sm uppercase tracking-wider">{stat.label}</div>
            </AnimatedCard>
          ))}
        </div>
      </Section>

      {/* About Preview */}
      <Section title="Who We Are" subtitle="Mission and Values">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-6 text-white">More than just robots.</h3>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              The Happy Hawks are dedicated to spreading the message of FIRST and inspiring the next generation of engineers and leaders. We believe in innovation, leadership, outreach, and collaboration.
            </p>
            <Link href="/about" className="text-blue-500 font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
              Learn about our team <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-800 rounded-2xl p-6 aspect-square flex flex-col justify-end">
              <div className="font-bold text-white text-xl">Innovation</div>
            </div>
            <div className="bg-blue-500 rounded-2xl p-6 aspect-square flex flex-col justify-end translate-y-8">
              <div className="font-bold text-slate-950 text-xl">Leadership</div>
            </div>
            <div className="bg-blue-500 rounded-2xl p-6 aspect-square flex flex-col justify-end">
              <div className="font-bold text-white text-xl">Outreach</div>
            </div>
            <div className="bg-slate-700 rounded-2xl p-6 aspect-square flex flex-col justify-end translate-y-8">
              <div className="font-bold text-white text-xl">Collaboration</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Robot & Performance Preview */}
      <Section darker title="Engineering & Performance" subtitle="Data-driven success">
        <div className="bg-slate-900 rounded-3xl p-1 border border-white/10 overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-12 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white mb-4">DECODE Season Excellence</h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Our latest robot features an optimized overhang intake and Limelight RPM regression, leading to an incredible 81.25 OPR and the Inspire Award.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> PedroPathing Autonomous
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Finite State Machines
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> 81.25 OPR & Top 12% Global Rank
                </li>
              </ul>
              <div className="flex gap-4">
                <Link href="/robot" className="px-6 py-3 rounded-lg bg-white/10 text-white font-medium hover:bg-white/20 transition-colors w-fit text-sm">
                  Technical Specs
                </Link>
                <Link href="/performance" className="px-6 py-3 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30 font-medium hover:bg-blue-600/30 transition-colors w-fit text-sm">
                  View Performance Stats
                </Link>
              </div>
            </div>
            <div className="bg-slate-950 min-h-[400px] relative rounded-r-2xl overflow-hidden flex items-center justify-center border-l border-white/5">
              <Image 
                src="/images/robot.png" 
                alt="FTC Robot Render" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
