import Footer from "@/components/landing/Footer";
import Navbar from "@/components/landing/Navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Camera, Play, Upload } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Side-patch copy of Gallery.tsx — created for review/variant purposes
// Minimal changes: exported component name changed to `GallerySide`.

// Mock Data
const galleryItems = [
  { id: 1, type: "photo", src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1000", category: "Concert", year: "2025", span: "md:col-span-2 md:row-span-2" },
  { id: 2, type: "photo", src: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=1000", category: "Cultural", year: "2025", span: "md:col-span-1 md:row-span-1" },
  { id: 3, type: "photo", src: "https://images.unsplash.com/photo-1514525253440-b393452e8d26?auto=format&fit=crop&q=80&w=1000", category: "Technical", year: "2024", span: "md:col-span-1 md:row-span-1" },
  { id: 4, type: "photo", src: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=1000", category: "Concert", year: "2025", span: "md:col-span-1 md:row-span-2" },
  { id: 5, type: "photo", src: "https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?auto=format&fit=crop&q=80&w=1000", category: "Crowd", year: "2024", span: "md:col-span-1 md:row-span-1" },
  { id: 6, type: "photo", src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1000", category: "Cultural", year: "2025", span: "md:col-span-1 md:row-span-1" },
  { id: 7, type: "photo", src: "https://images.unsplash.com/photo-1504384308090-c54be3852f33?auto=format&fit=crop&q=80&w=1000", category: "Technical", year: "2023", span: "md:col-span-2 md:row-span-1" },
  { id: 8, type: "photo", src: "https://images.unsplash.com/photo-1459749411177-0473ef71607b?auto=format&fit=crop&q=80&w=1000", category: "Concert", year: "2024", span: "md:col-span-1 md:row-span-1" },
];

const videos = [
  { id: 1, title: "Prerana 2025 Aftermovie", thumbnail: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1000", duration: "3:45", year: "2025" },
  { id: 2, title: "Star Night Highlights", thumbnail: "https://images.unsplash.com/photo-1514525253440-b393452e8d26?auto=format&fit=crop&q=80&w=1000", duration: "2:10", year: "2024" },
  { id: 3, title: "Hackathon Winners", thumbnail: "https://images.unsplash.com/photo-1504384308090-c54be3852f33?auto=format&fit=crop&q=80&w=1000", duration: "5:20", year: "2025" },
];

export default function GallerySide() {
  const navigate = useNavigate();
  const [selectedYear, setSelectedYear] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredPhotos = galleryItems.filter(item => {
    if (selectedYear !== "all" && item.year !== selectedYear) return false;
    if (selectedCategory !== "all" && item.category.toLowerCase() !== selectedCategory) return false;
    return true;
  });

  const filteredVideos = videos.filter(item => {
    if (selectedYear !== "all" && item.year !== selectedYear) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main className="pt-24 pb-20">
        {/* Section 1: Hero Header & Overview */}
        <section className="container mx-auto px-4 mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-white to-secondary">
              Relive the Moments (Side Patch)
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 font-light">
              Thousands of memories, one massive celebration. Explore our visual archives.
            </p>
            <div className="flex justify-center gap-8 text-sm md:text-base font-mono text-primary/80">
              <div className="flex items-center gap-2">
                <Camera className="w-5 h-5" />
                <span>10,000+ Photos</span>
              </div>
              <div className="flex items-center gap-2">
                <Play className="w-5 h-5" />
                <span>100+ Videos</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Section 2: Filtering and Navigation */}
        <section className="container mx-auto px-4 mb-12">
          <Tabs defaultValue="photos" className="w-full">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
              <TabsList className="grid w-full md:w-[400px] grid-cols-2">
                <TabsTrigger value="photos">Photos</TabsTrigger>
                <TabsTrigger value="videos">Videos</TabsTrigger>
              </TabsList>

              <div className="flex gap-4 w-full md:w-auto">
                <Select value={selectedYear} onValueChange={setSelectedYear}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by Year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Years</SelectItem>
                    <SelectItem value="2025">Prerana 2025</SelectItem>
                    <SelectItem value="2024">Prerana 2024</SelectItem>
                    <SelectItem value="2023">Prerana 2023</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Content Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Content</SelectItem>
                    <SelectItem value="concert">Star Night</SelectItem>
                    <SelectItem value="technical">Competitions</SelectItem>
                    <SelectItem value="cultural">Cultural</SelectItem>
                    <SelectItem value="crowd">Crowd Shots</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Section 3: Photo Gallery */}
            <TabsContent value="photos" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
                {filteredPhotos.map((item, index) => (
                  <Dialog key={item.id}>
                    <DialogTrigger asChild>
                      <motion.div
                        layoutId={`gallery-${item.id}`}
                        className={`relative rounded-xl overflow-hidden group cursor-pointer ${item.span} bg-muted`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                      >
                        <img
                          src={item.src}
                          alt={`Gallery ${item.id}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                          <span className="text-white font-bold text-lg mb-2">View Fullscreen</span>
                          <Badge variant="secondary">{item.category}</Badge>
                        </div>
                        <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Badge variant="outline" className="bg-black/50 text-white border-white/20">{item.year}</Badge>
                        </div>
                      </motion.div>
                    </DialogTrigger>
                    <DialogContent className="max-w-5xl w-full p-0 bg-black/90 border-none overflow-hidden">
                      <div className="relative aspect-video w-full flex items-center justify-center">
                        <img
                          src={item.src}
                          alt={`Gallery Full ${item.id}`}
                          className="max-w-full max-h-[80vh] object-contain"
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
              {filteredPhotos.length === 0 && (
                <div className="text-center py-20 text-muted-foreground">
                  No photos found for the selected filters.
                </div>
              )}
            </TabsContent>

            <TabsContent value="videos">
              <div className="grid md:grid-cols-3 gap-8">
                {filteredVideos.map((video, index) => (
                  <motion.div
                    key={video.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="overflow-hidden group cursor-pointer hover:border-primary/50 transition-colors">
                      <div className="relative aspect-video">
                        <img 
                          src={video.thumbnail} 
                          alt={video.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Play className="w-8 h-8 text-white fill-white" />
                          </div>
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                          {video.duration}
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">{video.title}</h3>
                        <p className="text-sm text-muted-foreground">Prerana {video.year}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
              {filteredVideos.length === 0 && (
                <div className="text-center py-20 text-muted-foreground">
                  No videos found for the selected filters.
                </div>
              )}
            </TabsContent>
          </Tabs>
        </section>

        {/* Section 5: Photo Submission / UGC */}
        <section className="py-20 bg-muted/30 mb-20">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Upload className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Share Your Prerana Moments</h2>
              <p className="text-muted-foreground mb-8">
                Captured something amazing? We'd love to see it! Tag us with <span className="text-primary font-bold">#Prerana2026</span> on Instagram or submit your high-resolution shots directly to our media team.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button variant="outline" onClick={() => window.open("https://instagram.com", "_blank")}>
                  Tag on Instagram
                </Button>
                <Button onClick={() => window.location.href = "mailto:media@prerana.gitam.edu"}>
                  Submit via Email
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Closing CTA */}
        <section className="container mx-auto px-4 text-center">
          <div className="bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 p-12 rounded-3xl border border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gridlines" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Be in the Next Gallery?</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Create your own unforgettable moments at Prerana 2026. Don't just watch the history—be a part of it.
              </p>
              <Button 
                size="lg" 
                className="text-lg px-10 py-6 rounded-full shadow-[0_0_20px_-5px_var(--primary)] hover:shadow-[0_0_30px_-5px_var(--primary)] transition-all"
                onClick={() => navigate("/register")}
              >
                REGISTER FOR PRERANA
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
