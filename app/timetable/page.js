"use client";

import BtnContainer from "@/components/BtnContainer";
import { useState } from "react";

export default function Time() {
  const [time, setTime] = useState();

  const audioFiles = [
    {
      label: 1,
      title: "Title 1",
      time: 10,
      file: "/pirate.mp3",
    },
    {
      label: 2,
      title: "Brittas uppsägning",
      time: 15,
      file: "/pirate.mp3",
    },
    {
      label: 3, 
      title: "Title 3",
      time: 5,
      file: "/pirate.mp3",
    },
    {
      label: 4,
      title: "Title 4",
      time: 15,
      file: "/pirate.mp3",
    },
    {
      label: 5,
      title: "Title 5",
      time: 5,
      file: "/pirate.mp3",
    },
  ];

  const randomAudio = () => {
    const times = [5, 10, 15];
    const randomTime = times[Math.floor(Math.random() * times.length)];
    setTime(randomTime);
  };


  return (
    <>
      <div className="pt-20">
        <h2 className="text-xl text-center py-5 mx-2">
          Välj en historia i listan nedan, sätt på dig hörlurarna och promenera tillbaka i tiden!
        </h2>
        <div className="flex flex-row justify-center gap-3">
          <button
            className={`text-2xl rounded-lg w-[122px] h-[72px] 
          ${
            time === 5
              ? "bg-black text-white border-black"
              : "bg-white text-black border-2 border-black hover:bg-black hover:text-white hover:border-white focus:outline-none focus:ring-black"
          } `}
            onClick={() => setTime(5)}
          >
            {" "}
            5 min
          </button>
          <button
            className={`text-2xl rounded-lg  w-[122px] h-[72px] 
          ${
            time === 10
              ? "bg-black text-white border-white"
              : "bg-white text-black border-2 border-black hover:bg-black hover:text-white hover:border-white focus:outline-none focus:ring-black"
          } `}
            onClick={() => setTime(10)}
          >
            {" "}
            10 min
          </button>
          <button
            className={`text-2xl rounded-lg w-[122px] h-[72px] 
          ${
            time === 15
              ? "bg-black text-white border-white"
              : "bg-white text-black border-2 border-black hover:bg-black hover:text-white hover:border-white focus:outline-none focus:ring-black"
          } `}
            onClick={() => setTime(15)}
          >
            {" "}
            15 min
          </button>
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

        <div className="flex flex-col justify-between items-center">
          <button
            onClick={randomAudio}
          >
            <div className="flex flex-col justify-between items-center pt-5">
              <img src="/icons/shuffle.svg" className="size-10" />
              Välj åt mig 
            </div>
          </button>
          
        </div>
      </div>
    </>
  );
}
