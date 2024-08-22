"use client";

import Link from "next/link";
import Image from "next/image";
import { RxQuestionMarkCircled } from "react-icons/rx";
import { usePathname } from "next/navigation";

export default function Menu() {
  const pathname = usePathname();

  return (
    <>
      <div
        className={`flex items-center w-full ${
          pathname === "/"
            ? "justify-between"
            : "justify-center items-center border-b-[1px] border-black "
        } `}
      >
        <Link className={` ${pathname === "/" ? "active" : ""}`} href="/">
          <Image
            src={pathname === "/" ? "/logo-white.png" : "/logo-black.png"}
            alt="Logo"
            width={200}
            height={200}
            priority
            style={{ width: "auto", height: "auto" }}
          />
        </Link>
        {pathname === "/" && (
          <Link href="/info">
            <RxQuestionMarkCircled color="white" size="24px" />
          </Link>
        )}
      </div>
    </>
  );
}
