import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import lightShot from "@/assets/litteram-light.png.asset.json";
import darkShot from "@/assets/litteram-dark.png.asset.json";
import { useTheme } from "@/hooks/use-theme";

export function AppShowcase() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="mx-auto max-w-6xl px-6">
      <div className="mb-6 flex justify-center">
        <div
          role="group"
          aria-label="Color theme"
          className="inline-flex items-center gap-1 rounded-full border border-border bg-surface p-1"
        >
          <button
            type="button"
            onClick={() => setTheme("light")}
            aria-pressed={!isDark}
            className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors ${
              !isDark
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Sun size={14} /> Light
          </button>
          <button
            type="button"
            onClick={() => setTheme("dark")}
            aria-pressed={isDark}
            className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors ${
              isDark
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Moon size={14} /> Dark
          </button>
        </div>
      </div>

      <div
        className="relative w-full overflow-hidden rounded-2xl"
        style={{ aspectRatio: "1920 / 1434" }}
      >
        <motion.img
          src={lightShot.url}
          alt="Litteram in light mode"
          animate={{ opacity: isDark ? 0 : 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <motion.img
          src={darkShot.url}
          alt="Litteram in dark mode"
          animate={{ opacity: isDark ? 1 : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
