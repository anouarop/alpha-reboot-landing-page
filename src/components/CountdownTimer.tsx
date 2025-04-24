
import { useEffect, useState } from "react";
import { Timer } from "lucide-react";

export const CountdownTimer = () => {
  const [hours, setHours] = useState(72);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else if (hours > 0) {
        setHours(hours - 1);
        setMinutes(59);
        setSeconds(59);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [hours, minutes, seconds]);

  return (
    <div className="flex items-center justify-center gap-2 text-white/90">
      <Timer className="w-5 h-5" />
      <span className="font-mono">
        {hours.toString().padStart(2, "0")}:{minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}
      </span>
      <span className="text-red-400">remaining</span>
    </div>
  );
};
