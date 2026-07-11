import Image from "next/image";

interface BearMarkProps {
  className?: string;
}

/**
 * The user's own provided asset (public/images/bear-mark.png), used as
 * given — not redesigned. Processed mechanically: background removed via
 * alpha threshold, cropped to its bounding box, recolored pixel-for-pixel
 * to the exact --color-gold token. Silhouette and proportions untouched.
 *
 * Size is forced via an explicit Tailwind class (h-[29px] w-[31px]), not
 * left to the width/height props alone. Those props satisfy Next.js
 * Image's own requirements, but Tailwind's Preflight reset includes
 * `img { height: auto }` — a real, common conflict where a CSS rule from
 * an external stylesheet overrides an HTML attribute's implied size. The
 * explicit class has real CSS specificity and wins regardless.
 *
 * No gradient, shadow, glow, animation, or hover state. Appears exactly
 * once on the site, in the Footer.
 */
export function BearMark({ className }: BearMarkProps) {
  return (
    <Image
      src="/images/bear-mark.png"
      alt=""
      width={31}
      height={29}
      className={`h-[29px] w-[31px] ${className ?? ""}`}
    />
  );
}
