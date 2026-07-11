import { GrainTexture } from "@/components/ui/GrainTexture";

/**
 * Sitewide base grain — rendered as a real SVG element (see GrainTexture),
 * not a CSS background-image. Fixed full-viewport, above page content but
 * below the nav's own stacking, pointer-events-none and hidden from
 * assistive tech since it's purely decorative.
 */
export function GrainOverlay() {
  return (
    <GrainTexture
      id="grain-global"
      opacity={0.014}
      blend="overlay"
      className="pointer-events-none fixed inset-0 z-30 h-full w-full"
    />
  );
}
