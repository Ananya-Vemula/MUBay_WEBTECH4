import React, { useState } from "react";
import JSONDATA from './HSSearchData.json';
import ShoppingCartSymbol from './assets/ShoppingCartSymbol.png';
import MyAccountPic from './assets/MyAccountPic.png';

export const HomeScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [isShowingResults, setIsShowingResults] = useState(false);

  return (
    <div>
      <div className = 'HeaderDesign'>

        <button className = "homeScreenTopButtonAddress">
          <text >
            Deliver to Ananya<br/>
            GHS B2 room 217
          </text>
        </button>

        <input
          type="text"
          placeholder="Search..."
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
          onClick={() => {setHasSearched(true);
                          setIsShowingResults(true);}
                        }
        />
        {hasSearched && (
    <div className={`searchResultsContainer ${isShowingResults ? "show" : ""}`}>
      {JSONDATA.map((val, index) => {
        if (searchTerm === "" || val.toLowerCase().includes(searchTerm.toLowerCase())) {
          return (
            <div className="user" key={index}>
              <p>{val}</p>
            </div>
          );
        }
        return null; // Handle cases where searchTerm doesn't match
      })}
    </div>
  )}

        <button className = "homeScreenTopButton" onCLick ={() => console.log("Button Clicked")}>
          <img src={MyAccountPic} alt="ShoppingCart" className = "homeScreenTopButtonImages"/>
        </button>

        <button className = "homeScreenTopButton" onCLick ={() => console.log("Button Clicked")}>
          <img src={ShoppingCartSymbol} alt="ShoppingCart" className = "homeScreenTopButtonImages"/>
        </button>
      </div>
      
    </div>
  );
};

export default HomeScreen;
