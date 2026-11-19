import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PlaceView, placeMetaDescription, placeMetaTitle } from "@/views/PlaceView";
import { getPlace, places } from "@/lib/catalog";
import { pageMeta } from "@/lib/meta";

export function generateStaticParams() {
  return places.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const place = getPlace((await params).slug);
  if (!place) return {};
  return pageMeta("en", `/mekanlar/${place.slug}/`, placeMetaTitle(place, "en"), placeMetaDescription(place, "en"),
    place.image ? { openGraph: { images: [place.image] } } : {});
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const place = getPlace((await params).slug);
  if (!place) notFound();
  return <PlaceView place={place} lang="en" />;
}
