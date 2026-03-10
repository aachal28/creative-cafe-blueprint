import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Palette, UtensilsCrossed, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import heroCafe from "@/assets/hero-cafe.jpg";
import potteryWorkshop from "@/assets/pottery-workshop.jpg";
import foodSpread from "@/assets/food-spread.jpg";
import artWorkshop from "@/assets/art-workshop.jpg";
import cafeInterior from "@/assets/cafe-interior.jpg";
import events from "@/assets/events.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Index = () => {
  const galleryImages = [potteryWorkshop, foodSpread, artWorkshop, cafeInterior, events, heroCafe];

  return (
    <Layout>
      {/* SEO */}
      <title>The Social Brew Pune | Art Cafe & Creative Workshops in Pashan</title>
      <meta name="description" content="The Social Brew in Pashan, Pune – a creative art cafe offering pottery workshops, artisan food, specialty coffee, and unique dining experiences. Book a table or join a workshop today." />

      {/* Hero */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroCafe} alt="The Social Brew interior" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/60" />
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="relative z-10 text-center px-4 max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl font-display text-primary-foreground mb-6 leading-tight">
            Where Art Meets <span className="italic">Flavour</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 font-body">
            A creative cafe experience in Pashan, Pune — sip, create & celebrate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/reserve">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2">
                <UtensilsCrossed className="h-5 w-5" /> Book a Table
              </Button>
            </Link>
            <Link to="/workshops">
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 gap-2">
                <Palette className="h-5 w-5" /> Join a Workshop
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Experience Highlights */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display mb-4">More Than Just a Cafe</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              At The Social Brew, we blend artisan food with creative experiences — from pottery painting to canvas art, all in a warm, Instagram-worthy space.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: UtensilsCrossed, title: "Artisan Kitchen", desc: "Handcrafted pizzas, fresh pasta, signature coffee & bakery delights made with love.", img: foodSpread, link: "/menu" },
              { icon: Palette, title: "Creative Workshops", desc: "Pottery painting, canvas art, DIY crafts — unleash your inner artist.", img: potteryWorkshop, link: "/workshops" },
              { icon: Calendar, title: "Special Events", desc: "Live music nights, couple pottery, themed evenings & community gatherings.", img: events, link: "/events" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.6, delay: i * 0.15 } } }}
              >
                <Link to={item.link} className="group block">
                  <div className="relative overflow-hidden rounded-lg mb-4 aspect-[4/3]">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <item.icon className="h-5 w-5 text-accent" />
                    <h3 className="text-xl font-display">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Gallery */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <h2 className="text-4xl font-display mb-4">From Our Feed</h2>
            <p className="text-muted-foreground">Follow the vibe on Instagram</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.4, delay: i * 0.08 } } }}
                className="aspect-square overflow-hidden rounded-lg"
              >
                <img src={img} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <span className="text-muted-foreground text-sm">Follow us on Instagram</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-4xl md:text-5xl font-display mb-6">Ready to Create & Celebrate?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Whether it's a cozy dinner, a pottery date, or a creative team outing — The Social Brew has something special for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/reserve">
                <Button size="lg">Reserve Your Table</Button>
              </Link>
              <Link to="/workshops">
                <Button size="lg" variant="outline">Explore Workshops</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
