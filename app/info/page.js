import Image from "next/image";

export default function Info() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-2 pb-6 text-sm">
      <div className="flex flex-col px-8 gap-4 text-center max-w-96">
        <h2 className="font-semibold text-xl">
          Upptäck Lindholmens fascinerande historia
        </h2>
        <p>
          Lindholmen stories tar dig med på en resa från samtidens tech-hub,
          tillbaka till 1900-talets skeppsvarv.
        </p>
        <p>
          Behöver du en snabb paus från studierna eller jobbet? Sätt på dig
          hörlurarna och låt dig föras tillbaka i tiden under 5-15 minuter. Är
          du ny i stan och vill utforska området? Använd vår karta för att
          promenera genom Lindholmen medan du lyssnar på en spännande
          berättelse.
        </p>
        <h2 className="font-semibold text-xl">
          Bli en del av berättelsen om Lindholmen!
        </h2>
        <p>
          Genom att dela med dig av dina egna historier kan du bli en del av
          appen, och med det historien om Lindholmen. Vad har du för historier
          att berätta? Dela dina egna minnen genom att kommentera direkt i
          appen.
        </p>
        <p>
          Lindholmen Stories har skapats som ett skolprojekt av Yrgo-studenter
          inom manusförfattande, UX-design och webbutveckling.
        </p>
      </div>
      <div className="flex pb-2  mt-4 max-w-[500px] w-full">
        <div className="flex flex-col items-center gap-2 text-xs w-1/3">
          <div className="w-12 h-12 bg-black rounded-full items-center text-white justify-center flex">
            <p>WU</p>
          </div>
          <p className="underline">Webbutvecklare</p>
          <p className="">Levi Ekström</p>
          <p>Karolina Limanowska</p>
        </div>
        <div className="flex flex-col items-center gap-2 text-xs w-1/3">
          <div className="w-12 h-12 bg-black rounded-full items-center text-white justify-center flex">
            <p>UX</p>
          </div>
          <p className="underline">UX-designers</p>
          <p>Louise Alveflo</p>
          <p>Emma Lindström</p>
          <p>Fannie Lund</p>
        </div>
        <div className="flex flex-col items-center gap-2 text-xs w-1/3">
          <div className="w-12 h-12 bg-black rounded-full items-center text-white justify-center flex">
            <p>MF</p>
          </div>
          <p className="underline">Manusförfattare</p>
          <p>Lovisa Lundqvist</p>
          <p>Noa Sterner</p>
        </div>
      </div>
    </main>
  );
}
