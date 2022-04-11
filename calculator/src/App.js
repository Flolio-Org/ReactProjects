import React, { useState } from 'react';
//import math from 'react-math';

let x = 0;

export default function App() {

  const [ans,setAns] = useState("")

  function handleSubmit(e) {
    
    //  console.log(e);
    e.preventDefault();
    
    if(e.target[1].value == 0) {
       //console.log(x);
       setAns("NO TIPP");
    }
    else {
      //console.log(x);
      x = e.target[0].value*(e.target[1].value)/(e.target[2].value*100)
      x = Math.ceil(x)
      setAns("$"+x+" per person")
     }
  }

  return (
    <div>
      <h1>Tip Calculator</h1>
      <form onSubmit={handleSubmit}>
        <label>Bill Amount $</label>
        <input type="text" pattern="[0-9]*"></input>
        <br />
        <br />
        <select >
          <option value="default" hidden>How was your experience?</option>
          <option value="30">Amazing</option>
          <option value="20">Good</option>
          <option value="10">Okayish</option>
          <option value="0">Bad</option>
        </select>
        <br />
        <br />
        <label>How many in you party? </label>
        <input type="text" pattern="[0-9]*" ></input>
        <button type='submit'>Calculate</button>
      </form>
      <h2>{ans}</h2>
    </div>
  );
}


