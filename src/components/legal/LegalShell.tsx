import Link from "next/link";
import { Logo } from "../Logo";
import { LangSwitch } from "../site/LangSwitch";

export const LEGAL_LINKS = [
  { href: "/kullanim-kosullari/", label: "Kullanıcı Sözleşmesi" },
  { href: "/gizlilik/", label: "Gizlilik Politikası" },
  { href: "/kvkk/", label: "KVKK Aydınlatma Metni" },
  { href: "/hesap-silme/", label: "Hesap Silme" },
  { href: "/gorsel-kaynaklari/", label: "Görsel Kaynakları" },
];

/** Yasal sayfaların ortak çerçevesi: sade üst bar, okunaklı içerik sütunu, sayfalar arası bağlantılar. */
export function LegalShell({ children }: { children: React.ReactNode }) {
  return (
    <div lang="tr" className="min-h-screen bg-paper text-text-primary flex flex-col">
      <header className="border-b border-black/5 bg-paper/90 backdrop-blur sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          <Link href="/" aria-label="Ana sayfa">
            <Logo size="small" />
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-sm text-text-secondary hover:text-forest transition-colors">
              Ana sayfa
            </Link>
            <LangSwitch />
          </div>
        </div>
      </header>

      <main className="flex-1 w-full max-w-3xl mx-auto px-5 sm:px-8 py-12 sm:py-16">{children}</main>

      <footer className="border-t border-black/5">
        <nav aria-label="Yasal metinler" className="max-w-3xl mx-auto px-5 sm:px-8 py-8 flex flex-wrap gap-x-6 gap-y-3 text-sm">
          {LEGAL_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="text-text-secondary hover:text-forest transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>
      </footer>
    </div>
  );
}
