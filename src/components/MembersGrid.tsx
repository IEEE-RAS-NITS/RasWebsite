"use client";

import { motion } from "framer-motion";
import MemberCard from "./MemberCard";
import membersData from "@/data/members.json";

interface Member {
    name: string;
    role: string;
    image: string;
    socials: {
        github?: string;
        linkedin?: string;
        facebook?: string;
        email?: string;
    };
}

export default function MembersGrid() {
    const members: Member[] = membersData.members;

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
            {/* Section Title */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="mx-auto mb-16 max-w-3xl text-center"
            >
                <h1 className="mb-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                    Our Members
                </h1>
                <p className="text-base text-white/50 sm:text-lg">
                    Meet the team driving innovation in robotics and automation
                </p>
            </motion.div>

            {/* Members Grid */}
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {members.map((member, index) => (
                    <MemberCard
                        key={member.name}
                        name={member.name}
                        role={member.role}
                        image={member.image}
                        socials={member.socials}
                        index={index}
                    />
                ))}
            </div>
        </section>
    );
}
