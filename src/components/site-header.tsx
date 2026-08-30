import { Link, useRouter } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, User2 } from "lucide-react";
import { useStore } from "@/lib/store";

const LINKS = [
  { to: "/discover", label: "Discover" },
  { to: "/moods", label: "Moods" },
  { to: "/reviews", label: "Reviews" },
  { to: "/journal", label: "Journal" },
] as const;

export function SiteHeader() {
  const { user } = useStore();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const unsub = router.subscribe("onResolved", () => setOpen(false));
    return unsub;
  }, [router]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "border-b border-border bg-background/85 backdrop-blur-xl" : ""
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="group flex items-baseline gap-2">
          <span className="font-display text-2xl tracking-[0.18em] text-gold-gradient">
            SCENTLORE
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="relative text-[13px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {user ? (
            <Link
              to="/dashboard"
              className="hidden items-center gap-2 border border-primary/50 px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground md:inline-flex"
            >
              <User2 className="size-3.5" />
              {user.name.split(" ")[0]}
            </Link>
          ) : (
            <>
              <Link
                to="/login"
                className="hidden text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary md:block"
              >
                Sign in
              </Link>
              <Link
                to="/signup"
                className="hidden border border-primary/50 px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground md:block"
              >
                Join
              </Link>
            </>
          )}
          <button
            type="button"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="text-foreground md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-b border-border bg-background/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-5">
              {[...LINKS, { to: "/dashboard", label: "Dashboard" }, { to: "/login", label: "Sign in" }].map(
                (l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    className="py-2 text-sm uppercase tracking-[0.2em] text-muted-foreground"
                  >
                    {l.label}
                  </Link>
                ),
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
