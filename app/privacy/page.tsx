import { Section } from "@/components/Section";
import { Mail } from "lucide-react";

export default function Privacy() {
  return (
    <>
      <div className="pt-32 pb-16 bg-slate-950 border-b border-white/5">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Privacy Policy</h1>
          <p className="text-xl text-slate-400">How the Happy Hawks handle your information.</p>
        </div>
      </div>

      <Section>
        <div className="max-w-3xl mx-auto space-y-8 text-slate-300 leading-relaxed">
          <div>
            <h2 className="text-2xl font-bold text-white mb-3">Information We Collect</h2>
            <p className="mb-3">
              This website is a static, informational site. We host competitions schedules, match results,
              engineering resources, and team content. We do not require you to create an account or log in,
              and we do not collect personal data through browsing the site.
            </p>
            <p>
              If you contact us through the email address on this site, we only use the information you provide
              (your name, email, and message) to respond to you. We do not sell or share that information with anyone.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-3">Hosting &amp; Analytics</h2>
            <p>
              The site is hosted on GitHub Pages. GitHub may process standard server logs (such as IP addresses and
              request data) as part of operating its hosting service. We do not run third-party analytics trackers on this site.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-3">External Links</h2>
            <p>
              Our pages link to external services we use as a team, such as our GitHub repository, Instagram page,
              YouTube channel, and GoFundMe campaign. Those services have their own privacy policies, and we
              encourage you to review them if you visit those sites.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-3">Contact</h2>
            <p>Questions about this policy can be directed to our team:</p>
            <p className="flex items-center gap-2 mt-4">
              <Mail className="w-5 h-5 text-blue-500" />
              <a href="mailto:shca.robotics@scenichillsschool.org" className="text-blue-400 hover:text-blue-300 transition-colors">
                shca.robotics@scenichillsschool.org
              </a>
            </p>
          </div>

          <p className="text-sm text-slate-500 pt-4 border-t border-white/5">
            Last updated: 2026. This policy may be updated as the team grows.
          </p>
        </div>
      </Section>
    </>
  );
}