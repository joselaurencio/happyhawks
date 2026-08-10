import { Section } from "@/components/Section";
import { Gallery } from "@/components/Gallery";
import { VideoCard } from "@/components/VideoCard";
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
