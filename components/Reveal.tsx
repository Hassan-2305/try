"use client";

import { m } from "framer-motion";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "figure";
};

/** A quiet fade-and-rise used sparingly where content first comes into view. */
export default function Reveal({ children, className, delay = 0, as = "div" }: Props) {
  const Component = m[as];
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </Component>
  );
}
