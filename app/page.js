"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Home() {
  const pathname = usePathname();

  return (
    <main className="relative flex h-screen justify-center flex-col items-center">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        type="video/mp4"
        autoPlay
        playsInline
        loop
        muted
      >
        <source src="/herovideo.mp4" type="video/mp4" />
        <source src="/herovideo.webm" type="video/webm" />
        <source src="/herovideo.ogv" type="video/ogg" />
      </video>
      <a
        className="absolute left-2 bottom-2 text-white/[0.2]"
        href="https://www.instagram.com/capturedbyfelix"
        target="_blank"
        rel="noopener noreferrer"
      >
        @capturedbyfelix
      </a>
      <h1 className="text-4xl font-bold p-4 rounded text-center mb-8">
        Upptäck <br /> Lindholmen
      </h1>

      <div className="flex flex-col gap-4 text-center text-black w-[300px]">
        <div className="bg-white/[0.4] rounded-[10px] p-4 mb-24">
          <p className="text-lg ">
            Ut och gå och låt din berättelse bli en del av Lindholmens historia.
          </p>
        </div>
        <div className="bg-orange-400/[0.8] rounded-[10px] p-4 ">
          <p className="">Hur lång tid har du?</p>
          <p className="text-xs">Välj mellan 5, 10 och 15 min.</p>
        </div>
        <div className="bg-orange-400/[0.8] rounded-[10px] p-4 ">
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
