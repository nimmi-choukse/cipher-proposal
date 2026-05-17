import type { ReactNode } from "react";

import { Footer } from "./Footer";
import { Header } from "./Header";

export type PageShellProps = {
  children?: ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  return (
    <>
      <Header />
      <main data-layout="main">{children}</main>
      <Footer />
    </>
  );
}
