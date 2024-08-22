import Image from "next/image";

import Link from "next/link";

export default function Map() {
  return (

    <div className="pt-20">
        <h2 className="text-xl text-center p-5">
          Välj en historia i listan nedan, sätt på dig hörlurarna och promenera
          tillbaka i tiden!
        </h2>
   
      <div className="flex flex-col justify-center gap-2.5">
      <div className="bg-beige flex flex-row justify-between items-center w-[370px] h-[76px] my-5 mx-auto border-0 rounded-lg">
        <Link href="/places/Aftonstjarnan">Aftonstjärnan</Link>
      </div>
        <Link href="/places/Slottsberget">Slottsberget</Link>
        <Link href="/places/Telefonstolpen">Telefonstolpen</Link>
        <Link href="/places/Karlatornet">Karlatornet</Link>
        <Link href="/places/Varvet">Varvet</Link>
        <Link href="/places/Varvet2">Varvet2</Link>
      </div>
   </div>
  );
}
