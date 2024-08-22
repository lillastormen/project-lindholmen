export default function TimeButton({ time, selectedTime, setTime }) {

    return (
      <button
        onClick={() => setTime(time)}
                className={`text-2xl rounded-lg w-[122px] h-[72px] 
              ${
                time === selectedTime
                  ? "bg-black text-white border-black"
                  : "bg-white text-black border-2 border-black hover:bg-black hover:text-white hover:border-white focus:outline-none focus:ring-black"
              } `}
              >
                {" "}
                {time} min
      </button>
    )
}