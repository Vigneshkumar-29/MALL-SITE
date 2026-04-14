import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { mallData } from "../config/mallData";
import { ArrowRight } from "lucide-react";
import LazyImage from "../components/ui/LazyImage";

export default function EventsModule() {
  const { events } = mallData;
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div className="bg-[#0a0a0a] text-[#e5e5e5] min-h-screen font-body overflow-x-hidden selection:bg-[#c9a96e] selection:text-black">
      
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-end justify-center pb-24 overflow-hidden border-b border-[#222]">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
           <LazyImage 
             src={events.image} 
             alt="Events Hero" 
             className="w-full h-full object-cover opacity-30 grayscale saturate-0 contrast-125 mix-blend-luminosity"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
        </motion.div>

        <div className="relative z-10 text-center flex flex-col items-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-display tracking-[0.3em] uppercase text-xs text-[#c9a96e] mb-6"
          >
            A Global Platform
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="font-headline text-7xl md:text-9xl tracking-tight leading-none text-white max-w-5xl"
          >
            {events.title}
          </motion.h1>
        </div>
      </section>

      {/* Venues Section */}
      <section className="py-40 px-6 md:px-12 max-w-[1400px] mx-auto relative">
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true, margin: "-20%" }}
           className="absolute top-0 left-12 w-[1px] h-full bg-[#222]"
        />
        
        <div className="grid lg:grid-cols-[1fr_2fr] gap-24 relative z-10">
          <div>
            <h2 className="font-display text-4xl uppercase tracking-widest sticky top-32 mix-blend-difference pb-8">
              Venues<br/>
              <span className="text-[#c9a96e]">Portfolio</span>
            </h2>
          </div>
          
          <div className="flex flex-col gap-32">
            {events.venues.map((venue, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1, delay: idx * 0.1 }}
                className="group border-b border-[#222] pb-12 hover:border-[#c9a96e] transition-colors duration-500 flex flex-col md:flex-row justify-between items-end gap-8"
              >
                <div>
                  <p className="font-body text-[#777] text-sm uppercase tracking-widest mb-4">
                    {venue.type}
                  </p>
                  <h3 className="font-headline text-5xl md:text-7xl group-hover:text-[#c9a96e] transition-colors duration-500">
                    {venue.name}
                  </h3>
                </div>
                <div className="text-right">
                  <p className="font-body text-xs text-[#555] uppercase tracking-[0.2em] mb-2">Capacity</p>
                  <p className="font-display text-3xl">{venue.capacity}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights & CTA */}
      <section className="bg-[#111] py-40 px-6 md:px-12 border-t border-[#c9a96e]/20">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="font-headline text-6xl mb-12">Historical Milestones</h2>
              <ul className="flex flex-col gap-6">
                {events.pastHighlights.map((hl, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                    className="font-display text-2xl md:text-3xl font-light text-[#aaa] hover:text-white transition-colors flex items-center gap-6 before:content-[''] before:w-12 before:h-[1px] before:bg-[#c9a96e]"
                  >
                    {hl}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="bg-[#0a0a0a] p-16 md:p-24 border border-[#333] flex flex-col items-center text-center group hover:border-[#c9a96e]/50 transition-colors duration-700"
            >
               <h3 className="font-headline text-5xl mb-6">Host With Us</h3>
               <p className="font-body text-[#777] mb-12 max-w-sm">Secure a venue at the world's most definitive destination.</p>
               <button className="font-display uppercase tracking-[0.2em] text-sm flex items-center gap-4 text-[#c9a96e] group-hover:text-white transition-colors duration-500">
                 Contact Team <ArrowRight size={18} className="transform group-hover:translate-x-4 transition-transform duration-500" />
               </button>
            </motion.div>
        </div>
      </section>

    </div>
  );
}
