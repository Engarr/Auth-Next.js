import { ThemeProvider } from 'next-themes';
import React, { useEffect, useState } from 'react';

type ThemeContextType = {
  children: React.ReactNode;
};
export default function ThemeContext({ children }: ThemeContextType) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return <ThemeProvider attribute='class'>{children}</ThemeProvider>;
}
