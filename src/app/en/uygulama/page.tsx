import type { Metadata } from "next";
import { AppView, appMetaDescription } from "@/views/AppView";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta("en", "/uygulama/", "Discover the app", appMetaDescription("en"));

export default function Page() {
  return <AppView lang="en" />;
}
