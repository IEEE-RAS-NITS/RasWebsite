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

    const facultyInCharge = members.filter((member) =>
        member.role.toLowerCase().includes("faculty") ||
        member.role.toLowerCase().includes("advisor") ||
        member.role.toLowerCase().includes("in charge")
    );

    const coreRoles = ["chair", "vice chair", "treasurer"];
    const coreTeam = members.filter((member) =>
        coreRoles.some((role) => member.role.toLowerCase().includes(role))
    );

    const generalMembers = members.filter((member) => {
        const role = member.role.toLowerCase();
        const isFaculty =
            role.includes("faculty") || role.includes("advisor") || role.includes("in charge");
        const isCore = coreRoles.some((coreRole) => role.includes(coreRole));
        return !isFaculty && !isCore;
    });

    const groupedMembers = [
        {
            title: "Faculty In Charge",
            subtitle: "Guiding mentorship and vision",
            members: facultyInCharge,
        },
        {
            title: "Leadership Team",
            subtitle: "Chair, Vice Chair and Treasurer",
            members: coreTeam,
        },
        {
            title: "Members",
            subtitle: "Builders, researchers and contributors",
            members: generalMembers,
        },
    ];

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
                <h1 className="mb-3 text-4xl font-bold tracking-tight text-sky-950 sm:text-5xl">
                    Our Members
                </h1>
                <p className="text-base text-sky-900/70 sm:text-lg">
                    Meet the team driving innovation in robotics and automation
                </p>
            </motion.div>

            <div className="mx-auto flex max-w-7xl flex-col gap-10">
                {groupedMembers.map((group, groupIndex) => (
                    <motion.section
                        key={group.title}
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: groupIndex * 0.08, ease: [0.22, 1, 0.36, 1] }}
                        className="rounded-3xl border border-sky-300/70 p-6 shadow-[0_20px_48px_-28px_rgba(14,116,144,0.35)] sm:p-8"
                        style={{
                            background:
                                "radial-gradient(125% 120% at 0% 0%, rgba(186,230,253,0.95) 0%, rgba(224,242,254,0.9) 46%, rgba(243,249,255,0.95) 100%)",
                        }}
                    >
                        <div className="mb-6 flex items-start justify-between gap-4">
                            <div>
                                <h2 className="text-2xl font-semibold text-sky-950 sm:text-3xl">{group.title}</h2>
                                <p className="mt-1 text-sm text-sky-900/70 sm:text-base">{group.subtitle}</p>
                            </div>
                            <span className="rounded-full border border-sky-300 bg-white/55 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-900/80">
                                {group.members.length} {group.members.length === 1 ? "profile" : "profiles"}
                            </span>
                        </div>

                        {group.members.length > 0 ? (
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {group.members.map((member, index) => (
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
                        ) : (
                            <div className="rounded-2xl border border-dashed border-sky-300 px-6 py-10 text-center text-sm text-sky-900/60 sm:text-base">
                                No profiles added yet for this section.
                            </div>
                        )}
                    </motion.section>
                ))}
            </div>
        </section>
    );
}
