import { motion } from "framer-motion";
import { FileText, Monitor, Printer, BookOpen } from "lucide-react";

const highlights = [
  {
    icon: FileText,
    title: "Markdown for Mac",
    description:
      "Litteram turns your Mac into a focused Markdown workstation. Open .md and .markdown files from Finder, edit them with live formatting, and save back to plain text.",
  },
  {
    icon: BookOpen,
    title: "Markdown reader",
    description:
      "Read notes, documentation, and articles without distraction. Headings, lists, links, tables, and images render cleanly as you scroll.",
  },
  {
    icon: Monitor,
    title: "Markdown viewer",
    description:
      "No preview pane needed: the document itself is the viewer. Move the cursor onto a line to edit the source; move away to see it formatted.",
  },
  {
    icon: Printer,
    title: "Markdown to PDF",
    description:
      "Export your document to a paginated PDF with one shortcut. Headings, code blocks, checklists, and images keep their formatting on the page.",
  },
];

export function MarkdownSection() {
  return (
    <section id="markdown" className="px-6 py-24 sm:py-32 bg-surface border-y border-border">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-[color:var(--accent-pink)]">
            What is Markdown
          </p>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl text-foreground">
            Plain text, beautifully powerful.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Markdown is a lightweight markup language that lets you format text using simple punctuation.
            A <code className="font-mono text-sm text-foreground">#</code> becomes a heading,
            asterisks become <em>italic</em> or <strong>bold</strong>, and dashes become lists.
            Because it is plain text, your files stay readable in any editor, on any device, forever.
          </p>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Litteram is a <strong className="text-foreground">Markdown editor for Mac</strong> designed
            around that simplicity. It reads and writes standard Markdown files, so your work is never
            locked inside an app. Whether you need a <strong className="text-foreground">Markdown reader</strong>,
            a <strong className="text-foreground">Markdown viewer</strong>, or a way to turn
            <strong className="text-foreground"> Markdown to PDF</strong>, Litteram keeps the experience
            fast, local, and distraction-free.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.05 }}
              className="flex flex-col"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background">
                <h.icon className="h-4.5 w-4.5 text-foreground" strokeWidth={1.5} />
              </div>
              <h3 className="mt-5 font-serif text-xl text-foreground">{h.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{h.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 rounded-2xl border border-border bg-background p-6 sm:p-8"
        >
          <h3 className="font-serif text-2xl text-foreground">Why writers choose Markdown</h3>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 text-sm text-muted-foreground leading-relaxed">
            <li className="flex gap-3">
              <span className="text-foreground">—</span>
              <span>Works in any text editor, now and in ten years.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-foreground">—</span>
              <span>Easy to read, write, and version control with git.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-foreground">—</span>
              <span>Converts to HTML, PDF, and other formats cleanly.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-foreground">—</span>
              <span>No proprietary formats or cloud lock-in.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-foreground">—</span>
              <span>Perfect for notes, documentation, articles, and books.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-foreground">—</span>
              <span>Lightweight syntax that stays out of your way.</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
