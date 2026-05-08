import { Section } from "@/components/Section";
import { BookOpen } from "lucide-react";
import fs from 'fs';
import path from 'path';

export default async function PortfolioPage() {
  // Read the portfolio directory dynamically
  const portfolioDir = path.join(process.cwd(), 'public', 'portfolio');
  let portfolios: string[] = [];
  
  try {
    if (fs.existsSync(portfolioDir)) {
      portfolios = fs.readdirSync(portfolioDir).filter(file => file.endsWith('.pdf'));
    }
  } catch (error) {
    console.error("Failed to read portfolio directory:", error);
  }

  // Sort portfolios assuming naming convention puts newest first or just alphabetical
  portfolios.sort().reverse();
  
  // Use the first portfolio as the default active one
  const activePortfolio = portfolios.length > 0 ? portfolios[0] : null;

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
              {portfolios.length === 0 ? (
                <p className="text-slate-400 text-sm">No portfolios uploaded yet.</p>
              ) : (
                portfolios.map((file) => {
                  const name = file.replace('.pdf', '').replace(/_/g, ' ');
                  const isActive = file === activePortfolio;
                  return (
                    <a
                      key={file}
                      href={`/portfolio/${file}`} // Note: For a true interactive viewer, this could be client-side state, but a direct link or query param works. For MVP, we'll just link to the PDF directly or use an iframe below.
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
                })
              )}
            </div>
          </div>

          {/* Main Viewer */}
          <div className="lg:col-span-3">
            <div className="bg-slate-900 rounded-3xl border border-white/10 p-2 min-h-[800px] flex items-center justify-center relative">
              {activePortfolio ? (
                <iframe 
                  src={`/portfolio/${activePortfolio}#toolbar=0`} 
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
