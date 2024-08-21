"use client";

import { useRef, useState, useEffect } from "react";

import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";

export default function PlayPauseBtn({ audio }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // useEffect(() => {
  //   audioRef.current = new Audio(audio);
  // }, [audio]);

  function togglePlayPause() {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
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
