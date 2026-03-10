import { useState } from "react";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import Layout from "@/components/Layout";
import heroCafe from "@/assets/hero-cafe.jpg";

const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const timeSlots = ["11:00 AM","12:00 PM","1:00 PM","2:00 PM","3:00 PM","5:00 PM","6:00 PM","7:00 PM","8:00 PM","9:00 PM"];

const Reserve = () => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date>();
  const [form, setForm] = useState({ time: "", guests: "2", name: "", phone: "", request: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date) { toast({ title: "Please select a date", variant: "destructive" }); return; }
    toast({ title: "Reservation Confirmed!", description: `Thank you ${form.name}! Your table for ${form.guests} on ${format(date, "PPP")} at ${form.time} is booked.` });
    setDate(undefined);
    setForm({ time: "", guests: "2", name: "", phone: "", request: "" });
  };

  return (
    <Layout>
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <h1 className="text-5xl font-display mb-4">Reserve a Table</h1>
               <p className="text-muted-foreground mb-8">Secure your spot at The Social Brew. Whether it's a romantic dinner or a group celebration, we'll make it special.</p>
               <img src={heroCafe} alt="The Social Brew" className="rounded-lg w-full" />
            </motion.div>

            <motion.form
              onSubmit={handleSubmit}
              initial="hidden"
              animate="visible"
              variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.6, delay: 0.2 } } }}
              className="bg-card border rounded-lg p-8 space-y-5"
            >
              <div>
                <label className="text-sm font-medium mb-1 block">Select Date</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}>
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar mode="single" selected={date} onSelect={setDate} disabled={(d) => d < new Date()} initialFocus className="p-3 pointer-events-auto" />
                  </PopoverContent>
                </Popover>
              </div>

              <div>
                <label className="text-sm font-medium mb-1 block">Select Time</label>
                <Select value={form.time} onValueChange={(v) => setForm((f) => ({ ...f, time: v }))}>
                  <SelectTrigger><SelectValue placeholder="Choose a time" /></SelectTrigger>
                  <SelectContent>{timeSlots.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}</SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-1 block">Number of Guests</label>
                <Select value={form.guests} onValueChange={(v) => setForm((f) => ({ ...f, guests: v }))}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>{[1,2,3,4,5,6,7,8].map((n) => <SelectItem key={n} value={String(n)}>{n} {n===1?"guest":"guests"}</SelectItem>)}</SelectContent>
                </Select>
              </div>

              <Input placeholder="Your Name" required value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} />
              <Input type="tel" placeholder="Phone Number" required value={form.phone} onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))} />
              <Textarea placeholder="Special Requests (optional)" value={form.request} onChange={(e) => setForm((f) => ({ ...f, request: e.target.value }))} />

              <Button type="submit" size="lg" className="w-full">Confirm Reservation</Button>
            </motion.form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Reserve;
