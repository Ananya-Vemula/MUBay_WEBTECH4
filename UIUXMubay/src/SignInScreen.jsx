import React, { useState } from "react";
import HomeScreen from "./HomeScreen";

export const SignInScreen = (props) => {
    const [registrationno, setregistrationno] = useState('');
    const [password, setpassword] = useState('');
    const [error, setError] = useState('');
    const [invalidRegistration, setInvalidRegistration] = useState(false);
    const [invalidPassword, setInvalidPassword] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ stud_registration_no: registrationno, stud_password: password }),
        };

        try {
            const response = await fetch("http://127.0.0.1:8000/getstudentinfo", requestOptions);
            const data = await response.json();

            if (response.ok) {
                props.onFormSwitch('HomeScreen');
            } else {
                setError(data.detail);
                if (data.detail.includes("registration no")) {
                    setInvalidRegistration(true);
                    console.log("Invalid registration number");
                }
                if (data.detail.includes("password")) {
                    setInvalidPassword(true);
                    console.log("Invalid password");
                }
                if (invalidRegistration && invalidPassword) {
                    console.log("Invalid registration number and password");
                }
            }
        } catch (error) {
            console.error("Error:", error);
            setError("An error occurred. Please try again.");
        }
    };

    return (
        <div>
            <div className="Topcontainer">
                <form className="SignInStyle">
                    <label className="toplab1" >Welcome to MUBay</label>
                    <label className="toplab2" >Sign In!</label>
                </form>
            </div>

            <div className="auth-form-container2">
                <form className="SignInStyle" onSubmit={handleSubmit}>
                    <label className="minlabel" htmlFor="registrationno">Registration No:</label>
                    <input value={registrationno} type="registrationno" placeholder="Type Registration no" onChange={(e) => setregistrationno(e.target.value)}></input>
                    {invalidRegistration && <div className="error-message">Invalid registration number</div>}
                    <label className="minlabel" htmlFor="password">Password:</label>
                    <input value={password} type="password" placeholder="Type Password" onChange={(e) => setpassword(e.target.value)}></input>
                    {invalidPassword && <div className="error-message">Invalid password</div>}
                    <button className="SignInButt" type="submit">GET BUYIN!!</button>
                    {error && <div className="error-message">{error}</div>}
                </form>
            </div>

            <div className="donthaveacc">
                <label className="deletethis">Don't have an account?</label>
                <button className="SignUpButt" onClick={() => props.onFormSwitch('SignUp')}>Sign UP!</button>
            </div>
        </div>
    );
};
