import {
  Eye,
  Zap,
  Layers,
  CheckSquare,
  Image as ImageIcon,
  Search,
  FolderTree,
  Printer,
  SunMoon,
  Table2,
  Palette,
  MousePointerClick,
  Ruler,
  Columns3,
  HardDrive,
  LifeBuoy,
} from "lucide-react";
import { motion } from "framer-motion";
import { FeatureCard } from "./FeatureCard";

const categories = [
  {
    title: "Formatting",
    features: [
      {
        icon: Eye,
        title: "Live formatting",
        description:
          "Markdown is rendered directly in the text — headings, bold, links, and markers vanish. No preview pane, no toggle.",
      },
      {
        icon: Layers,
        title: "Cursor-aware reveal",
        description:
          "On the line you're editing the markers come back, so editing stays natural. Move the cursor away and formatting returns.",
      },
      {
        icon: MousePointerClick,
        title: "Format popover & smart paste",
        description:
          "Select text and a small bubble offers quick actions. Paste a URL over a selection and it becomes a Markdown link.",
      },
      {
        icon: Ruler,
        title: "24 px grid",
        description:
          "Body lines, lists, checkboxes, quotes, code and table cells all share the same grid that scales with zoom — line numbers stay even.",
      },
    ],
  },
  {
    title: "Rich content",
    features: [
      {
        icon: Table2,
        title: "Tables & alerts",
        description:
          "Rendered tables with aligned columns, GitHub-style quote alerts — NOTE, TIP, IMPORTANT, WARNING, CAUTION — as colored callouts.",
      },
      {
        icon: CheckSquare,
        title: "Interactive checklists",
        description:
          "Click `- [ ]` and `- [x]` boxes to toggle them, or hit ⌘L. Bullet and numbered lists auto-continue with Tab / ⇧Tab nesting.",
      },
      {
        icon: ImageIcon,
        title: "Inline images",
        description:
          "Local and https images preview in the editor. Paste or drop an image and it lands in an `assets/` folder next to your file.",
      },
      {
        icon: Palette,
        title: "Code & color swatches",
        description:
          "Inline code capsules, fenced blocks with language label and Copy button. Inline colors like #0969DA get a live swatch next to them.",
      },
    ],
  },
  {
    title: "Workspace",
    features: [
      {
        icon: Columns3,
        title: "Native documents & tabs",
        description:
          "Every file is a real macOS document: system tabs, drag one out to its own window, Merge All Windows, autosave, versions.",
      },
      {
        icon: FolderTree,
        title: "Finder-style sidebar",
        description:
          "Collapsible Open, Favorites and Recents. Star or remove on hover, Reveal in Finder, Duplicate, Copy Path, or drag files in.",
      },
      {
        icon: Search,
        title: "Find & replace",
        description:
          "The native Find bar with next / previous, Find & Replace, and Go to Line. Word and character counts live in the window subtitle.",
      },
      {
        icon: SunMoon,
        title: "Light, Dark, System",
        description:
          "Semantic colors that adapt on their own. Readable-width column (Small / Medium / Full), line numbers, and zoom always one shortcut away.",
      },
    ],
  },
  {
    title: "Engine & export",
    features: [
      {
        icon: Zap,
        title: "Incremental & native",
        description:
          "An explicit TextKit 1 stack reformats only the edited paragraph — never the whole document. Zero external dependencies.",
      },
      {
        icon: HardDrive,
        title: "Local-first, any encoding",
        description:
          "Opens .md, .markdown, .txt. Detects UTF-8, UTF-16, Windows-1252, ISO-8859-1, Mac Roman — and preserves the encoding on save.",
      },
      {
        icon: Printer,
        title: "Print & export PDF",
        description:
          "Print (⌘P) or export as PDF (⌃⌘P) with real A4 pagination — headings, code, quotes, checklists, images, clickable links.",
      },
      {
        icon: LifeBuoy,
        title: "Built-in help",
        description:
          "Litteram Help (⌘?) is a Markdown cheat-sheet rendered by the live preview itself — searchable with ⌘F. Shown on first launch.",
      },
    ],
  },
];

export function FeaturesSection() {
  return (
    <section
      id="features"
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
            Features
          </p>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl text-foreground">
            Writing, undisturbed.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            A Mac-native alternative to Sublime for anyone who works with .md
            files every day — light, fast, no workspaces, no vaults.
          </p>
        </motion.div>

        <div className="mt-16 space-y-16">
          {categories.map((category, categoryIndex) => (
            <div key={category.title}>
              <motion.h3
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="font-serif text-2xl text-foreground mb-6"
              >
                {category.title}
              </motion.h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {category.features.map((f, i) => (
                  <FeatureCard key={f.title} {...f} index={i} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
