import type { Metadata } from "next";
import { FinderView, FINDER_COPY } from "@/views/FinderView";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta("en", "/ne-yapsam/", "What should I do?", FINDER_COPY["en"].meta);

export default function Page() {
  return <FinderView lang="en" />;
}
