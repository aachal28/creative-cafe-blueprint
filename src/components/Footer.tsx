import { Link } from "react-router-dom";
import { Instagram, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
      <div>
        <h3 className="text-2xl font-display mb-4">Olivia</h3>
        <p className="text-sm opacity-80">Cafe · Bistro · Art Studio</p>
        <p className="text-sm opacity-80 mt-2">Where creativity meets culinary craft in the heart of Pashan, Pune.</p>
      </div>
      <div>
        <h4 className="font-semibold mb-4">Quick Links</h4>
        <div className="flex flex-col gap-2 text-sm opacity-80">
          <Link to="/menu" className="hover:opacity-100">Menu</Link>
          <Link to="/workshops" className="hover:opacity-100">Workshops</Link>
          <Link to="/reserve" className="hover:opacity-100">Reserve a Table</Link>
          <Link to="/gallery" className="hover:opacity-100">Gallery</Link>
          <Link to="/events" className="hover:opacity-100">Events</Link>
        </div>
      </div>
      <div>
        <h4 className="font-semibold mb-4">Hours</h4>
        <div className="text-sm opacity-80 space-y-1">
          <p>Mon–Fri: 10 AM – 11 PM</p>
          <p>Sat–Sun: 9 AM – 11 PM</p>
          <p>Workshop Hours: By Booking</p>
        </div>
      </div>
      <div>
        <h4 className="font-semibold mb-4">Contact</h4>
        <div className="flex flex-col gap-3 text-sm opacity-80">
          <a href="tel:+919321475905" className="flex items-center gap-2 hover:opacity-100">
            <Phone className="h-4 w-4" /> +91 93214 75905
          </a>
          <a href="mailto:hello@oliviacafebistro.com" className="flex items-center gap-2 hover:opacity-100">
            <Mail className="h-4 w-4" /> hello@oliviacafebistro.com
          </a>
          <a href="https://www.instagram.com/olivia.cafe.bistro_pune/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-100">
            <Instagram className="h-4 w-4" /> @olivia.cafe.bistro_pune
          </a>
          <div className="flex items-start gap-2">
            <MapPin className="h-4 w-4 mt-0.5" />
            <span>Pashan, Pune, Maharashtra, India</span>
          </div>
        </div>
      </div>
    </div>
    <div className="border-t border-primary-foreground/20 py-6 text-center text-sm opacity-60">
      © {new Date().getFullYear()} Olivia Cafe Bistro. All rights reserved.
    </div>
  </footer>
);

export default Footer;
