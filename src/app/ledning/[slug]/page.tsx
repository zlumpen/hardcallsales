import React from "react";
import type { Metadata } from "next";
import { languageAlternates } from "@/i18n/config";
import { LeaderProfileView, LEADER_SLUGS } from "@/views/LeaderProfileView";

export function generateStaticParams() {
  return LEADER_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return {
    alternates: languageAlternates(`/ledning/${slug}`, "sv"),
  };
}

export default async function LeaderPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <LeaderProfileView slug={slug} locale="sv" />;
}
