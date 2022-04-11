import Header from './Components/Header'
import './App.css';
import { useState, useEffect } from "react";
import Punklist from './Components/Punklist'

function App() {
   const [data, setData] = useState([]);
  useEffect(() => {
    const getNft = async () => {
      const response = await fetch(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0xA124FF8d5Ac3822e2Ff9C2c8a66A890b51a784ed"
      );
      const jsonData = await response.json();
      setData(jsonData.assets.reverse());
    };
    getNft();
    return 
  }, []);
  return (
    <div className='app'>
     <Header />
     {/* <Main /> */}
     <Punklist data={data}/>
    </div>
  );
}

export default App;
