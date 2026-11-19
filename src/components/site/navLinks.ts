import { t, type Lang } from "@/i18n";

export const navLinks = (lang: Lang) => {
  const n = t(lang).nav;
  return [
    { href: "/sporlar/", label: n.sports },
    { href: "/mekanlar/", label: n.places },
    { href: "/harita/", label: n.map },
    { href: "/raporlar/", label: n.reports },
    { href: "/ne-yapsam/", label: n.finder },
  ];
};
