import Link from "next/link";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Contact IEEE RAS", href: "#" },
  { label: "Feedback", href: "#" },
  { label: "Terms", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-[var(--ras-blue-dark)] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <Link
              href="/"
              className="text-xl font-bold text-white no-underline"
            >
              IEEE Robotics and Automation Society
            </Link>
            <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-white/90">
              Follow us
            </h3>
            <div className="mt-3 flex gap-4">
              {["LinkedIn", "Facebook", "Instagram", "X", "YouTube"].map(
                (name) => (
                  <a
                    key={name}
                    href="#"
                    className="rounded p-2 text-white/80 hover:bg-white/10 hover:text-white"
                    aria-label={name}
                  >
                    <span className="text-xs">{name}</span>
                  </a>
                )
              )}
            </div>
          </div>
          <nav
            className="flex flex-wrap gap-x-6 gap-y-2"
            aria-label="Footer navigation"
          >
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-white/90 no-underline hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-10 border-t border-white/20 pt-8">
          <p className="max-w-3xl text-sm text-white/80">
            © Copyright 2026 IEEE — All rights reserved. A public charity
            organization, IEEE is the world&apos;s largest technical professional
            organization dedicated to advancing technology for the benefit of
            humanity.
          </p>
        </div>
      </div>
    </footer>
  );
}
