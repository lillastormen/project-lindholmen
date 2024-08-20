"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Menu() {
  const pathname = usePathname();

  return (
    <>
      <div className="text-base">
        <Link className={`link ${pathname === "/" ? "active" : ""}`} href="/">
          <Image
            src="/logo.png"
            alt="Logo"
            width={200}
            height={200}
            priority
            style={{ width: "auto", height: "auto" }}
          />
        </Link>
      </div>
    </>
  );
}
