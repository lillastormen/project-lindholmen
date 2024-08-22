import React from "react";
import PlaceDetails from "@/components/PlaceDetails";
import CommentsSection from "@/components/CommentsSection"; // Adjust the import according to your project structure

export default function Slottsberget() {
  const placeInformation = {
    placeName: "Slottsberget",
    audioTitle: "Blev Blanca imponerad?",
    time: 10,
    audio: "/audio/slottsberget.mp3",
    imageUrl: "/images/karta_slottsberget.png",
    vintageUrl: "/images/slottsberget.jpg",
    mapLink:
      "https://www.google.se/maps/place/Slottsberget/@57.704766,11.9276993,16.88z/data=!4m10!1m2!2m1!1sslottsberget!3m6!1s0x464ff30666120eef:0xf84ff4ad8495c61f!8m2!3d57.703813!4d11.9291447!15sCgxzbG90dHNiZXJnZXSSARNoaXN0b3JpY2FsX2xhbmRtYXJr4AEA!16s%2Fg%2F11g2368zr4?entry=ttu",
    teaser:
      "Hur slottsberget fick sitt namn och vems barnvisa från 1300-talet du kan utantill.",
    description:
      "Har du funderat över hur Slottsberget fick sitt namn? Allting började med kärlek. Eller det började med ett bröllop. Men man kan ju tänka att det var i kärlekens namn. Sveriges kung Magnus Eriksson gifte sig 1334 med Blanca av Nemur. Hon sägs ha varit vacker och klok, och eftersom Magnus ville imponera på sin nya fru gav han henne en morgongåva efter bröllopet. Två slott och två län, varav ett slott låg på berget vi idag kallar Slottsberget. Fungerade det? Blev Blanca imponerad? Ja, under deras tid som regenter bodde de inte några längre perioder på Lindholmen. Men slottet och dess trädgårdar underhölls och det var först i början av 1400-talet som slottet kom att förfalla tills endast dess ruiner fanns kvar. Idag är det enda som finns kvar namnet som berget kom att kallas, Slottsberget. Blanca och Magnus äktenskap varade i nästan 30 år. Och kanske hade morgongåvan en sådan imponerande effekt på Blanca att kärleken började gro. För under deras tid tillsammans skulle de försvara varandra i vått och torrt. När deras nära vän Birgitta Birgersson, eller som de flesta antagligen känner henne, “den heliga Birgitta”, vände sig emot dem stod de fortfarande stadigt tillsammans. Heliga Birgitta tyckte inte om att Blanca och Magnus valde att ha ett “vitt äktenskap”. Med detta menades att de inte skulle ha mer sex med varandra då Blanca haft många svåra förlossningar och avhållsamhet antagligen skulle rädda hennes liv. Birgitta som själv efter flera förlossningar nu levde i ett vitt äktenskap rasade över drottningens beslut. Kallade henne bland annat “en huggorm som har en skökas tunga och drakars galla i hjärtat.” Är du uppe på berget än? Kanske stod Blanca där du står nu en gång för nästan 700 år sedan och tittade ut över vattnet. Var hon irriterad över kritiken hon fått av att inte ligga tillräckligt med sin man? Eller kanske glad för att hon var en av de få kvinnorna av sin tid som hade politiskt inflytande över ett land? Morgongåvan hon fick av sin man är sedan länge borta. Men kanske sitter nu en ny familj med små barn i ett landshövdingehus på Slottsberget. Och kanske trallar en mamma med ett barn i sitt knä på ramsan ”Rida rida ranka, hästen heter Blanca”.",
  };

  return (
    <>
      <PlaceDetails {...placeInformation} />
      <CommentsSection
        tableName="slottsberget"
        story="Berätta om något du har gjort för kärleken"
      />
    </>
  );
}
