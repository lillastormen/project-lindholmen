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
      time: 10,
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
    
      <h2 className="p-5">Välj mellan 5, 10 och 15 min.</h2>
      <div className="flex flex-row justify-center gap-2">
        <button 
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-14 py-5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          onClick={() => setTime(5)}> 5 
        </button>
        <button
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-14 py-5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          onClick={() => setTime(10)}> 10 
        </button>
        <button
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-14 py-5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          onClick={() => setTime(15)}> 15 
        </button>
      </div>
      { 
        audioFiles
        .filter((file) => file.time <= time)
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

