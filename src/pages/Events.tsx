import { motion } from "framer-motion";
import { CalendarDays, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import events from "@/assets/events.jpg";
import potteryWorkshop from "@/assets/pottery-workshop.jpg";
import artWorkshop from "@/assets/art-workshop.jpg";

const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const upcomingEvents = [
  {
    title: "Live Acoustic Night",
    date: "March 15, 2026",
    time: "7:00 PM – 10:00 PM",
    desc: "Enjoy soulful acoustic music over coffee and craft bites. Featuring local artists performing in our cozy outdoor patio.",
    img: events,
    tag: "Live Music",
  },
  {
    title: "Couple Pottery Date Night",
    date: "March 22, 2026",
    time: "6:00 PM – 8:30 PM",
    desc: "A romantic evening of pottery painting for couples. Includes welcome drinks, all art materials, and a take-home pottery piece.",
    img: potteryWorkshop,
    tag: "Date Night",
  },
  {
    title: "Art & Wine Evening",
    date: "March 29, 2026",
    time: "6:30 PM – 9:00 PM",
    desc: "Paint, sip, and unwind — a guided canvas painting session paired with curated beverages and gourmet appetizers.",
    img: artWorkshop,
    tag: "Art Night",
  },
  {
    title: "Kids Art Festival",
    date: "April 5, 2026",
    time: "11:00 AM – 1:00 PM",
    desc: "A fun-filled morning for kids aged 5–12 with painting, clay modeling, face painting, and delicious treats.",
    img: artWorkshop,
    tag: "Kids",
  },
];

const Events = () => (
  <Layout>
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="text-center mb-16">
          <h1 className="text-5xl font-display mb-4">Upcoming Events</h1>
          <p className="text-muted-foreground text-lg">Mark your calendar — there's always something creative happening at The Social Brew.</p>
        </motion.div>

        <div className="space-y-8">
          {upcomingEvents.map((ev, i) => (
            <motion.div
              key={ev.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.5, delay: i * 0.1 } } }}
              className="bg-card border rounded-lg overflow-hidden md:flex"
            >
              <img src={ev.img} alt={ev.title} className="md:w-72 h-48 md:h-auto object-cover" />
              <div className="p-6 flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs px-2 py-0.5 rounded-full bg-accent text-accent-foreground">{ev.tag}</span>
                </div>
                <h3 className="text-2xl font-display mb-3">{ev.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{ev.desc}</p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1"><CalendarDays className="h-4 w-4" /> {ev.date}</div>
                  <div className="flex items-center gap-1"><Clock className="h-4 w-4" /> {ev.time}</div>
                  <div className="flex items-center gap-1"><MapPin className="h-4 w-4" /> Olivia, Pashan</div>
                </div>
                <Link to="/workshops">
                  <Button size="sm">Register</Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Events;
