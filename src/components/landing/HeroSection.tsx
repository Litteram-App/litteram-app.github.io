import { motion } from "framer-motion";
import { AppShowcase } from "./AppShowcase";
import { Logo } from "./Logo";

export function HeroSection() {
  return (
    <section id="top" className="px-6 pt-20 sm:pt-28">
      <div className="mx-auto max-w-4xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-6xl sm:text-8xl tracking-tight text-foreground flex items-center justify-center gap-3 sm:gap-4"
        >
          <Logo size={56} className="sm:hidden" />
          <Logo size={72} className="hidden sm:block" />
          Litteram
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          className="mt-6 text-xl sm:text-2xl text-foreground/80 font-serif italic"
        >
          The simple, fast Markdown editor for Mac.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.16 }}
          className="mt-5 mx-auto max-w-xl text-base text-muted-foreground leading-relaxed"
        >
          Write Markdown the way it was meant to be: one calm surface, instant
          formatting, and no split panes. Your cursor reveals the source;
          everything else stays beautiful.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.24 }}
          className="mt-9 flex items-center justify-center gap-4"
        >
          <a
            href="https://github.com/Litteram-App/litteram-app.github.io/releases/latest/download/Litteram.zip"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Download for macOS
          </a>
          <a
            href="#features"
            className="group inline-flex items-center gap-1 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
          >
            Learn more{" "}
            <span className="text-[color:var(--accent-pink)]">→</span>
          </a>
        </motion.div>
      </div>

      <div className="mt-20">
        <AppShowcase />
      </div>
    </section>
  );
}
