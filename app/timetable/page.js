'use client'

import Image from "next/image";
import React from "react";
import { useState } from "react";

export default function Time() {

  const audioData = [
    {src: "/pirate.mp3", title: "Audio 1", length: 5},
    {src: "/pirate.mp3", title: "Audio 2", length: 10},
    {src: "/pirate.mp3", title: "Audio 3", length: 15},
    {src: "/pirate.mp3", title: "Audio 4", length: 10},
    {src: "/pirate.mp3", title: "Audio 5", length: 5},
    {src: "/pirate.mp3", title: "Audio 6", length: 5},
  ];

  const [selectedTime, setSelectedTime] = useState(0);

  const filteredAudio = audioData.filter((audio) => audio.length >= selectedTime);

  const shuffleAudio = (audiArray) => {
    return audio.Array.sort(() => Math.random() - 0.5);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Välj mellan 5, 10 och 15 min.</h1>
      <div className="flex flex-col">
        <button 
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          onClick={() => setSelectedTime(5)}> 5 
        </button>
        <button
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          onClick={() => setSelectedTime(10)}> 10 
        </button>
        <button
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          onClick={() => setSelectedTime(15)}> 15 
        </button>
      </div>
    </main>
  );
}

