import React, { useRef, useEffect, useState } from "react";
import { cn } from "../../utils/cn";

export default function LazyVideo({ src, poster, className, loop = true, muted = true, autoPlay = true, ...props }) {
  const videoRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" } // Load slightly before it comes into view
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isIntersecting && videoRef.current && autoPlay) {
      videoRef.current.play().catch((err) => {
        console.warn("Autoplay was prevented:", err);
      });
    }
  }, [isIntersecting, autoPlay]);

  return (
    <video
      ref={videoRef}
      poster={poster}
      className={cn("object-cover w-full h-full", className)}
      playsInline
      loop={loop}
      muted={muted}
      src={isIntersecting ? src : ""}
      {...props}
    />
  );
}
