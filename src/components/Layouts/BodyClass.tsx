"use client";

import { useEffect, useRef } from "react";

type Props = { className?: string };

export default function BodyClass({ className = "" }: Props) {
  const prevRef = useRef<string>("");

  useEffect(() => {
    const baseClasses = ["bg-bg-body", "dark:bg-dark-body"]; 
    const body = document.body;

    if (prevRef.current) {
      prevRef.current.split(" ").filter(Boolean).forEach(c => body.classList.remove(c));
    }

    className.split(" ").filter(Boolean).forEach(c => body.classList.add(c));

    baseClasses.forEach(c => body.classList.add(c));

    prevRef.current = className;
    return () => {
      className.split(" ").filter(Boolean).forEach(c => body.classList.remove(c));
    };
  }, [className]);

  return null;
}
