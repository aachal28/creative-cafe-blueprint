import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import Layout from "@/components/Layout";

const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "We'll get back to you soon." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <Layout>
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="text-center mb-16">
            <h1 className="text-5xl font-display mb-4">Get in Touch</h1>
            <p className="text-muted-foreground text-lg">We'd love to hear from you. Drop by, call, or send us a message.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="space-y-6">
              <div>
                <h3 className="text-xl font-display mb-4">Visit Us</h3>
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-accent mt-0.5" />
                    <span>Olivia Cafe Bistro, Pashan, Pune, Maharashtra 411045</span>
                  </div>
                  <a href="tel:+919321475905" className="flex items-center gap-3 hover:text-foreground transition-colors">
                    <Phone className="h-5 w-5 text-accent" /> +91 93214 75905
                  </a>
                  <a href="mailto:hello@oliviacafebistro.com" className="flex items-center gap-3 hover:text-foreground transition-colors">
                    <Mail className="h-5 w-5 text-accent" /> hello@oliviacafebistro.com
                  </a>
                  <a href="https://www.instagram.com/olivia.cafe.bistro_pune/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-foreground transition-colors">
                    <Instagram className="h-5 w-5 text-accent" /> @olivia.cafe.bistro_pune
                  </a>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-accent" /> Mon–Sun: 10 AM – 11 PM
                  </div>
                </div>
              </div>

              {/* Google Maps */}
              <div className="rounded-lg overflow-hidden border h-64">
                <iframe
                  title="Olivia Cafe Bistro Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.0!2d73.8!3d18.53!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMxJzQ4LjAiTiA3M8KwNDgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>

            <motion.form
              onSubmit={handleSubmit}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.6, delay: 0.2 } } }}
              className="bg-card border rounded-lg p-8 space-y-5"
            >
              <h3 className="text-xl font-display mb-2">Send a Message</h3>
              <Input placeholder="Your Name" required value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} />
              <Input type="email" placeholder="Email" required value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} />
              <Textarea placeholder="Your Message" rows={5} required value={form.message} onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))} />
              <Button type="submit" className="w-full">Send Message</Button>
            </motion.form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
