import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

var timeout;
var hr = 0;
var min = 0;
var sec = 0;
var stoptime = true;

export default function App() {

  const [time,setTime] = useState('00:00:00')



function startTimer() {
        stoptime = false;
        timerCycle();
}
function stopTimer() {
  clearTimeout(timeout)
}

function timerCycle() {
    if (stoptime == false) {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);

    sec = sec + 1;

    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }

    if (sec < 10 || sec == 0) {
      sec = '0' + sec;
    }
    if (min < 10 || min == 0) {
      min = '0' + min;
    }
    if (hr < 10 || hr == 0) {
      hr = '0' + hr;
    }

    setTime(hr + ':' + min + ':' + sec);

    timeout = setTimeout(timerCycle, 1000);
  }
  else{
    clearTimeout(timeout);
    return
  }
  
}

function reset() {
  hr = 0;
  min = 0;
  sec = 0;
  stoptime = true;
  clearTimeout(timeout)
  setTime('00:00:00')
}

  return (
    <div>
      <h1>STOPWATCH</h1>
      <h2 class='time'>{time}</h2>
      <button onClick={startTimer}>Start/Unpause</button>
      <button onClick={reset}>Reset</button>
      <button onClick={stopTimer}>Pause/Stop</button>
    </div>
  );
}

