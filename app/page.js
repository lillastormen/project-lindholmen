'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Home() {
  const pathname = usePathname();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    Main page here

    <div className="text-base text-white"><Link className={`link ${pathname === '/map' ? 'active' : ''}`} href="/map">Map</Link></div>
    <div className="text-base text-white"><Link className={`link ${pathname === '/timetable' ? 'active' : ''}`} href="/timetable">Time</Link></div>
    <div className="text-base text-white"><Link className={`link ${pathname === '/Places/Aftonstjarnan' ? 'active' : ''}`} href="/Places/Aftonstjarnan">Afton</Link></div>
    </main>
  );
}
