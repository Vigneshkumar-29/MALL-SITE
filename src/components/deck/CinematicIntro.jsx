import React from "react";
import { motion } from "framer-motion";
import LazyVideo from "../ui/LazyVideo";

export default function CinematicIntro({ mallData }) {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0 opacity-60">
        <LazyVideo 
          src={mallData.assets.heroVideo} 
          poster={mallData.assets.heroPoster} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black z-10" />
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
        className="relative z-20 text-center px-6 max-w-5xl mx-auto mt-20"
      >
        <motion.p 
          initial={{ opacity: 0, letterSpacing: "0em" }}
          animate={{ opacity: 1, letterSpacing: "0.2em" }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="uppercase text-sm tracking-[0.2em] mb-4 text-gray-300 font-medium"
        >
          A Global Destination
        </motion.p>
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6">
          {mallData.name}
        </h1>
        <p className="text-xl md:text-2xl font-light text-gray-300 max-w-2xl mx-auto">
          {mallData.tagline}
        </p>
      </motion.div>
    </section>
  );
}
