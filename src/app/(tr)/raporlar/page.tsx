import type { Metadata } from "next";
import { ReportsView, REPORTS_COPY } from "@/views/ReportsView";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta("tr", "/raporlar/", "Faaliyet Raporları", REPORTS_COPY["tr"].meta);

export default function Page() {
  return <ReportsView lang="tr" />;
}
