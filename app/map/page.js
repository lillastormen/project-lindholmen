import PlaceCardContainer from "@/components/PlaceCardContainer";
import Image from "next/image";

export default function Map() {
  return (
    <>
      <div className="relative h-screen">
        <Image
          src="/images/karta-background.png"
          alt="karta"
          fill
          objectfit="cover"
          priority
          className="absolute left-0 top-0 w-full h-full -z-10 opacity-50 object-cover"
        />
        <h2 className="text-lg text-center p-5">
          Vart vill du gå? Välj en destination för din promenad, och få
          ljudklipp relaterade till omgivningen.
        </h2>

        <div className="flex flex-col justify-center gap-3">
          <PlaceCardContainer
            title="Aftonstjärnan"
            time="20 min"
            imageUrl="/images/aftonstjarnan.png"
            url="/places/Aftonstjarnan"
          />
          <PlaceCardContainer
            title="Slottsberget"
            time="30 min"
            imageUrl="/images/slottsberget.png"
            url="/places/Slottsberget"
          />
          <PlaceCardContainer
            title="Telefonstolpen"
            time="15 min"
            imageUrl="/images/telefonstolpe.png"
            url="/places/Telefonstolpen"
          />
          <PlaceCardContainer
            title="Femöringen"
            time="15 min"
            imageUrl="/images/varvet_1.png"
            url="/places/Varvet"
          />
          <PlaceCardContainer
            title="Karlatornet"
            time="15 min"
            imageUrl="/images/karlatornet.png"
            url="/places/Karlatornet"
          />
          <PlaceCardContainer
            title="Lammkotletten"
            time="15 min"
            imageUrl="/images/varvet_2.png"
            url="/places/Varvet2"
          />
        </div>
      </div>
    </>
  );
}
