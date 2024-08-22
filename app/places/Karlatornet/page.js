import React from "react";
import PlaceDetails from "@/components/PlaceDetails";
import CommentsSection from "@/components/CommentsSection"; // Adjust the import according to your project structure
import BtnContainer from "@/components/BtnContainer";

export default function Karlatornet() {
  const placeInformation = {
    placeName: "Karlatornet",
    audio: "/audio/karlatornet.mp3",
    time: "10 min",
    audioTitle: "Britta på Karlatornet",
    imageUrl: "/images/karlatornet_karta.png",
    vintageUrl: "/images/karlatornet.jpeg",
    mapLink:
      "https://www.google.se/maps/place/Karlatornet,+Lindholmen,+G%C3%B6teborg/@57.7097811,11.9365483,17z/data=!3m1!4b1!4m6!3m5!1s0x464ff3509b4449a7:0xa38302d0298a445!8m2!3d57.7097783!4d11.9391232!16s%2Fg%2F1q5jyf2fb?entry=ttu",
    teaser: "Historien upprepar sig själv, så även på Lindholmen.",
    description:
      "Slottsberget har fått sitt namn från slottet som en gång prydde dess höjd. Lindholmen i sin helhet fick därefter sitt namn från slottet, som kallades Lindholmens slott. Där och då var syftet med att bygga stort och imponerande att skrämma bort danskarna som återkommande ville ha en del av älven och Hisingen. Även om vi haft en stadig fred med danskarna sedan 1814 och inte behöver skrämma bort dem längre, vill vi fortfarande gärna imponera på dem. Du behöver egentligen inte gå någonstans mer än ut för att se vårt senaste verk. Karlatornet med sina 245 meter över havet är den högsta byggnaden i Norden. Och om vi tar ett steg in i framtiden, till sommaren 2025, så kan du fortsätta din promenad upp till dess utsiktsdäck, och se hela Göteborg, och kanske skymta Fredrikshamn i horisonten. Med Karlatornet upprepar sig historien om slottet och Lindholmen. För andra gången ska en ny stadsdel få sitt namn från en byggnad, nu är det Karlastaden som tar plats.",
  };

  return (
    <>
      <PlaceDetails {...placeInformation} />
      <CommentsSection
        tableName="karlatornet"
        story="Berätta om något du har gjort för att imponera på någon annan"
      />
    </>
  );
}
