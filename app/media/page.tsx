import { Section } from "@/components/Section";
import { Gallery } from "@/components/Gallery";
import { VideoCard } from "@/components/VideoCard";
import { InstagramIcon } from "@/components/InstagramIcon";
import { asset } from "@/lib/constants";

const videos = [
  {
    title: "2026 Competition Montage",
    thumbnail: asset("images/montage-thumb.jpg"),
    link: "https://youtu.be/g9hTeWSDbzc",
  },
  {
    title: "Robot Reveal 2024",
    thumbnail: asset("images/gallery/img_0244_55210219559_o.jpg"),
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
          <a
            href="https://www.instagram.com/shcarobotics/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-lg shadow-xl shadow-pink-500/30 hover:scale-105 hover:shadow-pink-500/40 transition-all"
          >
            <InstagramIcon className="w-6 h-6" />
            Follow us on Instagram
          </a>
        </div>
      </div>

      <Section title="Featured Videos">
        <div className="grid md:grid-cols-2 gap-8">
          {videos.map((video) => (
            <VideoCard key={video.title} title={video.title} thumbnail={video.thumbnail} link={video.link} />
          ))}
        </div>
      </Section>

      <Section darker title="Photo Gallery" subtitle="Moments that define us">
        <Gallery />
      </Section>
    </>
  );
}
