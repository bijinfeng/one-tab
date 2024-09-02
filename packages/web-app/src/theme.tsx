import { ThemeContext } from "@/hooks/useTheme";
import { useSettingStore } from "@/store/setting";
import React, { useEffect, useMemo } from "react";

const checkSystemDark = () => window.matchMedia("(prefers-color-scheme: dark)").matches;
const getSystemTheme = (): OneTab.ThemeMode => (checkSystemDark() ? "dark" : "light");
const getTheme = (theme: OneTab.Theme): OneTab.ThemeMode => (theme === "system" ? getSystemTheme() : theme);

export function ThemeProvider({ children }: React.PropsWithChildren) {
  const { theme = "system", updateSetting } = useSettingStore();
  const mode = useMemo(() => getTheme(theme), [theme]);

  const setTheme = (theme: OneTab.ThemeMode) => updateSetting({ theme });

  const toggleSystemTheme = (bol: boolean) => updateSetting({ theme: bol ? "system" : getSystemTheme() });

  useEffect(() => {
    if (mode === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ theme: mode, isSystem: theme === "system", setTheme, toggleSystemTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
