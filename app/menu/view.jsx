"use client";

import anime from "animejs";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { menuCategories, menuDisclaimer } from "@/data/menu";
import MenuOverviewChart from "@/components/menu-overview-chart";

export default function MenuView() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);
  const [query, setQuery] = useState("");
  const category = menuCategories.find((item) => item.id === activeCategory);
  const filteredItems = useMemo(
    () => category.items.filter((item) => item.name.toLowerCase().includes(query.trim().toLowerCase())),
    [category, query],
  );

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const animation = anime({
      targets: ".menu-static-card",
      opacity: [0, 1],
      translateY: [18, 0],
      delay: anime.stagger(45),
      duration: 450,
      easing: "easeOutCubic",
    });
    return () => animation.pause();
  }, [activeCategory, query]);

  return (
    <section className="menu-page-content mx-auto w-full">
      <div className="menu-page-intro" data-reveal>
        <p className="eyebrow">Take your pick</p>
        <h2>Today feels like<br /><em>a coffee kind of day.</em></h2>
        <p>Choose a category or search the menu. Prices and Pakistan-specific availability haven’t been supplied, so we haven’t guessed.</p>
      </div>
      <MenuOverviewChart />
      <div className="menu-page-controls">
        <div className="menu-tabs menu-page-tabs" role="tablist" aria-label="Menu categories">
          {menuCategories.map((item) => (
            <button className={`menu-tab${activeCategory === item.id ? " is-active" : ""}`} role="tab" aria-selected={activeCategory === item.id} key={item.id} onClick={() => setActiveCategory(item.id)}>
              {item.label}
            </button>
          ))}
        </div>
        <label className="menu-search">
          <span aria-hidden="true">⌕</span>
          <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Find your favourite" aria-label="Search menu items" />
        </label>
      </div>
      <div className="menu-page-heading" data-reveal>
        <div><p className="eyebrow">{category.label}</p><h2>{category.needsClientData ? "Coming to the table" : "Find your favourite."}</h2></div>
        <span>{category.items.length ? `${filteredItems.length} ITEMS` : "MORE SOON"}</span>
      </div>
      {category.needsClientData ? (
        <div className="menu-data-pending" data-reveal>
          <span className="pending-stamp">NYC</span>
          <div><h3>We’re saving you a seat.</h3><p>We’re waiting for the confirmed Pakistan menu, photos and prices for this category. Ask your local café for today’s selection.</p></div>
        </div>
      ) : filteredItems.length ? (
        <div className="menu-grid menu-full-grid grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4" aria-live="polite">
          {filteredItems.map((item, index) => (
            <article className="menu-card menu-static-card" key={`${category.id}-${item.name}-${index}`} data-reveal>
              <div className="menu-card-image"><Image src={item.image} alt="" fill sizes="(max-width: 640px) 50vw, 25vw" /><span className="menu-card-arrow" aria-hidden="true">✦</span></div>
              <div className="menu-card-info"><h3>{item.name}</h3><span>{category.label}</span></div>
            </article>
          ))}
        </div>
      ) : <p className="empty-menu">No menu items match “{query}”. Try another search.</p>}
      <p className="menu-note menu-page-note">{menuDisclaimer}</p>
    </section>
  );
}
