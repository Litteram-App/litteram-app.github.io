import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { ShortcutsSection } from "@/components/landing/ShortcutsSection";
import { PrivacySection } from "@/components/landing/PrivacySection";
import { MarkdownSection } from "@/components/landing/MarkdownSection";
import { InstallSection } from "@/components/landing/InstallSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { CTASection } from "@/components/landing/CTASection";
import { Footer } from "@/components/landing/Footer";
import iconAsset from "@/assets/litteram-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Litteram • Native Markdown Editor for Mac" },
      {
        name: "description",
        content:
          "Litteram is a fast, native Markdown editor with live preview. Your text is formatted right where you write it — no split panes.",
      },
      {
        property: "og:title",
        content: "Litteram • Native Markdown Editor for Mac",
      },
      {
        property: "og:description",
        content:
          "Litteram is a fast, local-first Markdown editor for macOS. Write with live formatting, open real Markdown files, export to PDF, and keep everything on your Mac",
      },
      { property: "og:image", content: iconAsset.url },
      { property: "og:url", content: "/" },
      { name: "twitter:image", content: iconAsset.url },
    ],
    links: [
      { rel: "icon", type: "image/png", href: iconAsset.url },
      { rel: "apple-touch-icon", href: iconAsset.url },
      { rel: "canonical", href: "/" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ShortcutsSection />
        <PrivacySection />
        <MarkdownSection />
        <InstallSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
