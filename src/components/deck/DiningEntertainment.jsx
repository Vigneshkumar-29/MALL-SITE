import React from "react";
import { motion } from "framer-motion";
import LazyImage from "../ui/LazyImage";

export default function DiningEntertainment({ mallData }) {
  return (
    <section className="bg-black text-white py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-24">
        
        {/* Featured Split Layout */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-24">
          {/* Dining */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <div className="aspect-video w-full overflow-hidden mb-8 bg-gray-900 group">
              <LazyImage 
                src={mallData.dining.image} 
                alt="Dining" 
                className="group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-3">Dining & Lifestyle</h3>
            <h2 className="text-3xl font-semibold mb-4">{mallData.dining.title}</h2>
            <p className="text-lg text-gray-400 leading-relaxed font-light">
              {mallData.dining.description}
            </p>
          </motion.div>

          {/* Entertainment */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col md:pt-24"
          >
            <div className="aspect-video w-full overflow-hidden mb-8 bg-gray-900 group">
              <LazyImage 
                src={mallData.entertainment.image} 
                alt="Entertainment" 
                className="group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-3">Attractions</h3>
            <h2 className="text-3xl font-semibold mb-4">{mallData.entertainment.title}</h2>
            <p className="text-lg text-gray-400 leading-relaxed font-light">
              {mallData.entertainment.description}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
