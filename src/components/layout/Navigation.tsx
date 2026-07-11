"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Download, Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/data/site-config";
import { useActiveSection } from "@/lib/hooks/useActiveSection";
import { cn } from "@/lib/utils";

// Computed once at module scope so useActiveSection receives a stable
// array reference — not a new array literal on every render.
const sectionIds = navLinks.map((link) => link.href.slice(1));

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection(sectionIds);

  // Transparent-over-hero, solid once scrolled — UX Spec, Section 1.
  // rAF-throttled scroll listener so this doesn't do work on every scroll
  // event, just once per animation frame.
  useEffect(() => {
    let ticking = false;

    const updateScrollState = () => {
      setIsScrolled(window.scrollY > 24);
      ticking = false;
    };

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(updateScrollState);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // If the viewport grows back to desktop width while the mobile menu is
  // open, close it — avoids a stuck-open panel behind the desktop nav.
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-300 ease-signature",
        isScrolled
          ? "border-b border-hairline bg-cream/95 backdrop-blur-sm"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10 lg:px-20"
      >
        <Link href="/" className="font-display text-lg font-semibold text-charcoal">
          {siteConfig.name}
        </Link>

        {/* Desktop links + résumé CTA */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "location" : undefined}
                className={cn(
                  "text-sm font-medium underline-offset-4 transition-colors hover:text-gold-dark hover:underline",
                  isActive ? "text-gold-dark underline" : "text-charcoal"
                )}
              >
                {link.label}
              </a>
            );
          })}
          <a
            href={siteConfig.resumeUrl}
            download
            className="inline-flex items-center gap-1.5 rounded-card bg-charcoal px-4 py-2 text-sm font-semibold text-cream transition-all duration-200 ease-signature hover:bg-charcoal-dark motion-safe:hover:-translate-y-0.5"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Résumé
          </a>
        </div>

        {/* Mobile: résumé stays visible at all times — never hidden inside
            the hamburger menu, per UX Spec Section 1. */}
        <div className="flex items-center gap-3 md:hidden">
          <a
            href={siteConfig.resumeUrl}
            download
            className="inline-flex items-center gap-1.5 rounded-card bg-charcoal px-3 py-2 text-sm font-semibold text-cream"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Résumé
          </a>
          <button
            type="button"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className="rounded-card p-2 text-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-dark"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div id="mobile-menu" className="border-t border-hairline bg-cream px-6 pb-6 pt-2 md:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block rounded-card px-3 py-3 text-base font-medium text-charcoal hover:bg-beige"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
