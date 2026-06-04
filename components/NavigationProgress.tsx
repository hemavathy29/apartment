"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function NavigationProgress() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const prevPathname = useRef(pathname);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (pathname !== prevPathname.current) {
      // Page changed — complete the bar
      setProgress(100);
      timerRef.current = setTimeout(() => {
        setVisible(false);
        setProgress(0);
      }, 400);
      prevPathname.current = pathname;
    }
  }, [pathname]);

  // On link clicks, start the bar
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;
      const href = target.getAttribute("href");
      if (!href || href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:") || href === "#") return;
      setVisible(true);
      setProgress(0);
      // Animate to ~70% while page loads
      setTimeout(() => setProgress(30), 50);
      setTimeout(() => setProgress(60), 200);
      setTimeout(() => setProgress(75), 600);
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  if (!visible && progress === 0) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "3px",
        zIndex: 9999,
        backgroundColor: "rgba(201,168,108,0.2)",
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          height: "100%",
          backgroundColor: "#c9a86c",
          width: `${progress}%`,
          transition: progress === 100 ? "width 0.2s ease" : "width 0.4s ease",
          boxShadow: "0 0 8px rgba(201,168,108,0.8)",
        }}
      />
    </div>
  );
}
