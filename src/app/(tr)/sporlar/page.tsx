import type { Metadata } from "next";
import { SportsView, SPORTS_COPY } from "@/views/SportsView";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta("tr", "/sporlar/", "Sporlar", SPORTS_COPY["tr"].meta);

export default function Page() {
  return <SportsView lang="tr" />;
}
