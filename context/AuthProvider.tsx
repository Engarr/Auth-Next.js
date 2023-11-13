'use client';

import { SessionProvider } from 'next-auth/react';
import React from 'react';
import { MenuContextProvider } from './menu-context';
import { QueryClient, QueryClientProvider } from 'react-query';

type AuthProviderType = {
  children: React.ReactNode;
};

const AuthProvider = ({ children }: AuthProviderType) => {
  const queryClient = new QueryClient({});
  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <MenuContextProvider>{children}</MenuContextProvider>
      </QueryClientProvider>
    </SessionProvider>
  );
};

export default AuthProvider;
