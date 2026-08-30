import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type User = { name: string; email: string };

export type CollectionItem = {
  perfumeId: string;
  status: "owned" | "tested" | "wishlist";
  fillLevel: number; // 0-100
  addedOn: string;
};

type State = {
  user: User | null;
  collection: CollectionItem[];
  ready: boolean;
  signIn: (email: string, name?: string) => void;
  signOut: () => void;
  updateUser: (patch: Partial<User>) => void;
  setStatus: (perfumeId: string, status: CollectionItem["status"]) => void;
  remove: (perfumeId: string) => void;
  setFill: (perfumeId: string, fillLevel: number) => void;
  statusOf: (perfumeId: string) => CollectionItem["status"] | null;
};

const KEY = "scentlore.state.v1";

const SEED: CollectionItem[] = [
  { perfumeId: "noir-oud", status: "owned", fillLevel: 62, addedOn: "Nov 2024" },
  { perfumeId: "iris-nocturne", status: "owned", fillLevel: 88, addedOn: "Jan 2025" },
  { perfumeId: "vetiver-atlas", status: "owned", fillLevel: 24, addedOn: "Mar 2025" },
  { perfumeId: "fleur-de-sel", status: "tested", fillLevel: 0, addedOn: "Jun 2025" },
  { perfumeId: "velours-rouge", status: "wishlist", fillLevel: 0, addedOn: "Aug 2025" },
  { perfumeId: "miel-sauvage", status: "wishlist", fillLevel: 0, addedOn: "Sep 2025" },
];

const Ctx = createContext<State | null>(null);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [collection, setCollection] = useState<CollectionItem[]>(SEED);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as { user: User | null; collection: CollectionItem[] };
        setUser(parsed.user ?? null);
        if (parsed.collection?.length) setCollection(parsed.collection);
      }
    } catch {
      /* ignore */
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      localStorage.setItem(KEY, JSON.stringify({ user, collection }));
    } catch {
      /* ignore */
    }
  }, [user, collection, ready]);

  const signIn = useCallback((email: string, name?: string) => {
    setUser({ email, name: name || email.split("@")[0].replace(/[._]/g, " ") });
  }, []);

  const value = useMemo<State>(
    () => ({
      user,
      collection,
      ready,
      signIn,
      signOut: () => setUser(null),
      updateUser: (patch) => setUser((u) => (u ? { ...u, ...patch } : u)),
      setStatus: (perfumeId, status) =>
        setCollection((c) => {
          const found = c.find((i) => i.perfumeId === perfumeId);
          if (found) return c.map((i) => (i.perfumeId === perfumeId ? { ...i, status } : i));
          return [
            ...c,
            {
              perfumeId,
              status,
              fillLevel: status === "owned" ? 100 : 0,
              addedOn: "Today",
            },
          ];
        }),
      remove: (perfumeId) => setCollection((c) => c.filter((i) => i.perfumeId !== perfumeId)),
      setFill: (perfumeId, fillLevel) =>
        setCollection((c) => c.map((i) => (i.perfumeId === perfumeId ? { ...i, fillLevel } : i))),
      statusOf: (perfumeId) => collection.find((i) => i.perfumeId === perfumeId)?.status ?? null,
    }),
    [user, collection, ready, signIn],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useStore() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useStore must be used within StoreProvider");
  return ctx;
}
