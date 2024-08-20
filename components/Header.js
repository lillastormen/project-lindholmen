'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import Menu from "./Menu";

export default function Header () {
  const pathname = usePathname();

  return (
      <div className="flex justify-end bg-black/[0.6] fixed right-0 top-0 z-10 space-x-16 mx-auto w-full p-4">
       <Menu />
      </div>
  );

}