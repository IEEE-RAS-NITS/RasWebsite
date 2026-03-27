import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "About — IEEE RAS (Silchar Subsection)",
  description:
    "Learn about the IEEE Robotics and Automation Society, Silchar Subsection.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0A192F" }}>
      <Header />
      <main className="mx-auto max-w-5xl px-4 pt-10 pb-20 text-white">
        <h1 className="text-3xl font-bold md:text-4xl">About IEEE RAS</h1>
        <p className="mt-4 max-w-3xl text-gray-300">
          IEEE Robotics and Automation Society advances research, development,
          and knowledge exchange in robotics and automation. The Silchar
          Subsection chapter hosts technical sessions, collaborative projects,
          and student activities to connect members with industry and academia.
        </p>
      </main>
      <Footer />
    </div>
  );
}
