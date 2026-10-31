"use client";

import anime from "animejs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigation = [
  { href: "/menu", label: "The menu" },
  { href: "/our-story", label: "Our story" },
  { href: "/locations", label: "Locations" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <header className={`site-header site-header-inner${menuOpen ? " nav-is-open" : ""}`}>
      <Link className="brand" href="/" aria-label="New York Coffee home">
        <span className="brand-mark" aria-hidden="true">NY</span>
        <span className="brand-name">NEW YORK<br /><b>COFFEE</b></span>
      </Link>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="primary-nav"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className="menu-toggle-label">Menu</span>
        <span className="menu-toggle-icon" aria-hidden="true"><i /><i /></span>
      </button>
      <nav className={`primary-nav${menuOpen ? " is-open" : ""}`} id="primary-nav" aria-label="Main navigation">
        {navigation.map((item) => (
          <Link
            href={item.href}
            key={item.href}
            aria-current={pathname === item.href ? "page" : undefined}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <Link className="button button-small header-order" href="/order">Order &amp; visit <span aria-hidden="true">↗</span></Link>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Link className="brand brand-footer" href="/" aria-label="New York Coffee, home">
        <span className="brand-mark" aria-hidden="true">NY</span>
        <span className="brand-name">NEW YORK<br /><b>COFFEE</b></span>
      </Link>
      <p>Good coffee. Good company.<br />See you soon.</p>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} New York Coffee Pakistan</span>
        <Link href="/locations">Find a café</Link>
        <span>BREW SOMETHING INSPIRING</span>
      </div>
    </footer>
  );
}

export function PageAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return undefined;

    window.scrollTo({ top: 0, behavior: "auto" });
    const context = anime.timeline({ easing: "easeOutCubic" });
    context
      .add({
        targets: ".page-hero .eyebrow, .page-hero h1, .page-hero-copy > p:not(.eyebrow), .page-hero .button, .page-hero .text-link",
        opacity: [0, 1],
        translateY: [28, 0],
        delay: anime.stagger(95),
        duration: 700,
      })
      .add({
        targets: ".page-hero-image",
        scale: [1.08, 1],
        opacity: [0.55, 1],
        duration: 1050,
      }, "-=760");

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        anime({
          targets: entry.target,
          opacity: [0, 1],
          translateY: [30, 0],
          duration: 720,
          easing: "easeOutCubic",
        });
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12 });

    document.querySelectorAll("[data-reveal]").forEach((element) => revealObserver.observe(element));

    return () => {
      context.pause();
      revealObserver.disconnect();
    };
  }, [pathname]);

  return null;
}

export function InnerPageFrame({ children }) {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader />
      {children}
      <SiteFooter />
      <PageAnimations />
    </>
  );
}
