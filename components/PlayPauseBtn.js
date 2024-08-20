'use client';

import { useRef, useState } from "react";

import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";

export default function PlayPauseBtn() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

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
      <button onClick={togglePlayPause} className="">
        {isPlaying ? <FaPause size={48} /> : <FaPlay size={48} />}
      </button>
      <audio ref={audioRef} id="a1" src="/pirate.mp3"></audio>
    </>
  );
}
