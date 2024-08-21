'use client'

import Image from "next/image";
import BtnContainer from "@/components/BtnContainer";
import PlayPauseBtn from "@/components/PlayPauseBtn";
import { useState } from "react";


export default function Time() {

  const [time, setTime] = useState(15)
  
  const audioFiles = [
    {
      title: 'Title 1',
      time: 10 ,
      file: "/pirate.mp3"
    },
    {
      title: 'Title 2',
      time: 15,
      file: "/pirate.mp3"
    },
    {
      title: 'Title 3',
      time: 5,
      file: "/pirate.mp3"
    }
  ];

  return (
  <>
      <h2 className="font-inder text-xl p-5">Välj en historia i listan nedan, sätt på dig hörlurarna och promenera tillbaka i tiden!</h2>
      <div className="flex flex-row justify-center gap-2.5">
        <button 
          className={`bg-white text-green border-2 border-green 
          hover:bg-green hover:text-white hover:border-white
          focus:outline-none focus:ring-green
          font-inder text-2xl rounded-lg p-5 w-32 h-20 
          ${ time === 5 ? "bg-green text-white border-white" : ""
          } `}
          onClick={() => setTime(5)}> 5 min
        </button>
        <button
          className={`bg-white text-green border-2 border-green 
          hover:bg-green hover:text-white hover:border-white
          focus:outline-none focus:ring-green
          font-inder text-2xl rounded-lg p-5 w-32 h-20 
          ${ time === 10 ? "bg-green text-white border-white" : ""
          } `}
          onClick={() => setTime(10)}> 10 min
        </button>
        <button
          className={`bg-white text-green border-2 border-green 
          hover:bg-green hover:text-white hover:border-white
          focus:outline-none focus:ring-green
          font-inder text-2xl rounded-lg p-5 w-32 h-20 
          ${ time === 15 ? "bg-green text-white border-white" : ""
          } `}
          onClick={() => setTime(15)}> 15 min
        </button>
      </div>
      { 
        audioFiles
        .filter((file) => file.time == time)
        .map((file, index) => (
        <BtnContainer 
          key={index}
          title={file.title} 
          time={file.time} 
          audio={file.file} />
       ))
      }
  </>
  );
}

