import React from "react";
import { motion } from "framer-motion";
import { mallData } from "../config/mallData";
import LazyImage from "../components/ui/LazyImage";

export default function LeasingModule() {
  const { leasing } = mallData;

  return (
    <div className="bg-white text-black min-h-screen font-body overflow-x-hidden selection:bg-black selection:text-white">
      
      {/* High Fashion Minimalist Header */}
      <section className="pt-48 pb-32 text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display uppercase tracking-[0.4em] text-[10px] text-gray-400 mb-8"
        >
          Curated Commercial Spaces
        </motion.p>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="font-headline text-7xl md:text-9xl font-light italic tracking-tighter mb-12"
        >
          Leasing
        </motion.h1>
        <motion.div
           initial={{ scaleX: 0 }}
           animate={{ scaleX: 1 }}
           transition={{ duration: 1, delay: 0.5 }}
           className="w-px h-24 bg-black mx-auto origin-top"
        />
        <motion.p
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 1, delay: 1.2 }}
           className="font-headline text-2xl max-w-lg mx-auto mt-12 text-gray-600"
        >
          {leasing.description}
        </motion.p>
      </section>

      {/* The Gallery */}
      <section className="pb-40 px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-3 gap-6 md:gap-12">
          {leasing.paths.map((path, idx) => (
             <motion.div
               key={idx}
               initial={{ opacity: 0, y: 100 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 1.2, delay: idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
               className="group flex flex-col items-center text-center mt-0 md:even:mt-32"
             >
               <div className="w-full aspect-[2/3] overflow-hidden bg-gray-100 mb-8 relative">
                 <LazyImage 
                   src={path.image} 
                   alt={path.category}
                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out grayscale group-hover:grayscale-0"
                 />
               </div>
               <h3 className="font-display uppercase tracking-[0.2em] text-sm font-bold mb-4">
                 {path.category}
               </h3>
               <p className="font-headline text-lg text-gray-500 italic mb-8 max-w-[250px]">
                 {path.description}
               </p>
               <span className="font-display text-[10px] uppercase tracking-widest border-b border-black pb-1 hover:text-gray-400 hover:border-gray-400 transition-colors cursor-pointer">
                 Enquire
               </span>
             </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
