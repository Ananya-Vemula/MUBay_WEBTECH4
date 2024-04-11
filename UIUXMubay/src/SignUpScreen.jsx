    // const handleSubmit = async (e) => {
    //   e.preventDefault();
    //   const requestData = {
    //     stud_registration_no: registrationno,
    //     stud_name: name,
    //     stud_outlook_mail: outlookmail,
    //     stud_password: password,
    //     stud_confirm_password: confirmpassword,
    //     stud_phone_no: phoneno
    //   };
  
    //   try {
    //     const requestOptions = {
    //       method: "POST",
    //       headers: { "Content-Type": "application/json" },
    //       body: JSON.stringify(requestData)
    //     };
  
    //     const response = await fetch("http://127.0.0.1:8000/setstudentinfo", requestOptions);
    //     const data = await response.text();
  
    //     if (response.ok) {
    //       console.log("User registered successfully");
    //       // Redirect to another page or handle success as needed
    //     } else {
    //       console.error("Registration failed:", data);
    //       setError("Registration failed. Please try again."); // Set error message
    //     }
    //   } catch (error) {
    //     console.error("Error:", error);
    //     setError("An error occurred. Please try again."); // Set error message
    //   }
    // };
 
  
    import React, { useState } from "react";
    import { useHistory } from 'react-router-dom';

    export const SignUpScreen = (props) => {

      const history = useHistory();
      const [registrationno, setRegistrationNo] = useState("");
      const [name, setName] = useState("");
      const [outlookmail, setOutlookMail] = useState("");
      const [password, setPassword] = useState("");
      const [confirmpassword, setConfirmPassword] = useState("");
      const [phoneno, setPhoneNo] = useState("");
      const [error, setError] = useState(""); // Define the error state
      const [errorField, setErrorField] = useState(""); // Track the input field causing error
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        // Data validation
        if (!registrationno || !name || !outlookmail || !password || !confirmpassword || !phoneno) {
          setError("All fields are required.");
          setErrorField("");
          return;
        }
    
        if (!outlookmail.endsWith("@muj.manipal.edu")) {
          setError("Outlook mail must end with @muj.manipal.edu");
          setErrorField("outlookmail");
          return;
        }
    
        if (password !== confirmpassword) {
          setError("Password and Confirm Password must match.");
          setErrorField("confirmpassword");
          return;
        }

        const isValidPhoneNo = (phoneNo) => {
          return /^\d{10}$/.test(phoneNo);
        }
    
        // if (registrationnoExists(registrationno)) {
          
        //   setError("Registration No already exists.");
        //   setErrorField("registrationno");
        //   return;
        // }

        //setError("Registration No already exists."), setErrorField("registrationno")
        const reqOp1 = {
          method: "GET",
          redirect: "follow"
        };
        
        fetch("http://127.0.0.1:8000/getstudentinfo?stud_registration_no=" + registrationno, reqOp1)
        .then((response) => response.text())
        .then((result) => {
          var data = JSON.parse(result);  
          console.log(data)
          if (data['stud_registration_no'] == registrationno) {
            setError("Registration No already exists.");
            setErrorField("registrationno");
          } else if (!isValidPhoneNo(phoneno)) {
            setError("Phone number must be 10 digits long.");
            setErrorField("phoneno");
            return;
          } else {
            const requestData = {
              stud_registration_no: registrationno,
              stud_name: name,
              stud_outlook_mail: outlookmail,
              stud_password: password,
              stud_confirm_password: confirmpassword,
              stud_phone_no: phoneno
            };
        
            const requestOptions = {
              method: "POST",
              headers: { "Content-Type": "application/json" }, 
              body: JSON.stringify(requestData)
            };
        
            fetch("http://127.0.0.1:8000/setstudentinfo", requestOptions)
              .then((response) => response.text())
              .then((result) => history.push("Sign In"))
              .catch((error) => console.error(error));
          }
        });
        

        // const reqOp2 = {
        //   method: "GET",
        //   redirect: "follow"
        // };
        
        // fetch("http://127.0.0.1:8000/getstudentinfo?stud_outlook_mail=" + outlookmail, reqOp2)
        //   .then((response) => response.text())
        //   .then((result) => {
        //     var data = JSON.parse(result)
            
        //     if (data['stud_outlook_mail'] == outlookmail){
        //       setError("Outlook mail already exists")
        //       setErrorField("outlookmail")
        //     }

        // })
        
        // const reqOp3 = {
        //   method: "GET",
        //   redirect: "follow"
        // };
        
        // fetch("http://127.0.0.1:8000/getstudentinfo?stud_phone_no=" + phoneno, reqOp3)
        //   .then((response) => response.text())
        //   .then((result) => {
        //     var data = JSON.parse(result)
            
        //     if (data['stud_phone_no'] == phoneno){
        //       setError("phone number already exist")
        //       setErrorField("phoneno")
        //     }

        // })

       
      }
      const handleInputFocus = (fieldName) => {
        setError("");
        setErrorField(fieldName);
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
              <input 
                value={registrationno} 
                onChange={(e) => setRegistrationNo(e.target.value)} 
                onFocus={() => handleInputFocus("registrationno")}
                type="text" 
                placeholder="Type Registration no" 
              />
              {errorField === "registrationno" && error && <div className="error-message">{error}</div>}
              <label className="minlabel" htmlFor="name">Name:</label>
              <input 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                onFocus={() => handleInputFocus("name")}
                type="text" 
                placeholder="Type Name" 
              />
              {errorField === "name" && error && <div className="error-message">{error}</div>}
              <label className="minlabel" htmlFor="outlookmail">Outlook Mail:</label>
              <input 
                value={outlookmail} 
                onChange={(e) => setOutlookMail(e.target.value)} 
                onFocus={() => handleInputFocus("outlookmail")}
                type="email" 
                placeholder="Type Outlook mail" 
              />
              {errorField === "outlookmail" && error && <div className="error-message">{error}</div>}
              <label className="minlabel" htmlFor="password">Password</label>
              <input 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                onFocus={() => handleInputFocus("password")}
                type="password" 
                placeholder="Type Password" 
              />
              {errorField === "password" && error && <div className="error-message">{error}</div>}
              <label className="minlabel" htmlFor="confirmpassword">Confirm Password:</label>
              <input 
                value={confirmpassword} 
                onChange={(e) => setConfirmPassword(e.target.value)} 
                onFocus={() => handleInputFocus("confirmpassword")}
                type="password" 
                placeholder="Type Confirm Password" 
              />
              {errorField === "confirmpassword" && error && <div className="error-message">{error}</div>}
              <label className="minlabel" htmlFor="phoneno">Phone number:</label>
              <input 
                value={phoneno} 
                onChange={(e) => setPhoneNo(e.target.value)} 
                onFocus={() => handleInputFocus("phoneno")}
                type="text" 
                placeholder="Type Phone no" 
              />
              {errorField === "phoneno" && error && <div className="error-message">{error}</div>}
              <button className="SignInButt">Create!</button>
            </form>
          </div>
        </div>
      );
    };
    
