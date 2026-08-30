import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { useStore } from "@/lib/store";

export function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1 pt-20">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
}) {
  return (
    <section className="relative overflow-hidden surface-veil border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          className="mt-4 max-w-3xl text-5xl leading-[1.05] text-foreground md:text-6xl"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          {title}
        </motion.h1>
        {lede && (
          <motion.p
            className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            {lede}
          </motion.p>
        )}
      </div>
    </section>
  );
}

/** Client-side gate for authenticated pages (mock session). */
export function RequireAuth({ children }: { children: ReactNode }) {
  const { user, ready } = useStore();

  if (!ready) {
    return (
      <div className="mx-auto max-w-7xl px-6 py-32">
        <div className="h-64 w-full shimmer luxe-card" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="mx-auto flex max-w-md flex-col items-center px-6 py-32 text-center">
        <span className="eyebrow">Members only</span>
        <h2 className="mt-4 text-4xl text-foreground">Your wardrobe is locked</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          Sign in to track bottles, log wears and save discoveries to your collection.
        </p>
        <div className="mt-8 flex gap-3">
          <Link
            to="/login"
            className="bg-primary px-6 py-3 text-[11px] uppercase tracking-[0.2em] text-primary-foreground"
          >
            Sign in
          </Link>
          <Link
            to="/signup"
            className="border border-border px-6 py-3 text-[11px] uppercase tracking-[0.2em] text-foreground hover:border-primary hover:text-primary"
          >
            Create account
          </Link>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}

export function AccountNav() {
  const links = [
    { to: "/dashboard", label: "Dashboard" },
    { to: "/collection", label: "Wardrobe" },
    { to: "/wishlist", label: "Wishlist" },
    { to: "/profile", label: "Profile" },
  ] as const;

  return (
    <nav className="flex flex-wrap gap-2 border-b border-border pb-4">
      {links.map((l) => (
        <Link
          key={l.to}
          to={l.to}
          className="px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary"
          activeProps={{ className: "text-primary border border-primary/40" }}
        >
          {l.label}
        </Link>
      ))}
    </nav>
  );
}
