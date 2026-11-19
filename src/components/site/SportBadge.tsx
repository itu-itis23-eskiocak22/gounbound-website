import { sportName, type Lang } from "@/i18n";
import { sportColor } from "@/lib/sportStyle";

export function SportBadge({ sport, lang = "tr", className = "" }: { sport: string; lang?: Lang; className?: string }) {
  const c = sportColor(sport);
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${className}`} style={{ background: c.bg, color: c.text }}>
      {sportName(sport, lang)}
    </span>
  );
}
