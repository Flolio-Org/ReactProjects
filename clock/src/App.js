
import './App.css';

export default function App() {

    function setDate() {
    const now = new Date();

    const secondHand = document.querySelector('.second-hand');
    const minuteHand = document.querySelector('.minute-hand');
    const hourHand = document.querySelector('.hour-hand');

    const sec = now.getSeconds();
    const min = now.getMinutes();
    const hour = now.getHours();

    const deg = (sec*6)+90;
    const deg1 = (min*6)+90;
    const deg2 = (hour*30)+90;

    secondHand.style.transform = `rotate(${deg}deg)`;
    minuteHand.style.transform = `rotate(${deg1}deg)`;
    hourHand.style.transform = `rotate(${deg2}deg)`;
  }
  setInterval(setDate, 1000)

  return (
    <div className="App">
      <div className='clock'>
        <div className='hand hour-hand'></div>
        <div className='hand minute-hand'></div>
        <div className='hand second-hand'></div>
      </div>
      
    </div>
  );
}

