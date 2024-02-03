import React , {useState} from "react";
import logo from './logo.svg';
import './App.css';
import { SignInScreen } from './SignInScreen';
import { SignUpScreen } from "./SignUpScreen";
import HomeScreen from "./HomeScreen";

function App() {
  const [currform, setcurrform] = useState('SignIn');


  const toggleForm = (formm) => {
    setcurrform(formm);
  }
  return (
    <div className="App">
      {
        currform === "SignIn" ? (
        <SignInScreen onFormSwitch = {toggleForm}/> )
        : currform == "SignUp" ? (
        <SignUpScreen onFormSwitch = {toggleForm}/> )
        : (<HomeScreen/>)
      }
      
    </div>
    
  );
}

export default App;
