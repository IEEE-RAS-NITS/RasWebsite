import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MembersGrid from "@/components/MembersGrid";

export const metadata: Metadata = {
    title: "Members — IEEE RAS (Silchar Subsection)",
    description: "Meet the members of IEEE Robotics and Automation Society, Silchar Subsection.",
};

export default function MembersPage() {
    return (
        <div className="min-h-screen" style={{ background: "linear-gradient(90deg, #A35928 0%, #700B4F 94%)" }}>
            <Header />
            <main className="pt-20 pb-16">
                <MembersGrid />
            </main>
            <Footer />
        </div>
    );
}