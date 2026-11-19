import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SportView, sportMetaDescription, sportMetaTitle } from "@/views/SportView";
import { getSport, sports } from "@/lib/catalog";
import { pageMeta } from "@/lib/meta";

export function generateStaticParams() {
  return sports.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const sport = getSport((await params).slug);
  if (!sport) return {};
  return pageMeta("tr", `/sporlar/${sport.slug}/`, sportMetaTitle(sport, "tr"), sportMetaDescription(sport, "tr"), { openGraph: { images: [sport.image] } });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const sport = getSport((await params).slug);
  if (!sport) notFound();
  return <SportView sport={sport} lang="tr" />;
}
