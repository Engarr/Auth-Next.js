import React, { createContext, useContext, useEffect, useState } from 'react';

type ScrollContextProviderType = {
  children: React.ReactNode;
};
type ScrollContextType = {
  scrollPosition: number;
};
const ScrollContext = createContext<ScrollContextType | null>(null);

export const ScrollContextProvider = ({
  children,
}: ScrollContextProviderType) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const position = window.scrollY;
      setScrollPosition(position);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);

  return (
    <ScrollContext.Provider value={{ scrollPosition }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScrollContext = () => {
  const context = useContext(ScrollContext);
  if (context === null) {
    throw new Error(
      'useActiveSection must be used within an MenuContextProvider'
    );
  }
  return context;
};
