import Link from "next/link";

const cards = [
  {
    title: "Speaker Sessions",
    description:
      "Regular speaker sessions with relevant people working in the field of robotics and automation.",
    href: "#",
  },
  {
    title: "Projects",
    description:
      "Development of innovative projects solving real-world problems.",
    href: "#",
  },
  {
    title: "Events",
    description:
      "Access information on RAS conferences, including venues, deadlines, sponsorship types, and event updates.",
    href: "#",
  },
];

function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="18"
      viewBox="0 0 20 18"
      fill="none"
      className="shrink-0"
    >
      <path
        d="M11.5 1.77L17.79 8.25H0.44V9.66H17.79L11.5 16.14L12.46 17.13L18.89 10.51C19.29 10.09 19.51 9.54 19.51 8.95C19.51 8.37 19.29 7.81 18.89 7.4L12.46 0.78L11.5 1.77Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function IconCards() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group flex flex-col rounded-lg border border-gray-200 bg-white p-6 no-underline shadow-sm transition hover:border-[var(--ras-blue)] hover:shadow-md"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border-2 border-[var(--ras-blue)] bg-white text-[var(--ras-blue)]">
                <ArrowIcon />
              </div>
              <h2 className="text-lg font-semibold text-gray-900 group-hover:text-[var(--ras-blue)]">
                {card.title}
              </h2>
              <p className="mt-2 flex-1 text-sm text-gray-600">
                {card.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[var(--ras-blue)]">
                Learn more
                <ArrowIcon />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
