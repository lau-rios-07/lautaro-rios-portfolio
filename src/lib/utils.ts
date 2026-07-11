/**
 * Joins conditional class names. Deliberately not using clsx/tailwind-merge —
 * our class lists are short and controlled, so a zero-dependency helper
 * keeps the install footprint smaller without losing anything we need.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
