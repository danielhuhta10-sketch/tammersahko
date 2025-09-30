import * as React from "react";
import clsx from "clsx";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input ref={ref} className={clsx("w-full h-10 rounded-xl border border-sky-200 bg-white px-3 outline-none focus:ring-2 focus:ring-sky-300", className)} {...props} />
  )
);
Input.displayName = "Input";
