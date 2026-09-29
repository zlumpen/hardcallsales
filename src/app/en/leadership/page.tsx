import React from 'react';
import type { Metadata } from 'next';
import { languageAlternates } from '@/i18n/config';
import { LeadershipView } from '@/views/LeadershipView';

export const metadata: Metadata = {
  title: 'Leadership & Partners — The people behind Hard Call Sales',
  description:
    'Meet the leadership behind Hard Call Sales: Pontus Bredal-Hansen, Joakim Ström and Malin Berlin. Sales craftsmanship, pipeline strategy and operational leadership from Stockholm and Malta.',
  alternates: languageAlternates('/ledning', 'en'),
};

export default function LeadershipPageEn() {
  return <LeadershipView locale="en" />;
}
