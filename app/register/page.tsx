'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import AuthForm from '@/components/auth-form';
import Title from '@/components/UI/title';

const Page = () => {
  const pathname = usePathname();

  return (
    <section>
      <Title>Create new account</Title>
      <AuthForm mode={pathname} />
    </section>
  );
};

export default Page;
