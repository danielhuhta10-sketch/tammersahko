import * as React from "react";
import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: "default" | "outline";
  size?: "default" | "lg";
  className?: string;
};

export function Button({ asChild, variant="default", size="default", className, ...props }: ButtonProps) {
  const base = "inline-flex items-center justify-center rounded-2xl font-medium transition shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-400/50";
  const variants = {
    default: "bg-sky-600 hover:bg-sky-700 text-white",
    outline: "border border-sky-400 text-sky-700 bg-transparent hover:bg-sky-100"
  } as const;
  const sizes = { default: "h-10 px-4", lg: "h-12 px-6 text-base" } as const;
  const classes = clsx(base, variants[variant], sizes[size], className);

  if (asChild) {
    // @ts-ignore
    const Comp = (props as any).children?.type || "a";
    // @ts-ignore
    return React.cloneElement((props as any).children, { className: clsx((props as any).children.props.className, classes) });
  }
  return <button className={classes} {...props} />;
}
