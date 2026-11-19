import type { Metadata } from "next";
import { SportsView, SPORTS_COPY } from "@/views/SportsView";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta("en", "/sporlar/", "Sports", SPORTS_COPY["en"].meta);

export default function Page() {
  return <SportsView lang="en" />;
}
