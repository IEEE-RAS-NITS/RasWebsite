import Link from "next/link";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Members", href: "/members" },
  { label: "Projects", href: "/projects"},
  { label: "Blogs", href: "/blog" },
  { label: "Learning", href: "/learning"}
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4">
        <Link
          href="/"
          className="text-s  font-bold text-[var(--ras-blue)] no-underline"
        >
          <img src="/RAS_LOGO.svg" alt="logo" style={{"height": "40px"}}/>
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-gray-700 no-underline hover:text-[var(--ras-blue)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
