import type { Metadata } from "next";
import { ReportsView, REPORTS_COPY } from "@/views/ReportsView";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta("en", "/raporlar/", "Activity Reports", REPORTS_COPY["en"].meta);

export default function Page() {
  return <ReportsView lang="en" />;
}
