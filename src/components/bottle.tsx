import { motion } from "motion/react";
import type { Perfume } from "@/lib/scent-data";

/** Procedural perfume-bottle illustration tinted by each fragrance's accent. */
export function Bottle({
  perfume,
  size = 140,
  fill = 100,
  animate = true,
}: {
  perfume: Pick<Perfume, "accentFrom" | "accentTo" | "house">;
  size?: number;
  fill?: number;
  animate?: boolean;
}) {
  const liquidTop = 46 + (1 - fill / 100) * 44;
  const gradId = `g-${perfume.accentFrom.replace(/[^a-z0-9]/gi, "")}`;

  return (
    <motion.svg
      width={size}
      height={size * 1.45}
      viewBox="0 0 100 145"
      initial={animate ? { opacity: 0, y: 14 } : false}
      animate={animate ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={perfume.accentFrom} />
          <stop offset="100%" stopColor={perfume.accentTo} />
        </linearGradient>
        <linearGradient id={`${gradId}-glass`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--gold-soft)" stopOpacity="0.35" />
          <stop offset="45%" stopColor="var(--gold)" stopOpacity="0.05" />
          <stop offset="100%" stopColor="var(--gold-soft)" stopOpacity="0.28" />
        </linearGradient>
        <clipPath id={`${gradId}-clip`}>
          <rect x="18" y="42" width="64" height="92" rx="10" />
        </clipPath>
      </defs>

      {/* cap */}
      <rect x="40" y="4" width="20" height="20" rx="3" fill="var(--gold)" opacity="0.9" />
      <rect x="43" y="24" width="14" height="10" rx="2" fill="var(--gold-soft)" opacity="0.7" />
      <rect x="36" y="33" width="28" height="9" rx="3" fill="var(--gold)" opacity="0.55" />

      {/* body */}
      <rect x="18" y="42" width="64" height="92" rx="10" fill="var(--surface-2)" />
      <g clipPath={`url(#${gradId}-clip)`}>
        <rect x="18" y={liquidTop} width="64" height={140 - liquidTop} fill={`url(#${gradId})`} />
      </g>
      <rect
        x="18"
        y="42"
        width="64"
        height="92"
        rx="10"
        fill={`url(#${gradId}-glass)`}
        stroke="var(--gold)"
        strokeOpacity="0.35"
      />
      {/* label */}
      <rect
        x="30"
        y="72"
        width="40"
        height="30"
        rx="2"
        fill="var(--ink)"
        opacity="0.55"
        stroke="var(--gold)"
        strokeOpacity="0.3"
      />
      <text
        x="50"
        y="90"
        textAnchor="middle"
        fontSize="7"
        letterSpacing="1.4"
        fill="var(--gold-soft)"
        fontFamily="var(--font-sans)"
      >
        {perfume.house.split(" ")[0]?.slice(0, 8).toUpperCase()}
      </text>
    </motion.svg>
  );
}
