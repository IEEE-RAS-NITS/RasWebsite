"use client";

import Link from "next/link";

const newsItems = [
  {
    id: 1,
    title: "Kyujin Cho Elected as IEEE RAS President for 2028–2029 Term",
    date: "25 March 2026",
    description:
      "Please join us in congratulating Kyujin on this well-deserved appointment!",
    image:
      "https://www.ieee-ras.org/wp-content/smush-webp/2026/03/Kyujin-President-elect-announcement.png.webp", // replace later
    link: "https://www.ieee-ras.org/kyujin-cho-elected-as-ieee-ras-president-for-2028-2029-term/", // 🔥 replace with real IEEE link later
    tags: ["RAS News"],
  },
  {
    id: 2,
    title:
      "[RAS-TAB] Industry Connection with ICRA 2026 Workshops with Travel Support",
    date: "26 March 2026",
    description:
      "We are excited to invite your startup to participate in ICRA 2026 workshops through a new initiative designed to foster collaboration between startups, academia, and industry leaders.",
    image:
      "https://www.ieee-ras.org/wp-content/smush-webp/2026/03/Website-Latest-News-Images-3-1024x581.png.webp",
    link: "https://www.ieee-ras.org/ras-tab-industry-connection-with-icra-2026-workshops-with-travel-support/",
    tags: ["RAS News", "TAB News"],
  },
  {
    id: 3,
    title: "Call for ICRA 2026 Science Communication Ambassadors",
    date: "31 March 2026",
    description:
      "The Robotics and Automation Society (RAS) Media Services Board is searching for Science Communication ambassadors for the upcoming 2026 IEEE International Conference on Robotics & Automation (ICRA).",
    image:
      "	https://www.ieee-ras.org/wp-content/smush-webp/2026/03/2026-ICRA-ambassadors.png.webp",
    link: "https://www.ieee-ras.org/wp-content/smush-webp/2026/03/Website-Latest-News-Images-3-1024x581.png.webp",
    tags: ["RAS News"],
  },
];

export default function NewsSection() {
  return (
    <section className="border-t border-gray-200 bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4">
        
        {/* Header */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-2xl font-bold text-gray-900">Latest News</h2>

          <Link
            href="https://www.ieee-ras.org/about-ras/latest-news/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--ras-blue)] px-4 py-2 text-sm font-medium text-[var(--ras-blue)] no-underline hover:bg-[var(--ras-blue)] hover:text-white"
          >
            All News
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* News Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
            >
              {/* Image */}
              <div className="aspect-[4/3] w-full overflow-hidden bg-gray-200">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-fit transition duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Tags */}
                <div className="mb-2 flex flex-wrap gap-2">
                  {item.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="rounded-full border px-3 py-1 text-xs font-medium text-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[var(--ras-blue)]">
                  {item.title}
                </h3>

                {/* Date */}
                <p className="mt-2 text-sm text-gray-500">{item.date}</p>

                {/* Description */}
                <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                  {item.description}
                </p>

                {/* Read More */}
                <div className="mt-4 text-sm font-medium text-[var(--ras-blue)]">
                  Read more →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}