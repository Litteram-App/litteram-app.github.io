import { motion } from "framer-motion";
import { Info, ArrowUpRight } from "lucide-react";
import openAnywayAsset from "@/assets/open-anyway.png.asset.json";

const steps = [
  {
    title: "Download & move to Applications",
    description:
      "Open the downloaded zip and drag Litteram into your Applications folder.",
  },
  {
    title: "First launch is blocked — that's normal",
    description:
      "Double-click Litteram. macOS says it \"was blocked to protect your Mac.\" Click Done.",
  },
  {
    title: "Allow it in System Settings",
    description:
      "Open System Settings ▸ Privacy & Security, scroll to Security, and click Open Anyway.",
  },
  {
    title: "Confirm and start writing",
    description:
      "Click Open Anyway and enter your password. From then on, Litteram opens with a normal double-click.",
  },
];

export function InstallSection() {
  return (
    <section id="install" className="px-6 py-24 sm:py-32 bg-surface border-y border-border">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-[color:var(--accent-pink)]">
            Install
          </p>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl text-foreground">
            Get up and running.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Litteram is a native Mac app distributed outside the App Store. The first launch
            requires a one-time approval in System Settings.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
          className="mt-10 rounded-2xl border border-border bg-background p-6 sm:p-8"
        >
          <div className="flex gap-4">
            <div className="shrink-0 mt-0.5">
              <Info className="h-5 w-5 text-[color:var(--accent-pink)]" strokeWidth={1.5} />
            </div>
            <div>
              <p className="font-medium text-foreground">Signed for local use</p>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                Litteram is signed with an ad-hoc certificate, not a paid Apple Developer ID. The
                first time you open it, macOS blocks it. This is expected — and safe to allow.
              </p>
            </div>
          </div>
        </motion.div>

        <ol className="mt-14 space-y-8">
          {steps.map((step, i) => (
            <motion.li
              key={step.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.05 }}
              className="flex gap-4"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border bg-background font-mono text-sm text-foreground">
                {i + 1}
              </span>
              <div>
                <h3 className="font-serif text-lg text-foreground">{step.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="mt-14 space-y-4"
        >
          <div className="overflow-hidden rounded-2xl">
            <img
              src={openAnywayAsset.url}
              alt="System Settings Privacy & Security showing the Open Anyway button for Litteram"
              className="w-full"
            />
          </div>
          <p className="text-center text-xs text-muted-foreground">
            System Settings ▸ Privacy & Security — click Open Anyway
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl border border-border bg-background p-6 sm:p-8"
        >
          <div>
            <p className="font-serif text-xl text-foreground">Ready to try it?</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Download the latest build from GitHub Releases.
            </p>
          </div>
          <a
            href="https://github.com/Litteram-App/litteram-app.github.io/releases/latest/download/Litteram.zip"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Download <ArrowUpRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
