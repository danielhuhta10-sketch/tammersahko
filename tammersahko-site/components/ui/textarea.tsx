import * as React from "react";
import clsx from "clsx";

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => (
    <textarea ref={ref} className={clsx("w-full rounded-xl border border-sky-200 bg-white p-3 outline-none focus:ring-2 focus:ring-sky-300", className)} {...props} />
  )
);
Textarea.displayName = "Textarea";
