import React from 'react';
import type { Metadata } from 'next';
import { languageAlternates } from '@/i18n/config';
import { LeadershipView } from '@/views/LeadershipView';

export const metadata: Metadata = {
  title: 'Ledning & Partners — Människorna bakom Hard Call Sales',
  description:
    'Lär känna ledningen bakom Hard Call Sales: Pontus Bredal-Hansen, Joakim Ström och Malin Berlin. Säljhantverk, pipeline-strategi och operativt ledarskap från Stockholm och Malta.',
  alternates: languageAlternates('/ledning', 'sv'),
};

export default function LeadershipPage() {
  return <LeadershipView locale="sv" />;
}
