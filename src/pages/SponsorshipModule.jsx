import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { mallData } from "../config/mallData";

export default function SponsorshipModule() {
  const { sponsorship } = mallData;
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div className="bg-[#f4f3f1] text-[#111] min-h-screen font-body overflow-x-hidden selection:bg-[#111] selection:text-[#f4f3f1]">
      
      {/* Editorial Header */}
      <section className="min-h-screen pt-40 px-6 md:px-12 xl:px-24 flex flex-col justify-between pb-24">
        <motion.div
           initial={{ opacity: 0, clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" }}
           animate={{ opacity: 1, clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)" }}
           transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
        >
          <h1 className="font-display font-bold text-[10vw] leading-[0.85] tracking-tighter uppercase mb-12">
            Brand<br/>Integration
          </h1>
        </motion.div>
        
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 border-t-2 border-[#111] pt-12">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="font-display font-bold uppercase tracking-widest text-xs"
          >
            Sponsorship & Partnerships
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="font-headline text-3xl md:text-5xl font-light leading-tight max-w-3xl"
          >
            {sponsorship.description}
          </motion.p>
        </div>
      </section>

      {/* Tiers / Matrix - Brutalist Editorial Flow */}
      <section className="bg-[#111] text-[#f4f3f1] py-40">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative">
          
          <div className="grid md:grid-cols-[200px_1fr] gap-12 md:gap-32">
            <h2 className="font-display uppercase text-sm tracking-widest sticky top-32 h-fit">
              Partnership<br/>Tiers
            </h2>

            <div className="flex flex-col gap-0 border-t border-[#333]">
              {sponsorship.tiers.map((tier, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.8 }}
                  className="grid lg:grid-cols-2 gap-12 py-24 border-b border-[#333] group hover:bg-[#1a1a1a] transition-colors p-8 -mx-8"
                >
                  <div>
                    <span className="font-body text-[#555] text-xs uppercase tracking-[0.3em] font-bold block mb-6">Level 0{idx + 1}</span>
                    <h3 className="font-display font-medium text-5xl md:text-6xl tracking-tight uppercase group-hover:text-white text-[#d1d1d1] transition-colors">
                      {tier.name}
                    </h3>
                  </div>
                  <div className="flex flex-col justify-end">
                    <p className="font-headline text-2xl md:text-3xl text-[#999] leading-relaxed mb-12">
                      {tier.benefits}
                    </p>
                    <button className="self-start font-display text-xs uppercase tracking-widest border border-[#f4f3f1] px-8 py-4 hover:bg-[#f4f3f1] hover:text-[#111] transition-colors overflow-hidden relative">
                      <span className="relative z-10">Request Specs</span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
