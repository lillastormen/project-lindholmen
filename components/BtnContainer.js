import PlayPauseBtn from "./PlayPauseBtn";

export default function BtnContainer({ title, time, audio, teaser }) {
  return (
    <div className="bg-beige flex flex-row justify-between items-center w-full h-[76px] m-2 p-2 border-0 rounded-lg">
      <div>
        <h3 className="font-inder text-xl pl-[12px]">{title}</h3>
        <span className="font-inder text-base pl-[12px]">{time} min</span>
        <p className="text-base">{teaser}</p>
      </div>
      <PlayPauseBtn audio={audio} />
    </div>
  );
}
