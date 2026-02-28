import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import {useLocation} from "react-router";

interface BackgroundContextType {
  background: string;
  setBackground: (value: string) => void;
}

const BackgroundContext = createContext<BackgroundContextType | undefined>(undefined);

interface BackgroundProviderProps {
  children: ReactNode;
  defaultBackground?: string;
  targetId?: string;
}

export const BackgroundProvider: React.FC<BackgroundProviderProps> = ({
  children,
  defaultBackground = '#ffffff',
  targetId = 'system'
  }) => {
  const location = useLocation();

  const [background, setBackground] = useState<string>(defaultBackground);

  useEffect(() => {
    const element = document.getElementById(targetId);
    if (!element) return;

    element.style.backgroundColor = 'black';

    if (background.startsWith('url')) {
      element.style.backgroundImage = background;
    } else {
      element.style.backgroundImage = 'none';
      element.style.backgroundColor = background;
    }

    element.style.height = '100dvh';
    element.style.backgroundSize = 'cover';
    element.style.backgroundRepeat = 'no-repeat';
    element.style.backgroundAttachment = 'fixed';
    element.style.backgroundPosition = 'center';
  }, [background, location.pathname]);

  return (
    <BackgroundContext.Provider value={{ background, setBackground }}>
      {children}
    </BackgroundContext.Provider>
  );
};

export const useBackground = (): BackgroundContextType => {
  const context = useContext(BackgroundContext);
  if (!context) {
    throw new Error('useBackground must be used within a BackgroundProvider');
  }
  return context;
};
