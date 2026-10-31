import "./globals.css";

export const metadata = {
  title: "New York Coffee Pakistan — Brew Something Inspiring",
  description:
    "Find your New York Coffee moment. Explore signature drinks, freshly roasted coffee, café favourites and locations across Pakistan.",
  openGraph: {
    title: "New York Coffee Pakistan — Brew Something Inspiring",
    description:
      "A little New York energy, a lot of coffee love. Discover signature drinks, café favourites and locations.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
