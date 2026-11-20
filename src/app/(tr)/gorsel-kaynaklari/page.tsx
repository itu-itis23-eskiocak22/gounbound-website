import type { Metadata } from "next";
import { LegalShell } from "@/components/legal/LegalShell";
import { IMAGE_CREDITS, IMAGE_CREDITS_NOTE } from "@/data/imageCredits";

export const metadata: Metadata = {
  title: "Görsel Kaynakları",
  description: "Unbound'da açık lisansla kullanılan görsellerin sahipleri ve lisansları.",
  alternates: { canonical: "https://gounbound.app/gorsel-kaynaklari/" },
};

export default function Page() {
  return (
    <LegalShell>
      <article>
        <h1 className="heading-section text-3xl sm:text-4xl mb-4">Görsel Kaynakları</h1>
        <p className="text-text-secondary leading-relaxed mb-8">{IMAGE_CREDITS_NOTE}</p>
        <ul className="divide-y divide-stone border-y border-stone">
          {IMAGE_CREDITS.map((c) => (
            <li key={c.sourceUrl} className="py-4">
              <p className="font-semibold">{c.subject}</p>
              <p className="text-sm text-text-secondary mt-1">
                <a href={c.sourceUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-ink">
                  “{c.title}”
                </a>{" "}
                · {c.author} ·{" "}
                <a href={c.licenseUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-ink">
                  {c.license}
                </a>
              </p>
            </li>
          ))}
        </ul>
      </article>
    </LegalShell>
  );
}
