import PlayPauseBtn from "./PlayPauseBtn"

export default function BtnContainer({ title, time, audio }) {
    return (
        <div className="bg-beige flex flex-row justify-between items-center w-full h-full p-2.5 my-2.5">
            <div>
                <h3 className="font-inder text-xl">{title}</h3>
                <span className="font-inder text-base">{time}</span>
            </div>
            <PlayPauseBtn 
                audio={audio}
            />
        </div>
    )
}