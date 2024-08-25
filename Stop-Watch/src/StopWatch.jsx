import { useEffect, useState, useRef } from 'react';

function StopWatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const startTimeRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      startTimeRef.current = Date.now() - elapsedTime;
      const intervalId = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 10);
      return () => clearInterval(intervalId);
    }
  }, [isRunning]);

  function start() {
    setIsRunning(true);
  }

  function stop() {
    setIsRunning(false);
  }

  function reset() {
    setIsRunning(false);
    setElapsedTime(0);
  }

  function formatTime() {
    let mSeconds = elapsedTime % 1000;
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));

    return `${hours}:${padZero(minutes, 2)}:${padZero(seconds, 2)}:${padZero(mSeconds, 3)}`;
  }

  function padZero(number, desiredLen) {
    let str = number.toString();
    return `${'0'.repeat(desiredLen - str.length)}${str}`;
  }

  return (
    <div className="watch-background">
      <div className="watch-border">
        <div className="time-indicator">
          {formatTime()}
        </div>
      </div>
      <div className="button-holder">
        <button className="start-button" onClick={start}>
          Start
        </button>
        <button className="stop-button" onClick={stop}>
          Stop
        </button>
        <button className="reset-button" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default StopWatch;
