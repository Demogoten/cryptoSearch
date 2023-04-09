import "./App.css";
import { useEffect, useState } from "react";
import Coin from "./components/Coin";

const url = 'https://api.coinstats.app/public/v1/coins?skip=0';

function App() {
  const [listOfCoins, setListOfCoins] = useState([]);
  const [searchWord, setSearchWord] = useState("");

const fetchCoins = async () => {
  const response = await fetch(url);
  const data = await response.json();
  // console.log(data.coins)
  setListOfCoins(data.coins)
}
 
  useEffect(() => {
    fetchCoins();
  }, []);

  const filterCoins = listOfCoins.filter((coin) => {
    return coin.name.toLowerCase().includes(searchWord.toLocaleLowerCase());
  });

  return (
    <div className="App">
      <div className="cryptoHeader">
        <input
          type="text"
          placeholder="Search..."
          onChange={(event) => {
            setSearchWord(event.target.value);
          }}
        />
      </div>
      <div className="cryptoDisplay">
        {filterCoins.map((coin,index) => {
          return (
            <Coin
              id={`${coin.id}-${index}`}
              name={coin.name}
              icon={coin.icon}
              price={coin.price}
              symbol={coin.symbol}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
