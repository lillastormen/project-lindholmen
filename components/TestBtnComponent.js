"use client";

import { useRef, useState, useEffect } from "react";

import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";

export default function TestBtnComponenet({ audio, play=false }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    console.log(play);
    if((isPlaying && !play) || (!isPlaying && play)){
        togglePlayPause();
    }
  }, [play]);

  function togglePlayPause() {
    if (audioRef.current) {
      if (isPlaying) {
        console.log('asd');
        audioRef.current.pause();
      } else {
        audioRef.current.play();
        console.log('aasdsd');
      }
      setIsPlaying(!isPlaying);
    }
  }

  return (
    <>
      <button onClick={togglePlayPause} className="pr-[20px]">
        {isPlaying ? <FaPause size={32} /> : <FaPlay size={32} />}
      </button>
      <audio ref={audioRef} id="a1" src={audio}></audio>
    </>
  );
}
