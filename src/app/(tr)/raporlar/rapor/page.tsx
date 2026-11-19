import type { Metadata } from "next";
import { ReportPageView, REPORTS_COPY } from "@/views/ReportsView";

export const metadata: Metadata = { title: REPORTS_COPY["tr"].detailTitle, robots: { index: false, follow: true } };

export default function Page() {
  return <ReportPageView lang="tr" />;
}
