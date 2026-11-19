"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { langFromPath, switchPath, type Lang } from "@/i18n";

/** TR / EN anahtarı. Aynı sayfanın diğer dildeki karşılığına gider; sorgu (?id=, ?spor=) korunur.
 *  Diller ayrı kök düzenlerde olduğundan geçiş tam sayfa yüklemesiyle yapılır (<a>, Link değil). */
export function LangSwitch({ className = "" }: { className?: string }) {
  const pathname = usePathname() ?? "/";
  const current = langFromPath(pathname);
  const [search, setSearch] = useState("");
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSearch(window.location.search);
  }, [pathname]);

  return (
    <div className={`inline-flex rounded-full border border-stone p-0.5 text-xs font-semibold ${className}`} role="group" aria-label="Dil / Language">
      {(["tr", "en"] as Lang[]).map((l) => (
        <a key={l} href={switchPath(pathname, l) + search} hrefLang={l} lang={l} aria-current={l === current ? "true" : undefined}
          className={`rounded-full px-2.5 py-1 transition-colors ${l === current ? "bg-ink text-paper" : "text-text-secondary hover:text-ink"}`}>
          {l.toUpperCase()}
        </a>
      ))}
    </div>
  );
}
