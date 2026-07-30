import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

export function FeatureCard({
  icon: Icon,
  title,
  description,
  index = 0,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.07,
      }}
      className="p-7 rounded-2xl border border-border bg-card"
    >
      <Icon className="w-6 h-6 text-foreground" strokeWidth={1.5} />
      <h3 className="mt-5 font-serif text-2xl text-foreground">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
