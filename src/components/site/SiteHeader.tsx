"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { langFromPath, localePath, t } from "@/i18n";
import { Logo } from "../Logo";
import { LangSwitch } from "./LangSwitch";
import { navLinks } from "./navLinks";

export function SiteHeader() {
  const pathname = usePathname();
  const lang = langFromPath(pathname);
  const d = t(lang).nav;
  const links = navLinks(lang).map((l) => ({ ...l, href: localePath(lang, l.href) }));
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [open]);

  const active = (href: string) => pathname?.startsWith(href);

  return (
    <>
      <header className={`sticky top-0 z-[1000] transition-colors duration-300 ${scrolled || open ? "bg-paper/95 backdrop-blur border-b border-stone" : "bg-paper border-b border-transparent"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between gap-4">
          <Link href={localePath(lang, "/")} aria-label={d.home} className="shrink-0"><Logo size="small" /></Link>

          <nav aria-label={d.menu} className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <Link key={l.href} href={l.href}
                className={`px-3 py-2 rounded-full text-[0.9rem] font-medium whitespace-nowrap transition-colors ${active(l.href) ? "bg-surface text-ink" : "text-text-secondary hover:text-ink"}`}>
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <LangSwitch />
            <Link href={localePath(lang, "/uygulama/")} className="btn-primary !py-2.5 !px-5 text-sm whitespace-nowrap">{d.cta}</Link>
          </div>

          <div className="lg:hidden flex items-center gap-2">
            <LangSwitch />
            <button className="p-3 -mr-3" onClick={() => setOpen(!open)} aria-label={d.menu} aria-expanded={open} aria-controls="mobile-menu">
              <span className={`block w-6 h-0.5 bg-ink transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`block w-6 h-0.5 bg-ink my-[5px] transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`block w-6 h-0.5 bg-ink transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </button>
          </div>
        </div>

      </header>
      {/* Menü header'ın dışında: header'daki backdrop-blur, içindeki fixed öğeleri header kutusuna hapseder. */}
      {open && (
        <nav aria-label={d.menu} id="mobile-menu" className="lg:hidden fixed inset-x-0 top-16 bottom-0 z-[999] bg-paper px-4 pt-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] flex flex-col gap-1 overflow-y-auto overscroll-contain">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className={`px-4 py-3.5 rounded-2xl text-lg font-medium ${active(l.href) ? "bg-surface text-ink" : "text-text-secondary"}`}>
              {l.label}
            </Link>
          ))}
          <Link href={localePath(lang, "/uygulama/")} onClick={() => setOpen(false)} className="btn-primary mt-4">{d.cta}</Link>
        </nav>
      )}
    </>
  );
}
