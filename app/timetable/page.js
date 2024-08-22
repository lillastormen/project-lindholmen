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
        <div className="flex flex-row justify-center gap-2.5">
          <button
            className={`text-2xl rounded-lg w-[122px] h-[72px] 
          ${
            time === 5
              ? "bg-green text-white border-white"
              : "bg-white text-green border-2 border-green hover:bg-green hover:text-white hover:border-white focus:outline-none focus:ring-green"
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
              ? "bg-green text-white border-white"
              : "bg-white text-green border-2 border-green hover:bg-green hover:text-white hover:border-white focus:outline-none focus:ring-green"
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
              ? "bg-green text-white border-white"
              : "bg-white text-green border-2 border-green hover:bg-green hover:text-white hover:border-white focus:outline-none focus:ring-green"
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

        <div className="flex justify-center mt-5">
          <button
            className="text-2xl bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-700 focus:outline-none"
            onClick={randomAudio}
          >
            Random
          </button>
        </div>
      </div>
    </>
  );
}
