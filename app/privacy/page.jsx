import LegalPage from "@/components/legal-page";

export const metadata = {
  title: "Privacy Policy | New York Coffee Pakistan",
  description: "Learn what information may be processed when you visit the New York Coffee Pakistan website.",
};

const sections = [
  {
    title: "About this policy",
    paragraphs: [
      "This policy explains how information may be handled when you browse this New York Coffee Pakistan website. It describes this website as currently built; it does not cover information collected in person at a café or by a separate ordering, delivery or social-media service.",
    ],
  },
  {
    title: "Information you choose to share",
    paragraphs: [
      "The website does not currently provide user accounts, checkout, an online order form or a contact form. We do not ask you to submit personal information through a website form.",
      "If you choose to call, email or message the business using a link on this site, the details you share are handled through your phone, email or messaging provider and by the recipient. Their services have their own privacy terms.",
    ],
  },
  {
    title: "Technical information and third-party resources",
    paragraphs: [
      "When a website is requested, the hosting provider and network services may process technical information such as an IP address, browser and device details, requested pages, timestamps and security logs. The exact information, retention period and recipients depend on the hosting and infrastructure configuration used to publish the site.",
      "This site loads some images from Unsplash and fonts from Google Fonts. Those providers may receive technical request information, such as your IP address and browser details, when your browser retrieves those resources. Their own privacy notices govern that processing.",
      "This site does not currently include an analytics platform, advertising pixels or a newsletter signup. We do not intentionally set analytics or advertising cookies. Hosting, browser, security or third-party services may nevertheless use necessary storage or process data under their own settings.",
    ],
  },
  {
    title: "How information is used",
    paragraphs: [
      "Technical information may be used by the relevant hosting or network provider to deliver pages, protect the service, diagnose errors and prevent abuse. Information you send directly by phone, email or messaging is used to respond to your enquiry or for the purpose you explain.",
    ],
  },
  {
    title: "Retention and security",
    paragraphs: [
      "Retention periods and security controls for website access logs depend on the hosting and infrastructure provider. Please confirm these settings with the site operator before publication. No internet transmission or storage method can be guaranteed completely secure.",
    ],
  },
  {
    title: "Your choices and questions",
    paragraphs: [
      "You can choose not to use external links or contact channels. Browser settings may allow you to control cookies and cached resources. To ask a privacy question or make a request about information you have sent to the business, email info@nycoffee.com.pk. A request may need to be directed to the relevant hosting or third-party provider if that provider controls the information.",
    ],
  },
  {
    title: "Changes to this policy",
    paragraphs: [
      "This policy may be updated when the website or its services change. The date at the top indicates when this text was last updated. If the site later adds ordering, forms, analytics or other data-collection features, this policy should be reviewed and updated before those features launch.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Your information matters"
      title="Privacy policy."
      intro="A clear note on what this website does, what it doesn’t do, and where third-party services fit in."
      sections={sections}
    />
  );
}
