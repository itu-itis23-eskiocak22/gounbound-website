import type { Metadata } from "next";
import { MapView, MAP_COPY } from "@/views/MapView";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta("en", "/harita/", "Map", MAP_COPY["en"].meta);

export default function Page() {
  return <MapView lang="en" />;
}
