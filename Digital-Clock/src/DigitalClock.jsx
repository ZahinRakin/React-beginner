import React, { useState, useEffect } from 'react';

function DigitalClock(){
  const [time, setTime] = useState(new Date());
  useEffect(()=>{
    const intervalId = setInterval(()=>{
      setTime(new Date());
    }, 1000);
  }, []);

  function formatTime(){
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiem = hours < 12 ? "AM" : "PM";
    hours = hours % 12 || 12;
    return (
      <div className="clock-background">
        <span>
          {padZero(hours)}:{padZero(minutes)}:{padZero(seconds)}
        </span>
        <span>
          {meridiem}
        </span>
      </div>
    );
  }

  function padZero(number){
    return number < 10 ? `0${number}` : `${number}`;
  }

  return(
    <div style={{height: "100%",}}>
      {formatTime()}
    </div>
  );
}

export default DigitalClock

//in this program hours, minutes, seconds and meridiem are all normal variable not useState() hook. then why they are getting real time update on the display without them being the useState()