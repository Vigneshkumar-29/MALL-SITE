import React from "react";
import { motion } from "framer-motion";
import LazyImage from "../ui/LazyImage";
import { Link } from "react-router-dom";

export default function RetailLuxury({ mallData }) {
  return (
    <section className="bg-[#0a0a0a] text-white py-32 overflow-hidden">
      {/* Retail Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-24 mb-40">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-4">Retail Experience</h3>
            <h2 className="text-4xl md:text-5xl font-semibold mb-6">{mallData.retail.title}</h2>
            <p className="text-xl text-gray-400 leading-relaxed mb-8">
              {mallData.retail.description}
            </p>
            <div className="flex flex-wrap gap-4 mt-8 mb-8">
              {mallData.retail.tenants.map((tenant, idx) => (
                <span key={idx} className="border border-gray-700 px-4 py-2 rounded-full text-sm hover:bg-white hover:text-black transition-colors cursor-default">
                  {tenant}
                </span>
              ))}
            </div>
            <Link to="/leasing" className="inline-block mt-4 text-sm uppercase tracking-wider text-white border-b border-white pb-1 hover:text-gray-400 hover:border-gray-400 transition-colors">
              View Leasing Options &rarr;
            </Link>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="aspect-[4/5] md:aspect-square relative group overflow-hidden bg-gray-900"
          >
            <LazyImage 
              src={mallData.retail.image} 
              alt="Retail Environment" 
              className="group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
          </motion.div>
        </div>
      </div>

      {/* Luxury Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-24">
        <div className="grid md:grid-cols-2 gap-16 items-center flex-col-reverse md:flex-row-reverse">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="md:order-2"
          >
            <h3 className="text-sm uppercase tracking-widest text-amber-500 mb-4">Luxury Portfolio</h3>
            <h2 className="text-4xl md:text-5xl font-semibold mb-6">{mallData.luxury.title}</h2>
            <p className="text-xl text-gray-400 leading-relaxed mb-8">
              {mallData.luxury.description}
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              {mallData.luxury.brands.map((brand, idx) => (
                <span key={idx} className="border border-amber-900/50 text-amber-100/70 px-4 py-2 text-sm tracking-wide">
                  {brand}
                </span>
              ))}
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="aspect-[4/5] md:aspect-square relative group overflow-hidden bg-gray-900 md:order-1"
          >
            <LazyImage 
              src={mallData.luxury.image} 
              alt="Luxury brands" 
              className="group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
