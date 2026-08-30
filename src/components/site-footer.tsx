import { Link } from "@tanstack/react-router";

const COLUMNS = [
  {
    title: "Explore",
    links: [
      { to: "/discover", label: "Discover" },
      { to: "/moods", label: "Mood & Occasion" },
      { to: "/reviews", label: "Community Reviews" },
    ],
  },
  {
    title: "Collect",
    links: [
      { to: "/dashboard", label: "Dashboard" },
      { to: "/collection", label: "My Wardrobe" },
      { to: "/wishlist", label: "Wishlist" },
    ],
  },
  {
    title: "Read",
    links: [
      { to: "/journal", label: "The Journal" },
      { to: "/profile", label: "Profile" },
      { to: "/signup", label: "Create account" },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-ink">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          <span className="font-display text-2xl tracking-[0.18em] text-gold-gradient">
            SCENTLORE
          </span>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            An interactive archive for fragrance — where invisible things are made legible.
          </p>
        </div>
        {COLUMNS.map((col) => (
          <div key={col.title}>
            <h4 className="eyebrow">{col.title}</h4>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border px-6 py-6">
        <p className="mx-auto max-w-7xl text-xs tracking-widest text-muted-foreground uppercase">
          © 2026 Scentlore — Demo experience with sample data
        </p>
      </div>
    </footer>
  );
}
