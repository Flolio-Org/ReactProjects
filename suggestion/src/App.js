import { useEffect, useState } from "react";
import "./App.css";
import { getMoviesFromApi } from "./API/service";


function App() {
  const [cities, setCities] = useState([]);
  // const [display,setDisplay] = useState([]);

  useEffect(() => {
    getMoviesFromApi().then((data) => {
      // setCities
      setCities(data);
    });
  }, []);


  function findMatches(wordToMatch) {
    return cities.filter((place) => {
      const regex = new RegExp(wordToMatch, "gi");
      return place.city.match(regex) || place.state.match(regex);
    });
    //console.log(display);
  }

  const sug = document.querySelector(".suggestion");

  function displayMatches(e) {
    const matchArray = findMatches(e.target.value);
    const html = matchArray.map((place) => {
      return `
      <li>
        <span class = "name">${place.city}, ${place.state}</span>
        <span class="population">${place.population}</span>
        <br />
      </li>`;
    });
    sug.innerHTML = html;
  }

  return (
    <div className="App">
      <h1>Search</h1>{" "}
      <input type="text" name="search" id="search" onChange={displayMatches} />
      <div className="suggestion"></div>
    </div>
  );
}

export default App;
