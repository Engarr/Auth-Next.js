'use client';

import { SessionProvider } from 'next-auth/react';
import React from 'react';
import { MenuContextProvider } from './menu-context';

type AuthProviderType = {
  children: React.ReactNode;
};

const AuthProvider = ({ children }: AuthProviderType) => {
  return (
    <SessionProvider>
      <MenuContextProvider>{children}</MenuContextProvider>
    </SessionProvider>
  );
};

export default AuthProvider;
