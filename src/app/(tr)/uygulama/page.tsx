import type { Metadata } from "next";
import { AppView, appMetaDescription } from "@/views/AppView";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta("tr", "/uygulama/", "Uygulamayı keşfet", appMetaDescription("tr"));

export default function Page() {
  return <AppView lang="tr" />;
}
