import { Section } from "@/components/Section";
import { AnimatedCard } from "@/components/AnimatedCard";
import { TechnicalGuides } from "@/components/TechnicalGuides";
import { Code, FileText, Cpu, BookOpen, ExternalLink, Download } from "lucide-react";
import { asset } from "@/lib/constants";

const resources = [
  {
    title: "Codebase",
    icon: Code,
    desc: "Our full control system, including PedroPathing trajectories, FSM logic, and sensor integration.",
    link: "https://github.com/joselaurencio/happyhawks",
    type: "GitHub"
  },
  {
    title: "Engineering Portfolio",
    icon: FileText,
    desc: "The 2025-2026 'DECODE' portfolio detailing our design process, math, and outreach impact.",
    link: asset("portfolio/Happy_Hawks_Portfolio_25_26.pdf"),
    type: "PDF"
  },
  {
    title: "Onshape CAD Model",
    icon: Cpu,
    desc: "Full 3D model of our robot. Every part is available for inspection and measurement.",
    link: null,
    type: "CAD"
  },
  {
    title: "OpenCV Scouting Logic",
    icon: BookOpen,
    desc: "Documentation on our experimental YOLO-based individual robot tracking system.",
    link: null,
    type: "White Paper"
  }
];

export default function Resources() {
  return (
    <>
      <div className="pt-32 pb-16 bg-slate-950 border-b border-white/5">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Resources</h1>
          <p className="text-xl text-slate-400">Supporting the FTC community through open-source code, design, and documentation.</p>
        </div>
      </div>

      <Section title="Community Assets">
        <div className="grid md:grid-cols-2 gap-8">
          {resources.map((res, i) => (
            <AnimatedCard key={res.title} delay={i * 0.1}>
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-blue-600/20 flex items-center justify-center shrink-0 border border-blue-500/20">
                  <res.icon className="w-7 h-7 text-blue-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-500">{res.type}</span>
                    {res.link && <a href={res.link} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </a>}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{res.title}</h3>
                  <p className="text-slate-400 mb-6 text-sm leading-relaxed">{res.desc}</p>
                  {res.link ? (
                    <a 
                      href={res.link} 
                      className="inline-flex items-center gap-2 text-sm font-bold text-white bg-white/5 hover:bg-white/10 px-4 py-2 rounded-lg border border-white/10 transition-all"
                    >
                      {res.type === 'PDF' ? <Download className="w-4 h-4" /> : <ExternalLink className="w-4 h-4" />}
                      {res.type === 'PDF' ? 'Download' : 'View Resource'}
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 text-sm font-bold text-white/40 px-4 py-2 rounded-lg border border-white/10 cursor-not-allowed">
                      <ExternalLink className="w-4 h-4" />
                      Coming Soon
                    </span>
                  )}
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </Section>

      <TechnicalGuides />
    </>
  );
}
