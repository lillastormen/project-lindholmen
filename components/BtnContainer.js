import PlayPauseBtn from "./PlayPauseBtn"

export default function BtnContainer({ title, time, audio }) {
    return (
        <div className="bg-beige flex justify-between w-full p-2.5 my-2.5">
            <div>
                <h3>{title}</h3>
                <span>{time}</span>
            </div>
            <PlayPauseBtn 
                audio={audio}
            />
        </div>
    )
}