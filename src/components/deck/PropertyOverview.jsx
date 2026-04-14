import React from "react";
import { motion } from "framer-motion";

export default function PropertyOverview({ mallData }) {
  return (
    <section className="py-32 px-6 md:px-12 xl:px-24 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-semibold mb-12">More Than Retail. <br/><span className="text-gray-500">A Cultural Epicenter.</span></h2>
          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed mb-20 md:text-2xl font-light">
            {mallData.description}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-800 pt-16">
            {mallData.metrics.map((metric, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <p className="text-4xl md:text-5xl lg:text-6xl font-light mb-2 text-white whitespace-nowrap tracking-tight">{metric.value}</p>
                <p className="text-xs md:text-sm text-gray-500 uppercase tracking-widest">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
