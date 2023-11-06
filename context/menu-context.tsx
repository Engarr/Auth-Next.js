import React, { createContext, useContext, useState } from 'react';

type MenuContextProviderProps = {
  children: React.ReactNode;
};
type menuContextType = {
  isMenuVisible: boolean;
  setIsMenuVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export const MenuContext = createContext<menuContextType | null>(null);

export const MenuContextProvider = ({ children }: MenuContextProviderProps) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  return (
    <MenuContext.Provider
      value={{
        isMenuVisible,
        setIsMenuVisible,
      }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenuContext = () => {
  const context = useContext(MenuContext);
  if (context === null) {
    throw new Error(
      'useActiveSection must be used within an MenuContextProvider'
    );
  }
  return context;
};
