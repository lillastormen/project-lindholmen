export default function TimeButton({ time, selectedTime, setTime }) {
  return (
    <button
      onClick={() => setTime(time)}
      className={`text-xl rounded-lg w-[90px] h-[60px] 
              ${
                time === selectedTime
                  ? "bg-black text-white border-black"
                  : "bg-white text-black border-2 border-black hover:bg-black hover:text-white hover:border-white focus:outline-none focus:ring-black"
              } `}
    >
      {" "}
      {time} min
    </button>
  );
}
