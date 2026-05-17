"use client";

import type { ReactNode } from "react";

export type FadeInProps = {
  children?: ReactNode;
};

export function FadeIn({ children }: FadeInProps) {
  return <div data-motion="fade-in">{children}</div>;
}
