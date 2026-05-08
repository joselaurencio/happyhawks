import { Section } from "@/components/Section";
import { AnimatedCard } from "@/components/AnimatedCard";
import Image from "next/image";
import { BASE_PATH } from "@/lib/constants";
import { User, Users } from "lucide-react";

const teamMembers = [
  { name: "Jose L.", role: "Captain & Programming Lead" },
  { name: "Andrea S.", role: "Co-Captain & Driving Lead" },
  { name: "Isaiah B.", role: "Business & Marketing Lead" },
  { name: "Frank C.", role: "Building Lead" },
  { name: "Sean G.", role: "Design Lead" },
  { name: "Hennessy T.", role: "Director of Development" },
  { name: "Ivet L.", role: "Director of Design" },
  { name: "Nicola C.", role: "Programmer" },
  { name: "Johanna A.", role: "Business & Programming" },
  { name: "Brisa M.", role: "Business & Marketing" },
  { name: "Jordynn R.", role: "Business & Marketing" },
  { name: "Emilio S.", role: "Builder" },
  { name: "Victoria G.", role: "Builder" },
  { name: "Abel M.", role: "Builder" },
  { name: "Bianca C.", role: "Builder" },
  { name: "Ethan G.", role: "Builder" },
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
              src={`${BASE_PATH}/images/gallery/img_0244_55210219559_o.jpg`} 
              alt="Happy Hawks Robotics Team" 
              fill 
              className="object-cover rounded-2xl"
            />
          </div>
        </div>
      </Section>

      <Section darker title="Meet the Team" subtitle="The student leaders driving our success">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {teamMembers.map((member, i) => (
            <AnimatedCard key={member.name} delay={i * 0.05} className="text-center bg-slate-900">
              <div className="w-16 h-16 mx-auto bg-[#052680] rounded-full flex items-center justify-center mb-4">
                <User className="w-8 h-8 text-[#E2EDFA]" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
              <p className="text-[#E2EDFA] text-sm opacity-80">{member.role}</p>
            </AnimatedCard>
          ))}
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
