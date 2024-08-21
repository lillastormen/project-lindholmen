import Image from "next/image";

import Link from "next/link";

export default function Map() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/Places/Aftonstjarnan">Aftonstjärnan</Link>
      <Link href="/Places/Slottsberget">Slottsberget</Link>
      <Link href="/Places/Telefonstolpen">Telefonstolpen</Link>
      <Link href="/Places/Karlatornet">Karlatornet</Link>
      <Link href="/Places/Varvet">Varvet</Link>
      <Link href="/Places/Varvet2">Varvet2</Link>
    </main>
  );
}
