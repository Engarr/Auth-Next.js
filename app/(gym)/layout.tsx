import Header from '@/components/header';
import Logo from '@/components/logo';
import React from 'react';

export default function GymLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <Header />
      {children}
    </section>
  );
}
