import type { Metadata } from "next";
import { localePath, type Lang } from "@/i18n";

export const SITE = "https://gounbound.app";

/** Sayfa meta verisi: kanonik adres ve diğer dildeki karşılığı (hreflang). `path` Türkçe yoldur. */
export function pageMeta(lang: Lang, path: string, title: string | undefined, description: string, extra: Metadata = {}): Metadata {
  return {
    ...(title ? { title } : {}),
    description,
    alternates: {
      canonical: `${SITE}${localePath(lang, path)}`,
      languages: { tr: `${SITE}${path}`, en: `${SITE}${localePath("en", path)}`, "x-default": `${SITE}${path}` },
    },
    ...extra,
  };
}
