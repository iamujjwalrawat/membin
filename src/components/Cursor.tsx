"use client";

import { useEffect } from "react";

export function Cursor() {
  useEffect(() => {
    const cursor = document.getElementById("global-cursor");
    if (!cursor) return;

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
      cursor.style.transform = `translate(-50%, -50%)`;
      // We override transform with translate + cursor state via classes in CSS
      // A better way is using Top/Left directly
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return null;
}
