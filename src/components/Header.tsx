"use client";

import Link from "next/link";
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Members", href: "/members" },
  { label: "Projects", href: "/projects" },
  { label: "Blogs", href: "/blog" },
  { label: "Learning", href: "/learning" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img src="/RAS_LOGO.svg" alt="logo" className="h-10" />
        </Link>

        {/* Nav + Social */}
        <div className="flex items-center gap-12"> {/* increased gap */}
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-[var(--ras-blue)] transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-100 transition"
            >
              <FaLinkedinIn size={18} color="#0077B5" />
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-100 transition"
            >
              <FaFacebookF size={18} color="#1877F2" />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-100 transition"
            >
              <FaInstagram size={18} color="#C13584" />
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-100 transition"
            >
              <FaYoutube size={18} color="#FF0000" />
            </a>
          </div>

        </div>
      </div>
    </header>
  );
}