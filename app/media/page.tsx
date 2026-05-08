import { Section } from "@/components/Section";
import { Play } from "lucide-react";
import Image from "next/image";
import { Gallery } from "@/components/Gallery";
import { BASE_PATH } from "@/lib/constants";

export default function Media() {
  return (
    <>
      <div className="pt-32 pb-16 bg-slate-950 border-b border-white/5">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Media Gallery</h1>
          <p className="text-xl text-slate-400">Photos and videos from our competitions, build seasons, and outreach events.</p>
        </div>
      </div>

      <Section title="Featured Videos">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="group relative rounded-3xl overflow-hidden bg-slate-900 border border-white/10 aspect-video flex items-center justify-center cursor-pointer">
            <Image src={`${BASE_PATH}/images/gallery/img_0244_55210219559_o.jpg`} alt="Robot Reveal" fill className="object-cover opacity-70 group-hover:opacity-50 transition-opacity" />
            <div className="absolute inset-0 bg-slate-900/50 group-hover:bg-slate-900/30 transition-colors z-10" />
            <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center z-20 group-hover:scale-110 transition-transform">
              <Play className="w-6 h-6 text-white ml-1" />
            </div>
            <span className="absolute bottom-6 left-6 z-20 font-bold text-white text-xl">Robot Reveal 2024</span>
          </div>
          <div className="group relative rounded-3xl overflow-hidden bg-slate-900 border border-white/10 aspect-video flex items-center justify-center cursor-pointer">
            <Image src={`${BASE_PATH}/images/hero-bg.jpg`} alt="Highlights" fill className="object-cover opacity-70 group-hover:opacity-50 transition-opacity" />
            <div className="absolute inset-0 bg-slate-900/50 group-hover:bg-slate-900/30 transition-colors z-10" />
            <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center z-20 group-hover:scale-110 transition-transform">
              <Play className="w-6 h-6 text-white ml-1" />
            </div>
            <span className="absolute bottom-6 left-6 z-20 font-bold text-white text-xl">State Championship Highlights</span>
          </div>
        </div>
      </Section>

      <Section darker title="Photo Gallery" subtitle="Moments that define us">
        <Gallery />
      </Section>
    </>
  );
}
