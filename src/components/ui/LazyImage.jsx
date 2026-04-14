import React from "react";
import { cn } from "../../utils/cn";

export default function LazyImage({ src, alt, className, ...props }) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={cn("object-cover w-full h-full selection:bg-transparent", className)}
      {...props}
    />
  );
}
