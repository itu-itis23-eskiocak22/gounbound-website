import { t, type Lang } from "@/i18n";

/** İngilizce sayfalarda Türkçe içerik için kısa not. */
export function ContentNote({ lang, className = "" }: { lang: Lang; className?: string }) {
  const note = t(lang).guideNote;
  if (!note) return null;
  return (
    <p lang="en" className={`flex gap-2 items-start rounded-2xl bg-gold/20 px-4 py-3 text-sm text-ink/80 ${className}`}>
      <svg viewBox="0 0 24 24" className="w-4 h-4 mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 3 2.5 15 0 18M12 3c-2.5 3-2.5 15 0 18" /></svg>
      {note}
    </p>
  );
}
