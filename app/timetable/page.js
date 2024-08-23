"use client";
import Image from "next/image";
import BtnContainer from "@/components/BtnContainer";
import { useState } from "react";
import TimeButton from "@/components/TimeButton";

export default function Time() {
  const [time, setTime] = useState();

  const audioFiles = [
    {
      title: "Karamellfabrikens Stjärna",
      time: 5,
      file: "/audio/aftonstjarnan.mp3",
    },
    {
      title: "Blev Blanca imponerad?",
      time: 10,
      file: "/audio/slottsberget.mp3",
    },
    {
      title: "Innovation",
      time: 10,
      file: "/audio/telefonstolpen.mp3",
    },
    {
      title: "Femöringen",
      time: 5,
      file: "/audio/femoringen.mp3",
    },
    {
      title: "245 meter över havet",
      time: 10,
      file: "/audio/karlatornet.mp3",
    },
    {
      title: "Historien om Lammkotletten",
      time: 15,
      file: "/audio/lammkotletten.mp3",
    },
  ];

  const randomAudio = () => {
    const times = [5, 10, 15];
    const randomTime = times[Math.floor(Math.random() * times.length)];
    setTime(randomTime);
  };

  return (
    <>
      <div className="relative  h-screen w-full px-5 flex flex-col gap-3 items-center">
        <Image
          src="/images/karta-background.png"
          alt="karta"
          fill
          objectfit="cover"
          priority
          className="absolute left-0 top-0 w-full h-full -z-10 opacity-50 object-cover "
        />
        <h2 className="text-lg text-center pt-4 ">
          Välj en historia i listan nedan, sätt på dig hörlurarna och promenera
          tillbaka i tiden!
        </h2>
        {/* <div className="flex flex-col justify-between items-center">
          <button onClick={randomAudio}>
            <div className="flex flex-col justify-between items-center py-2">
              <img src="/icons/shuffle.svg" className="size-10" />
              Välj åt mig
            </div>
          </button>
        </div> */}
        <div className="flex flex-row justify-center gap-6 p-4">
          <TimeButton setTime={() => setTime(5)} time={5} selectedTime={time} />
          <TimeButton
            setTime={() => setTime(10)}
            time={10}
            selectedTime={time}
          />
          <TimeButton
            setTime={() => setTime(15)}
            time={15}
            selectedTime={time}
          />
        </div>

        {audioFiles
          .filter((file) => file.time == time || !time)
          .map((file, index) => (
            <BtnContainer
              key={index}
              title={file.title}
              time={file.time}
              audio={file.file}
            />
          ))}
      </div>
    </>
  );
}
