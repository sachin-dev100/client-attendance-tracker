import * as React from "react";

import {cn} from "@/lib/utils";

function Input({className, type, ...props}) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "border-be-4 border-secondary/80 h-11 w-full min-w-0 rounded-md font-text bg-input px-2.5 py-1 text-lg text-black transition-colors outline-none file:inline-flex file:h-6  file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground    disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
        className,
      )}
      {...props}
    />
  );
}

export {Input};
