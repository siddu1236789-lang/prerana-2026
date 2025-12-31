import React from "react";
import { motion } from "framer-motion";

const images = [
  // Row 1: Large 2x2 block + two 1x1 blocks
  { src: "https://harmless-tapir-303.convex.cloud/api/storage/9b83c360-d2d8-4072-af5d-de072d60ea45", span: "md:col-span-2 md:row-span-2" },
  { src: "https://harmless-tapir-303.convex.cloud/api/storage/12458a42-1ff8-46cd-82ce-ce4f8ee6646a", span: "md:col-span-1 md:row-span-1" },
  { src: "https://harmless-tapir-303.convex.cloud/api/storage/b22d21d2-de38-4404-ad2d-a2e803923c87", span: "md:col-span-1 md:row-span-1" },
  
  // Row 2: (2x2 continues) + one 2x1 block
  { src: "https://harmless-tapir-303.convex.cloud/api/storage/fd275c1e-e4c8-4b1b-99ff-f7dc59e42812", span: "md:col-span-2 md:row-span-1" },
  
  // Row 3: One 1x2 block + one 2x1 block + one 1x1 block
  { src: "https://harmless-tapir-303.convex.cloud/api/storage/a7281552-3704-4875-9540-df5c0d74010c", span: "md:col-span-1 md:row-span-2" },
  { src: "https://harmless-tapir-303.convex.cloud/api/storage/368d82b1-f481-4a85-afe0-8e2f405c6ba4", span: "md:col-span-2 md:row-span-1" },
  { src: "https://harmless-tapir-303.convex.cloud/api/storage/97be7b71-737a-479c-ad45-8487e55aac2a", span: "md:col-span-1 md:row-span-1" },
  
  // Row 4: (1x2 continues) + three 1x1 blocks
  { src: "https://harmless-tapir-303.convex.cloud/api/storage/4a4483fb-f891-4ba3-ad86-a4101be4ab65", span: "md:col-span-1 md:row-span-1" },
  { src: "https://harmless-tapir-303.convex.cloud/api/storage/26d2793b-cc75-4b2c-8295-a2dd33fc0482", span: "md:col-span-1 md:row-span-1" },
  { src: "https://harmless-tapir-303.convex.cloud/api/storage/be4df044-590b-4e98-888c-bd3070f6ab28", span: "md:col-span-1 md:row-span-1" },

  // Appended: local uploaded photos (RAW omitted)
  { src: "/photos/IMG_9091.jpg", span: "md:col-span-1 md:row-span-1" },
  { src: "/photos/IMG_8609.jpg", span: "md:col-span-1 md:row-span-2" },
  { src: "/photos/IMG_8627.jpg", span: "md:col-span-1 md:row-span-1" },
  { src: "/photos/DSC02186.jpg", span: "md:col-span-1 md:row-span-1" },
  { src: "/photos/DSC02472.jpg", span: "md:col-span-1 md:row-span-1" },
  { src: "/photos/DSC_6645.jpg", span: "md:col-span-1 md:row-span-1" },
  { src: "/photos/IMG_7835.JPG", span: "md:col-span-1 md:row-span-1" },
  { src: "/photos/IMG_7847.JPG", span: "md:col-span-1 md:row-span-1" },
  { src: "/photos/IMG_9283.jpg", span: "md:col-span-1 md:row-span-1" },
];

function MarqueeRow({ photos, duration, direction }: { photos: string[]; duration: number; direction: 'normal' | 'reverse' }) {
  const [paused, setPaused] = React.useState(false);

  // Duplicate the photos so the animation can loop seamlessly
  const combined = React.useMemo(() => [...photos, ...photos], [photos]);

  const style: React.CSSProperties = {
    animation: `marquee ${duration}s linear infinite`,
    animationPlayState: paused ? 'paused' : 'running',
    animationDirection: direction,
    willChange: 'transform',
  };

  return (
    <div
      className="overflow-hidden rounded-xl py-2"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="marquee-track" style={style} aria-hidden={false}>
        {combined.map((src, i) => (
          <div className="marquee-item h-40 w-64" key={i}>
            <img src={src} alt={`Gallery image ${i + 1}`} className="h-full w-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Relive the Magic: Prerana 2025</h2>
          <p className="text-muted-foreground">Highlights from the previous year.</p>
        </div>

        {/* 3-row horizontal marquee */}
        <div className="max-w-6xl mx-auto space-y-6">
          <style>{`
            .marquee-track { display:flex; gap:1rem; align-items:center; }
            @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
            .marquee-item { flex:0 0 auto; border-radius:0.5rem; overflow:hidden }
            .marquee-item img { display:block }
          `}</style>

          {/** Create 3 rows. Each row duplicates the photo set for seamless looping. */}
          {[0, 1, 2].map((rowIdx) => {
            const direction = rowIdx % 2 === 0 ? 'normal' : 'reverse';
            const durations = [30, 22, 26]; // seconds per row (varied speeds)
            const duration = durations[rowIdx % durations.length];
            return (
              <MarqueeRow
                key={rowIdx}
                photos={images.map((i) => i.src)}
                duration={duration}
                direction={direction}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}