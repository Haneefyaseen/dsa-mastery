import type { Problem } from "@/types";

export function p(
  partial: Omit<Problem, "slug"> & { slug?: string }
): Problem {
  return {
    ...partial,
    slug: partial.slug ?? partial.id,
  };
}
