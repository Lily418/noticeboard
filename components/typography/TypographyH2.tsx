import React from "react";

export function TypographyH2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="scroll-m-20 pb-2 text-2xl font-semibold tracking-tight first:mt-0 mb-2">
      {children}
    </h2>
  );
}
