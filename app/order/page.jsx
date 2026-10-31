import Link from "next/link";
import Image from "next/image";
import { InnerPageFrame } from "@/components/site-shell";

export const metadata = {
  title: "Order & Visit | New York Coffee Pakistan",
  description: "Call New York Coffee Pakistan to check ordering options at your nearest café.",
};

export default function OrderPage() {
  return (
    <InnerPageFrame>
      <main id="main">
        <section className="page-hero order-page-hero">
          <div className="page-hero-image-wrap">
            <Image className="page-hero-image" src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1800&q=85" alt="" fill priority sizes="100vw" />
          </div>
          <div className="page-hero-copy">
            <p className="eyebrow eyebrow-light">Make a little time for yourself</p>
            <h1>Your coffee<br /><em>is waiting.</em></h1>
            <p>Dine in, take away or ask about delivery. Your nearest café can point you in the right direction.</p>
          </div>
          <span className="page-hero-index">ORDER & VISIT / 04</span>
        </section>
        <section className="order-page-content section-wrap">
          <div className="order-options-heading" data-reveal>
            <p className="eyebrow">Good things are close</p>
            <h2>However you like<br /><em>your coffee date.</em></h2>
          </div>
          <div className="order-options-grid">
            <article className="order-option-card" data-reveal>
              <span className="order-option-index">01 / COME ON IN</span>
              <span className="order-option-icon" aria-hidden="true">⌂</span>
              <h3>Find a table.</h3>
              <p>Drop by for a coffee and a little catch-up. Check the branch details before heading out.</p>
              <Link className="text-link text-link-dark" href="/locations">Find a café <span>→</span></Link>
            </article>
            <article className="order-option-card" data-reveal>
              <span className="order-option-index">02 / GIVE US A RING</span>
              <span className="order-option-icon" aria-hidden="true">↗</span>
              <h3>Call your café.</h3>
              <p>Confirm what’s on the menu, today’s opening hours and the ordering options near you.</p>
              <a className="text-link text-link-dark" href="tel:+9221111692692">Call +92 21 111 692 692 <span>→</span></a>
            </article>
            <article className="order-option-card" data-reveal>
              <span className="order-option-index">03 / A NOTE AWAY</span>
              <span className="order-option-icon" aria-hidden="true">✳</span>
              <h3>Say hello.</h3>
              <p>Ask us for help finding a branch or checking on ordering in your area.</p>
              <a className="text-link text-link-dark" href="https://wa.me/923111123692" target="_blank" rel="noreferrer">Message us on WhatsApp <span>↗</span></a>
            </article>
          </div>
          <p className="order-page-note">Online ordering links and branch delivery hours are not confirmed yet. Please call your local café for current information.</p>
          <div className="order-late-night" data-reveal>
            <p className="eyebrow eyebrow-light">The next coffee is always a good idea</p>
            <h2>Some plans<br /><em>start with a sip.</em></h2>
            <Link href="/menu" className="button button-light">Take a look at the menu <span>↗</span></Link>
          </div>
        </section>
      </main>
    </InnerPageFrame>
  );
}
