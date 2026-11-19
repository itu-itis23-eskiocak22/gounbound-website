import type { Metadata } from "next";
import { ReportPageView, REPORTS_COPY } from "@/views/ReportsView";

export const metadata: Metadata = { title: REPORTS_COPY["en"].detailTitle, robots: { index: false, follow: true } };

export default function Page() {
  return <ReportPageView lang="en" />;
}
