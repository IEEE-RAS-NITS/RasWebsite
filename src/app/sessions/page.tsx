import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { sessions } from "@/data/sessions";

export const metadata: Metadata = {
  title: "Sessions — IEEE RAS (Silchar Subsection)",
  description:
    "Previous and upcoming Google Meet and IEEE Distinguished Lecture sessions by IEEE RAS Silchar Subsection.",
};

export default function SessionsPage() {
  const upcoming = sessions.filter((s) => s.isUpcoming);
  const past = sessions.filter((s) => !s.isUpcoming);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0A192F" }}>
      <Header />
      <main className="mx-auto max-w-6xl px-4 pt-10 pb-20 text-white">
        <header className="mb-10">
          <h1 className="text-3xl font-bold md:text-4xl">
            Sessions &amp; Distinguished Lectures
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-gray-300 md:text-base">
            Explore upcoming Google Meet sessions and IEEE Distinguished
            Lectures, along with recordings and LinkedIn posts from previous
            events.
          </p>
        </header>

        {upcoming.length > 0 && (
          <section className="mb-12">
            <div className="mb-4 flex items-center justify-between gap-3">
              <h2 className="text-xl font-semibold text-[var(--ras-gold)] md:text-2xl">
                Upcoming Sessions
              </h2>
              <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
                Live &amp; scheduled events
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {upcoming.map((session) => (
                <SessionCard key={session.id} variant="upcoming" session={session} />
              ))}
            </div>
          </section>
        )}

        {past.length > 0 && (
          <section>
            <div className="mb-4 flex items-center justify-between gap-3">
              <h2 className="text-xl font-semibold text-white md:text-2xl">
                Previous Sessions
              </h2>
              <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
                Recordings &amp; social posts
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {past.map((session) => (
                <SessionCard key={session.id} variant="past" session={session} />
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}

type SessionVariant = "upcoming" | "past";

type SessionCardProps = {
  session: (typeof sessions)[number];
  variant: SessionVariant;
};

function SessionCard({ session, variant }: SessionCardProps) {
  const isUpcoming = variant === "upcoming";

  return (
    <article className="overflow-hidden rounded-xl border border-white/10 bg-[#0f2138] shadow-lg shadow-black/30">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={session.posterImage}
          alt={session.title}
          fill
          className="object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute left-4 top-4 inline-flex items-center rounded-full bg-[var(--ras-blue)]/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
          {session.mode} • {session.platform}
        </div>
      </div>

      <div className="space-y-3 p-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--ras-gold)]">
              {session.date} · {session.time}
            </p>
            {session.location && (
              <p className="mt-1 text-xs text-gray-300">{session.location}</p>
            )}
          </div>
          <span
            className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${
              isUpcoming
                ? "bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/40"
                : "bg-gray-500/15 text-gray-300 ring-1 ring-gray-500/40"
            }`}
          >
            {isUpcoming ? "Upcoming" : "Completed"}
          </span>
        </div>

        <h3 className="text-lg font-semibold text-white md:text-xl">
          {session.title}
        </h3>
        <p className="text-sm leading-relaxed text-gray-300">
          {session.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {session.linkedinUrl && (
            <Link
              href={session.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-[var(--ras-blue)] no-underline hover:bg-gray-100"
            >
              <span>LinkedIn post</span>
            </Link>
          )}

          {session.meetUrl && (
            <Link
              href={session.meetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-400/70 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-200 no-underline hover:bg-emerald-500/20"
            >
              <span>{isUpcoming ? "Join via Google Meet" : "Meet link"}</span>
            </Link>
          )}

          {session.youtubeUrl && (
            <Link
              href={session.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-red-500/70 bg-red-500/10 px-3 py-1.5 text-xs font-medium text-red-200 no-underline hover:bg-red-500/20"
            >
              <span>{isUpcoming ? "Watch live on YouTube" : "Watch on YouTube"}</span>
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}

