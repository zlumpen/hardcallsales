import React from "react";
import type { Metadata } from "next";
import { languageAlternates } from "@/i18n/config";
import { LeaderProfileView, LEADER_SLUGS, getLeader } from "@/views/LeaderProfileView";

export function generateStaticParams() {
  return LEADER_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const leader = getLeader(slug, "en");
  if (!leader) return {};
  return {
    title: `${leader.name} — ${leader.role}`,
    description: leader.tagline,
    openGraph: {
      title: `${leader.name} — Hard Call Sales`,
      description: leader.tagline,
    },
    alternates: languageAlternates(`/ledning/${slug}`, "en"),
  };
}

export default async function LeaderPageEn({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <LeaderProfileView slug={slug} locale="en" />;
}
