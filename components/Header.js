'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header () {
  const pathname = usePathname();

  return (
      <div className="flex justify-end bg-black/[0.6] fixed right-0 top-0 z-10 space-x-16 mx-auto w-full p-4">
        <div className="text-base text-white"><Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">Home</Link></div>
        <div className="text-base text-white"><Link className={`link ${pathname === '/map' ? 'active' : ''}`} href="/map">Map</Link></div>
      </div>
  );

}