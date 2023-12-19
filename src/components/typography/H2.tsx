import { ReactNode } from "react";

interface H1Props {
  children: ReactNode;
}

export default function H2({ children }: H1Props) {
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      {children}
    </h2>
  );
}
