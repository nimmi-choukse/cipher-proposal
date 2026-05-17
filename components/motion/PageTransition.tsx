"use client";

import type { ReactNode } from "react";

export type PageTransitionProps = {
  children?: ReactNode;
};

export function PageTransition({ children }: PageTransitionProps) {
  return <div data-motion="page-transition">{children}</div>;
}
