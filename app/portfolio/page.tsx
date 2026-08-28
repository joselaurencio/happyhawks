import { Section } from "@/components/Section";
import { BookOpen } from "lucide-react";
import { asset } from "@/lib/constants";

const portfolios = [
  { file: "Happy_Hawks_Portfolio_25_26.pdf" },
  { file: "Happy_Hawks_Portfolio_24_25.pdf" },
];

const activePortfolio = portfolios[0];

export default function PortfolioPage() {
  return (
    <>
      <div className="pt-32 pb-16 bg-slate-950 border-b border-white/5">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Engineering Portfolio</h1>
          <p className="text-xl text-slate-400">View our engineering notebooks and portfolios documenting our design process, outreach, and business plans across different seasons.</p>
        </div>
      </div>

      <Section>
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar: Library of Portfolios */}
          <div className="lg:col-span-1 space-y-4">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#E2EDFA]" />
              Portfolio Library
            </h3>

            <div className="space-y-2">
              {portfolios.map((portfolio) => {
                const name = portfolio.file.replace('.pdf', '').replace(/_/g, ' ');
                const isActive = portfolio.file === activePortfolio.file;
                return (
                  <a
                    key={portfolio.file}
                    href={asset(`portfolio/${portfolio.file}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block p-4 rounded-xl border transition-colors ${
                      isActive
                        ? "bg-[#052680]/20 border-[#E2EDFA] text-[#E2EDFA]"
                        : "bg-slate-900 border-white/5 text-slate-300 hover:border-[#052680]"
                    }`}
                  >
                    <div className="font-semibold">{name}</div>
                    <div className="text-xs opacity-70 mt-1">PDF Document</div>
                  </a>
                )
              })}
            </div>
          </div>

          {/* Main Viewer */}
          <div className="lg:col-span-3">
            <div className="bg-slate-900 rounded-3xl border border-white/10 p-2 min-h-[800px] flex items-center justify-center relative">
              {activePortfolio ? (
                <iframe
                  src={`${asset(`portfolio/${activePortfolio.file}`)}#toolbar=0`}
                  className="w-full h-full min-h-[800px] rounded-2xl"
                  title="Portfolio Viewer"
                />
              ) : (
                <div className="text-slate-500 flex flex-col items-center">
                  <BookOpen className="w-12 h-12 mb-4 opacity-50" />
                  <p>Select a portfolio to view</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}