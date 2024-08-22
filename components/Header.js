"use client";

import Link from "next/link";
import Menu from "./Menu";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  return (
    <div
      className={`absolute right-0 top-0 z-10 w-full p-4 flex ${
        pathname === "/" ? "bg-black/[0.3] justify-between" : " justify-center"
      }`}
    >
      <Menu />
    </div>
  );
}
