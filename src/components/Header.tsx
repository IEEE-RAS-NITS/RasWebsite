import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "About", href: "#" },
  { label: "Members", href: "/members" },
  { label: "Sessions", href: "/sessions" },
  { label: "Projects", href: "#" },
  { label: "Blogs", href: "#" },
];

export default function Header() {
  return (
    <header className="sticky top-4 z-50 flex justify-center px-4">
      <div className="flex w-full max-w-6xl items-center justify-between rounded-3xl bg-white px-5 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.18)]">
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
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="relative flex items-center gap-1 uppercase no-underline transition-colors hover:text-gray-600"
            >
              <span>{item.label}</span>
              {item.hasDropdown && (
                <span className="text-[10px] leading-none text-gray-700">
                  ▾
                </span>
              )}
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
        </div>
      </div>
    </header>
  );
}
