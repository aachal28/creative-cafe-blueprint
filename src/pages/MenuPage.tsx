import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";

const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const categories = ["All", "Pizza", "Pasta", "Coffee", "Beverages", "Bakery", "Starters"];

const menuItems = [
  { name: "Margherita Pizza", desc: "Classic mozzarella, fresh basil, San Marzano sauce", price: "₹349", category: "Pizza", tag: "Bestseller" },
  { name: "Farm Fresh Pizza", desc: "Seasonal veggies, olives, mozzarella, herb crust", price: "₹399", category: "Pizza" },
  { name: "BBQ Chicken Pizza", desc: "Smoky BBQ sauce, grilled chicken, onions, jalapeños", price: "₹449", category: "Pizza" },
  { name: "Penne Arrabbiata", desc: "Spicy tomato sauce, garlic, chilli flakes, parmesan", price: "₹299", category: "Pasta" },
  { name: "Creamy Alfredo", desc: "Rich cream sauce, mushrooms, garlic bread on the side", price: "₹329", category: "Pasta", tag: "Chef's Pick" },
  { name: "Aglio e Olio", desc: "Olive oil, garlic, chilli, parsley, al dente spaghetti", price: "₹279", category: "Pasta" },
  { name: "Signature Latte", desc: "House-roasted beans, silky steamed milk, latte art", price: "₹199", category: "Coffee", tag: "Signature" },
  { name: "Cold Brew", desc: "24-hour slow steeped, smooth & refreshing", price: "₹229", category: "Coffee" },
  { name: "Cappuccino", desc: "Double shot espresso, velvety foam", price: "₹179", category: "Coffee" },
  { name: "Berry Smoothie", desc: "Mixed berries, yogurt, honey, chia seeds", price: "₹249", category: "Beverages" },
  { name: "Fresh Lime Soda", desc: "Mint, lime, sparkling water — sweet or salty", price: "₹129", category: "Beverages" },
  { name: "Chocolate Croissant", desc: "Buttery layers, Belgian chocolate filling", price: "₹179", category: "Bakery", tag: "Bestseller" },
  { name: "Red Velvet Cake", desc: "Cream cheese frosting, moist layered cake", price: "₹249", category: "Bakery" },
  { name: "Garlic Bread", desc: "Toasted with herb butter, mozzarella topping", price: "₹149", category: "Starters" },
  { name: "Bruschetta", desc: "Tomato, basil, balsamic, toasted ciabatta", price: "₹199", category: "Starters" },
];

const MenuPage = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? menuItems : menuItems.filter((i) => i.category === active);

  return (
    <Layout>
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="text-center mb-12">
            <h1 className="text-5xl font-display mb-4">Our Menu</h1>
            <p className="text-muted-foreground">Crafted with love, served with soul.</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  active === cat ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="space-y-1">
            {filtered.map((item, i) => (
              <motion.div
                key={item.name}
                initial="hidden"
                animate="visible"
                variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.4, delay: i * 0.05 } } }}
                className="flex items-baseline justify-between py-4 border-b border-border/50"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-display">{item.name}</h3>
                    {item.tag && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-accent text-accent-foreground">{item.tag}</span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                </div>
                <span className="text-lg font-semibold ml-4 whitespace-nowrap">{item.price}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MenuPage;
