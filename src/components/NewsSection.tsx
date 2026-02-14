import Link from "next/link";

const newsItems = [
  { title: "Title 1", description: "Description 1" },
  { title: "Title 2", description: "Description 2" },
  { title: "Title 3", description: "Description 3" },
];

export default function NewsSection() {
  return (
    <section className="border-t border-gray-200 bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-2xl font-bold text-gray-900">Latest News</h2>
          <Link
            href="#"
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
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm"
            >
              <div className="aspect-[4/3] w-full bg-gray-200" aria-hidden>
                {/* Photo card placeholder - no image */}
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900">
                  <Link
                    href="#"
                    className="no-underline hover:text-[var(--ras-blue)]"
                  >
                    {item.title}
                  </Link>
                </h3>
                <p className="mt-2 text-sm text-gray-500">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
