  "use client";


  import BtnContainer from "@/components/BtnContainer";
  import { useState } from "react";
  import TimeButton from "@/components/TimeButton";

  export default function Time() {
    const [time, setTime] = useState();
  

    const audioFiles = [
      {
        title: "Karamellfabrikens Stjärna",
        time: 5,
        file: "/audio/aftonstjärna.mp3",
      },
      {
        title: "Blew Blanca imponerad?",
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
        time: 15,
        file: "/audio/femoringen.mp3",
      },
      {
        title: "245 meter över havet",
        time: 10,
        file: "/audio/karlatornet.mp3",
      },
    ];

    const randomAudio = () => {
      const times = [5, 10, 15];
      const randomTime = times[Math.floor(Math.random() * times.length)];
      setTime(randomTime);
     
    };

    return (
      <>
      <div className="bg-[url('/images/karta-background.png')] bg-contain fixed top-0 w-full h-full -z-10 opacity-50"></div>
      
          <h2 className="text-xl text-center pt-3.5 pb-5 mx-3">
            Välj en historia i listan nedan, sätt på dig hörlurarna och promenera tillbaka i tiden!
          </h2>
          <div className="flex flex-row justify-center px-6 gap-3">
            <TimeButton 
              setTime={() => setTime(5)}
              time={5}
              selectedTime={time}
            />
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

          <div className="flex flex-col justify-between items-center absolute bottom-10 left-1/2 transform -translate-x-1/2">
            <button onClick={randomAudio}>
              <div className="flex flex-col justify-between items-center pt-5">
                <img src="/icons/shuffle.svg" className="size-10" />
                Välj åt mig 
              </div>
            </button>
          </div>

      </>
    );
  }
