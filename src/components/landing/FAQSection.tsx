import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "Is Litteram free?",
    a: "Yes. Litteram is free and open source, released under the GNU General Public License v3.0. Use it, study it, modify it, redistribute it — no accounts, no subscriptions.",
  },
  {
    q: "Which platforms does it run on?",
    a: "Litteram is a native macOS app. It requires macOS 13 (Ventura) or later, and is developed and tested on macOS 26.",
  },
  {
    q: "How do I install it?",
    a: "Download the latest zip from GitHub Releases, unzip it, and move Litteram.app to /Applications. Because it's signed ad-hoc, macOS blocks it on first launch — run `xattr -dr com.apple.quarantine /Applications/Litteram.app` once, or use System Settings ▸ Privacy & Security ▸ Open Anyway.",
  },
  {
    q: "How is this different from a split-pane editor?",
    a: "Most editors show source on the left and preview on the right. Litteram renders the preview inline, in place, so you only ever look at one surface. The line you're editing temporarily shows its source — everything else stays formatted.",
  },
  {
    q: "What Markdown flavor does it use?",
    a: "CommonMark with the common GitHub-Flavored Markdown extensions — tables with alignment, task lists, fenced code with language labels, strikethrough — plus GitHub-style quote alerts (NOTE, TIP, IMPORTANT, WARNING, CAUTION) and inline color swatches.",
  },
  {
    q: "Where are my files stored?",
    a: "On your disk, wherever you choose. Every file is a native macOS document — autosave, versions (File ▸ Revert To) and window/tab restoration are handled by the system. Sync with iCloud, Dropbox or git — your call.",
  },
  {
    q: "What about performance?",
    a: "Litteram uses an explicit TextKit 1 stack and reformats incrementally: only the edited paragraph on each keystroke, and only two lines on cursor moves. Markers are hidden via zero-width glyphs — no layout cost. Zero external dependencies.",
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.04 }}
      className="border-b border-border"
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-6 py-6 text-left group"
        aria-expanded={open}
      >
        <span className="font-serif text-xl text-foreground">{q}</span>
        <Plus
          className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300 ${
            open ? "rotate-45 text-foreground" : ""
          }`}
          strokeWidth={1.5}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 pr-12 text-base text-muted-foreground leading-relaxed">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQSection() {
  return (
    <section id="faq" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-[color:var(--accent-pink)]">
            FAQ
          </p>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl text-foreground">
            Common questions.
          </h2>
        </motion.div>
        <div>
          {faqs.map((f, i) => (
            <FAQItem key={f.q} q={f.q} a={f.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
