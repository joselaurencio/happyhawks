import { Section } from "@/components/Section";
import { Play, ExternalLink } from "lucide-react";
import Image from "next/image";
import { Gallery } from "@/components/Gallery";
import { BASE_PATH } from "@/lib/constants";

const videos = [
  {
    title: "Robot Reveal 2024",
    thumbnail: `${BASE_PATH}/images/gallery/img_0244_55210219559_o.jpg`,
    link: "#",
  },
  {
    title: "State Championship Highlights",
    thumbnail: `${BASE_PATH}/images/hero-bg.jpg`,
    link: "#",
  },
];

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
          {videos.map((video) => (
            <a
              key={video.title}
              href={video.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-3xl overflow-hidden bg-slate-900 border border-white/10 aspect-video flex items-center justify-center cursor-pointer block"
            >
              <Image src={video.thumbnail} alt={video.title} fill className="object-cover opacity-70 group-hover:opacity-50 transition-opacity" />
              <div className="absolute inset-0 bg-slate-900/50 group-hover:bg-slate-900/30 transition-colors z-10" />
              <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center z-20 group-hover:scale-110 transition-transform">
                <Play className="w-6 h-6 text-white ml-1" />
              </div>
              <div className="absolute top-4 right-4 z-20 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-950/60 text-xs font-medium text-slate-300 backdrop-blur-sm">
                <ExternalLink className="w-3.5 h-3.5" /> Video Link Pending
              </div>
              <span className="absolute bottom-6 left-6 z-20 font-bold text-white text-xl">{video.title}</span>
            </a>
          ))}
        </div>
      </Section>

      <Section darker title="Photo Gallery" subtitle="Moments that define us">
        <Gallery />
      </Section>
    </>
  );
}
