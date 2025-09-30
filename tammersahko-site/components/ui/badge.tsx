import * as React from "react";
import clsx from "clsx";

export function Badge({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return <span className={clsx("inline-flex items-center rounded-xl bg-sky-100 px-3 py-1 text-sm", className)} {...props} />;
}
