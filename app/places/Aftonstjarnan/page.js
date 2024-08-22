import React from "react";
import PlaceDetails from "@/components/PlaceDetails";
import CommentsSection from "@/components/CommentsSection";
import BtnContainer from "@/components/BtnContainer";

export default function Aftonstjarnan() {
  const placeInformation = {
    placeName: "Aftonstjärnan",
    audio: "/audio/aftonstjärnan.mp3",
    time: "5 min",
    audioTitle: "Karamellfabrikens Stjärna",
    imageUrl: "/images/aftonstjarnan_karta.png",
    vintageUrl: "/images/aftis.jpg",
    mapLink:
      "https://www.google.se/maps/place/Aftonstj%C3%A4rnan/@57.7069413,11.9300922,17z/data=!3m1!4b1!4m6!3m5!1s0x464ff34e369a9ca9:0xa41db7a81269aae1!8m2!3d57.7069385!4d11.9326671!16s%2Fg%2F11dyl1h9y?entry=ttu",
    teaser:
      "Nils jobbar på Aftonstjärnans karamellfabrik under 1940-talet. Han är en enkel springpojke, men drömmer om något större.",
    description: `
    Året var 1943. Solen sken och fiskmåsarna sjöng medan de gled förbi på himlen. Så här tidigt på morgonen hade lille Nils aldrig varit ute på vift. Men nu spatserade han längs med de krokiga gatorna på Slottsberget. Han var på väg till första dagen på jobbet som säckbärare på det nyöppnade Jonssons Karameller. Jonssons Karameller hade sin lokal i botten på den omtalade Aftonstjärnan, en byggnad som också var hem åt en smörgåstillverkare, men allra viktigast, en biograf. När Nils började närma sig dörren öppnades den hastigt och direktör för karamellfabriken, Stig Jonsson, stapplade ut. 
    – Jävla satmara! skrek han till. Sjas! Iväg med dig! Direktör Jonsson skickade ut en yvig, liten bondkatt genom dörren. Katten blev skraj och susade snabbt iväg nedför gatan. Medan han borstade av sina kostymbyxor och kavlade upp ärmarna på den smutsiga skjortan tittade direktörn till slut upp och fick syn på Nils. 
    – Nämen! Han slog ut med armarna. Är det inte min bästa arbetskamrat! Nils skrattade till och funderade ett slag medan han närmade sig dörren.
    – Hur vet du det när vi inte har jobbat tillsammans än? frågade han direktörn.
    – Jag har en känsla för sånt där vettu! svarade han snabbt medan han rufsade till Nils i håret. Tillsammans tog de ett steg in i fabriken. Väl där inne uppenbarade sig enorma redskap för Nils. Det var stora kokkärl, påsar överallt och krokar på väggarna. Nils stannade upp och frågade sig om det verkligen var karamelltillverkning som verksamheten bestod av här. Men han bestämde sig snabbt för att ruska av sig den läskiga tanken innan han småsprang ikapp direktörn. Till en början var det bara Nils som sprang med säck efter säck av socker, stora mjölkkannor med vatten, enorma behållare med smakessens, och såklart, massvis och massvis med kaffe till fabrikens arbetare. Men så småningom, och speciellt under somrarna, fick han några kollegor, även dem i sina tidiga tonår. Snart hade Nils ibland tid över att utforska resten av verksamheterna i Aftonstjärnan. Han kunde smyga in och besöka smörgåstillverkaren Snitten. Och hade han tur fick han en liten brödkant av deras springpojke, Bosse. 
    – Att han får äta från jobbet, tänkte han för sig själv. Det hade jag aldrig fått göra. Och då hade jag blivit tjock. Men för det mesta brukade han försöka ta sig in på filmvisningarna i Aftonstjärnans biograf. Det var en fröjd att få se de sina favoritskådisar på den stora filmduken. Det var där han sett en av filmerna som hans mest värdefulla filmis, Chester Morris, hade varit med i. Det tände en eld inom honom. Snart försökte han smita iväg vid varje tillfälle han kunde. Men det gällde att vara smidig, för blev man påkommen av direktörn, som på senare år börjat luta sig tillbaka och dricka mer, så fick man stryk. Det var inget hemligt. Men Nils jobbade kvar ändå. 
    – Du behöver dra ditt strå till stacken! påminde alltid hans pappa om. 
    – Vad det nu kan betyda, tänkte Nils för sig själv. Och han jobbade kvar ända tills dess att fabriken tvingades lägga ner. Direktörn hade försatt karamellfabriken i konkurs efter att han totalt hade släppt taget om den och sjunkit in i sin alkoholism. Nils tvingades jobba vidare, men då på en annan fabrik. Och så fick det bli. Han jobbade och jobbade, men aldrig något mer. Kanske skaffade han fru och barn, men det var inget märkvärdigt för honom i det stora livet han hade fantiserat framför sig. Det enda vi vet är att han aldrig slutade besöka biografen Aftonstjärnan. Han satt alltid själv, i mitten av salen, och drömde om hur livet hade sett ut om det var han som spelade på den stora duken istället för Chester Morris. Eller kanske till och med spelat mot honom. Och det gjorde han ända till sin död år 2008.`,
  };

  return (
    <>
      <PlaceDetails {...placeInformation} />
      <CommentsSection
        tableName="aftonstjarnan"
        story="Har du någon dröm som du önskar att du hade satsat på?"
      />
    </>
  );
}
