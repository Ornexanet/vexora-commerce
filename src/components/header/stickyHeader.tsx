"use client";
import React, { ReactNode, useEffect, useRef, useState, Children } from "react";

interface StickyHeaderProps {
  children: ReactNode;
}

// This component will only make the **first** child sticky. Any additional
// children are rendered normally below the sticky section. This allows the
// header to have a top bar that stays pinned while the bottom nav scrolls
// away.
const StickyHeader = ({ children }: StickyHeaderProps) => {
  const headerRef = useRef<HTMLElement>(null);
  const mainHeaderRef = useRef<HTMLDivElement>(null);

  const [isPinned, setIsPinned] = useState(false);
  const [headerStyleTop, setHeaderStyleTop] = useState("0px");

  // split the children into the part that should be sticky and the rest
  const childArray = Children.toArray(children);
  const topChild = childArray[0] || null;
  const otherChildren = childArray.slice(1);

  useEffect(() => {
    let prevScrollpos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const header = headerRef.current;
      const mainHeader = mainHeaderRef.current;

      if (!header || !mainHeader) return;

      const mainHeaderHeight = mainHeader.clientHeight;

      if (prevScrollpos > currentScrollPos && currentScrollPos > 0) {
        setIsPinned(true);
        setHeaderStyleTop("0px");
        document.documentElement.style.setProperty(
          "--header-height",
          `${mainHeaderHeight}px`,
        );
      } else {
        setIsPinned(false);
        setHeaderStyleTop("-100%");
        document.documentElement.style.setProperty("--header-height", "0px");
      }
      prevScrollpos = currentScrollPos;
    };

    // Initial check on mount - only the sticky portion matters
    const header = headerRef.current;
    const mainHeader = mainHeaderRef.current;

    if (header && mainHeader) {
      const mainHeaderHeight = mainHeader.clientHeight;

      if (window.scrollY > 0) {
        setIsPinned(true);
        setHeaderStyleTop("0px");
        document.documentElement.style.setProperty(
          "--header-height",
          `${mainHeaderHeight}px`,
        );
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        id="header"
        ref={headerRef}
        className={`sticky z-50 top-0 transition-[top] duration-300 ${isPinned ? "header-pinned border-b border-gray-2" : ""}`}
        style={{ top: headerStyleTop }}
      >
        <div ref={mainHeaderRef} className="bg-background">
          {topChild}
        </div>
      </header>
      {/* render the remainder of the header below the sticky section */}
      {otherChildren}
    </>
  );
};

export default StickyHeader;
