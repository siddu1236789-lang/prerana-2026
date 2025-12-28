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
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Relive the Magic: Prerana 2025</h2>
          <p className="text-muted-foreground">Highlights from the previous year.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px] max-w-6xl mx-auto grid-flow-dense">
          {images.map((img, index) => (
            <motion.div
              key={index}
              className={`relative rounded-xl overflow-hidden group ${img.span}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={img.src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-bold text-lg">View</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}