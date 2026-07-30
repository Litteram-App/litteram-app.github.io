import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="px-6 py-10 border-t border-border">
      <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Logo size={18} />
          <span className="font-serif text-base text-foreground">Litteram</span>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Litteram. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
