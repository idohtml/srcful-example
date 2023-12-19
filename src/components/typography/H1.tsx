import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface H1Props {
  children: ReactNode;
  className?: string;
}

export default function H1({ children, className }: H1Props) {
  return (
    <h1
      className={twMerge(
        `scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-7xl`,
        className
      )}
    >
      {children}
    </h1>
  );
}
