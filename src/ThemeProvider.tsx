import React, { createContext, ReactNode } from 'react';
import defaultTheme, { Theme } from './theme';

export interface ThemeProviderProps {
  children?: ReactNode;
  theme?: Theme;
}

export const ThemeContext = createContext<Theme>(defaultTheme);

const ThemeProvider = (props: ThemeProviderProps) => {
  const { children, theme } = props;
  return (
    <ThemeContext.Provider value={{ ...defaultTheme, ...theme }}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
