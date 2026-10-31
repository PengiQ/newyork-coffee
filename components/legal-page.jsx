import { InnerPageFrame } from "@/components/site-shell";

export default function LegalPage({ eyebrow, title, intro, sections }) {
  return (
    <InnerPageFrame>
      <main id="main">
        <header className="legal-hero">
          <div className="legal-hero-copy">
            <p className="eyebrow">{eyebrow}</p>
            <h1>{title}</h1>
            <p>{intro}</p>
            <span>LAST UPDATED: 31 OCTOBER 2026</span>
          </div>
        </header>
        <article className="legal-content">
          {sections.map((section, index) => (
            <section className="legal-section" key={section.title} id={`section-${index + 1}`}>
              <span className="legal-section-number">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h2>{section.title}</h2>
                {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.items && (
                  <ul>
                    {section.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                )}
              </div>
            </section>
          ))}
          <p className="legal-disclaimer">
            This page describes the current website and is general information, not legal advice. Please have the final wording reviewed for the business and applicable law before relying on or publishing it as a formal policy.
          </p>
        </article>
      </main>
    </InnerPageFrame>
  );
}
