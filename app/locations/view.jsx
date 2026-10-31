"use client";

import anime from "animejs";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { cities } from "@/data/locations";

export default function LocationsPage() {
  const [activeCity, setActiveCity] = useState(cities[0].id);
  const city = cities.find((item) => item.id === activeCity);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const animation = anime({
      targets: ".location-feature-card, .location-unconfirmed",
      opacity: [0, 1],
      translateY: [22, 0],
      delay: anime.stagger(90),
      duration: 520,
      easing: "easeOutCubic",
    });
    return () => animation.pause();
  }, [activeCity]);

  return (
      <main id="main">
        <section className="page-hero locations-page-hero">
          <div className="page-hero-image-wrap">
            <Image className="page-hero-image" src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1800&q=85" alt="" fill priority sizes="100vw" />
          </div>
          <div className="page-hero-copy">
            <p className="eyebrow eyebrow-light">Your usual table, or a new favourite</p>
            <h1>Come on<br /><em>over.</em></h1>
            <p>Find a New York Coffee near you and make a little room in your day.</p>
          </div>
          <span className="page-hero-index">FIND YOUR NYC / 02</span>
        </section>
        <section className="locations-page-content">
          <div className="menu-page-intro" data-reveal>
            <p className="eyebrow">Good coffee, close by</p>
            <h2>Pick your<br /><em>part of town.</em></h2>
            <p>Choose a city to see the branch details we could confirm. Call before you visit to check current hours and availability.</p>
          </div>
          <div className="city-switcher city-switcher-large" role="tablist" aria-label="Choose a city">
            {cities.map((item) => (
              <button className={`city-tab${activeCity === item.id ? " is-active" : ""}`} role="tab" aria-selected={activeCity === item.id} key={item.id} onClick={() => setActiveCity(item.id)}>
                {item.label}<span>{String(item.branches.length).padStart(2, "0")}</span>
              </button>
            ))}
          </div>
          <div className="locations-page-grid" key={city.id} aria-live="polite">
            {city.branches.length ? city.branches.map((branch, index) => (
              <article className="location-feature-card" key={branch.name} data-reveal>
                <div className="location-card-top"><span>NEW YORK COFFEE</span><span>{String(index + 1).padStart(2, "0")}</span></div>
                <div className="location-card-content">
                  <p className="eyebrow">{city.label}</p>
                  <h3>{branch.name}</h3>
                  <p>{branch.address}</p>
                  <div className="location-card-meta">
                    <a href={`tel:${branch.tel}`}>{branch.phone} <span>↗</span></a>
                    <span>Hours: please call to confirm</span>
                  </div>
                  <a className="button button-dark" href={branch.maps} target="_blank" rel="noreferrer">Get directions <span>↗</span></a>
                </div>
                <div className="location-card-bottom"><span>GOOD COFFEE. GOOD COMPANY.</span><span>{city.label.toUpperCase()}, PK</span></div>
              </article>
            )) : (
              <article className="location-unconfirmed" data-reveal>
                <span className="pending-stamp">NYC</span>
                <p className="eyebrow">Still looking for the pin</p>
                <h3>Islamabad, we see you.</h3>
                <p>We found an Islamabad listing, but could not confirm the current address or phone. Call our UAN before planning a visit.</p>
                <a className="button button-dark" href="tel:+9221111692692">Call the UAN <span>↗</span></a>
              </article>
            )}
          </div>
          <div className="locations-callout" data-reveal>
            <span>Not sure where to go?</span><p>We’ll help you find your nearest cup.</p>
            <Link href="/contact" className="text-link text-link-dark">Get in touch <span>→</span></Link>
          </div>
        </section>
      </main>
  );
}
