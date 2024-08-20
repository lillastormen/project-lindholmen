"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Home() {
  const pathname = usePathname();

  useEffect(() => {
    const videoElement = document.querySelector("video");
    if (videoElement) {
      videoElement.addEventListener("play", () => {
        console.log("Video is playing");
      });
      videoElement.addEventListener("error", (e) => {
        console.error("Video error:", e);
      });
      videoElement.addEventListener("loadeddata", () => {
        console.log("Video loaded");
      });

      // Force play the video if it doesn't start automatically
      videoElement.muted = true;
      videoElement.play().catch((error) => {
        console.error("Video play error:", error);
      });
    }
  }, []);
  return (
    <main className="relative flex flex-col h-screen justify-center items-center w-full mx-auto">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        src="/herovideo.mp4"
        preload="auto"
        autoPlay
        playsInline
        muted
        loop
      ></video>
      <a
        className="absolute left-2 bottom-2 text-white/[0.2]"
        href="https://www.instagram.com/capturedbyfelix"
        target="_blank"
        rel="noopener noreferrer"
      >
        @capturedbyfelix
      </a>
      <h1 className="text-4xl text-white font-bold p-4 rounded text-center mb-8">
        Upptäck <br /> Lindholmen
      </h1>

      <div className="flex flex-col gap-4 text-center text-black items-center">
        <div className="bg-white/[0.5] rounded-[10px] p-4 mb-12 w-[350px]">
          <p className="text-lg ">
            Ut och gå och låt din berättelse bli en del av Lindholmens historia.
          </p>
        </div>
        <div className="bg-orange-400/[0.8] rounded-[10px] p-4 w-[200px]">
          <p className="">Hur lång tid har du?</p>
          <p className="text-xs">Välj mellan 5, 10 och 15 min.</p>
        </div>
        <div className="bg-orange-400/[0.8] rounded-[10px] p-4 w-[200px]">
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
