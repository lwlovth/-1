"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface-bg/80 backdrop-blur-xl border-b border-surface-border shadow-card"
          : "bg-transparent"
      }`}
    >
      <div className="section-inner flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-xl bg-brand-gradient flex items-center justify-center text-white font-black text-sm">
            Y
          </span>
          <span className="font-bold text-ink-primary text-body-md tracking-tight hidden sm:block">
            YJ<span className="text-brand-primary">.</span>dev
          </span>
        </a>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            ["문제", "#problem"],
            ["서비스", "#services"],
            ["후기", "#testimonials"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-body-sm font-medium text-ink-secondary hover:text-ink-primary transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a href="#cta" className="btn-primary py-2.5 px-5 text-body-sm">
          무료 상담 →
        </a>
      </div>
    </header>
  );
}
