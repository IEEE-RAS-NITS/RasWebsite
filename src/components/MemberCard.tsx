"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface MemberCardProps {
    name: string;
    role: string;
    image: string;
    socials: {
        github?: string;
        linkedin?: string;
        facebook?: string;
        email?: string;
    };
    index: number;
}

export default function MemberCard({ name, role, image, socials, index }: MemberCardProps) {
    const initials = name.split(" ").map((w) => w[0]).join("").toUpperCase().slice(0, 2);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="relative flex flex-col items-center rounded-2xl border border-white/5 px-6 py-10"
            style={{ backgroundColor: "rgba(255,255,255,0.03)" }}
        >
            {/* Avatar */}
            <div className="relative mb-6 h-40 w-40">
                <div
                    className="absolute inset-0 rounded-full"
                    style={{
                        border: "3px solid var(--ras-blue)",
                    }}
                />
                {image ? (
                    <Image
                        src={image}
                        alt={name}
                        width={160}
                        height={160}
                        className="h-full w-full rounded-full object-cover p-[3px]"
                    />
                ) : (
                    <div
                        className="flex h-full w-full items-center justify-center rounded-full text-3xl font-bold text-white/70"
                        style={{ backgroundColor: "var(--ras-blue-dark)", margin: "3px" }}
                    >
                        {initials}
                    </div>
                )}
            </div>

            {/* Name & Role */}
            <h3 className="mb-1 text-lg font-semibold text-white">{name}</h3>
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.15em] text-white/40">
                {role}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-5">
                {socials.github && (
                    <a
                        href={socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${name} GitHub`}
                        className="opacity-40 transition-opacity duration-200 hover:opacity-100"
                    >
                        <Image src="/github.svg" alt="GitHub" width={20} height={20} className="invert" />
                    </a>
                )}
                {socials.linkedin && (
                    <a
                        href={socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${name} LinkedIn`}
                        className="opacity-40 transition-opacity duration-200 hover:opacity-100"
                    >
                        <Image src="/linkedin.svg" alt="LinkedIn" width={20} height={20} className="invert" />
                    </a>
                )}
                {socials.facebook && (
                    <a
                        href={socials.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${name} Facebook`}
                        className="opacity-40 transition-opacity duration-200 hover:opacity-100"
                    >
                        <Image src="/facebook.svg" alt="Facebook" width={20} height={20} className="invert" />
                    </a>
                )}
                {socials.email && (
                    <a
                        href={`mailto:${socials.email}`}
                        aria-label={`${name} Email`}
                        className="opacity-40 transition-opacity duration-200 hover:opacity-100"
                    >
                        <Image src="/envelope.svg" alt="Email" width={20} height={20} className="invert" />
                    </a>
                )}
            </div>
        </motion.div>
    );
}
