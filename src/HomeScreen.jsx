import React, { useState } from "react";

export const HomeScreen = (props) => {

  const handleBuyButtonClick = () => {
    // Call the function passed as a prop to switch to BuyScreen1
    props.onScreenSwitch('BuyScreen1');
  };
  

  return (
    <div>
      

      <div className="HomeScreenQcontainer1">
        <text>
          What would you like to do today?
        </text>
      </div>

      <div className="HomeScreenOptionsContainer">
        {/* Call handleBuyButtonClick when the "BUY" button is clicked */}
        <button className="BuyButton" onClick={handleBuyButtonClick}>
          BUY
        </button>
        <button className="SellButton">
          SELL
        </button>
        <button className="BusButton">
          BUSINESS
        </button>
      </div>
    </div>
  );
};

export default HomeScreen;

