import React, { useState } from "react";
import JSONDATA from './HSSearchData.json';
import ShoppingCartSymbol from './assets/ShoppingCartSymbol.png';
import MyAccountPic from './assets/MyAccountPic.png';
import HeaderMapPointer from './assets/HeaderMapPointer.png';
import MyLogoMUBay from './assets/MyLogoMUBay.png';
import NotificationButton from './assets/NotificationButton.png';

const MoreObjInfoScreen = ({ onScreenSwitch }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [hasSearched, setHasSearched] = useState(false);
    const [isShowingResults, setIsShowingResults] = useState(false);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        setHasSearched(true);
        setIsShowingResults(true);
    };

    const nextPageClicked = () => {
        onScreenSwitch('BuyerInfoForm');
    };

    return(
        <div>
            <header className='HeaderDesign'>
                <div>
                    <img src={MyLogoMUBay} alt="The main logo" className="mylogosetting1"/>
                </div>
                <div className="deliveryAddressContainer">
                    <button className="homeScreenTopButtonAddress">
                        <span className="deliveryAddressText">
                            Deliver to Ananya<br />
                            GHS B2 room 217
                        </span>
                    </button>
                    <img src={HeaderMapPointer} alt="My Address" className="customMapPointer" />
                </div>
                <button className="homeScreenTopButton">
                    <img src={NotificationButton} alt="Notif button" className="homeScreenTopButtonImages" />
                </button>
                <div className="searchContainerWrapper">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={handleSearch}
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
                <button className="homeScreenTopButton">
                    <img src={MyAccountPic} alt="My Account" className="homeScreenTopButtonImages" />
                </button>
                <button className="homeScreenTopButton">
                    <img src={ShoppingCartSymbol} alt="Shopping Cart" className="homeScreenTopButtonImages" />
                </button>
            </header>
            <div>
                <button onClick={nextPageClicked}>Next page</button>
            </div>
        </div>
    );
};

export default MoreObjInfoScreen;
