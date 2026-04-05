"use client";

import { motion } from "framer-motion";
import MemberCard from "./MemberCard";
import membersData from "@/data/members.json";

const SECTIONS = [
    { title: "Faculty Mentors", roles: ["FIC"], size: "small" },
    { title: "The Board", roles: ["Chairman", "Vice Chairman"], size: "small" },
    { title: "Executive Core", roles: ["General Secretary", "Treasurer", "Research Head", "Academic & Research Secretary", "Head of Social Media", "Moderator"], size: "large" },
    { title: "Junior Division", roles: ["Member"], size: "large" }
];

export default function MembersGrid() {
    return (
        <section className="relative min-h-screen bg-grid-pattern px-4 py-20 overflow-hidden">
            {/* Background Glows */}
            <div className="pointer-events-none absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-[#00629B]/10 blur-[120px]" />
            <div className="pointer-events-none absolute bottom-0 right-1/4 h-[500px] w-[500px] rounded-full bg-[#00629B]/10 blur-[120px]" />

            <div className="relative mx-auto max-w-7xl">
                {/* Main Page Title */}
                <div className="mb-32 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block rounded-full border border-[#00629B]/30 bg-[#00629B]/5 px-4 py-1 mb-6"
                    >
                        <span className="text-[10px] font-mono font-bold uppercase tracking-[0.5em] text-[#00629B]">
                            System Status: Operational
                        </span>
                    </motion.div>
                    <motion.h1 
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="text-6xl font-black tracking-tighter text-white md:text-8xl lg:text-9xl uppercase"
                    >
                        OUR <span className="text-[#FFFFF]">TEAM</span>
                    </motion.h1>
                </div>

                {SECTIONS.map((section) => {
                    const filtered = membersData.members.filter(m => section.roles.includes(m.role));
                    if (filtered.length === 0) return null;

                    return (
                        <div key={section.title} className="mb-40">
                            {/* Centered Large Section Header */}
                            <div className="relative mb-20 flex flex-col items-center justify-center">
                                <motion.h2 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="text-3xl font-black uppercase tracking-tighter text-white md:text-5xl lg:text-6xl text-center"
                                >
                                    {section.title}
                                </motion.h2>
                                
                                {/* Technical Underline Decoration */}
                                <div className="mt-4 flex items-center gap-3">
                                    <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-[#00629B]" />
                                    <div className="h-2 w-2 rotate-45 border border-[#00629B] bg-[#00629B]/20 shadow-[0_0_10px_#00629B]" />
                                    <div className="h-[2px] w-12 bg-gradient-to-l from-transparent to-[#00629B]" />
                                </div>
                                
                                {/* <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.3em] text-[#00629B]/60">
                                    // Section_ID: {section.title.replace(/\s+/g, '_').toUpperCase()}
                                </p> */}
                            </div>

                            {/* Grid Layout */}
                            <div className={`grid gap-8 ${
                                section.size === "small" 
                                ? "mx-auto max-w-4xl grid-cols-1 md:grid-cols-2" 
                                : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                            }`}>
                                {filtered.map((member, i) => (
                                    <MemberCard key={member.name} {...member} index={i} />
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}