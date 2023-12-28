import type { Metadata } from 'next';
import { inter } from '@/lib/fonts';
import './globals.css';
import AuthProvider from '@/context/AuthProvider';
import Toast from '@/components/UI/toast';

export const metadata: Metadata = {
  title: 'Gym-Assistant',
  description: '',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className} bg-[var(--background)]`}>
        <AuthProvider>
          <Toast />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
