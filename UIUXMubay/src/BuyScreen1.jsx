import React, { useState } from "react";
import JSONDATA from './HSSearchData.json';
import ShoppingCartSymbol from './assets/ShoppingCartSymbol.png';
import MyAccountPic from './assets/MyAccountPic.png';
import HeaderMapPointer from './assets/HeaderMapPointer.png';
import MyLogoMUBay from './assets/MyLogoMUBay.png';
import NotificationButton from './assets/NotificationButton.png';
import { BrowserRouter as Router, Route, Link, ReactRouter} from 'react-router-dom';
import pic1 from './assets/pic1.png';
import pic2 from './assets/pic2.png';
import pic3 from './assets/pic3.png';
import pic4 from './assets/pic4.png';
import pic5 from './assets/pic5.png';
import pic6 from './assets/pic6.png';

export const BuyScreen1 = (props) => {

    const [searchTerm, setSearchTerm] = useState("");
    const [hasSearched, setHasSearched] = useState(false);
    const [isShowingResults, setIsShowingResults] = useState(false);


    const someObjectClicked = () => {
        props.onScreenSwitch('ObjectclickScreen');

    };

      

    return(

        <div>
            <header className='HeaderDesign'>

            <div>
            <img src= {MyLogoMUBay} alt = "The main logo" className="mylogosetting1"/>

            </div>

            <div className="deliveryAddressContainer">
            <button className="homeScreenTopButtonAddress">
                <span className="deliveryAddressText">
                Deliver to Ananya<br />
                GHS B2 room 217
                </span>
            </button>
            <img src={HeaderMapPointer} alt="My Address" className="customMapPointer " />
            </div>

            <button className="homeScreenTopButton" onClick={() => console.log("My Account Button Clicked")}>
                <img src={NotificationButton} alt="Notif button" className="homeScreenTopButtonImages" />
            </button>
            
            <div className="searchContainerWrapper">
                <input
                type="text"
                placeholder="Search..."
                onChange={(event) => {
                    setSearchTerm(event.target.value);
                }}
                onClick={() => {
                    setHasSearched(true);
                    setIsShowingResults(true);
                }}
                />
                {JSONDATA?.data && hasSearched && (
            <div className={`searchResultsContainer ${isShowingResults ? "show" : ""}`}>
                {JSONDATA.map((val, index) => {
                if (searchTerm === "" || val.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return (
                    <div className="user" key={index}>
                        <p>{val}</p>
                    </div>
                    );
                }
                return null; 
                })}
            </div>
            
            )}
            </div>

            <button className="homeScreenTopButton" onClick={() => console.log("My Account Button Clicked")}>
                <img src={MyAccountPic} alt="My Account" className="homeScreenTopButtonImages" />
            </button>

            <button className="homeScreenTopButton" onClick={() => console.log("Shopping Cart Button Clicked")}>
                <img src={ShoppingCartSymbol} alt="Shopping Cart" className="homeScreenTopButtonImages" />
            </button>
            </header>

            <div>
                <br/>
                <br/>
                <br/>
                <br/>
                <text className="HomeScreenQcontainer1">
                    <h2>Popular Right Now!!</h2>
                </text>

                <div className="productGrid">
                    <button>
                    <img src={pic1} alt="My pic1" className="optionspic" onClick={someObjectClicked}/>
                    </button>
                    <button>
                    <img src={pic2} alt="My pic2" className="optionspic" onClick={someObjectClicked}/>
                    </button>
                    <button>
                    <img src={pic3} alt="My pic3" className="optionspic" onClick={someObjectClicked}/>
                    </button>
                    <button>
                    <img src={pic4} alt="My pic4" className="optionspic" onClick={someObjectClicked}/>
                    </button>
                    <button>
                    <img src={pic5} alt="My pic5" className="optionspic" onClick={someObjectClicked}/>
                    </button>
                    <button>
                    <img src={pic6} alt="My pic6" className="optionspic" onClick={someObjectClicked}/>
                    </button>
                </div>

                <text>
                    <h2>Option not avaibable? use search bar!</h2>
                </text>

                <button>
                    Go back
                    
                </button>
            </div>

        </div>
    );
};

export default BuyScreen1