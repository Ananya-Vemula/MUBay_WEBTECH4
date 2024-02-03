import React,{useState} from "react";

export const SignUpScreen = (props) => {

    const [registrationno, setregistrationno] = useState('');
    const [outlookmail, setoutlookmail] = useState('');
    const [password, setpassword] = useState('');
    const [confirmpassword, setconfirmpassword] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(registrationno);
        console.log(outlookmail);
        console.log(password);
        console.log(confirmpassword);
    }

    return(
        <div>
            <div className="Topcontainer">
                <form className="SignInStyle">
                    <label className="toplab1" >Welcome to MUBay</label>
                    <label className="toplab2" >Sign In!</label>
                </form>
            </div>
            
            <div className="auth-form-container">
                <form className = "SignUpStyle" onSubmit={handleSubmit}>
                    <label className="majorlabel">Type the information asked:</label>
                    <label className="minlabel" htmlFor= "registrationno">Registration No:</label>
                    <input value = {registrationno} type = "registrationno" placeholder = "Type Registration no"></input>
                    <label className="minlabel" htmlFor= "outlookmail">Outlook Mail:</label>
                    <input value = {outlookmail} type = "outlookmail" placeholder = "Type Outlook mail"></input>
                    <label className="minlabel" htmlFor= "password">Password</label>
                    <input value = {password} type = "password" placeholder = "Type Password"></input>
                    <label className="minlabel" htmlFor= "confirmpassword">Confirm Password:</label>
                    <input value = {confirmpassword} type = "confirmpassword" placeholder = "Type Confim Password"></input>
                    <button  className = "SignInButt" onClick={() => props.onFormSwitch('SignIn')}>Create!</button>
                </form>
            </div>
        </div>
        
    )
        
}