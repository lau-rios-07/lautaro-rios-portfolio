interface GrainTextureProps {
  /** Must be unique across the page — this renders multiple times (global
   *  + per-section), and SVG filter IDs collide silently if reused. */
  id: string;
  opacity: number;
  blend?: "overlay" | "multiply";
  className?: string;
}

/**
 * Renders actual SVG markup rather than a CSS background-image data-URI.
 * The previous implementation encoded the same feTurbulence filter as a
 * data-URI string with no explicit width/height on the root <svg> — valid
 * in principle, but with no intrinsic size the browser falls back to a
 * spec-default tile, and any encoding slip fails silently (no error, just
 * nothing rendered). A real DOM element removes that failure class
 * entirely: it fills its container via ordinary w-full/h-full like any
 * other SVG, with no decoding step in between.
 *
 * opacity and blend mode are set via inline style, not Tailwind classes —
 * deliberately the highest-specificity path available, so there's no
 * dependency on whether a given arbitrary-value utility class made it
 * into the generated stylesheet.
 */
export function GrainTexture({ id, opacity, blend = "overlay", className }: GrainTextureProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      style={{ opacity, mixBlendMode: blend }}
      preserveAspectRatio="none"
    >
      <filter id={id}>
        <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" stitchTiles="stitch" />
      </filter>
      <rect width="100%" height="100%" filter={`url(#${id})`} />
    </svg>
  );
}
