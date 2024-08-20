"use client";

import Link from "next/link";
import Menu from "./Menu";

export default function Header() {
  return (
    <div className="absolute bg-black/[0.6] right-0 top-0 z-10 w-full p-4">
      <Menu />
    </div>
  );
}
