import { LayoutDashboard } from "lucide-react";

interface DashboardPlaceholderProps {
  expectedPath: string;
}

// Fixed heights (in %) for the decorative bar-chart silhouette — purely
// schematic, not meant to represent real data.
const BAR_HEIGHTS = [35, 62, 45, 78, 52, 30];

/**
 * Renders wherever a project has no real screenshot yet (all four, right
 * now). Deliberately schematic/abstract rather than a fake screenshot, so
 * it never reads as a real dashboard that's just loading slowly — but
 * composed with enough visual weight (the bar silhouette) to hold up at
 * the large size used on the case study page, not just the small card size.
 */
export function DashboardPlaceholder({ expectedPath }: DashboardPlaceholderProps) {
  return (
    <div className="flex h-full min-h-[220px] w-full flex-col items-center justify-center gap-6 bg-beige-dark p-8 text-center">
      <div className="flex h-20 items-end gap-2.5 sm:h-28" aria-hidden="true">
        {BAR_HEIGHTS.map((height, i) => (
          <div
            key={i}
            className="w-3 rounded-t-sm bg-warm-gray/20 sm:w-4"
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
      <div className="flex flex-col items-center gap-2">
        <LayoutDashboard className="h-5 w-5 text-warm-gray" aria-hidden="true" />
        <p className="text-xs font-medium uppercase tracking-wide text-warm-gray">
          Dashboard preview pending
        </p>
        <p className="font-mono text-[11px] text-warm-gray/70">{expectedPath}</p>
      </div>
    </div>
  );
}
