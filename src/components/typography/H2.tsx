import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface H1Props {
  children: ReactNode;
  className?: string;
}

export default function H2({ children, className }: H1Props) {
  return (
    <h2
      className={twMerge(
        `scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0`,
        className
      )}
    >
      {children}
    </h2>
  );
}
