"use client";

import type { ReactNode } from "react";

export type SlideUpProps = {
  children?: ReactNode;
};

export function SlideUp({ children }: SlideUpProps) {
  return <div data-motion="slide-up">{children}</div>;
}
