'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import AuthForm from '@/components/auth-form';

const Page = () => {
  const pathname = usePathname();

  return (
    <section>
      <AuthForm mode={pathname} />
    </section>
  );
};

export default Page;
