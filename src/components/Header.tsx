"use client";

import Link from "next/link";
import { useState } from "react";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Members", href: "/members" },
  { label: "Projects", href: "/projects" },
  { label: "Blogs", href: "/blog" },
  { label: "Learning", href: "/learning" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img src="/RAS_LOGO.svg" alt="logo" className="h-10" />
          </Link>

          {/* Nav + Social (Desktop only) */}
          <div className="hidden md:flex items-center gap-12">
            
            {/* Navigation */}
            <nav className="flex items-center gap-8" aria-label="Main">
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
              <a href="https://www.linkedin.com/company/ieee-ras-silchar-subsection/posts/?feedView=all" className="p-2 rounded-full hover:bg-gray-100 transition">
                <FaLinkedinIn size={18} color="#0077B5" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100091380648276&mibextid=rS40aB7S9Ucbxw6v" className="p-2 rounded-full hover:bg-gray-100 transition">
                <FaFacebookF size={18} color="#1877F2" />
              </a>
              <a href="https://www.instagram.com/ieee_ras.nits?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="p-2 rounded-full hover:bg-gray-100 transition">
                <FaInstagram size={18} color="#C13584" />
              </a>
              <a href="https://www.youtube.com/@rasieeesilcharsubsection" className="p-2 rounded-full hover:bg-gray-100 transition">
                <FaYoutube size={18} color="#FF0000" />
              </a>
            </div>
          </div>

          {/* Hamburger (Mobile only) */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden text-gray-700"
          >
            <FaBars size={22} />
          </button>
        </div>
      </header>

      {/* Sidebar Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <div className="flex justify-end p-4">
          <button onClick={() => setIsOpen(false)}>
            <FaTimes size={20} />
          </button>
        </div>

        {/* Nav Items */}
        <nav className="flex flex-col gap-6 px-6 mt-4">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-gray-700 hover:text-[var(--ras-blue)] transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex gap-4 px-6 mt-8">
          <a className="p-2 rounded-full bg-gray-100">
            <FaLinkedinIn size={18} color="#0077B5" />
          </a>
          <a className="p-2 rounded-full bg-gray-100">
            <FaFacebookF size={18} color="#1877F2" />
          </a>
          <a className="p-2 rounded-full bg-gray-100">
            <FaInstagram size={18} color="#C13584" />
          </a>
          <a className="p-2 rounded-full bg-gray-100">
            <FaYoutube size={18} color="#FF0000" />
          </a>
        </div>
      </div>
    </>
  );
}