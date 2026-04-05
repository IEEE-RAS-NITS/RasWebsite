"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface EventCardProps {
  name: string;
  desc: string;
  image: string;
  date: string;
}

export default function EventCard({ name, desc, image, date }: EventCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-2xl bg-[#112240]/40 border border-white/5 hover:border-[#00629B]/30 transition-all duration-500 shadow-2xl"
    >
      <div className="flex flex-col md:flex-row">
        {/* Photo Container with Padding */}
        <div className="p-4 md:p-6 w-full md:w-[400px] lg:w-[480px] shrink-0">
          <div className="relative aspect-video md:h-full w-full overflow-hidden rounded-xl bg-[#0A192F] border border-white/5 shadow-inner">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 480px"
            />
            {/* High-tech scanline or overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0A192F]/40 to-transparent opacity-60 pointer-events-none" />
          </div>
        </div>

        {/* Content Area */}
        <div className="flex flex-1 flex-col justify-center p-8 md:p-10 md:pl-4 border-t md:border-t-0 border-white/5">
          <div className="mb-4 flex items-center gap-3">
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-[#00629B] bg-[#00629B]/10 px-3 py-1.5 rounded-sm">
              {date}
            </span>
            <div className="h-[1px] flex-grow bg-white/5" />
          </div>
          
          <h3 className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter text-white mb-4 group-hover:text-[#00629B] transition-colors leading-none">
            {name}
          </h3>
          
          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl">
            {desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
}