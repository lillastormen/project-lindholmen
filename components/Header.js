"use client";

import Link from "next/link";
import Menu from "./Menu";

export default function Header() {
  return (
    <div className="flex justify-center bg-black/[0.6] fixed right-0 top-0 z-10 space-x-16 mx-auto w-full p-4">
      <Menu />
    </div>
  );
}
