import React, {useState} from "react";
import JSONDATA from './HSSearchData.json';
import ShoppingCartSymbol from './assets/ShoppingCartSymbol.png';
import MyAccountPic from './assets/MyAccountPic.png';
import HeaderMapPointer from './assets/HeaderMapPointer.png';
import MyLogoMUBay from './assets/MyLogoMUBay.png';
import NotificationButton from './assets/NotificationButton.png';
import smily from './assets/smily.png';

export const ObjectclickScreen = (props) => {

    const [searchTerm, setSearchTerm] = useState("");
    const [hasSearched, setHasSearched] = useState(false);
    const [isShowingResults, setIsShowingResults] = useState(false);

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

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>



            <text>
                <h2>Currently sold items:</h2>
            </text>
            <div className="somename">
                <button>
                    <img src={smily} alt="example1" className = "buyexmp"/>
                </button> 
                    <div className="iteminfotab">
                        <p>
                            Item: Electric Kettle with a broken tip 
                        </p>   
                        <p>
                            Sold by: Ananya Vemula
                        </p>
                        <p>
                            Cost: Rs. 200
                        </p>

                    </div>
                
                <button>
                    <img src={smily} alt="example1" className = "buyexmp"/>
                    <p></p>
                </button>
                <button>
                    <img src={smily} alt="example1" className = "buyexmp"/>
                </button>
                <button>
                    <img src={smily} alt="example1" className = "buyexmp"/>
                </button>
                <button>
                    <img src={smily} alt="example1" className = "buyexmp"/>
                </button>
                <button>
                    <img src={smily} alt="example1" className = "buyexmp"/>
                </button>
                <button>
                    <img src={smily} alt="example1" className = "buyexmp"/>
                </button>
                <button>
                    <img src={smily} alt="example1" className = "buyexmp"/>
                </button>   
                <button>
                    <img src={smily} alt="example1" className = "buyexmp"/>
                </button>
                <button>
                    <img src={smily} alt="example1" className = "buyexmp"/>
                </button>

            </div>
            
        </div>
    );
};

export default ObjectclickScreen

