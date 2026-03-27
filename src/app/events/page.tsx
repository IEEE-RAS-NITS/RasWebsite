import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Events — IEEE RAS (Silchar Subsection)",
  description:
    "Find upcoming events, workshops, and chapter activities by IEEE RAS Silchar Subsection.",
};

export default function EventsPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0A192F" }}>
      <Header />
      <main className="mx-auto max-w-6xl px-4 pt-10 pb-20 text-white">
        <h1 className="text-3xl font-bold md:text-4xl">Events</h1>
        <p className="mt-4 max-w-3xl text-gray-300">
          Track chapter events, workshops, and conference-related activities.
          Event dates, registration details, and updates will appear here.
        </p>
      </main>
      <Footer />
    </div>
  );
}
