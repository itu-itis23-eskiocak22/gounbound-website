import type { Metadata } from "next";
import { PlacesView, PLACES_COPY } from "@/views/PlacesView";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta("tr", "/mekanlar/", "İşletmeler & Rotalar", PLACES_COPY["tr"].meta);

export default function Page() {
  return <PlacesView lang="tr" />;
}
