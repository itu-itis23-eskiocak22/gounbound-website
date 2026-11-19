import type { Metadata } from "next";
import "./globals.css";
import { fontClasses } from "@/lib/fonts";
import Link from "next/link";
import { LogoMark } from "@/components/Logo";

export const metadata: Metadata = { title: "404 | Unbound" };

export default function GlobalNotFound() {
  return (
    <html lang="tr" className={`${fontClasses} h-full`}>
      <body className="min-h-full flex items-center justify-center p-6 bg-paper text-ink">
        <main className="text-center max-w-md">
          <LogoMark className="h-10 w-auto mx-auto" />
          <h1 className="heading-display text-5xl mt-8">404</h1>
          <p className="mt-4 text-text-secondary">Aradığın sayfa bulunamadı.</p>
          <p lang="en" className="mt-1 text-text-secondary">The page you&apos;re looking for doesn&apos;t exist.</p>
          <div className="mt-8 flex justify-center gap-3">
            <Link href="/" className="btn-primary">Ana sayfa</Link>
            <Link href="/en/" className="btn-secondary">Home (EN)</Link>
          </div>
        </main>
      </body>
    </html>
  );
}
