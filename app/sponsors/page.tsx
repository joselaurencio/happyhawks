import { Section } from "@/components/Section";
import { AnimatedCard } from "@/components/AnimatedCard";
import { Download, Star } from "lucide-react";
import Link from "next/link";

const sponsorTiers = [
  {
    name: "Soaring Hawk",
    amount: "$5,000+",
    highlight: true,
    benefits: [
      "Top logo placement on uniforms, robot & banners",
      "Social media shoutouts & press release mentions",
      "VIP invitation to our exclusive team showcase event",
    ]
  },
  {
    name: "Majestic Hawk",
    amount: "$3,000+",
    highlight: false,
    benefits: [
      "Prominent logo on robot, uniforms & banner",
      "Frequent social media mentions",
      "Invitation to our showcase event",
    ]
  },
  {
    name: "Swift Hawk",
    amount: "$1,000+",
    highlight: false,
    benefits: [
      "Visible logo on robot, uniforms & banner",
      "Regular social media shoutouts",
    ]
  },
  {
    name: "Winged Hawk",
    amount: "$500+",
    highlight: false,
    benefits: [
      "Supporter-level logo placement on banner",
      "Mention in social media posts",
    ]
  },
  {
    name: "Hatchling Hawk",
    amount: "$250+",
    highlight: false,
    benefits: [
      "Acknowledgment on social media",
      "Supporter shoutout in a team update",
    ]
  },
];

export default function Sponsors() {
  return (
    <>
      <div className="pt-32 pb-16 bg-slate-950 border-b border-white/5">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Our Sponsors</h1>
          <p className="text-xl text-slate-400">We couldn't do it without the generous support of our community and corporate partners.</p>
        </div>
      </div>

      <Section title="Current Sponsors">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { name: "Laurel Ridge Treatment Center", tier: "Gold" },
            { name: "R&L Overhead Doors", tier: "Silver" },
            { name: "Fred's Mobile Auto Services", tier: "Silver" },
          ].map((sponsor) => (
            <div key={sponsor.name} className="bg-slate-900 rounded-2xl p-8 flex flex-col items-center justify-center border border-white/5 hover:border-[#E2EDFA]/30 transition-all gap-3">
              <div className="text-lg font-bold text-white text-center">{sponsor.name}</div>
              <div className="text-sm text-[#E2EDFA] font-medium px-3 py-1 rounded-full bg-[#052680]/30 border border-[#E2EDFA]/20">{sponsor.tier} Hawk</div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Your sponsorship helps us purchase robot parts, register for competitions, and fund our outreach initiatives. Join us in inspiring the next generation!
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-500 text-slate-950 font-bold hover:bg-blue-400 transition-colors"
          >
            Become a Sponsor
          </Link>
        </div>
      </Section>

      <Section darker title="Sponsorship Tiers" subtitle="Every level makes a difference">
        {/* Top tier featured */}
        <div className="mb-6">
          {sponsorTiers.filter(t => t.highlight).map((tier) => (
            <AnimatedCard key={tier.name} delay={0} className="border-[#E2EDFA]/30 bg-gradient-to-br from-[#052680]/40 to-slate-900">
              <div className="md:flex items-center justify-between gap-8">
                <div className="mb-6 md:mb-0">
                  <div className="flex items-center gap-3 mb-2">
                    <Star className="w-5 h-5 text-[#E2EDFA]" />
                    <span className="text-xs font-bold uppercase tracking-widest text-[#E2EDFA]">Top Tier</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white">{tier.name}</h3>
                  <div className="text-2xl font-bold text-[#E2EDFA] mt-1">{tier.amount}</div>
                </div>
                <ul className="space-y-3 flex-1">
                  {tier.benefits.map((benefit, j) => (
                    <li key={j} className="flex items-start gap-3 text-slate-200">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#E2EDFA] mt-2 shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* Lower tiers grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sponsorTiers.filter(t => !t.highlight).map((tier, i) => (
            <AnimatedCard key={tier.name} delay={i * 0.1} className="flex flex-col h-full">
              <h3 className="text-xl font-bold text-white mb-1">{tier.name}</h3>
              <div className="text-[#E2EDFA] font-semibold text-lg mb-5">{tier.amount}</div>
              <ul className="space-y-3 flex-1">
                {tier.benefits.map((benefit, j) => (
                  <li key={j} className="flex items-start gap-3 text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#E2EDFA]/60 mt-2 shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </AnimatedCard>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="/Happy_Hawks_Sponsorship_Packet.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/20 text-white hover:bg-white/5 transition-colors"
          >
            <Download className="w-5 h-5" />
            Download Sponsorship Packet (PDF)
          </a>
        </div>
      </Section>
    </>
  );
}
