import Link from "next/link";
import Image from "next/image";
import { InnerPageFrame } from "@/components/site-shell";

export const metadata = {
  title: "Contact | New York Coffee Pakistan",
  description: "Get in touch with New York Coffee Pakistan by phone, email or social media.",
};

export default function ContactPage() {
  return (
    <InnerPageFrame>
      <main id="main">
        <section className="page-hero contact-page-hero">
          <div className="page-hero-image-wrap">
            <Image className="page-hero-image" src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1800&q=85" alt="" fill priority sizes="100vw" />
          </div>
          <div className="page-hero-copy">
            <p className="eyebrow eyebrow-light">We’re all ears</p>
            <h1>Drop us<br /><em>a line.</em></h1>
            <p>Questions, coffee plans or just a hello? We’d love to hear from you.</p>
          </div>
          <span className="page-hero-index">GET IN TOUCH / 05</span>
        </section>
        <section className="contact-page-content section-wrap">
          <div className="contact-main-copy" data-reveal>
            <p className="eyebrow">Let’s keep in touch</p>
            <h2>There’s always<br /><em>room to talk.</em></h2>
            <p>Need help finding a branch or want to ask about the menu? Reach us by phone, email or social. For the quickest local information, try your nearest café.</p>
            <Link className="text-link text-link-dark" href="/locations">Find a café near you <span>→</span></Link>
          </div>
          <div className="contact-card-list">
            <a className="contact-detail-card" href="tel:+9221111692692" data-reveal>
              <span>01 / CALL OUR UAN</span><strong>+92 21 111 692 692</strong><span className="contact-detail-arrow">↗</span>
            </a>
            <a className="contact-detail-card" href="tel:+923111123692" data-reveal>
              <span>02 / GIVE US A RING</span><strong>+92 311 112 3692</strong><span className="contact-detail-arrow">↗</span>
            </a>
            <a className="contact-detail-card" href="mailto:info@nycoffee.com.pk" data-reveal>
              <span>03 / SEND AN EMAIL</span><strong>info@nycoffee.com.pk</strong><span className="contact-detail-arrow">↗</span>
            </a>
            <a className="contact-detail-card" href="https://www.instagram.com/newyorkcoffeepk/" target="_blank" rel="noreferrer" data-reveal>
              <span>04 / FOLLOW ALONG</span><strong>@newyorkcoffeepk</strong><span className="contact-detail-arrow">↗</span>
            </a>
          </div>
        </section>
        <section className="contact-bottom">
          <p className="eyebrow eyebrow-light">A little note</p>
          <h2>See you<br /><em>over coffee.</em></h2>
          <Link className="button button-light" href="/order">Order &amp; visit <span>↗</span></Link>
        </section>
      </main>
    </InnerPageFrame>
  );
}
