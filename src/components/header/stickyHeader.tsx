"use client";
import React, { ReactNode, Children } from "react";

interface StickyHeaderProps {
  children: ReactNode;
}

// This component will only make the **first** child sticky. Any additional
// children are rendered normally below the sticky section. This allows the
// header to have a top bar that stays pinned while the bottom nav scrolls
// away.
const StickyHeader = ({ children }: StickyHeaderProps) => {
  // split the children into the part that should be sticky and the rest
  const childArray = Children.toArray(children);
  const topChild = childArray[0] || null;
  const otherChildren = childArray.slice(1);

  return (
    <>
      <header id="header" className="sticky top-0 z-50">
        <div className="bg-background">
          {topChild}
        </div>
      </header>
      {/* render the remainder of the header below the sticky section */}
      {otherChildren}
    </>
  );
};

export default StickyHeader;
