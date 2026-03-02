"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const contactLinks = [
  { label: "Home", href: "/" },
  { label: "Contact", href: "#" },
  { label: "Feedback", href: "#" },
  { label: "Terms", href: "#" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0A192F' }} className="text-white py-24 px-6 md:px-12 border-t border-white/5 font-sans overflow-hidden">
      <div className="mx-auto max-w-screen-2xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
          {/* Logo and Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-8 flex flex-col items-start"
          >
            <div className="flex items-center gap-6 mb-8">
              <Image
                src="/logo-ras.png"
                alt="IEEE RAS Logo"
                width={373}
                height={135}
                className="h-24 w-auto"
                priority
              />
            </div>

            <p className="text-white/60 max-w-lg text-base md:text-lg leading-relaxed mb-10 font-medium">
              We are a community dedicated to the advancement of innovation, education, and fundamental research in robotics and automation to benefit humanity.
            </p>

            <div className="flex gap-6">
              {["LinkedIn", "X", "YouTube"].map((name) => (
                <a
                  key={name}
                  href="#"
                  className="text-white/40 hover:text-white transition-colors duration-300"
                  aria-label={name}
                >
                  <span className="text-sm font-bold uppercase tracking-widest">{name}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Links Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-4 flex flex-col md:items-end justify-start pt-2"
          >
            <div className="flex flex-col space-y-6 md:text-right w-full md:w-auto">
              <nav aria-label="Footer navigation" className="flex flex-col space-y-4">
                {contactLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-white/70 hover:text-white transition-all duration-300 text-base md:text-lg font-medium group flex items-center md:justify-end gap-2"
                  >
                    <span className="relative overflow-hidden">
                      <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">{link.label}</span>
                      <span className="absolute inset-0 inline-block transition-transform duration-300 translate-y-full group-hover:translate-y-0 text-white">{link.label}</span>
                    </span>
                  </Link>
                ))}
              </nav>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.4 }}
          className="mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/40 font-medium tracking-wide"
        >
          <p>© {new Date().getFullYear()} IEEE. All rights reserved.</p>
          <p className="text-center md:text-right">A public charity organization, IEEE is the world's largest technical <br className="hidden md:block" /> professional organization dedicated to advancing technology.</p>
        </motion.div>
      </div>
    </footer>
  );
}
