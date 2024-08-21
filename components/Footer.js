'use client'

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export default function Footer() {

    const pathname = usePathname();
    const router = useRouter();

    if(pathname !== "/"){
        return (
            <div className="fixed bottom-0 w-full bg-grey h-[71px] flex items-center pl-3">
                <img src="icons/arrow-back-black.svg" alt="arrow-back" onClick={() => router.back()}/>
            </div>
        );
    } else {
        return <></>
    }
};
