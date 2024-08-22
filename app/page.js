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
    <main className="relative flex flex-col gap-56 h-screen justify-center items-center w-full">
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
        className="absolute left-2 bottom-2 text-white/[0.2] text-[11px]"
        href="https://www.instagram.com/capturedbyfelix"
        target="_blank"
        rel="noopener noreferrer"
      >
        @capturedbyfelix
      </a>
      <h1 className="text-4xl text-white font-bold rounded text-center">
        Upptäck <br /> Lindholmen
      </h1>

      <div className="flex flex-col gap-4 justify-center text-center items-center text-white">
        <p className=" max-w-[340px]">
          Låt historierna sätta tiden på din promenad eller utforska platser på
          Lindholmen medan du lyssnar på dess historier. <br />
          <span className="font-semibold">Vad vill du göra?</span>
        </p>
        <div className="flex gap-8">
          <Link href="/timetable">
            <button className="bg-orange-400/[0.9] rounded-[10px] py-4 w-[100px]">
              <p className="text-sm">Håll tiden</p>
            </button>
          </Link>

          <Link href="/map">
            <button className="bg-orange-400/[0.9] rounded-[10px] py-4 w-[100px]">
              <p className="text-sm">Utforska</p>
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
