import React from "react";
import PlaceDetails from "@/components/PlaceDetails";
import CommentsSection from "@/components/CommentsSection"; // Adjust the import according to your project structure

export default function Varvet() {
  const placeInformation = {
    clipTitle: "",
    placeName: "Varvet",
    imageUrl: "/images/aftis.jpg",
    teaser:
      "Anders “Femöringen” Persson berättar anekdoter om hur det var att jobba på Lindholmens varv under 50-70-talen. ",
    description: `Fiskmåsar hörs i bakgrunden. Det ekar av vinden i masterna. \nINTERVJUAREN \nÅret var 1953. Anders “Femöringen” Persson hade precis börjat jobba på varvet på Lindholmen. Framtiden såg ljus ut. \nINTERVJUAREN \nOch nu står vi här med Anders.
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
