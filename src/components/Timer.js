import { useEffect } from "react";

function Timer({ dispatch, secondsRemining }) {
  const mins = Math.floor(secondsRemining / 60);
  const secs = secondsRemining % 60;
  useEffect(
    function () {
      const id = setInterval(() => dispatch({ type: "tick" }), 1000);

      return () => clearInterval(id);
    },
    [dispatch]
  );

  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}:{secs < 10 && "0"}
      {secs}
    </div>
  );
}

export default Timer;
