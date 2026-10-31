import LegalPage from "@/components/legal-page";

export const metadata = {
  title: "Accessibility Statement | New York Coffee Pakistan",
  description: "Read our accessibility aims and how to contact us if you encounter a barrier on this website.",
};

const sections = [
  {
    title: "Our commitment",
    paragraphs: [
      "We want this website to be usable by as many people as possible, including people who use assistive technology or alternative ways to navigate. We aim to improve accessibility as the site develops.",
      "This statement describes our current goals and known limitations. The site has not been independently audited or certified as conforming to a particular accessibility standard.",
    ],
  },
  {
    title: "What we’re working toward",
    items: [
      "Use meaningful page structure, headings, labels and link text so content is easier to understand and navigate.",
      "Support keyboard use for navigation and interactive controls, including menu categories and location selectors.",
      "Provide text alternatives for informative images and keep text readable against page backgrounds.",
      "Respect reduced-motion preferences for supported animations and keep animation decorative rather than essential to understanding content.",
      "Make the pages responsive so content can be used at different screen sizes and zoom levels.",
    ],
  },
  {
    title: "Known limitations",
    paragraphs: [
      "Some photography, externally hosted fonts, maps and other third-party resources may not be fully accessible or available. Product photography is illustrative and may not represent the exact item served.",
      "Although the site includes keyboard support and reduced-motion handling, some interactions or animation details may still present barriers for particular users or assistive technologies. A full accessibility audit has not yet been completed.",
    ],
  },
  {
    title: "Need information another way?",
    paragraphs: [
      "If you cannot access information on this site, or would like help checking a branch, menu item or other detail, contact us by email at info@nycoffee.com.pk or call +92 21 111 692 692. Please tell us which page or feature caused difficulty and what format or assistance would help. We will use the details you provide to respond to your request.",
    ],
  },
  {
    title: "Ongoing improvements",
    paragraphs: [
      "We will review accessibility when pages and features change and use feedback to identify improvements. This statement may be updated as work progresses.",
    ],
  },
];

export default function AccessibilityPage() {
  return (
    <LegalPage
      eyebrow="Everyone is welcome here"
      title="Accessibility."
      intro="We’re working to make this website clear, usable and welcoming. Tell us if you run into a barrier—we want to know."
      sections={sections}
    />
  );
}
