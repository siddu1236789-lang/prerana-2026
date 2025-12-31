import { motion } from "framer-motion";

const images = [
  // Row 1: Large 2x2 block + two 1x1 blocks
  { src: "/photos/IMG_9091.jpg", span: "md:col-span-2 md:row-span-2" },
  { src: "/photos/IMG_8609.jpg", span: "md:col-span-1 md:row-span-1" },
  { src: "/photos/IMG_8627.jpg", span: "md:col-span-1 md:row-span-1" },
  
  // Row 2: (2x2 continues) + one 2x1 block
  { src: "/photos/DSC02186.jpg", span: "md:col-span-2 md:row-span-1" },
  
  // Row 3: One 1x2 block + one 2x1 block + one 1x1 block
  { src: "/photos/DSC02472.jpg", span: "md:col-span-1 md:row-span-2" },
  { src: "/photos/DSC_6645.jpg", span: "md:col-span-2 md:row-span-1" },
  { src: "/photos/IMG_7835.JPG", span: "md:col-span-1 md:row-span-1" },
  
  // Row 4: (1x2 continues) + three 1x1 blocks
  { src: "/photos/IMG_7847.JPG", span: "md:col-span-1 md:row-span-1" },
  { src: "/photos/IMG_9283.jpg", span: "md:col-span-1 md:row-span-1" },
  { src: "/photos/IMG_9091.jpg", span: "md:col-span-1 md:row-span-1" },
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