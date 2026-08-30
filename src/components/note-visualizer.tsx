import { motion } from "motion/react";
import { useState } from "react";
import type { Perfume, NotePhase } from "@/lib/scent-data";

const PHASES: { id: NotePhase; label: string; window: string }[] = [
  { id: "top", label: "Top", window: "0 – 20 min" },
  { id: "heart", label: "Heart", window: "20 min – 3 h" },
  { id: "base", label: "Base", window: "3 h – dry down" },
];

/** Radial scent-note visualiser: rings by phase, arc length by intensity. */
export function NoteVisualizer({ perfume }: { perfume: Perfume }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,340px)_1fr] lg:items-center">
      <div className="relative mx-auto aspect-square w-full max-w-[340px]">
        <div
          className="absolute inset-6 rounded-full drift blur-2xl"
          style={{
            background: `radial-gradient(circle, ${perfume.accentFrom}, transparent 68%)`,
            opacity: 0.35,
          }}
        />
        <svg viewBox="0 0 200 200" className="relative h-full w-full -rotate-90">
          {PHASES.map((phase, pi) => {
            const notes = perfume.notes.filter((n) => n.phase === phase.id);
            const radius = 82 - pi * 26;
            const circ = 2 * Math.PI * radius;
            let offset = 0;
            const slice = circ / Math.max(notes.length, 1);
            return (
              <g key={phase.id}>
                <circle
                  cx="100"
                  cy="100"
                  r={radius}
                  fill="none"
                  stroke="var(--border)"
                  strokeWidth="9"
                />
                {notes.map((n) => {
                  const len = slice * (n.intensity / 100) * 0.88;
                  const dash = `${len} ${circ}`;
                  const thisOffset = -offset;
                  offset += slice;
                  const isActive = active === n.name;
                  return (
                    <motion.circle
                      key={n.name}
                      cx="100"
                      cy="100"
                      r={radius}
                      fill="none"
                      stroke={pi === 0 ? "var(--gold-soft)" : pi === 1 ? perfume.accentFrom : perfume.accentTo}
                      strokeWidth={isActive ? 13 : 9}
                      strokeLinecap="round"
                      strokeDasharray={dash}
                      strokeDashoffset={thisOffset}
                      initial={{ opacity: 0, strokeDasharray: `0 ${circ}` }}
                      whileInView={{ opacity: isActive ? 1 : 0.8, strokeDasharray: dash }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, delay: 0.15 * pi, ease: [0.22, 1, 0.36, 1] }}
                      onMouseEnter={() => setActive(n.name)}
                      onMouseLeave={() => setActive(null)}
                      className="cursor-pointer"
                    />
                  );
                })}
              </g>
            );
          })}
        </svg>
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center">
          <span className="eyebrow">{active ? "Note" : "Composition"}</span>
          <span className="font-display text-2xl text-foreground">
            {active ?? perfume.family}
          </span>
        </div>
      </div>

      <div className="space-y-6">
        {PHASES.map((phase) => (
          <div key={phase.id}>
            <div className="flex items-baseline justify-between">
              <h4 className="text-xl text-foreground">{phase.label} notes</h4>
              <span className="eyebrow">{phase.window}</span>
            </div>
            <div className="mt-3 space-y-2">
              {perfume.notes
                .filter((n) => n.phase === phase.id)
                .map((n) => (
                  <button
                    type="button"
                    key={n.name}
                    onMouseEnter={() => setActive(n.name)}
                    onMouseLeave={() => setActive(null)}
                    className="group flex w-full items-center gap-4 text-left"
                  >
                    <span className="w-36 shrink-0 text-sm text-foreground transition-colors group-hover:text-primary">
                      {n.name}
                    </span>
                    <span className="relative h-[3px] flex-1 bg-border">
                      <motion.span
                        className="absolute inset-y-0 left-0"
                        style={{
                          background: `linear-gradient(90deg, ${perfume.accentFrom}, var(--gold))`,
                        }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${n.intensity}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </span>
                    <span className="w-24 shrink-0 text-right text-xs text-muted-foreground">
                      {n.family}
                    </span>
                  </button>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
