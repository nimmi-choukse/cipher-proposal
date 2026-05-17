import type { HTMLAttributes, ReactNode } from "react";

export type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children?: ReactNode;
};

export function Container({ children, ...props }: ContainerProps) {
  return <div {...props}>{children}</div>;
}
