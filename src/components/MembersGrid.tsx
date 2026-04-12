"use client";

import { motion } from "framer-motion";
import MemberCard from "./MemberCard";
import membersData from "@/data/members.json";

const SECTIONS = [
    { title: "Faculty Mentors", roles: ["Faculty In-Charge"], size: "small" },
    { title: "The Board", roles: ["Chairman", "Vice Chairman"], size: "small" },
    { title: "Executive Core", roles: ["General Secretary", "Treasurer", "Research Head", "Academic & Research Secretary", "Head of Social Media", "Moderator"], size: "large" },
    { title: "Junior Division", roles: ["Member"], size: "large" }
];

export default function MembersGrid() {
    return (
        <section className="relative min-h-screen px-4 py-20 overflow-hidden">
            {/* Background Glows — warm amber & rose */}
            <div className="pointer-events-none absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-amber-400/10 blur-[120px]" />
            <div className="pointer-events-none absolute bottom-0 right-1/4 h-[500px] w-[500px] rounded-full bg-rose-400/10 blur-[120px]" />

            <div className="relative mx-auto max-w-7xl">
                {/* Main Page Title */}
                <div className="mb-32 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block rounded-full border border-amber-300/30 bg-amber-400/10 px-4 py-1 mb-6"
                    >
                        <span className="text-[10px] font-mono font-bold uppercase tracking-[0.5em] text-amber-200">
                            System Status: Operational
                        </span>
                    </motion.div>
                    <motion.h1
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="text-6xl font-black tracking-tighter text-white md:text-8xl lg:text-9xl uppercase"
                    >
                        OUR <span className="text-amber-200">TEAM</span>
                    </motion.h1>
                </div>

                {SECTIONS.map((section) => {
                    const filtered = membersData.members.filter(m => section.roles.includes(m.role));
                    if (filtered.length === 0) return null;

                    return (
                        <div key={section.title} className="mb-40">
                            {/* Centered Section Header */}
                            <div className="relative mb-20 flex flex-col items-center justify-center">
                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="text-3xl font-black uppercase tracking-tighter text-white md:text-5xl lg:text-6xl text-center"
                                >
                                    {section.title}
                                </motion.h2>

                                {/* Warm Underline Decoration */}
                                <div className="mt-4 flex items-center gap-3">
                                    <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-amber-300" />
                                    <div className="h-2 w-2 rotate-45 border border-amber-300 bg-amber-300/20 shadow-[0_0_10px_rgba(253,230,138,0.4)]" />
                                    <div className="h-[2px] w-12 bg-gradient-to-l from-transparent to-amber-300" />
                                </div>
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