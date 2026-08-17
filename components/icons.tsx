import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;
const base = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };

export function ArrowRight(props: IconProps) { return <svg {...base} {...props}><path d="M5 12h14M13 6l6 6-6 6" /></svg>; }
export function ArrowLeft(props: IconProps) { return <svg {...base} {...props}><path d="M19 12H5M11 6l-6 6 6 6" /></svg>; }
export function MenuIcon(props: IconProps) { return <svg {...base} {...props}><path d="M4 7h16M4 12h16M4 17h16" /></svg>; }
export function CloseIcon(props: IconProps) { return <svg {...base} {...props}><path d="m6 6 12 12M18 6 6 18" /></svg>; }
export function ChevronDown(props: IconProps) { return <svg {...base} {...props}><path d="m6 9 6 6 6-6" /></svg>; }
export function Check(props: IconProps) { return <svg {...base} {...props}><path d="m5 12 4 4L19 6" /></svg>; }
export function Search(props: IconProps) { return <svg {...base} {...props}><circle cx="11" cy="11" r="7"/><path d="m16 16 4 4"/></svg>; }
export function Icon({ name }: { name: string }) {
  if (name === "teacher") return <svg {...base}><path d="M4 19v-1a4 4 0 0 1 4-4h3"/><circle cx="9" cy="7" r="3"/><path d="M15 5h5v8h-5M14 17l2 2 4-5"/></svg>;
  if (name === "people") return <svg {...base}><circle cx="9" cy="8" r="3"/><path d="M3 19v-1a5 5 0 0 1 10 0v1M16 4a3 3 0 0 1 0 6M16 14a5 5 0 0 1 5 5"/></svg>;
  if (name === "chart") return <svg {...base}><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg>;
  return <svg {...base}><path d="m12 3 1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5L12 3Z"/><path d="m19 16 .7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7L19 16Z"/></svg>;
}
