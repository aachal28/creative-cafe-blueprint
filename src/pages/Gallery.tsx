import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Layout from "@/components/Layout";
import heroCafe from "@/assets/hero-cafe.jpg";
import potteryWorkshop from "@/assets/pottery-workshop.jpg";
import foodSpread from "@/assets/food-spread.jpg";
import artWorkshop from "@/assets/art-workshop.jpg";
import cafeInterior from "@/assets/cafe-interior.jpg";
import events from "@/assets/events.jpg";

const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const images = [
  { src: heroCafe, category: "Interior", alt: "Cafe interior with pottery" },
  { src: potteryWorkshop, category: "Workshops", alt: "Couple pottery painting" },
  { src: foodSpread, category: "Food", alt: "Artisan food spread" },
  { src: artWorkshop, category: "Workshops", alt: "Canvas art workshop" },
  { src: cafeInterior, category: "Interior", alt: "Cozy seating area" },
  { src: events, category: "Events", alt: "Live music evening" },
];

const categories = ["All", "Interior", "Food", "Workshops", "Events"];

const Gallery = () => {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const filtered = active === "All" ? images : images.filter((i) => i.category === active);

  return (
    <Layout>
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="text-center mb-12">
            <h1 className="text-5xl font-display mb-4">Gallery</h1>
            <p className="text-muted-foreground">A peek inside the Olivia experience.</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${active === c ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {filtered.map((img, i) => (
              <motion.div
                key={img.alt}
                initial="hidden"
                animate="visible"
                variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.4, delay: i * 0.08 } } }}
                className="aspect-square overflow-hidden rounded-lg cursor-pointer"
                onClick={() => setLightbox(img.src)}
              >
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-primary/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button className="absolute top-6 right-6 text-primary-foreground" onClick={() => setLightbox(null)}>
              <X className="h-8 w-8" />
            </button>
            <img src={lightbox} alt="Gallery" className="max-w-full max-h-[85vh] rounded-lg object-contain" />
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Gallery;
