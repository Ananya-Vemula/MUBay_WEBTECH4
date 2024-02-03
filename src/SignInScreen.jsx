import React,{useState} from "react";
import HomeScreen from "./HomeScreen";

export const SignInScreen = (props) => {

    const [registrationno, setregistrationno] = useState('');
    const [password, setpassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(registrationno);
        console.log(password);
    }

    return(
        
        <div>
            <div className="Topcontainer">
                <form className="SignInStyle">
                    <label className="toplab1" >Welcome to MUBay</label>
                    <label className="toplab2" >Sign In!</label>
                </form>
            </div>


            <div className="auth-form-container2">
                <form className="SignInStyle" onSubmit={handleSubmit}>
                    <label className="minlabel" htmlFor= "registrationno">Registration No:</label>
                    <input value = {registrationno} type = "registrationno" placeholder = "Type Registration no"></input>
                    <label className="minlabel" htmlFor= "password">Password:</label>
                    <input value = {password} type = "password" placeholder = "Type Password"></input>
                    <button className="SignInButt" onClick ={() => props.onFormSwitch('HomeScreen')}>GET BUYIN!!</button>
                </form>

            </div>

            <div className="donthaveacc">
                <label className="deletethis">Don't have an account?</label>
                <button className="SignUpButt" onClick={() => props.onFormSwitch('SignUp')}>Sign UP!</button>
            </div>
        </div>
        
    )
        
}