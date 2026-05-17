import type { HTMLAttributes, ReactNode } from "react";

export type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  as?: "h1" | "h2" | "h3" | "h4";
  children?: ReactNode;
};

export function Heading({ as: Tag = "h2", children, ...props }: HeadingProps) {
  return <Tag {...props}>{children}</Tag>;
}
