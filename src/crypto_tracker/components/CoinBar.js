import React from "react";
import "./CoinBar.css";
function CoinBar(prop) {
  return (
    <>
      <p className="rank">{prop.coin.market_cap_rank}</p>
      <div className="coin-imagetext">
        <img src={prop.coin.image} alt="crypto"></img>
        <p className="coin">{prop.coin.symbol.toUpperCase()}</p>
      </div>
      <p className="price">{prop.coin.current_price.toLocaleString()}</p>
      <p className="daily">{`${prop.coin.price_change_percentage_24h}%`}</p>
      <p className="hide-mobile">{prop.coin.total_volume.toLocaleString()}</p>
      <p className="hide-mobile">{prop.coin.market_cap.toLocaleString()}</p>
    </>
  );
}

export default CoinBar;
