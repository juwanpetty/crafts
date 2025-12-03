import type { ComponentProps } from "react";

export function PlaceholderIcon({ ...props }: ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      {...props}
    >
      <g
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <rect x="2.75" y="2.75" width="12.5" height="12.5" rx="2" ry="2"></rect>
      </g>
    </svg>
  );
}
