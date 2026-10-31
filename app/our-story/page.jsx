import Image from "next/image";
import Link from "next/link";
import { InnerPageFrame } from "@/components/site-shell";

export const metadata = {
  title: "Our Story | New York Coffee Pakistan",
  description: "Discover the New York Coffee story, from a Bahrain roastery in 1999 to coffee moments in Pakistan.",
};

const storyMoments = [
  { year: "1999", title: "A roastery, a big idea.", text: "Two Americans started a coffee roastery in Bahrain, building a place around freshly roasted coffee and a welcoming café spirit." },
  { year: "MANAMA", title: "The first coffee house.", text: "The first shop opened in Manama and quickly became a favourite meeting place for the local community." },
  { year: "TODAY", title: "A little New York, closer to home.", text: "New York Coffee brings its café experience to Pakistan, with a growing presence and a menu shaped for local guests." },
];

export default function OurStoryPage() {
  return (
    <InnerPageFrame>
      <main id="main">
        <section className="page-hero story-page-hero">
          <div className="page-hero-image-wrap">
            <Image className="page-hero-image" src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1800&q=85" alt="" fill priority sizes="100vw" />
          </div>
          <div className="page-hero-copy">
            <p className="eyebrow eyebrow-light">It starts with a good cup</p>
            <h1>Every cup has<br /><em>a beginning.</em></h1>
            <p>One roastery. A love for coffee. A story that keeps finding its way to new tables.</p>
          </div>
          <span className="page-hero-index">OUR STORY / 03</span>
        </section>
        <section className="story-intro section-wrap" data-reveal>
          <p className="eyebrow">From Bahrain, with love</p>
          <h2>More than just<br /><em>great coffee.</em></h2>
          <p>New York Coffee started in Bahrain in 1999, founded by two Americans with a coffee-roasting dream. The café grew from that simple beginning: a place to share freshly roasted coffee, settle in and stay a while.</p>
        </section>
        <section className="story-timeline section-wrap" aria-label="Our story timeline">
          {storyMoments.map((moment, index) => (
            <article className="story-moment" key={moment.year} data-reveal>
              <span className="story-moment-number">0{index + 1}</span>
              <span className="story-moment-year">{moment.year}</span>
              <div><h3>{moment.title}</h3><p>{moment.text}</p></div>
            </article>
          ))}
        </section>
        <section className="roastery-feature">
          <div className="roastery-image">
            <Image src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=85" alt="Freshly brewed coffee being prepared" fill sizes="(max-width: 640px) 100vw, 50vw" />
          </div>
          <div className="roastery-copy" data-reveal>
            <p className="eyebrow eyebrow-light">Freshness, by design</p>
            <h2>Good beans.<br /><em>Handled with care.</em></h2>
            <p>The brand’s Bahrain roastery uses 100% Arabica beans. Its stated freshness promise: dispatch to stores within seven days of roasting, with stores receiving up to 14 days’ worth of stock.</p>
            <div className="roastery-stats">
              <div><strong>100%</strong><span>Arabica beans</span></div>
              <div><strong>7 days</strong><span>Roastery dispatch</span></div>
              <div><strong>14 days</strong><span>Store stock policy</span></div>
            </div>
          </div>
        </section>
        <section className="story-end">
          <p className="eyebrow">Your story goes here</p>
          <h2>Pull up a chair.<br /><em>We’ll put the kettle on.</em></h2>
          <Link className="button button-light" href="/locations">Find your café <span>↗</span></Link>
        </section>
      </main>
    </InnerPageFrame>
  );
}
