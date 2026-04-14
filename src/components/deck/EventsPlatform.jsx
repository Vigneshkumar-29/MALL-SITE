import React from "react";
import { motion } from "framer-motion";
import LazyImage from "../ui/LazyImage";
import { ArrowRight, Calendar, Mic2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function EventsPlatform({ mallData }) {
  return (
    <section className="bg-zinc-950 text-white py-32 relative overflow-hidden flex items-center justify-center min-h-[90vh]">
      <div className="absolute inset-0 z-0 opacity-40">
        <LazyImage 
          src={mallData.events.image} 
          alt="Events Background" 
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center items-center gap-4 mb-6 text-gray-400">
            <Mic2 size={24} />
            <span className="uppercase tracking-[0.2em] text-sm">Platform & Activations</span>
            <Calendar size={24} />
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8">{mallData.events.title}</h2>
          <p className="text-xl md:text-2xl font-light text-gray-300 max-w-3xl mx-auto mb-12">
            {mallData.events.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/events" className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-200 transition-colors flex items-center gap-2">
              Explore Venues
              <ArrowRight size={18} />
            </Link>
            <Link to="/sponsorship" className="border border-gray-600 text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-colors">
              Brand Partnerships
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
