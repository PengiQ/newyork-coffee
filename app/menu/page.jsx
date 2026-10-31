import MenuView from "./view";
import { InnerPageFrame } from "@/components/site-shell";
import Image from "next/image";

export const metadata = {
  title: "Menu | New York Coffee Pakistan",
  description: "Explore signature coffee, espresso, frappes and café favourites at New York Coffee.",
};

export default function MenuPage() {
  return (
    <InnerPageFrame>
      <main id="main">
        <section className="page-hero menu-page-hero">
          <div className="page-hero-image-wrap">
            <Image className="page-hero-image" src="https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=1800&q=85" alt="" fill priority sizes="100vw" />
          </div>
          <div className="page-hero-copy">
            <p className="eyebrow eyebrow-light">A little something for every mood</p>
            <h1>Good things<br /><em>on the menu.</em></h1>
            <p>Signature sips, everyday favourites and a little something sweet. Find the thing you came for.</p>
          </div>
          <span className="page-hero-index">THE MENU / 01</span>
        </section>
        <MenuView />
      </main>
    </InnerPageFrame>
  );
}
