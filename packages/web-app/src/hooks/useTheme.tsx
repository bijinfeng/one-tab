import React from "react";

export interface ThemeState {
  isSystem: boolean;
  theme: OneTab.ThemeMode;
  setTheme: (theme: OneTab.ThemeMode) => void;
  toggleSystemTheme: (bol: boolean) => void;
}

export const ThemeContext = React.createContext<ThemeState>({} as ThemeState);

export const useTheme = () => React.useContext(ThemeContext);
