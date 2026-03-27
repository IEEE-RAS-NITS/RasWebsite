import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "About", href: "#" },
  { label: "Members", href: "#" },
  { label: "Projects", href: "#"},
  { label: "Blogs", href: "/blog" }
];

export default function Header() {
  return (
    <header className="sticky top-4 z-50 flex justify-center px-4 nav-load-in">
      <div className="relative w-full max-w-6xl rounded-3xl bg-white px-5 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.18)]">
        <div className="flex items-center justify-between">
        {/* Left: Logo */}
        <Link href="/" className="flex shrink-0 items-center no-underline">
          <div className="rounded-[1.75rem] bg-white px-4 py-2 shadow-[0_0_0_1px_rgba(0,0,0,0.08)]">
            <Image
              src="/logo-ras.png"
              alt="IEEE Robotics and Automation Society"
              width={165}
              height={40}
              priority
              className="h-9 w-auto object-contain"
            />
          </div>
        </Link>

        {/* Center: Navigation */}
        <nav
          className="hidden flex-1 items-center justify-center gap-8 text-xs font-semibold tracking-wide text-gray-900 md:flex"
          aria-label="Main"
        >
          {navItems.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              className="nav-item-load-in relative flex items-center gap-1 uppercase no-underline transition-colors hover:text-gray-600"
              style={{ animationDelay: `${0.25 + index * 0.06}s` }}
            >
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Right: Icons */}
        <div className="flex shrink-0 items-center gap-4 text-gray-900">
          {/* Search */}
          <button
            type="button"
            aria-label="Search"
            className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <circle cx="11" cy="11" r="5" />
              <path d="m16 16 3 3" />
            </svg>
          </button>

          {/* Calendar */}
          <button
            type="button"
            aria-label="Calendar"
            className="hidden h-8 w-8 items-center justify-center rounded-full hover:bg-gray-100 sm:flex"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <rect x="4" y="5" width="16" height="15" rx="2" />
              <path d="M9 3v4M15 3v4M4 10h16" />
            </svg>
          </button>

          {/* Globe */}
          <button
            type="button"
            aria-label="Language"
            className="hidden h-8 w-8 items-center justify-center rounded-full hover:bg-gray-100 sm:flex"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <circle cx="12" cy="12" r="8" />
              <path d="M4 12h16M12 4a12.5 12.5 0 0 1 3 8 12.5 12.5 0 0 1-3 8M12 4a12.5 12.5 0 0 0-3 8 12.5 12.5 0 0 0 3 8" />
            </svg>
          </button>

          {/* Mobile menu trigger */}
          <details className="group relative md:hidden">
            <summary className="flex h-8 w-8 cursor-pointer list-none items-center justify-center rounded-full hover:bg-gray-100">
              <span className="sr-only">Open navigation menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-5 w-5 group-open:hidden"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="hidden h-5 w-5 group-open:block"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M6 6l12 12M18 6l-12 12" />
              </svg>
            </summary>

            <nav
              className="absolute right-0 top-11 w-52 overflow-hidden rounded-2xl border border-gray-200 bg-white py-2 shadow-lg"
              aria-label="Mobile main"
            >
              {navItems.map((item, index) => (
                <Link
                  key={`mobile-${item.label}`}
                  href={item.href}
                  className="nav-item-load-in block px-4 py-2 text-sm font-semibold uppercase tracking-wide text-gray-900 no-underline hover:bg-gray-100"
                  style={{ animationDelay: `${0.12 + index * 0.04}s` }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </details>
        </div>
        </div>
      </div>
    </header>
  );
}
