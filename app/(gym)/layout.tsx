import Header from '@/components/header';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

import React from 'react';
import { options } from '../api/auth/[...nextauth]/option';

export default async function GymLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(options);
  if (!session) redirect('/');

  return (
    <section>
      <Header />
      {children}
    </section>
  );
}
