import React from "react";

function Coin({ id, name, icon, price, symbol }) {
    // console.log(id)
  return (
    <div key={id} className="coin">
      <h1>Name: {name}</h1>
      <img src={icon} />
      <h3>Price: {price}</h3>
      <h3>Symbol: {symbol}</h3>
    </div>
  );
}

export default Coin;
