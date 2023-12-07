import React from 'react';

import Header from '@/components/header';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { options } from '../api/auth/[...nextauth]/option';
import ThemeChanger from '@/components/UI/theme-changer';

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
