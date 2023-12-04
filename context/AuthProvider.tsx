'use client';

import { SessionProvider } from 'next-auth/react';
import React from 'react';
import { MenuContextProvider } from './menu-context';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ScrollContextProvider } from './scroll-context';

type AuthProviderType = {
  children: React.ReactNode;
};

const AuthProvider = ({ children }: AuthProviderType) => {
  const queryClient = new QueryClient({});
  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <ScrollContextProvider>
          <MenuContextProvider>{children}</MenuContextProvider>
        </ScrollContextProvider>
      </QueryClientProvider>
    </SessionProvider>
  );
};

export default AuthProvider;
