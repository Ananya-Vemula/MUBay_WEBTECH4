import React, { useState } from "react";
import logo from './Logo.png';
import './App.css';
import { SignInScreen } from './SignInScreen';
import { SignUpScreen } from "./SignUpScreen";
import HomeScreen from "./HomeScreen";
import BuyScreen1 from "./BuyScreen1";
import ObjectclickScreen from "./ObjectclickScreen";
import MoreObjInfoScreen from "./MoreObjInfoScreen";
import BuyerInfoForm from "./BuyerInfoForm";


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
      <BuyScreen1 onScreenSwitch={handleFormSwitch} />
    ) : currForm === "ObjectclickScreen" ? (
      <ObjectclickScreen onScreenSwitch={handleFormSwitch} />
    ) : currForm === "MoreObjInfoScreen" ? (
      <MoreObjInfoScreen onScreenSwitch={handleFormSwitch} />
    ) : currForm === "BuyerInfoForm" ? (
      <BuyerInfoForm />
    ) : null}
    </div>
  );
}

export default App;
