import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Star, Plus, Check } from "lucide-react";
import { Bottle } from "@/components/bottle";
import { itemVariants } from "@/components/reveal";
import { useStore } from "@/lib/store";
import type { Perfume } from "@/lib/scent-data";
import { toast } from "sonner";

export function PerfumeCard({ perfume }: { perfume: Perfume }) {
  const { statusOf, setStatus } = useStore();
  const status = statusOf(perfume.id);

  return (
    <motion.div variants={itemVariants}>
      <motion.article
        whileHover={{ y: -8 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="group relative flex h-full flex-col overflow-hidden luxe-card"
      >
        <div
          className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-40"
          style={{ background: perfume.accentFrom }}
        />
        <Link
          to="/perfume/$id"
          params={{ id: perfume.id }}
          className="relative flex flex-col items-center px-6 pt-8 pb-4"
        >
          <Bottle perfume={perfume} size={96} animate={false} />
          <span className="eyebrow mt-5">{perfume.house}</span>
          <h3 className="mt-1 text-center text-2xl text-foreground">{perfume.name}</h3>
          <p className="mt-1 text-center text-sm italic text-muted-foreground">
            {perfume.tagline}
          </p>
        </Link>

        <div className="mt-auto space-y-4 px-6 pb-6">
          <div className="flex flex-wrap justify-center gap-1.5">
            {perfume.notes.slice(0, 3).map((n) => (
              <span
                key={n.name}
                className="hairline px-2 py-0.5 text-[11px] tracking-wide text-muted-foreground"
              >
                {n.name}
              </span>
            ))}
          </div>
          <div className="gold-rule opacity-30" />
          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-1.5 text-primary">
              <Star className="size-3.5 fill-current" />
              {perfume.rating}
              <span className="text-muted-foreground">({perfume.reviewCount})</span>
            </span>
            <span className="font-display text-lg text-foreground">${perfume.price}</span>
          </div>
          <button
            type="button"
            onClick={() => {
              setStatus(perfume.id, status === "owned" ? "wishlist" : "owned");
              toast.success(
                status === "owned"
                  ? `${perfume.name} moved to wishlist`
                  : `${perfume.name} added to your wardrobe`,
              );
            }}
            className="flex w-full items-center justify-center gap-2 border border-border bg-secondary/40 py-2.5 text-xs tracking-[0.2em] uppercase text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            {status === "owned" ? <Check className="size-3.5" /> : <Plus className="size-3.5" />}
            {status === "owned" ? "In wardrobe" : "Add to wardrobe"}
          </button>
        </div>
      </motion.article>
    </motion.div>
  );
}
