import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Speaker Sessions — IEEE RAS (Silchar Subsection)",
  description:
    "Browse speaker sessions conducted by IEEE RAS Silchar Subsection.",
};

export default function SpeakerSessionsPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0A192F" }}>
      <Header />
      <main className="mx-auto max-w-6xl px-4 pt-10 pb-20 text-white">
        <h1 className="text-3xl font-bold md:text-4xl">Speaker Sessions</h1>
        <p className="mt-4 max-w-3xl text-gray-300">
          View invited talks and expert sessions featuring researchers and
          professionals in robotics and automation.
        </p>
      </main>
      <Footer />
    </div>
  );
}
