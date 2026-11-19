import type { GuideSection } from "@/lib/catalog";
import { Markdown } from "../Markdown";

/** Uygulamadaki açılır rehber başlıklarının web karşılığı (JavaScript gerektirmez). */
export function GuideAccordion({ sections, openFirst = true }: { sections: GuideSection[]; openFirst?: boolean }) {
  return (
    <div className="flex flex-col gap-3">
      {sections.map((s, i) => (
        <details key={s.title + i} open={openFirst && i === 0} className="group rounded-2xl border border-stone bg-white/60 overflow-hidden">
          <summary className="flex items-center justify-between gap-4 px-5 py-4 bg-surface/70 hover:bg-surface">
            <span className="font-semibold text-ink">{s.title}</span>
            <svg className="chevron w-5 h-5 shrink-0 text-text-secondary transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </summary>
          <div className="px-5 pt-4 pb-2 text-[0.95rem] text-ink/90">
            <Markdown text={s.body} />
          </div>
        </details>
      ))}
    </div>
  );
}
