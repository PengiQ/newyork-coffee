"use client";

import anime from "animejs";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { PageAnimations } from "@/components/site-shell";

const menuData = {
  signature: [
    { name: "The Melting Pot", image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=700&q=80", note: "Signature" },
    { name: "Queens", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=700&q=80", note: "Signature" },
    { name: "Manhattan Special", image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=700&q=80", note: "Signature" },
    { name: "Greatest of All Time", image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=700&q=80", note: "Signature" },
  ],
  espresso: [
    { name: "Americano", image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=700&q=80", note: "Espresso hot" },
    { name: "Cappuccino", image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=700&q=80", note: "Espresso hot" },
    { name: "Caramel Macchiato", image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=700&q=80", note: "Espresso hot" },
    { name: "Spanish Latte", image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=700&q=80", note: "Espresso iced" },
    { name: "Cortado", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=700&q=80", note: "Espresso hot" },
    { name: "Flat White", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=700&q=80", note: "Espresso hot" },
    { name: "Mocha Dark & White", image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=700&q=80", note: "Espresso" },
    { name: "Latte", image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=700&q=80", note: "Espresso" },
  ],
  frappes: [
    { name: "Caramel", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=700&q=80", note: "Frappe" },
    { name: "Chocolate", image: "https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=700&q=80", note: "Frappe" },
    { name: "Coffee", image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=700&q=80", note: "Frappe" },
    { name: "Vanilla", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=700&q=80", note: "Frappe" },
  ],
  "not-coffee": [
    { name: "Hot Nutella", image: "https://images.unsplash.com/photo-1542990253-0b8be9f5f8e6?auto=format&fit=crop&w=700&q=80", note: "Not coffee" },
    { name: "Orange Juice", image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=700&q=80", note: "Not coffee" },
    { name: "Shaken Iced Tea", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=700&q=80", note: "Not coffee" },
    { name: "Paradise Passion", image: "https://images.unsplash.com/photo-1502741224143-90386d7f8c82?auto=format&fit=crop&w=700&q=80", note: "Smoothie" },
    { name: "Berry Blast", image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=700&q=80", note: "Smoothie" },
    { name: "Stash Tea", image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=700&q=80", note: "Tea" },
  ],
  breakfast: [
    { name: "Classic Pancakes", image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=700&q=80", note: "Breakfast" },
    { name: "Eggs Benedict", image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=700&q=80", note: "Breakfast" },
    { name: "Stuffed Croissant", image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=700&q=80", note: "Breakfast" },
    { name: "Fresh Mushroom Omelette", image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=700&q=80", note: "Breakfast" },
  ],
};

const menuCategories = [
  ["signature", "Signature"],
  ["espresso", "Espresso"],
  ["frappes", "Frappes"],
  ["not-coffee", "Not coffee"],
  ["breakfast", "Breakfast"],
];

const locations = {
  karachi: [
    {
      name: "SMCHS",
      address: "Shop #6, Ground & Mezzanine Floor, Plot A-119, Block A, S.M.C.H.S (Khayaban-e-Bukhari), Karachi.",
      phone: "+92 21 3453 8880",
      tel: "+922134538880",
      maps: "https://www.google.com/maps/search/?api=1&query=Plot+A-119+SMCHS+Karachi",
    },
    {
      name: "Zamzama",
      address: "Plot 9-E, 8th Lane, Zamzama, Phase 5, DHA, Karachi.",
      phone: "+92 21 111 775 775",
      tel: "+9221111775775",
      maps: "https://www.google.com/maps/search/?api=1&query=Plot+9-E+8th+Lane+Zamzama+Karachi",
    },
  ],
  lahore: [
    {
      name: "Packages Mall",
      address: "Level 2, Packages Mall, Lahore.",
      phone: "+92 42 3891 4874",
      tel: "+924238914874",
      maps: "https://www.google.com/maps/search/?api=1&query=New+York+Coffee+Packages+Mall+Lahore",
    },
  ],
  islamabad: [],
};

const cities = [
  ["karachi", "Karachi"],
  ["lahore", "Lahore"],
  ["islamabad", "Islamabad"],
];

function MenuCard({ item, onSelect }) {
  return (
    <button className="menu-card" type="button" onClick={() => onSelect(item)} aria-label={`View ${item.name} details`}>
      <div className="menu-card-image">
        <Image src={item.image} alt={item.name} fill sizes="(max-width: 640px) 50vw, 25vw" />
        <span className="menu-card-arrow" aria-hidden="true">↗</span>
      </div>
      <div className="menu-card-info"><h3>{item.name}</h3><span>{item.note}</span></div>
    </button>
  );
}

function LocationCard({ branch }) {
  return (
    <article className="location-card">
      <h3>{branch.name}</h3>
      <p>{branch.address}</p>
      <div className="location-actions">
        {branch.maps && <a href={branch.maps} target="_blank" rel="noreferrer">DIRECTIONS <span>↗</span></a>}
        <a href={`tel:${branch.tel || "+9221111692692"}`}>{branch.phone ? `CALL ${branch.phone}` : "CALL UAN"} <span>↗</span></a>
      </div>
    </article>
  );
}

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState("signature");
  const [activeCity, setActiveCity] = useState("karachi");
  const [selectedItem, setSelectedItem] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const dialogRef = useRef(null);
  const menuItems = menuData[activeCategory];
  const cityBranches = locations[activeCity];

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const animation = anime({
      targets: ".hero-content > *",
      opacity: [0, 1],
      translateY: [18, 0],
      delay: anime.stagger(110, { start: 180 }),
      duration: 650,
      easing: "easeOutCubic",
    });
    return () => animation.pause();
  }, []);

  useEffect(() => {
    if (!selectedItem || !dialogRef.current) return;
    dialogRef.current.showModal();
  }, [selectedItem]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const animation = anime({
      targets: ".menu-card",
      opacity: [0, 1],
      translateY: [12, 0],
      delay: anime.stagger(55),
      duration: 380,
      easing: "easeOutQuad",
    });
    return () => animation.pause();
  }, [activeCategory]);

  function closeMenu() {
    setMenuOpen(false);
  }

  useEffect(() => {
    document.body.classList.toggle("nav-open", menuOpen);
    return () => document.body.classList.remove("nav-open");
  }, [menuOpen]);

  function closeDialog() {
    dialogRef.current?.close();
    setSelectedItem(null);
  }

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header" id="top">
        <a className="brand" href="#top" aria-label="New York Coffee home">
          <span className="brand-mark" aria-hidden="true">NY</span>
          <span className="brand-name">NEW YORK<br /><b>COFFEE</b></span>
        </a>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="primary-nav" onClick={() => setMenuOpen((open) => !open)}>
          <span className="menu-toggle-label">Menu</span>
          <span className="menu-toggle-icon" aria-hidden="true"><i /><i /></span>
        </button>
        <nav className={`primary-nav${menuOpen ? " is-open" : ""}`} id="primary-nav" aria-label="Main navigation">
          <Link href="/menu" onClick={closeMenu}>The menu</Link>
          <Link href="/our-story" onClick={closeMenu}>Our story</Link>
          <Link href="/locations" onClick={closeMenu}>Locations</Link>
          <Link href="/contact" onClick={closeMenu}>Contact</Link>
        </nav>
        <Link className="button button-small header-order" href="/order">Find your coffee <span aria-hidden="true">↗</span></Link>
      </header>

      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <Image className="hero-image" src="https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=2200&q=88" alt="Iced coffee with creamy layers on a café table" fill priority sizes="100vw" />
          <div className="hero-shade" />
          <div className="hero-content">
            <p className="eyebrow hero-eyebrow"><span /> A good day starts here</p>
            <h1 id="hero-title">Brew something<br /><em>inspiring.</em></h1>
            <p className="hero-copy">A little New York energy.<br />A lot of coffee love.</p>
            <div className="hero-actions">
              <Link className="button button-light" href="/menu">Explore the menu <span aria-hidden="true">↘</span></Link>
              <Link className="text-link" href="/locations">Find your nearest café <span aria-hidden="true">→</span></Link>
            </div>
          </div>
          <div className="hero-side-note">Good coffee.<br />Good company.</div>
          <a className="scroll-cue" href="#intro"><span /> Scroll to explore</a>
        </section>

        <section className="intro section-wrap" id="intro" data-reveal>
          <p className="eyebrow">Your everyday, elevated</p>
          <h2>Make room for<br /><em>something good.</em></h2>
          <p className="intro-copy">From the first espresso to the last catch-up, there’s always a seat, a story and something lovely in your glass.</p>
          <div className="intro-stamp" aria-hidden="true"><span>BREWED<br />WITH LOVE</span><b>NYC</b></div>
        </section>

        <section className="feature-section" id="menu">
          <div className="feature-photo" data-reveal>
            <Image src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=1200&q=85" alt="A chilled coffee drink ready to enjoy" fill sizes="(max-width: 640px) 100vw, 50vw" />
            <span className="photo-caption">A little moment<br />for yourself.</span>
          </div>
          <div className="feature-copy" data-reveal>
            <p className="eyebrow">The good stuff</p>
            <h2>Find your<br /><em>kind of coffee.</em></h2>
            <p>Bold espresso, cool classics, signature sips and café favourites. Take a look around and find what you’re in the mood for.</p>
            <Link className="button button-dark" href="/menu">See what’s brewing <span aria-hidden="true">↘</span></Link>
            <div className="feature-number">01 <span>—</span> 04</div>
          </div>
        </section>

        <section className="menu-explorer section-wrap" id="menu-explorer" aria-labelledby="menu-title">
          <div className="section-heading">
            <div data-reveal><p className="eyebrow">Made for your mood</p><h2 id="menu-title">A menu with<br /><em>main character energy.</em></h2></div>
            <p className="section-aside">Good things take many forms.<br />What sounds good today?</p>
          </div>
          <div className="menu-tabs" role="tablist" aria-label="Menu categories">
            {menuCategories.map(([id, label]) => (
              <button className={`menu-tab${activeCategory === id ? " is-active" : ""}`} role="tab" aria-selected={activeCategory === id} key={id} onClick={() => setActiveCategory(id)}>{label}</button>
            ))}
          </div>
          <div className="menu-grid" aria-live="polite">
            {menuItems.map((item) => <MenuCard key={item.name} item={item} onSelect={setSelectedItem} />)}
          </div>
          <p className="menu-note">Menu shown is based on the global menu. Pakistan availability and prices may differ; please confirm with your café.</p>
        </section>

        <section className="promise-band" id="story">
          <div className="promise-image" data-reveal><Image src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1100&q=85" alt="Coffee beans being prepared for a fresh brew" fill sizes="(max-width: 640px) 100vw, 45vw" /></div>
          <div className="promise-content" data-reveal>
            <p className="eyebrow eyebrow-light">A little about us</p>
            <h2>Good coffee<br />has a <em>story.</em></h2>
            <p>New York Coffee began with a roastery in Bahrain in 1999. Today, that same love for coffee is at the heart of every cup — made with 100% Arabica beans and a whole lot of care.</p>
            <div className="promise-facts">
              <div><strong>1999</strong><span>Where the story began</span></div>
              <div><strong>100%</strong><span>Arabica coffee beans</span></div>
              <div><strong>Fresh</strong><span>Roasted with care</span></div>
            </div>
          </div>
          <span className="promise-ornament" aria-hidden="true">NYC</span>
        </section>

        <section className="signatures section-wrap" aria-labelledby="signature-title">
          <div className="section-heading">
            <div data-reveal><p className="eyebrow">A few familiar favourites</p><h2 id="signature-title">Meet the <em>signatures.</em></h2></div>
            <Link className="text-link text-link-dark" href="/menu">Explore the menu <span aria-hidden="true">→</span></Link>
          </div>
          <div className="signature-grid">
            <article className="signature-card signature-tall">
              <Image src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=85" alt="Layered iced coffee" fill sizes="(max-width: 640px) 50vw, 45vw" />
              <span className="signature-index">01 / THE SIGNATURES</span>
              <div><p>Cool, creamy, unforgettable.</p><h3>The Melting Pot</h3></div>
            </article>
            <article className="signature-card signature-short">
              <Image src="https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=900&q=85" alt="Iced coffee with rich espresso layers" fill sizes="(max-width: 640px) 50vw, 45vw" />
              <span className="signature-index">02 / THE SIGNATURES</span>
              <div><p>Made for the long way round.</p><h3>Manhattan Special</h3></div>
            </article>
            <article className="signature-card signature-short">
              <Image src="https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=900&q=85" alt="Cold blended coffee drink" fill sizes="(max-width: 640px) 50vw, 45vw" />
              <span className="signature-index">03 / THE SIGNATURES</span>
              <div><p>A little extra, always.</p><h3>Queens</h3></div>
            </article>
            <article className="signature-card signature-tall">
              <Image src="https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=900&q=85" alt="A freshly prepared café drink" fill sizes="(max-width: 640px) 50vw, 45vw" />
              <span className="signature-index">04 / THE SIGNATURES</span>
              <div><p>For the love of a good sip.</p><h3>Greatest of All Time</h3></div>
            </article>
          </div>
          <p className="photo-disclaimer">Illustrative photography. Ask your café about current Pakistan menu availability.</p>
        </section>

        <section className="locations-section" id="locations">
          <div className="locations-inner">
            <div className="locations-heading" data-reveal>
              <p className="eyebrow">A table is waiting</p>
              <h2>Find us<br /><em>around town.</em></h2>
              <p>Pick your city and make a little time for coffee.</p>
              <div className="city-switcher" role="tablist" aria-label="Choose a city">
                {cities.map(([id, label]) => (
                  <button className={`city-tab${activeCity === id ? " is-active" : ""}`} role="tab" aria-selected={activeCity === id} key={id} onClick={() => setActiveCity(id)}>{label}</button>
                ))}
              </div>
            </div>
            <div className="location-list" aria-live="polite" data-reveal>
              {cityBranches.length > 0
                ? cityBranches.map((branch) => <LocationCard key={branch.name} branch={branch} />)
                : <LocationCard branch={{ name: "Islamabad", address: "A listing has been found, but the current branch address and details need confirmation. Please call before making a trip." }} />}
            </div>
          </div>
          <div className="locations-decoration" aria-hidden="true">GOOD<br />THINGS<br />HAPPEN<br />OVER<br />COFFEE.</div>
        </section>

        <section className="order-section" id="order">
          <div className="order-backdrop" />
          <div className="order-content" data-reveal>
            <p className="eyebrow eyebrow-light">Your next coffee is calling</p>
            <h2>Let’s make<br /><em>it a coffee date.</em></h2>
            <p>Call us to check your nearest café, today’s menu and ordering options.</p>
            <Link className="button button-light" href="/order">Order &amp; visit <span aria-hidden="true">↗</span></Link>
          </div>
          <span className="order-side-note">YOUR PLACE<br />OR OURS?</span>
        </section>

        <section className="contact-strip section-wrap" id="contact">
          <div data-reveal><p className="eyebrow">Stay in the loop</p><h2>Say <em>hello.</em></h2></div>
          <div className="contact-links">
            <a href="mailto:info@nycoffee.com.pk">info@nycoffee.com.pk <span aria-hidden="true">↗</span></a>
            <a href="tel:+9221111692692">+92 21 111 692 692 <span aria-hidden="true">↗</span></a>
            <a href="https://www.instagram.com/newyorkcoffeepk/" target="_blank" rel="noreferrer">Follow along on Instagram <span aria-hidden="true">↗</span></a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand brand-footer" href="#top" aria-label="New York Coffee, back to top">
          <span className="brand-mark" aria-hidden="true">NY</span>
          <span className="brand-name">NEW YORK<br /><b>COFFEE</b></span>
        </a>
        <p>Good coffee. Good company.<br />See you soon.</p>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} New York Coffee Pakistan</span>
          <a href="#top">Back to the top ↑</a>
          <span>BREW SOMETHING INSPIRING</span>
        </div>
      </footer>

      <dialog className="menu-dialog" ref={dialogRef} aria-labelledby="dialog-title" onClose={() => setSelectedItem(null)} onClick={(event) => {
        if (event.target === dialogRef.current) closeDialog();
      }}>
        <button className="dialog-close" type="button" aria-label="Close details" onClick={closeDialog}>×</button>
        {selectedItem && <>
          <Image className="dialog-image" src={selectedItem.image} alt={selectedItem.name} width={700} height={700} />
          <div className="dialog-copy"><p className="eyebrow">A good choice</p><h2 id="dialog-title">{selectedItem.name}</h2><p className="dialog-description">{selectedItem.note} from the global New York Coffee menu. Menu and availability in Pakistan may vary by branch.</p><p className="dialog-price">Ask in café for current availability and pricing.</p></div>
        </>}
      </dialog>
      <PageAnimations />
    </>
  );
}
