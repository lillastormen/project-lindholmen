import React from "react";
import PlaceDetails from "@/components/PlaceDetails";
import CommentsSection from "@/components/CommentsSection"; // Adjust the import according to your project structure

export default function Varvet() {
  const placeInformation = {
    clipTitle: "",
    placeName: "Varvet",
    imageUrl: "/images/varvet_karta.png",
    vintageUrl: "/images/femoringen.jpeg",
    mapLink:
      "https://www.google.se/maps/@57.7051065,11.9424867,16.38z?entry=ttu",
    teaser:
      "Anders “Femöringen” Persson berättar anekdoter om hur det var att jobba på Lindholmens varv under 50-70-talen. ",
    description: `Fiskmåsar hörs i bakgrunden. Det ekar av vinden i masterna. 
\nINTERVJUAREN \nÅret var 1953. Anders “Femöringen” Persson hade precis börjat jobba på varvet på Lindholmen. Framtiden såg ljus ut. 
\nINTERVJUAREN \nOch nu står vi här med Anders. 
\nFEMÖRINGEN \nHej. 
\nINTERVJUAREN\nOch varvet har lagts ner. Berätta mer om det. Hur såg en vanlig dag ut på varvet för dig under de senaste tjugofem åren? 
\nFEMÖRINGEN\nJo då, jag cyklade ner från Kallebäck halv sex på morgonen. Var framme vid halv sju till utropet. Finns inget arbete, fick stanna kvar. Klockan nio, fanns inget arbete. Fick stanna kvar, till klockan halv tolv, fanns inget arbete. Fick stanna kvar. Till halv fem eventuellt och få sig lite övertid. Fanns inget då heller. Cyklade hem till Kallebäck igen klockan fem. För att ha tjänat fem öre. Förlorat trettio öre för jag har druckit kaffe. Måste ju ha en macka och lite kaffe. 
\nINTERVJUAREN\nMen detta var inte en vanlig dag för dig?
\nFEMÖRINGEN\nDet varierade alltså. Vissa dagar hade man inget att göra och vissa dagar gick man fan aldrig hem. 
\nINTERVJUAREN\nOch dina medarbetare de gjorde samma sak?
\nFEMÖRINGEN\nDe skulle säga som så va, att man fick en kölbåt i Sannegården. Så skulle en köra tre timmar då va. Aa, visst! Man var ju piskade ända till stanna, bara för man hade två barn att försörja, och käring, och hele’ fan! 
\nINTERVJUAREN\nOch dessa medarbetare, de hade lite annorlunda namn, likt ditt “Femöringen” har vi förstått?
\nFEMÖRINGEN\nJo men det är så här va, femöringen det är ju jag va. För att jag alltid hamnade sist på dagarna utan jobb va. Men ringer man och frågar om Jan Olof Pettersson, ja då vet ingen människa vem det är här nere. Men säg att man vill tala med Lillebagarn, jag då vet man att det är tolv-sjutton. Här kommer några exempel på öknamn: Skyffelmördarn, Rock-Olga, Porr-Birger, tio i två, Skinnet, Pipas, Lammkotletten, Öland, Skit i handfatet, Råttjägarn, Glädjespridarn, Frukostklubben. Ja, man fattar la’. 
\nINTERVJUAREN\nMen det var ingen som tog illa upp av de här öknamnen alltså?
\nFEMÖRINGEN\nÄh, det var väl fölk som inte skrattade med. Men det var bara nåt man tålde va. För hur annars skulle man hålla reda på vilka som var vilka när det var tre idioter som hette Johan och fem som hette Peter. 
\nINTERVJUAREN\nJa, det har du rätt i. Men arbetet på varvet. Skedde det några förändringar under senare år, vad det gäller arbetsmiljö, lön och så vidare?
\nFEMÖRINGEN\nJo, det kan jag säga, att vi har fan inte fått något gratis här. Vi har fått ofra en gubbe eller också har vi fått strejka va. Och luckorna kommer i en jävla fart, precis som en råttefälla vet du. Det var en som slog lille Knut, så han flög på huv’et en tre meter igenom va. Och han var ju väck direkt. Pang sa det bara. Allting vi har fått här nere har varit på grund av vilda konflikter eller så har det varit olycksfall. (paus) Men man skulle ju inte vilja ha tillbaka de gamla tiderna. Idag kommer lönen. Den står på bankboken från varje siste. Det är en jävla skillnad. Ja, fram tills nu då.
\nINTERVJUAREN\nJa, varvet har ju lagts ner. Vad blir din vardagliga sysselsättning framöver?
\nFEMÖRINGEN\nEn är ju för gammel. Man glömmer bort att fysiskt arbete, det tar ju på kroppen va. Det får bli pension. Frugan är dagmamma och kan gott vara det ett tag till medan jag läser korsord. 
\nINTERVJUAREN\nJa, Anders, eller Femöringen, det låter som en trevlig vardag, som du verkligen förtjänar! Och vi får tacka! Det har verkligen varit intressant att få höra om din arbetstid här på varvet. Och vi hoppas våra lyssnare uppskattar det också!


`,
  };

  return (
    <>
      <PlaceDetails {...placeInformation} />
      <CommentsSection
        tableName="varvet"
        story="Har du någon gång fått ett öknamn, och varför?"
      />
    </>
  );
}
