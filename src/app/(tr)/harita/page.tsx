import type { Metadata } from "next";
import { MapView, MAP_COPY } from "@/views/MapView";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta("tr", "/harita/", "Harita", MAP_COPY["tr"].meta);

export default function Page() {
  return <MapView lang="tr" />;
}
