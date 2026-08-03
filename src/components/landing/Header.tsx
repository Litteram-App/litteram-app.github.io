import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/70 border-b border-border/60">
      <div className="mx-auto max-w-5xl px-6 h-14 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <Logo size={24} />
          <span className="font-serif text-xl leading-none text-foreground">Litteram</span>
        </a>
        <nav className="hidden sm:flex items-center gap-7 text-sm text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition-colors">Features</a>
          <a href="#shortcuts" className="hover:text-foreground transition-colors">Shortcuts</a>
          <a href="#privacy" className="hover:text-foreground transition-colors">Privacy</a>
          <a href="#install" className="hover:text-foreground transition-colors">Install</a>
          <a href="#markdown" className="hover:text-foreground transition-colors">Markdown</a>
          <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
          <a
            href="#download"
            className="inline-flex items-center rounded-full bg-primary px-3.5 py-1.5 text-xs font-medium text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Download
          </a>
        </nav>
      </div>
    </header>
  );
}
