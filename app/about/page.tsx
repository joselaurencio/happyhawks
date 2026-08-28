import { Section } from "@/components/Section";
import { AlumniCarousel } from "@/components/AlumniCarousel";
import { TeamGrid } from "@/components/TeamGrid";
import Image from "next/image";
import { asset } from "@/lib/constants";

const teamMembers = [
  { name: "Jose L.", role: "Programming" },
  { name: "Andrea S.", role: "Driving & Building" },
  { name: "Isaiah B.", role: "Business" },
  { name: "Hennessy T.", role: "Business" },
  { name: "Ivet L.", role: "Business" },
  { name: "Camila", role: "Business" },
  { name: "Jackson", role: "Building" },
  { name: "Ethan G.", role: "Builder" },
  { name: "Kevin", role: "Builder" },
  { name: "Kehlani", role: "Business" },
  { name: "Xavier", role: "Programming" },
  { name: "Emilio S.", role: "Builder" },
  { name: "Abel M.", role: "Driver" },
];

const mentors = [
  { name: "Dr. Arturo Montoya", role: "Engineering Insight" },
  { name: "Mauricio Madrid", role: "Mechanical Systems" },
  { name: "Dr. Herta Montoya", role: "Mechanical Design & Control" },
  { name: "Sonia Sifuentes", role: "Robotics Teacher" },
  { name: "Mrs. Acosta", role: "Business & Marketing Mentor" },
  { name: "Letty Melero", role: "Fundraiser Coordinator" },
  { name: "Everardo Sifuentes", role: "Programming Mentor" },
];

export default function About() {
  return (
    <>
      <div className="pt-32 pb-16 bg-slate-950 border-b border-white/5">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">About Happy Hawks</h1>
          <p className="text-xl text-slate-400">Our story, mission, and what drives us to succeed in FIRST Tech Challenge and beyond.</p>
        </div>
      </div>

      <Section>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-white">Our Story</h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                Founded to inspire students through STEM, Team #24813 Happy Hawks represents the spirit of innovation and community. We participate in the FIRST Tech Challenge, building not just robots, but the next generation of engineers, programmers, and leaders.
              </p>
              <p>
                Our team is entirely student-led, meaning every line of code, every CAD design, and every outreach event is driven by the passion and dedication of our members.
              </p>
            </div>
            
            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Mission Statement</h2>
            <blockquote className="border-l-4 border-blue-500 pl-6 py-2 text-xl italic text-slate-300">
              "To innovate through robotics, lead through outreach, and inspire through STEM education."
            </blockquote>
          </div>
          <div className="bg-slate-900 rounded-3xl border border-white/10 p-2 min-h-[400px] flex items-center justify-center relative overflow-hidden">
            <Image 
              src={asset("images/gallery/img_0244_55210219559_o.jpg")} 
              alt="Happy Hawks Robotics Team" 
              fill 
              className="object-cover rounded-2xl"
            />
          </div>
        </div>
      </Section>

      <Section darker title="Meet the Team" subtitle="The student leaders driving our success">
        <TeamGrid members={teamMembers} />
      </Section>

      <Section darker title="Alumni Hall of Fame" subtitle="Legends who helped build the nest">
        <div className="relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.12),transparent_70%)] pointer-events-none" />
          <AlumniCarousel />
        </div>
      </Section>

      <Section title="Our Mentors" subtitle="Thank you for your guidance">
        <div className="max-w-4xl mx-auto bg-slate-900 rounded-3xl border border-white/10 p-8">
          <ul className="grid md:grid-cols-2 gap-4">
            {mentors.map((mentor) => (
              <li key={mentor.name} className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#E2EDFA]" />
                <span className="font-bold text-white">{mentor.name}</span>
                <span className="text-slate-400 text-sm">- {mentor.role}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section title="What FIRST Means To Us">
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-3xl p-8 md:p-12 border border-white/10 text-center max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light">
            "FIRST is more than just building robots. It's about building people. It gives us the opportunity to fail safely, learn rapidly, and realize that our potential to change the world is limitless."
          </p>
        </div>
      </Section>
    </>
  );
}
