import type { LegalBlock, LegalDocument } from "@/legal/types";

/** Uygulamadaki yasal metnin web görünümü (içerik src/legal'dan, uygulamayla birebir aynı). */
export function LegalDocumentView({ document }: { document: LegalDocument }) {
  return (
    <article>
      <h1 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-semibold text-forest-dark tracking-tight">
        {document.title}
      </h1>
      <p className="mt-2 text-sm text-text-secondary">Son güncelleme: {document.updatedAt}</p>
      <p className="mt-8 text-[15px] leading-7 text-text-primary/85">{document.intro}</p>

      {document.sections.map((section) => (
        <section key={section.heading} className="mt-10">
          <h2 className="text-lg font-semibold text-text-primary mb-3">{section.heading}</h2>
          {section.body.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </section>
      ))}
    </article>
  );
}

function Block({ block }: { block: LegalBlock }) {
  if (typeof block === "string") {
    return <p className="text-[15px] leading-7 text-text-primary/85 mb-3">{block}</p>;
  }
  return (
    <ul className="mb-3 space-y-2 pl-5 list-disc marker:text-sage">
      {block.bullets.map((item) => (
        <li key={item} className="text-[15px] leading-7 text-text-primary/85 pl-1">
          {item}
        </li>
      ))}
    </ul>
  );
}
