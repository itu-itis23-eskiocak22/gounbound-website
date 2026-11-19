import type { Metadata } from "next";
import { HomeView } from "@/views/HomeView";
import { siteDescription } from "@/components/site/RootDocument";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta("en", "/", undefined, siteDescription("en"));

export default function Page() {
  return <HomeView lang="en" />;
}
