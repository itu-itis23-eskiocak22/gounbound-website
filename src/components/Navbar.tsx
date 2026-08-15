"use client";

import { useState, useEffect } from "react";
import { Logo } from "./Logo";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Community", href: "#community" },
  {
    label: "For Partners",
    href: "#partners",
    badge: "COMING SOON",
  },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass border-b border-sand/40 shadow-sm"
            : "bg-transparent"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              <Logo color={scrolled ? "forest" : "forest"} />
            </a>

            {/* Center Links */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="relative text-text-secondary hover:text-forest font-medium text-[0.9375rem] transition-colors duration-300"
                >
                  {link.label}
                  {link.badge && (
                    <span className="absolute -top-2 -right-16 text-[0.6rem] font-bold tracking-wider bg-sage/15 text-sage px-1.5 py-0.5 rounded-full whitespace-nowrap">
                      {link.badge}
                    </span>
                  )}
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:block">
              <a href="#waitlist" className="btn-primary text-sm py-3 px-6">
                Join Waitlist
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <span
                className={`w-6 h-0.5 bg-text-primary transition-all duration-300 ${
                  mobileOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-text-primary transition-all duration-300 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-text-primary transition-all duration-300 ${
                  mobileOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 lg:hidden ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-sand/95 backdrop-blur-xl"
          onClick={() => setMobileOpen(false)}
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="heading-section text-3xl text-forest hover:text-sage transition-colors"
            >
              {link.label}
              {link.badge && (
                <span className="ml-3 text-xs font-sans font-bold tracking-wider bg-sage/15 text-sage px-2 py-1 rounded-full">
                  {link.badge}
                </span>
              )}
            </a>
          ))}
          <a
            href="#waitlist"
            onClick={() => setMobileOpen(false)}
            className="btn-primary mt-4 text-base px-10 py-4"
          >
            Join Waitlist
          </a>
        </div>
      </div>
    </>
  );
}
