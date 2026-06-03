import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Phone, ChevronRight } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { Mail, MapPin } from 'lucide-react';
import ImageSlider from "@/components/ui/slide";

const WHATSAPP_URL = "https://wa.me/27695691537";

const SERVICES = [
  {
    title: "T-Shirt Printing",
    image: "/images/tshirt-print.png",
    description: "High-quality custom printed apparel for events, teams, and promotions."
  },
  {
    title: "Car Stickers",
    image: "/images/car-sticker.png",
    description: "Durable, vibrant die-cut stickers and decals for any vehicle."
  },
  {
    title: "Corporate Branding",
    image: "/images/corporate.png",
    description: "Professional business cards, letterheads, and complete brand identity packages."
  },
  {
    title: "Banners",
    image: "/images/banner.png",
    description: "Eye-catching indoor and outdoor banners that demand attention."
  },
  {
    title: "Vinyl Vehicle Wrapping",
    image: "/images/vinyl-wrap.png",
    description: "Premium full and partial vehicle wraps to transform your fleet."
  },
  {
    title: "Vehicle Branding",
    image: "/images/vehicle-brand.png",
    description: "Commercial vehicle graphics that turn your cars into moving billboards."
  },
  {
    title: "Correx Board Printing",
    image: "/images/correx.png",
    description: "Lightweight, weather-resistant signs perfect for real estate and events."
  },
  {
    title: "PVC Board Printing",
    image: "/images/pvc-board.png",
    description: "Rigid, professional signage for retail spaces and offices."
  },
  {
    title: "Clothing Printing",
    image: "/images/clothing.png",
    description: "Embroidered and printed corporate wear, caps, and uniforms."
  }
];

const GALLERY = [
  {
    label: "T-Shirt Printing",
    before: "/images/before-tshirt.png",
    after: "/images/after-tshirt.png",
  },
  {
    label: "Vehicle Branding",
    before: "/images/before-vehicle.png",
    after: "/images/after-vehicle.png",
  },
  {
    label: "Correx Board Signs",
    before: "/images/before-correx.png",
    after: "/images/after-correx.png",
  },
];

function GalleryCard({ item }: { item: typeof GALLERY[0] }) {
  const [showAfter, setShowAfter] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl overflow-hidden shadow-md border border-orange-100 bg-white"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={showAfter ? item.after : item.before}
          alt={showAfter ? `After: ${item.label}` : `Before: ${item.label}`}
          className="w-full h-full object-cover transition-opacity duration-500"
        />
        <div className="absolute top-3 left-3">
          <span className={`px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider ${showAfter ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-700"}`}>
            {showAfter ? "After" : "Before"}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 mb-3">{item.label}</h3>
        <div className="flex gap-2">
          <button
            onClick={() => setShowAfter(false)}
            className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all ${!showAfter ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
          >
            Before
          </button>
          <button
            onClick={() => setShowAfter(true)}
            className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all ${showAfter ? "bg-orange-500 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
          >
            After
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Floating WhatsApp Button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        data-testid="button-whatsapp-float"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group"
      >
        <SiWhatsapp className="w-8 h-8" />
        <div className="absolute right-full mr-4 bg-gray-900 text-white px-3 py-1 rounded-md text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg">
          Chat with us
        </div>
      </a>

      {/* Navbar */}
      <header className="fixed top-0 w-full z-40 bg-white/90 backdrop-blur-md border-b border-orange-100 shadow-sm">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/lense-daily-logo.jpg" alt="Lense Daily Logo" className="h-12 w-auto rounded object-contain" />
            <span className="text-xl font-bold text-gray-900 hidden sm:inline" style={{ fontFamily: "var(--app-font-display)" }}>
              Lense <span className="text-orange-500">Daily</span>
            </span>
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="button-whatsapp-nav"
            className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-full font-semibold transition-colors shadow-sm"
          >
            <SiWhatsapp className="w-5 h-5" />
            <span className="hidden sm:inline">Get a Quote</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br from-orange-50 via-white to-orange-50">
        <div className="absolute inset-0 z-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #f97316 1px, transparent 0)", backgroundSize: "32px 32px" }}></div>
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-orange-200 rounded-full blur-3xl opacity-20 pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-orange-600 border border-orange-200 mb-6 font-semibold text-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                </span>
                Fast, High-Quality Printing in SA
              </div>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-[1.1] text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              WE PRINT <br />
              <span className="text-orange-500">YOUR VISION.</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-2xl text-gray-600 mb-10 max-w-2xl font-light leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              From vehicle wraps to custom apparel and corporate branding.
              Bold, professional, and built to make your business stand out.
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="button-whatsapp-hero"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-3 transition-all hover:gap-4 shadow-lg shadow-orange-200"
              >
                <SiWhatsapp className="w-6 h-6" />
                WhatsApp Us Now
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#services"
                className="border-2 border-orange-200 text-orange-600 hover:bg-orange-50 px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 transition-all"
              >
                See Our Services
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-16 md:flex justify-between items-end">
            <div>
              <p className="text-orange-500 font-semibold uppercase tracking-widest text-sm mb-2">What We Do</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">OUR <span className="text-orange-500">SERVICES</span></h2>
              <p className="text-xl text-gray-500 max-w-xl">Everything you need to brand your business, printed with precision and speed.</p>
            </div>
            <div className="mt-6 md:mt-0 hidden md:block">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-600 flex items-center gap-2 font-semibold transition-colors">
                Request full catalog <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

     {/* Image Slider Section */}
      <section className="py-24 bg-gradient-to-b from-white to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-orange-500 font-semibold uppercase tracking-widest text-sm mb-2">Our Work</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              LATEST <span className="text-orange-500">PROJECTS</span>
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Browse through our recent printing and branding projects
            </p>
          </div>
          <ImageSlider />
        </div>
      </section>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                data-testid={`card-service-${index}`}
                className="group relative overflow-hidden rounded-2xl bg-white border border-gray-100 hover:border-orange-300 hover:shadow-lg transition-all"
              >
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <h3 className="text-xl font-bold mb-1 text-white group-hover:text-orange-300 transition-colors">{service.title}</h3>
                  <p className="text-gray-300 text-sm mb-3 line-clamp-2">{service.description}</p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wider text-white hover:text-orange-300 transition-colors"
                  >
                    Get Quote <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery / Portfolio Section */}
      <section id="gallery" className="py-24 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-orange-500 font-semibold uppercase tracking-widest text-sm mb-2">Our Work</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              BEFORE <span className="text-orange-500">&amp; AFTER</span>
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              See the transformation. Tap Before or After on each card to compare the results we deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {GALLERY.map((item) => (
              <GalleryCard key={item.label} item={item} />
            ))}
          </div>

          <div className="text-center mt-14">
            <p className="text-gray-500 mb-6 text-lg">Want results like these for your business?</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="button-whatsapp-gallery"
              className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-full font-bold text-lg inline-flex items-center gap-3 transition-all shadow-lg shadow-orange-100"
            >
              <SiWhatsapp className="w-6 h-6" />
              Get Your Free Quote
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white border-y border-orange-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-orange-500 font-semibold uppercase tracking-widest text-sm mb-2">Why Us</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">WHY <span className="text-orange-500">LENSE DAILY?</span></h2>
              <p className="text-xl text-gray-500 mb-8">We don't just print — we build brands. From small runs to large corporate fleets, we deliver quality that speaks for itself.</p>

              <div className="space-y-5">
                {[
                  "Premium Materials and Vivid Inks",
                  "Fast Turnaround Times",
                  "Professional Installation Available",
                  "Dedicated Customer Support via WhatsApp"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-full bg-orange-100 flex items-center justify-center shrink-0 text-orange-500">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <span className="text-lg font-medium text-gray-800">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="button-whatsapp-why"
                  className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full font-bold text-lg inline-flex items-center gap-3 transition-colors"
                >
                  <SiWhatsapp className="w-6 h-6 text-[#25D366]" />
                  Message Us Now
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-full bg-orange-200 absolute -top-10 -right-10 blur-3xl opacity-40 pointer-events-none w-72 h-72"></div>
              <img src="/lense-daily-logo.jpg" alt="Lense Daily Brand" className="relative z-10 w-full max-w-md mx-auto rounded-2xl shadow-xl border border-orange-100" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden bg-orange-500">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "28px 28px" }}></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h2
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            READY TO PRINT?
          </motion.h2>
          <p className="text-2xl text-white/80 mb-10 max-w-2xl mx-auto font-medium">
            Send us your designs or let us help you create them. We are ready when you are.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="button-whatsapp-cta"
            className="bg-white hover:bg-orange-50 text-orange-500 px-10 py-5 rounded-full font-bold text-xl inline-flex items-center gap-3 transition-transform hover:scale-105 shadow-xl"
          >
            <SiWhatsapp className="w-7 h-7 text-[#25D366]" />
            Start on WhatsApp
          </a>
        </div>
      </section>

{/* Footer */}
{/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <img src="/lense-daily-logo.jpg" alt="Lense Daily" className="h-16 w-auto rounded bg-white mb-5 p-1" />
              <p className="text-gray-400">Your go-to South African printing and branding partner. Bold, fast, and professional.</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-6">Contact</h4>
              <ul className="space-y-4 text-gray-400">
                <li>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-orange-400 transition-colors">
                    <SiWhatsapp className="w-5 h-5 text-[#25D366]" />
                    +27 67 726 0361
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5" />
                  +27 67 726 0361
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5" />
                  lense.daily@gmail.com
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-1" />
                  <span>55 Belhar Dr, Belhar 20, Cape Town, 7100</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-6">Opening Hours</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="font-medium text-white">8:00 AM - 5:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="font-medium text-white">10:00 AM - 7:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="font-medium text-red-400">Closed</span>
                </li>
                <li className="mt-4 pt-3 border-t border-gray-800 text-sm text-gray-500">
                  <span>📞 Call or WhatsApp for urgent inquiries</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4 text-gray-400">
                <li>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors">Get a Quote</a>
                </li>
                <li>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors">Submit Artwork</a>
                </li>
                <li>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors">General Enquiries</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Lense Daily. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Designed with passion in SA.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
