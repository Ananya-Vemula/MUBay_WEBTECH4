import React, { useState } from "react";
import logo from './Logo.png';
import './App.css';
import { SignInScreen } from './SignInScreen';
import { SignUpScreen } from "./SignUpScreen";
import HomeScreen from "./HomeScreen";
import BuyScreen1 from "./BuyScreen1";
import ObjectclickScreen from "./ObjectclickScreen";

function App() {
  const [currForm, setCurrForm] = useState('SignIn');

  const handleFormSwitch = (form) => {
    setCurrForm(form);
  }


  return (
    <div className="App">
      {currForm === "SignIn" ? (
        <SignInScreen onFormSwitch={handleFormSwitch} />
      ) : currForm === "SignUp" ? (
        <SignUpScreen onFormSwitch={handleFormSwitch} />
      ) : currForm === "HomeScreen" ? (
        <HomeScreen onScreenSwitch={handleFormSwitch} />
      ) : currForm === "BuyScreen1" ? (
        <BuyScreen1 onScreenSwitch = {handleFormSwitch}/>
      ) : currForm === "ObjectclickScreen"?(
        <ObjectclickScreen/>
      ): null}
    </div>
  );
}

export default App;
