import React, { createContext, useEffect, useState } from 'react';
import templateData from '../data/template.json';

type ThemeContextType = {
  theme: typeof templateData.theme;
  sections: typeof templateData.sections;
  animations: typeof templateData.animations;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [themeData, setThemeData] = useState(templateData);

  useEffect(() => {
    // Apply theme CSS variables to root element
    const root = document.documentElement;
    const { colors, typography, spacing } = themeData.theme;

    // Set color variables
    Object.entries(colors).forEach(([category, values]) => {
      if (typeof values === 'object') {
        Object.entries(values).forEach(([shade, value]) => {
          root.style.setProperty(`--color-${category}-${shade}`, value);
        });
      }
    });

    // Set typography variables
    Object.entries(typography.sizes).forEach(([key, value]) => {
      root.style.setProperty(`--font-size-${key}`, value);
    });

    // Set spacing variables
    Object.entries(spacing).forEach(([category, values]) => {
      if (typeof values === 'object') {
        Object.entries(values).forEach(([key, value]) => {
          root.style.setProperty(`--spacing-${category}-${key}`, value);
        });
      }
    });
  }, [themeData]);

  return (
    <ThemeContext.Provider value={themeData}>
      {children}
    </ThemeContext.Provider>
  );
};