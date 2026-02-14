import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-[var(--ras-blue-light)] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold text-[var(--ras-blue)] md:text-4xl">
            IEEE Robotics and Automation Society
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            The leading organization in research and technological developments
            in robotics and automation worldwide.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="#"
              className="inline-flex items-center rounded border border-[var(--ras-blue)] bg-transparent px-6 py-3 text-sm font-semibold text-[var(--ras-blue)] no-underline hover:bg-[var(--ras-blue)] hover:text-white"
            >
              About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
