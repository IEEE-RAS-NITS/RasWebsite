import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Projects — IEEE RAS (Silchar Subsection)",
  description:
    "Explore robotics and automation projects from IEEE RAS Silchar Subsection.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0A192F" }}>
      <Header />
      <main className="mx-auto max-w-6xl px-4 pt-10 pb-20 text-white">
        <h1 className="text-3xl font-bold md:text-4xl">Projects</h1>
        <p className="mt-4 max-w-3xl text-gray-300">
          This page lists ongoing and completed projects from chapter members,
          including autonomous systems, embedded robotics, and applied
          automation work.
        </p>
      </main>
      <Footer />
    </div>
  );
}
