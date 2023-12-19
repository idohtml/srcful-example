import { ReactNode } from "react";

interface H1Props {
  children: ReactNode;
}

export default function H1({ children }: H1Props) {
  return (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      {children}
    </h3>
  );
}
