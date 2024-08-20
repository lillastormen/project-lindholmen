"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Home() {
  const pathname = usePathname();

  return (
    <main className="relative flex min-h-screen flex-col items-center pt-32">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        src="/testvideo.mp4"
        type="video/mp4"
        autoPlay
        loop
        muted
      />
      <h1 className="text-4xl font-bold p-4 rounded text-center mb-8">
        Upptäck <br /> Lindholmen
      </h1>

      <div className="flex flex-col gap-4 text-center text-black">
        <div className="bg-white/[0.6] rounded-[10px] p-4 mb-4">
          <p className="text-lg ">
            Lyssna på historier från <br /> Lindholmen
          </p>
        </div>
        <div className="bg-orange-300/[0.8] rounded-[10px] p-4 ">
          <p className="">Hur lång tid har du?</p>
          <p className="text-xs">Välj mellan 5, 10 och 15 min.</p>
        </div>
        <div className="bg-orange-300/[0.8] rounded-[10px] p-4 ">
          <p className="">Vart vill du gå?</p>
          <p className="text-xs">Välj din destination.</p>
        </div>
      </div>

      {/* <div className="flex">
        <div className="text-base text-white">
          <Link
            className={`link ${pathname === "/map" ? "active" : ""}`}
            href="/map"
          >
            Map
          </Link>
        </div>
        <div className="text-base text-white">
          <Link
            className={`link ${pathname === "/timetable" ? "active" : ""}`}
            href="/timetable"
          >
            Time
          </Link>
        </div>
      </div> */}
    </main>
  );
}
