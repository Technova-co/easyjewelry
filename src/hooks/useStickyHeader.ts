// hooks/useStickyHeader.ts
import { useEffect, useRef, useState } from "react";

type Options = {
  hideOffset?: number;
  showOffset?: number;
};

export function useStickyHeader(options: Options = {}) {
  const [atTop, setAtTop] = useState(true);

  const ticking = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset;
      setAtTop(y <= 2);

      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerClass = "bg-secondary shadow-md";
  const compactNav = false;
  const motionProps = {};

  return { atTop, compactNav, headerClass, motionProps };
}