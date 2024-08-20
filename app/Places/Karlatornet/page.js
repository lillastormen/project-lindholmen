import Image from "next/image";
import Header from "@/components/Header";
import PlaceDetails from "@/components/PlaceDetails";

export default function Karlatornet() {
  const placeInformation = {
    clipTitle: '',
    placeName: 'Karlatornet',
    imageUrl: '/images/aftis.jpg',
    description: 'Description comes here',
  };

  return (
    <main className="flex flex-col min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <PlaceDetails {...placeInformation} />
    </main>
  );
}