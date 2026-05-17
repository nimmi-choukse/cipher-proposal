"use client";

import type { ReactNode } from "react";

export type StaggerChildrenProps = {
  children?: ReactNode;
};

export function StaggerChildren({ children }: StaggerChildrenProps) {
  return <div data-motion="stagger-children">{children}</div>;
}
