'use client';

import { SessionProvider } from 'next-auth/react';
import React from 'react';
import type { AppProps } from 'next/app';

type AuthProviderType = {
  children: React.ReactNode;
  // session: ;
};

const AuthProvider = ({ children }: AuthProviderType) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
