import type { MetadataRoute } from "next";
import { ROUTE_MAP, SITE_URL, localizeHref } from "@/i18n/config";
import { LEADER_SLUGS } from "@/views/LeaderProfileView";

// Alla sidor på svenska + engelska, med hreflang-kopplingar.
export default function sitemap(): MetadataRoute.Sitemap {
  const svPaths = [...Object.keys(ROUTE_MAP), ...LEADER_SLUGS.map((s) => `/ledning/${s}`)];
  return svPaths.flatMap((sv) => {
    const en = localizeHref(sv, "en");
    const languages = { sv: SITE_URL + sv, en: SITE_URL + en };
    return [
      { url: SITE_URL + sv, alternates: { languages } },
      { url: SITE_URL + en, alternates: { languages } },
    ];
  });
}
