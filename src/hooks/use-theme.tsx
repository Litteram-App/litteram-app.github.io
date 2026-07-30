import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const listeners = new Set<(t: Theme) => void>();
let current: Theme = "light";

function apply(theme: Theme) {
  current = theme;
  if (typeof document !== "undefined") {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }
  listeners.forEach((l) => l(theme));
}

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(current);

  useEffect(() => {
    const stored = window.localStorage.getItem(
      "litteram-theme",
    ) as Theme | null;
    const initial: Theme =
      stored ??
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");
    apply(initial);

    const listener = (t: Theme) => setThemeState(t);
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  }, []);

  const setTheme = (t: Theme) => {
    window.localStorage.setItem("litteram-theme", t);
    apply(t);
  };

  return {
    theme,
    setTheme,
    toggle: () => setTheme(theme === "dark" ? "light" : "dark"),
  };
}
