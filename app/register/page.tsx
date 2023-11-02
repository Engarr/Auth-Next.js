'use client';

import React from 'react';
import Title from '@/components/UI/title';
import RegisterUser from '@/components/register-form';

const Page = () => {
  return (
    <section>
      <Title>Create new account</Title>
      <RegisterUser />
    </section>
  );
};

export default Page;
