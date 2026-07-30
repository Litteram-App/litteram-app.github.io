import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  HardDrive,
  EyeOff,
  Fingerprint,
  FileKey,
} from "lucide-react";

const points = [
  {
    icon: HardDrive,
    title: "Everything stays on your Mac",
    description:
      "Your documents live exactly where you put them. Litteram reads and writes plain files on your disk — no uploads, no cloud, no remote servers.",
  },
  {
    icon: EyeOff,
    title: "No tracking or analytics",
    description:
      "We don't collect usage data, crash reports, or any telemetry. The app doesn't phone home. What you write is between you and your file system.",
  },
  {
    icon: Fingerprint,
    title: "No account required",
    description:
      "Download, unzip, and write. There's no login, no subscription, no activation, and no gatekeeping. Just a native app that respects your time.",
  },
  {
    icon: Lock,
    title: "Open source by design",
    description:
      "Released under GPLv3, the full source is available to inspect, audit, and improve. No hidden behavior, no proprietary lock-in.",
  },
  {
    icon: FileKey,
    title: "Plain Markdown forever",
    description:
      "Your work is stored in standard .md files you can open with any text editor. If Litteram ever disappears, your notes don't.",
  },
  {
    icon: Shield,
    title: "You control the sync",
    description:
      "Want iCloud, Dropbox, or git? Great — use whatever you already trust. Litteram itself never touches the network.",
  },
];

export function PrivacySection() {
  return (
    <section
      id="privacy"
      className="px-6 py-24 sm:py-32 bg-surface border-y border-border"
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-[color:var(--accent-pink)]">
            Privacy
          </p>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl text-foreground">
            Your words are yours.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Litteram is built like a tool, not a platform. No account, no cloud,
            no tracking — just Markdown files on your Mac.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.05,
              }}
              className="flex flex-col"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background">
                <p.icon
                  className="h-4.5 w-4.5 text-foreground"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="mt-5 font-serif text-xl text-foreground">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 text-center"
        >
          <a
            href="https://github.com/Litteram-App/litteram-app.github.io/releases/latest/download/Litteram.zip"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Download for macOS
          </a>
          <p className="mt-4 text-xs text-muted-foreground">
            Free and open source. No signup, no trial, no catch.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
