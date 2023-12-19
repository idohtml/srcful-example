import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface H1Props {
  children: ReactNode;
  className: string;
}

export default function Text({ children, className }: H1Props) {
  return (
    <p
      className={twMerge(
        `leading-7 [&:not(:first-child)]:mt-6 text-lg md:text-xl`,
        className
      )}
    >
      {children}
    </p>
  );
}
