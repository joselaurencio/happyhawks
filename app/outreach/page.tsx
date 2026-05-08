import { Section } from "@/components/Section";
import { AnimatedCard } from "@/components/AnimatedCard";
import { Globe2, Tent, Users2, BookOpen } from "lucide-react";
import Image from "next/image";

const outreachEvents = [
  {
    title: "FTC Scrimmage Host",
    icon: Users2,
    desc: "We hosted the first FTC Adventist Robotics Scrimmage, managing logistics, match schedules, and providing teams with valuable practice and competition experience.",
    stats: "First in our district"
  },
  {
    title: "El Salvador STEM Mentoring",
    icon: Globe2,
    desc: "We taught LEGO robotics to K–12 students in El Salvador and hosted a one-week program focused on building, programming, and teamwork.",
    stats: "International Impact"
  },
  {
    title: "Mexican-International Support",
    icon: Tent,
    desc: "We sponsored and provided robot parts to the first Mexican-International Adventist robotics team to help them continue developing and competing.",
    stats: "Equipment Sponsorship"
  },
  {
    title: "Central Texas Camp Meeting",
    icon: BookOpen,
    desc: "Introduced robotics through engaging outreach events, demonstrations, and presentations to a massive audience at the Central Texas camp meeting.",
    stats: "1,200+ people reached"
  }
];

export default function Outreach() {
  return (
    <>
      <div className="pt-32 pb-16 bg-slate-950 border-b border-white/5">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Our Impact</h1>
          <p className="text-xl text-slate-400">Our mission is to inspire the next generation of engineers, leaders, and innovators.</p>
        </div>
      </div>

      <Section>
        <div className="grid md:grid-cols-2 gap-8">
          {outreachEvents.map((event, i) => (
            <AnimatedCard key={event.title} delay={i * 0.1} className="flex gap-6">
              <div className="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center shrink-0">
                <event.icon className="w-8 h-8 text-blue-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                <p className="text-slate-400 mb-4">{event.desc}</p>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-sm font-medium">
                  {event.stats}
                </span>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </Section>

      <Section darker title="Outreach Gallery">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "img_0380_55210226389_o.jpg", "img_0362_55209985491_o.jpg", "img_0361_55209985571_o.jpg",
            "img_0386_55210132603_o.jpg", "img_0355_55210383575_o.jpg", "img_0356_55210133773_o.jpg",
            "img_0335_55210135148_o.jpg", "img_0332_55210135263_o.jpg"
          ].map((filename, i) => (
            <div key={filename} className="relative aspect-square bg-slate-900 rounded-xl border border-white/5 flex items-center justify-center hover:scale-105 transition-transform cursor-pointer overflow-hidden">
              <Image 
                src={`/images/gallery/${filename}`} 
                alt={`Outreach Photo ${i + 1}`} 
                fill 
                className="object-cover opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </Section>

      <Section title="Social Media Impact">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-center border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-4">Sharing Our Knowledge</h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
            We believe that knowledge should be free. We actively publish tutorials, match breakdowns, and CAD designs on our YouTube channel and social media to help other teams grow.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/20">
              <div className="text-3xl font-bold text-white mb-1">60k+</div>
              <div className="text-blue-200 text-sm">YouTube Views</div>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/20">
              <div className="text-3xl font-bold text-white mb-1">3.3k+</div>
              <div className="text-blue-200 text-sm">Views on Top Video</div>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/20">
              <div className="text-3xl font-bold text-white mb-1">2,000+</div>
              <div className="text-blue-200 text-sm">Instagram Reach</div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
