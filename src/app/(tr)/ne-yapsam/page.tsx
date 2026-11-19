import type { Metadata } from "next";
import { FinderView, FINDER_COPY } from "@/views/FinderView";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta("tr", "/ne-yapsam/", "Ne yapsam?", FINDER_COPY["tr"].meta);

export default function Page() {
  return <FinderView lang="tr" />;
}
