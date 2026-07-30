import { motion } from "framer-motion";
import { Logo } from "./Logo";

export function CTASection() {
  return (
    <section
      id="download"
      className="px-6 py-28 sm:py-36 bg-surface border-t border-border"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-2xl text-center"
      >
        <div className="flex justify-center mb-8">
          <Logo size={56} />
        </div>
        <h2 className="font-serif text-5xl sm:text-6xl text-foreground tracking-tight">
          Start writing.
        </h2>
        <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
          Litteram is free and open source, released under GPLv3. Download the
          latest build or clone the repo and run it in Xcode.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="https://github.com/Litteram-App/litteram-app.github.io/releases/latest/download/Litteram.zip"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Download for macOS
          </a>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          Requires macOS 13 or later
        </p>
      </motion.div>
    </section>
  );
}
