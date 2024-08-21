import PlayPauseBtn from "./PlayPauseBtn"

export default function BtnContainer({ title, time, audio }) {
    return (
        <div className="bg-beige flex flex-row justify-between items-center w-[370px] h-[76px] my-5 mx-auto border-0 rounded-lg">
            <div>
                <h3 className="font-inder text-xl pl-[12px]">{title}</h3>
                <span className="font-inder text-base pl-[12px]">{time}</span>
            </div>
            <PlayPauseBtn 
                audio={audio}
                
            />
        </div>
    )
}