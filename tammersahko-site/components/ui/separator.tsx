import * as React from "react";

export function Separator({ className="" }: { className?: string }) {
  return <div className={"h-px w-full bg-sky-200 " + className} />;
}
