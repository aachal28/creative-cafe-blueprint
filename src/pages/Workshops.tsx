import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, Users, IndianRupee, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";
import potteryWorkshop from "@/assets/pottery-workshop.jpg";
import artWorkshop from "@/assets/art-workshop.jpg";
import cafeInterior from "@/assets/cafe-interior.jpg";
import events from "@/assets/events.jpg";

const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const workshops = [
  {
    id: "pottery",
    title: "Couple Pottery Painting",
    desc: "Create and paint your own pottery together in a romantic cafe setting. Perfect for date nights, anniversaries, or just a fun evening out. All materials provided.",
    duration: "2 hours",
    price: "₹1,499 / couple",
    seats: 12,
    dates: ["Mar 15, 2026", "Mar 22, 2026", "Mar 29, 2026", "Apr 5, 2026"],
    img: potteryWorkshop,
  },
  {
    id: "canvas",
    title: "Canvas Art Workshop",
    desc: "Express yourself on canvas with guided instruction from local artists. No experience needed — just bring your creativity. Wine & snacks included.",
    duration: "2.5 hours",
    price: "₹899 / person",
    seats: 20,
    dates: ["Mar 16, 2026", "Mar 23, 2026", "Apr 6, 2026"],
    img: artWorkshop,
  },
  {
    id: "diy",
    title: "DIY Craft Experience",
    desc: "Explore resin art, macramé, candle making and more in rotating monthly themes. Take home your own handmade creation.",
    duration: "1.5 hours",
    price: "₹699 / person",
    seats: 15,
    dates: ["Mar 17, 2026", "Mar 24, 2026", "Apr 7, 2026"],
    img: cafeInterior,
  },
  {
    id: "kids",
    title: "Kids Creative Club",
    desc: "A fun-filled session for little artists aged 5–12. Painting, clay modeling, and storytelling in a safe, creative environment.",
    duration: "1.5 hours",
    price: "₹499 / child",
    seats: 15,
    dates: ["Mar 15, 2026", "Mar 22, 2026", "Apr 5, 2026"],
    img: events,
  },
];

const Workshops = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ workshop: "", date: "", name: "", email: "", phone: "", participants: "1", payment: "online" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Registration Submitted!", description: `Thank you ${formData.name}! We'll confirm your spot for ${formData.workshop} shortly.` });
    setFormData({ workshop: "", date: "", name: "", email: "", phone: "", participants: "1", payment: "online" });
  };

  const selectedWorkshop = workshops.find((w) => w.id === formData.workshop);

  return (
    <Layout>
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="text-center mb-16 max-w-2xl mx-auto">
            <h1 className="text-5xl font-display mb-4">Creative Workshops</h1>
            <p className="text-muted-foreground text-lg">Unleash your inner artist. Join hands-on creative experiences at The Social Brew — no skills needed, just curiosity.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {workshops.map((w, i) => (
              <motion.div
                key={w.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.5, delay: i * 0.1 } } }}
                className="bg-card rounded-lg overflow-hidden border"
              >
                <img src={w.img} alt={w.title} className="w-full h-56 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-display mb-3">{w.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{w.desc}</p>
                  <div className="grid grid-cols-2 gap-3 text-sm mb-4">
                    <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-accent" /> {w.duration}</div>
                    <div className="flex items-center gap-2"><IndianRupee className="h-4 w-4 text-accent" /> {w.price}</div>
                    <div className="flex items-center gap-2"><Users className="h-4 w-4 text-accent" /> {w.seats} seats</div>
                    <div className="flex items-center gap-2"><CalendarDays className="h-4 w-4 text-accent" /> {w.dates.length} dates</div>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full" onClick={() => setFormData((f) => ({ ...f, workshop: w.id }))}>Register Now</Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="font-display text-xl">Register for {w.title}</DialogTitle>
                      </DialogHeader>
                      <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                        <div>
                          <label className="text-sm font-medium mb-1 block">Select Date</label>
                          <Select value={formData.date} onValueChange={(v) => setFormData((f) => ({ ...f, date: v }))}>
                            <SelectTrigger><SelectValue placeholder="Choose a date" /></SelectTrigger>
                            <SelectContent>
                              {w.dates.map((d) => <SelectItem key={d} value={d}>{d}</SelectItem>)}
                            </SelectContent>
                          </Select>
                        </div>
                        <Input placeholder="Your Name" required value={formData.name} onChange={(e) => setFormData((f) => ({ ...f, name: e.target.value }))} />
                        <Input type="email" placeholder="Email" required value={formData.email} onChange={(e) => setFormData((f) => ({ ...f, email: e.target.value }))} />
                        <Input type="tel" placeholder="Phone Number" required value={formData.phone} onChange={(e) => setFormData((f) => ({ ...f, phone: e.target.value }))} />
                        <div>
                          <label className="text-sm font-medium mb-1 block">Participants</label>
                          <Select value={formData.participants} onValueChange={(v) => setFormData((f) => ({ ...f, participants: v }))}>
                            <SelectTrigger><SelectValue /></SelectTrigger>
                            <SelectContent>
                              {[1,2,3,4,5,6].map((n) => <SelectItem key={n} value={String(n)}>{n} {n===1?"person":"people"}</SelectItem>)}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-1 block">Payment Method</label>
                          <Select value={formData.payment} onValueChange={(v) => setFormData((f) => ({ ...f, payment: v }))}>
                            <SelectTrigger><SelectValue /></SelectTrigger>
                            <SelectContent>
                              <SelectItem value="online">Pay Online</SelectItem>
                              <SelectItem value="venue">Pay at Venue</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <Button type="submit" className="w-full">Confirm Registration</Button>
                      </form>
                    </DialogContent>
                  </Dialog>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Workshops;
