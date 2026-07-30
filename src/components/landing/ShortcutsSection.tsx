import { motion } from "framer-motion";

type Shortcut = { label: string; keys: string };
type Group = { title: string; items: Shortcut[] };

const groups: Group[] = [
  {
    title: "Formatting",
    items: [
      { label: "Bold", keys: "⌘B" },
      { label: "Italic", keys: "⌘I" },
      { label: "Inline code", keys: "⌘E" },
      { label: "Link", keys: "⌘K" },
      { label: "Toggle checkbox", keys: "⌘L" },
    ],
  },
  {
    title: "Lines & lists",
    items: [
      { label: "Move line up / down", keys: "⌥↑ / ⌥↓" },
      { label: "Duplicate line", keys: "⌘D" },
      { label: "Indent / outdent list", keys: "Tab / ⇧Tab" },
    ],
  },
  {
    title: "Files & documents",
    items: [
      { label: "New", keys: "⌘N" },
      { label: "Open", keys: "⌘O" },
      { label: "Save", keys: "⌘S" },
      { label: "Save As", keys: "⇧⌘S" },
      { label: "Close", keys: "⌘W" },
      { label: "New tab", keys: "⌘T" },
      { label: "Print", keys: "⌘P" },
      { label: "Export as PDF", keys: "⌃⌘P" },
    ],
  },
  {
    title: "View",
    items: [
      { label: "Toggle sidebar", keys: "⌃⌘S" },
      { label: "Readable width", keys: "⇧⌘L" },
      { label: "Line numbers", keys: "⌃⌘L" },
      { label: "Go to line", keys: "⌥⌘L" },
      { label: "Zoom in / out / reset", keys: "⌘+ / ⌘− / ⌘0" },
    ],
  },
  {
    title: "Find",
    items: [
      { label: "Find", keys: "⌘F" },
      { label: "Find and Replace", keys: "⌥⌘F" },
      { label: "Find next / previous", keys: "⌘G / ⇧⌘G" },
    ],
  },
  {
    title: "Tabs & help",
    items: [
      { label: "Next / previous tab", keys: "⌃Tab / ⌃⇧Tab" },
      { label: "Litteram Help", keys: "⌘?" },
    ],
  },
];

export function ShortcutsSection() {
  return (
    <section id="shortcuts" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-[color:var(--accent-pink)]">
            Shortcuts
          </p>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl text-foreground">
            Hands on the keyboard.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Every command has a shortcut. Learn a few and you'll never reach for
            the mouse.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, gi) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
                delay: gi * 0.05,
              }}
            >
              <h3 className="font-serif text-lg text-foreground">{g.title}</h3>
              <ul className="mt-4 divide-y divide-border">
                {g.items.map((s) => (
                  <li
                    key={s.label}
                    className="flex items-center justify-between gap-4 py-2.5 text-sm"
                  >
                    <span className="text-muted-foreground">{s.label}</span>
                    <kbd className="font-mono text-xs text-foreground whitespace-nowrap">
                      {s.keys}
                    </kbd>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 max-w-3xl"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-[color:var(--accent-pink)]">
            Tips
          </p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-foreground">
            Small things that add up.
          </h2>
          <ul className="mt-6 space-y-3 text-base text-muted-foreground leading-relaxed">
            <li>— Drag files from the Finder onto the sidebar to open them.</li>
            <li>
              — Paste or drop an image to save it next to your file in an{" "}
              <code className="font-mono text-sm text-foreground">assets</code>{" "}
              folder.
            </li>
            <li>
              — Write an inline color like{" "}
              <code className="font-mono text-sm text-foreground">#0969DA</code>{" "}
              and a live swatch appears next to it.
            </li>
            <li>
              — Use GitHub-style alerts:{" "}
              <code className="font-mono text-sm text-foreground">
                &gt; [!NOTE]
              </code>
              ,{" "}
              <code className="font-mono text-sm text-foreground">[!TIP]</code>,{" "}
              <code className="font-mono text-sm text-foreground">
                [!WARNING]
              </code>
              .
            </li>
            <li>
              — Paste a URL over selected text and it turns into a Markdown
              link.
            </li>
            <li>
              — Press ⌘? any time to open the built-in Markdown cheat-sheet.
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
