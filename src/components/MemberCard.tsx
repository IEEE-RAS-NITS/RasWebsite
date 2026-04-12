"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface MemberCardProps {
    name: string;
    role: string;
    image?: string;
    socials: {
        github?: string;
        linkedin?: string;
        facebook?: string;
        email?: string;
    };
    index: number;
}

export default function MemberCard({
    name,
    role,
    image,
    socials,
    index,
}: MemberCardProps) {
    const initials = name
        .split(" ")
        .map((w) => w[0])
        .join("")
        .toUpperCase()
        .slice(0, 2);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="group relative overflow-hidden rounded-xl border border-white/10 backdrop-blur-md p-6"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.07)" }}
        >
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 h-2 w-2 border-t border-l border-amber-300 group-hover:scale-150 transition-transform" />
            <div className="absolute bottom-0 right-0 h-2 w-2 border-b border-r border-amber-300 group-hover:scale-150 transition-transform" />

            {/* Avatar Section */}
            <div className="relative mx-auto mb-6 h-32 w-32 shrink-0">
                <div className="absolute inset-0 rounded-full border border-amber-300/30 group-hover:border-amber-300 transition-colors duration-500" />

                {/* Scanner Line */}
                <motion.div
                    animate={{ top: ["0%", "100%", "0%"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 right-0 z-10 h-[2px] bg-amber-300 opacity-0 group-hover:opacity-50"
                />

                <div className="h-full w-full overflow-hidden rounded-full p-2">
                    {image ? (
                        <Image
                            src={image}
                            alt={name}
                            width={128}
                            height={128}
                            className="h-full w-full rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                    ) : (
                        <div
                            className="flex h-full w-full items-center justify-center rounded-full text-2xl font-mono font-bold text-amber-200"
                            style={{ backgroundColor: "rgba(163, 89, 40, 0.4)" }}
                        >
                            {initials}
                        </div>
                    )}
                </div>
            </div>

            {/* Content */}
            <div className="text-center">
                <h3 className="text-lg font-bold tracking-tight text-white group-hover:text-amber-200 transition-colors">
                    {name}
                </h3>
                <p className="mt-1 text-[10px] font-mono uppercase tracking-widest text-amber-300">
                    {role}
                </p>

                {/* Divider */}
                <div className="my-4 h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                {/* Socials */}
                <div className="flex justify-center gap-4">
                    {["linkedin", "github", "facebook", "email"].map((platform) => {
                        const url = socials[platform as keyof typeof socials];
                        return url ? (
                            <a
                                key={platform}
                                href={
                                    platform === "email"
                                        ? `mailto:${url}`
                                        : url
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/40 hover:text-white transition-colors"
                            >
                                <span className="sr-only">{platform}</span>
                                <div className="h-5 w-5 rounded-sm flex items-center justify-center p-1 bg-white/10 hover:bg-amber-600 transition-colors">
                                    <img
                                        src={platform === "email" ? "/envelope.svg" : `/${platform}.svg`}
                                        alt=""
                                        className="invert opacity-80"
                                    />
                                </div>
                            </a>
                        ) : null;
                    })}
                </div>
            </div>
        </motion.div>
    );
}