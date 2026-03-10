import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import cafeInterior from "@/assets/cafe-interior.jpg";
import potteryWorkshop from "@/assets/pottery-workshop.jpg";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

const About = () => (
  <Layout>
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="text-center mb-16">
          <h1 className="text-5xl font-display mb-4">Our Story</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Born from a love of art, food, and community — Olivia Cafe Bistro is Pune's most creative dining destination.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <img src={cafeInterior} alt="The Social Brew Interior" className="rounded-lg w-full" />
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.6, delay: 0.2 } } }}>
            <h2 className="text-3xl font-display mb-4">A Space Where Creativity Lives</h2>
            <p className="text-muted-foreground mb-4">
              Nestled in the vibrant neighbourhood of Pashan, The Social Brew isn't just a cafe — it's a creative sanctuary. We started with a simple idea: what if you could paint pottery while sipping a perfectly crafted latte?
            </p>
            <p className="text-muted-foreground mb-4">
              Today, Olivia is Pune's go-to destination for couples seeking unique date experiences, friends looking for creative hangouts, and families wanting something beyond the ordinary.
            </p>
            <p className="text-muted-foreground">
              Every corner of our space tells a story — from the handmade pottery adorning our shelves to the aroma of freshly baked pizzas from our artisan kitchen.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="md:order-2">
            <img src={potteryWorkshop} alt="Pottery Workshop" className="rounded-lg w-full" />
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.6, delay: 0.2 } } }} className="md:order-1">
            <h2 className="text-3xl font-display mb-4">What Makes Us Unique</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3"><span className="text-accent font-bold">01</span> Art + Food fusion — paint your own pottery while dining</li>
              <li className="flex items-start gap-3"><span className="text-accent font-bold">02</span> Curated workshops for couples, kids, and corporates</li>
              <li className="flex items-start gap-3"><span className="text-accent font-bold">03</span> From-scratch kitchen with artisan pizzas, pasta & bakes</li>
              <li className="flex items-start gap-3"><span className="text-accent font-bold">04</span> Instagram-worthy interiors with a warm, bohemian vibe</li>
              <li className="flex items-start gap-3"><span className="text-accent font-bold">05</span> Community-driven events — live music, art nights & more</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
