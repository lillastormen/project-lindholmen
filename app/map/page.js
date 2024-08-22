import Image from "next/image";

import Link from "next/link";

export default function Map() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/places/Aftonstjarnan">Aftonstjärnan</Link>
      <Link href="/places/Slottsberget">Slottsberget</Link>
      <Link href="/places/Telefonstolpen">Telefonstolpen</Link>
      <Link href="/places/Karlatornet">Karlatornet</Link>
      <Link href="/places/Varvet">Varvet</Link>
      <Link href="/places/Varvet2">Varvet2</Link>
    </main>
  );
}
