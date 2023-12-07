'use client';

import { SessionProvider } from 'next-auth/react';
import React from 'react';
import { MenuContextProvider } from './menu-context';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ScrollContextProvider } from './scroll-context';
import ThemeContext from './theme-context';

type AuthProviderType = {
  children: React.ReactNode;
};

const AuthProvider = ({ children }: AuthProviderType) => {
  const queryClient = new QueryClient({});
  return (
    <SessionProvider>
      <ThemeContext>
        <QueryClientProvider client={queryClient}>
          <ScrollContextProvider>
            <MenuContextProvider>{children}</MenuContextProvider>
          </ScrollContextProvider>
        </QueryClientProvider>
      </ThemeContext>
    </SessionProvider>
  );
};

export default AuthProvider;
