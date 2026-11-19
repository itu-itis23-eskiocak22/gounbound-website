import type { Metadata } from "next";
import { PlacesView, PLACES_COPY } from "@/views/PlacesView";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta("en", "/mekanlar/", "Places & Routes", PLACES_COPY["en"].meta);

export default function Page() {
  return <PlacesView lang="en" />;
}
