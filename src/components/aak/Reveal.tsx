import { useEffect, useRef, type ElementType, type ReactNode } from "react";

type RevealProps = {
  children?: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  variant?: "text" | "rule";
};

/**
 * Restrained scroll reveal: a single masked rise for text blocks, or a
 * left-to-right rule extension. No hover motion, no per-element bounce.
 */
export function Reveal({
  children,
  as: Tag = "div",
  className = "",
  delay = 0,
  variant = "text",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            node.classList.add("is-in");
            observer.unobserve(node);
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const base = variant === "rule" ? "rule-draw" : "reveal";

  return (
    <Tag
      ref={ref}
      className={`${base} ${className}`}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
