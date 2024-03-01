
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const requestData = {
  //     stud_registration_no: registrationno,
  //     stud_name: name,
  //     stud_outlook_mail: outlookmail,
  //     stud_password: password,
  //     stud_confirm_password: confirmpassword,
  //     stud_phone_no: phoneno
  //   };

  //   const requestOptions = {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(requestData)
  //   };

  //   fetch("http://127.0.0.1:8000/setstudentinfo", requestOptions)
  //     .then((response) => response.text())
  //     .then((result) => console.log(result))
  //     .catch((error) => console.error(error));
  // };
  
  import React, { useState } from "react";

  export const SignUpScreen = (props) => {
    const [registrationno, setRegistrationNo] = useState("");
    const [name, setName] = useState("");
    const [outlookmail, setOutlookMail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [phoneno, setPhoneNo] = useState("");
    const [error, setError] = useState(""); // Define the error state
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const requestData = {
        stud_registration_no: registrationno,
        stud_name: name,
        stud_outlook_mail: outlookmail,
        stud_password: password,
        stud_confirm_password: confirmpassword,
        stud_phone_no: phoneno
      };
  
      try {
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(requestData)
        };
  
        const response = await fetch("http://127.0.0.1:8000/signup.php", requestOptions);
        const data = await response.text();
  
        if (response.ok) {
          console.log("User registered successfully");
          // Redirect to another page or handle success as needed
        } else {
          console.error("Registration failed:", data);
          setError("Registration failed. Please try again."); // Set error message
        }
      } catch (error) {
        console.error("Error:", error);
        setError("An error occurred. Please try again."); // Set error message
      }
    };
  
    return (
      <div>
        <div className="Topcontainer">
          <form className="SignInStyle">
            <label className="toplab1">Welcome to MUBay</label>
            <label className="toplab2">Sign In!</label>
          </form>
        </div>
  
        <div className="auth-form-container">
          <form className="SignUpStyle" onSubmit={handleSubmit}>
            <label className="majorlabel">Type the information asked:</label>
            <label className="minlabel" htmlFor="registrationno">Registration No:</label>
            <input value={registrationno} onChange={(e) => setRegistrationNo(e.target.value)} type="text" placeholder="Type Registration no" />
            <label className="minlabel" htmlFor="name">Name:</label>
            <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Type Name" />
            <label className="minlabel" htmlFor="outlookmail">Outlook Mail:</label>
            <input value={outlookmail} onChange={(e) => setOutlookMail(e.target.value)} type="email" placeholder="Type Outlook mail" />
            <label className="minlabel" htmlFor="password">Password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Type Password" />
            <label className="minlabel" htmlFor="confirmpassword">Confirm Password:</label>
            <input value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" placeholder="Type Confirm Password" />
            <label className="minlabel" htmlFor="phoneno">Phone number:</label>
            <input value={phoneno} onChange={(e) => setPhoneNo(e.target.value)} type="text" placeholder="Type Phone no" />
            <button className="SignInButt">Create!</button>
            {error && <div className="error-message">{error}</div>} {/* Display error message if error state is set */}
          </form>
        </div>
      </div>
    );
  };
   

