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
        <div className="min-h-screen" style={{ backgroundColor: "#0A192F" }}>
            <Header />
            <main className="pt-20 pb-16">
                <MembersGrid />
            </main>
            <Footer />
        </div>
    );
}