import Link from "next/link";
import { localePath, t, type Lang } from "@/i18n";
import { Logo } from "../Logo";
import { LEGAL_LINKS } from "../legal/LegalShell";
import { navLinks } from "./navLinks";

export function SiteFooter({ lang }: { lang: Lang }) {
  const d = t(lang);
  return (
    <footer className="bg-ink text-paper/70 mt-auto" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-16 pb-10">
        <div className="grid gap-12 md:grid-cols-12 pb-12 border-b border-paper/10">
          <div className="md:col-span-5">
            <Logo color="white" />
            <p className="mt-5 max-w-sm leading-relaxed text-[0.95rem]">{d.footer.blurb}</p>
            <Link href={localePath(lang, "/uygulama/")} className="inline-flex mt-6 text-gold hover:text-paper text-sm font-semibold">{d.footer.soon}</Link>
          </div>
          <div className="md:col-span-3 md:col-start-7">
            <h2 className="text-meta text-paper/40 mb-4">{d.footer.explore}</h2>
            <ul className="space-y-3 text-[0.95rem]">
              {navLinks(lang).map((l) => <li key={l.href}><Link className="hover:text-paper" href={localePath(lang, l.href)}>{l.label}</Link></li>)}
              <li><Link className="hover:text-paper" href={localePath(lang, "/uygulama/")}>{d.nav.app}</Link></li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <h2 className="text-meta text-paper/40 mb-4">{d.footer.legal}</h2>
            <ul className="space-y-3 text-[0.95rem]">
              {LEGAL_LINKS.map((l) => <li key={l.href}><Link className="hover:text-paper" href={l.href} hrefLang="tr">{l.label}</Link></li>)}
            </ul>
          </div>
        </div>
        <div className="pt-8 flex flex-col sm:flex-row justify-between gap-3 text-sm text-paper/35">
          <p>&copy; {new Date().getFullYear()} Unbound</p>
          <p>{d.footer.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
