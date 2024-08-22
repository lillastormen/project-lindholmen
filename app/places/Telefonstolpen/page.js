import React from "react";
import PlaceDetails from "@/components/PlaceDetails";
import CommentsSection from "@/components/CommentsSection"; // Adjust the import according to your project structure

export default function Telefonstolpen() {
  const placeInformation = {
    audioTitle:"Innovation",
    placeName: "Telefonstolpen",
    imageUrl: "/images/telefonstolpen_karta.png",
    time: 10,
    audio:"/audio/telefonstolpen.mp3",
    vintageUrl: "/images/telefonstolpen.jpeg",
    mapLink:
      "https://www.google.se/maps/place/Slottsberget/@57.704766,11.9276993,16.88z/data=!4m10!1m2!2m1!1sslottsberget!3m6!1s0x464ff30666120eef:0xf84ff4ad8495c61f!8m2!3d57.703813!4d11.9291447!15sCgxzbG90dHNiZXJnZXSSARNoaXN0b3JpY2FsX2xhbmRtYXJr4AEA!16s%2Fg%2F11g2368zr4?entry=ttu",
    teaser:
      "Vad är det som går att skymta uppe på Slottsberget? Ta en promenad tillbaka i tiden och spana in Göteborgs sista.. ja vadå?",
    description:
      "Lindholmens varv har en lång historia av både framgång och motgång. Om vi backar tiden till för 150 år sedan så var Lindholmens varv ett av Sveriges största varv och byggde enorma båtar för krig och gods. 20 år senare var det den största arbetsplatsen i Göteborg, för att sedan ett år senare vara på randen till konkurs. Men 1870 blåser det fortfarande medvind för varvet. Arbetare söker lyckan i det framgångsrika varvet och bristen på bostäder börjar bli allt mer påtaglig. Slottsberget, idag mest känt för sin anrika biograf Aftonstjärnan, ekade tom på bostäder än. Lindholmens varv som ägde marken sa då att arbetarna kunde få hyra ett hus uppe på berget, så länge de byggde huset själva. Sagt och gjort började små trähus byggas upp. Många av dem som står där än idag. Så vad kan hända när ett gäng skeppsbyggare, sågare och säckbärare börjar bygga sin egna stadsdel helt utan ritningar från någon stadsplanerare? Resultatet blir som tydligast om du tar en promenad uppe på västra delen av berget. Gator och hus ligger utplacerade lite hipp som happ, det är trångt likt en bohuslänsk fiskeby med bitar av berg som sticker upp. Husen blev älskade, både av de som bodde där och generationer av familjer som kom efter dem. När hotet av demolering kom nära på 1960-talet var poeten och musikern Evert Taube en av de som protesterade för att husen skulle få stå kvar. Göteborg har idag blivit en modern stad, med fiber i gatorna och elbåtar över älven. Den gamla kåkstaden på Slottsberget är idag en vacker plats med trähus som säljs för flera miljoner kronor. Har du kommit upp dit än? Ser du vad som är unikt med den här platsen? Sitter svalorna likt notmönster mot himmelen? För här hittar du Göteborgs sista telefonstolpe. Kraftledningarna som idag är nedgrävda i marken i resten av staden hänger här i ett spindelnät ovanför husknutarna. Så kan det gå när ett gäng arbetare på 1800-talet får makten över hur stadsplanering ska se ut. Det är för svårt att gräva ner ledningarna så de får hänga kvar ovan jord, och i en stadsdel som idag strävar efter att bli synonym med ordet “innovation” så är denna nostalgiska promenad en paus från det och ett steg tillbaka in i gamla Göteborg. ",
  };

  return (
    <>
      <PlaceDetails {...placeInformation} />
      <CommentsSection
        tableName="telefonstolpen"
        story="Berätta om det värsta eller bästa stället du har bott på"
      />
    </>
  );
}
