'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Menu () {
  const pathname = usePathname();

  return (
    
      <div className="flex flex-col">
        <div className="text-base text-white"><Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">Home</Link></div>
        <div className="text-base text-white"><Link className={`link ${pathname === '/map' ? 'active' : ''}`} href="/map">Map</Link></div>
        <div className="text-base text-white"><Link className={`link ${pathname === '/timetable' ? 'active' : ''}`} href="/timetable">Time</Link></div>
      </div>
  );

}