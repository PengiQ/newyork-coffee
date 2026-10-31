import LegalPage from "@/components/legal-page";

export const metadata = {
  title: "Terms & Conditions | New York Coffee Pakistan",
  description: "Read the terms for using the New York Coffee Pakistan website.",
};

const sections = [
  {
    title: "Using this website",
    paragraphs: [
      "These terms apply to your use of this informational website. By using it, you agree to use the site lawfully and not to interfere with its operation, security or availability.",
      "The website currently provides brand, menu, contact and branch information. It does not accept or confirm online orders, take payments, create reservations or guarantee delivery.",
    ],
  },
  {
    title: "Information may change",
    paragraphs: [
      "Menu names are based in part on the global New York Coffee menu and may not be offered at every Pakistan branch. Pakistan menu items, prices, ingredients, allergens, availability, opening hours and delivery options can change and have not all been confirmed for this website.",
      "Branch information is provided as a convenience and may be incomplete or out of date. Please contact the relevant café before travelling, relying on a listed phone number or making decisions about dietary needs. The café can confirm current details.",
    ],
  },
  {
    title: "External services and links",
    paragraphs: [
      "Links to phone, email, WhatsApp, maps, social media, image providers or other third-party services are provided for convenience. Those services are operated independently and may have separate terms, privacy practices, availability and content. We do not control or guarantee third-party services.",
    ],
  },
  {
    title: "Intellectual property",
    paragraphs: [
      "Brand names, marks, text, photographs and other content may belong to New York Coffee, its affiliates or their respective owners. You may view the website for personal, non-commercial use. Do not copy, reproduce, distribute or commercially use site content unless you have permission from the relevant rights holder or the law permits it.",
      "Some photographs on this website are illustrative and are not a promise that a specific product or setting is available at a Pakistan café.",
    ],
  },
  {
    title: "Availability and liability",
    paragraphs: [
      "The website is provided on an informational basis and may be changed, interrupted or unavailable. To the extent permitted by applicable law, no guarantee is made that every detail is complete, current or error-free.",
      "Nothing in these terms excludes or limits a right or liability that cannot lawfully be excluded or limited. To the extent permitted by law, the website operator is not responsible for losses arising from reliance on unconfirmed website information or from third-party websites and services.",
    ],
  },
  {
    title: "Updates and applicable law",
    paragraphs: [
      "These terms may be updated as the website changes. The date at the top of this page shows when the text was last updated. The terms are subject to applicable law, including any consumer protections that cannot be waived. The operator should obtain local legal advice to confirm governing-law and dispute-resolution wording before publication.",
    ],
  },
  {
    title: "Contact",
    paragraphs: [
      "Questions about these terms can be sent to info@nycoffee.com.pk or raised by calling +92 21 111 692 692.",
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="The useful details"
      title="Terms & conditions."
      intro="A few straightforward terms for browsing this site and checking information about New York Coffee Pakistan."
      sections={sections}
    />
  );
}
