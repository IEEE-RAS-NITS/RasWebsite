"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LearningPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <div 
      className="min-h-screen flex flex-col text-white selection:bg-[#00629B]"
      
    >
      <Header />

      <main className="flex-grow flex items-center justify-center px-6 py-24">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-12 md:p-20 text-center shadow-2xl relative overflow-hidden"
        >
          {/* Decorative background glow */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#A35928]/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#700B4F]/20 rounded-full blur-[100px] pointer-events-none" />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A35928] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#A35928]"></span>
            </span>
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-white/80">
              Module Under Construction
            </span>
          </motion.div>

          <motion.h1 
            {...fadeIn}
            className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic leading-none mb-8"
          >
            Learning <br />
            <span className="text-white/40">Resource Hub</span>
          </motion.h1>

          <motion.div 
            {...fadeIn}
            className="space-y-8"
          >
            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto">
              The IEEE RAS NIT Silchar learning repository is currently being curated with localized tutorials and research materials.
            </p>

            {/* External Resource Card */}
            <div className="bg-black/20 border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto backdrop-blur-md">
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#A35928] mb-4">Immediate Resources</h3>
              <p className="text-white/80 text-base mb-6">
                In the meantime, explore the global technical library and educational modules provided by the parent society.
              </p>
              <Link 
                href="https://www.ieee-ras.org/ras-university/" 
                target="_blank"
                className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#A35928] hover:text-white transition-all duration-300 group"
              >
                Visit RAS University
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              {[
                { title: "Local Tutorials", icon: "📚" },
                { title: "Member Projects", icon: "📑" },
                { title: "Workshop Labs", icon: "🛠️" }
              ].map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/5 p-6 rounded-2xl">
                  <div className="text-2xl mb-2 opacity-50">{item.icon}</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white/40">{item.title}</div>
                </div>
              ))}
            </div>

            <p className="pt-12 text-xs font-mono text-white/20 uppercase tracking-[0.5em]">
              Coming Soon to NIT Silchar
            </p>
          </motion.div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}