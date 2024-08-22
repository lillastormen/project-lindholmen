import React from "react";
import PlaceDetails from "@/components/PlaceDetails";
import CommentsSection from "@/components/CommentsSection"; // Adjust the import according to your project structure

export default function Varvet2() {
  const placeInformation = {
    placeName: "Varvet 2",
    audioTitle: "Historien om Lammkotletten",
    time: 5,
    audio: "/audio/lamkotletten.mp3",
    imageUrl: "/images/varvet2_karta.png",
    vintageUrl: "/images/lamkotletten.jpeg",
    mapLink: "https://www.google.se/maps/@57.7056373,11.9411532,16z?entry=ttu",
    teaser:
      "Många var historierna om arbetarna på varvet, här har vi den om lammkotletten, läkaren och det förrädiska emaljögat. ",
    description:
      "Historien om Lammkotletten. Är den helt sann? Ja, det här är en omtyckt historia, som alltid låter lite annorlunda beroende på vem som återberättar den. Men arbetsplatsolyckorna var vanliga på varven även om det med tiden blev bättre säkerhet. Historierna om vad man hade sett eller en kollega hade sett var många, och inte alltid sanna. Lammkotletten jobbade på varvet. Hur han hade fått sitt smeknamn lämnas till historien, men ett som är säkert är att han hade ett öga som var av emalj. Så en dag så rasade en pall över honom. Fastklämd under pallen kallade kollegorna på hjälp. Larmet gick och ambulans kallades dit. Läkaren gick fram till lammkotletten och öppnade ögat, eftersom han inte visste att det var ett emaljöga så suckade han bara och sa “han är död”. Lammkotletten vrider då på huvudet och utbrister “det är jag inte alls” varpå hans förman utbrister “tyst med dig, lyssna på läkaren, han är skolad”. ",
  };

  return (
    <>
      <PlaceDetails {...placeInformation} />
      <CommentsSection
        tableName="varvet2"
        story="Berätta om en dag det gick riktigt snett på din arbetsplats"
      />
    </>
  );
}
