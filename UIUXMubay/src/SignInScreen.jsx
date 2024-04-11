import React, { useState } from "react";
import HomeScreen from "./HomeScreen"; // Assuming HomeScreen is the correct component

export const SignInScreen = (props) => {
  const [registrationNo, setRegistrationNo] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State for error messages

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ stud_registration_no: registrationNo, stud_password: password }),
    };

    try {
      const response = await fetch("http://localhost:8000/getstudentinfo", requestOptions);
      const data = await response.json();

      if (response.ok) {
        props.onFormSwitch("HomeScreen"); // Switch to HomeScreen component
      } else if (response.status === 403) {
        console.log(data);
        if (data === "Invalid password") {
          setError("Invalid password. Please try again.");
        } else if (data === "Invalid Registration") {
          setError("Invalid registration number. Please try again.");
        } else {
          setError(data);
        }
      } else {
        setError("An error occurred. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="SignInContainer"> {/* Assuming a container class */}
      <div className="Topcontainer">
        <form className="SignInStyle">
          <label className="toplab1">Welcome to MUBay</label>
          <label className="toplab2">Sign In!</label>
        </form>
      </div>

      <div className="auth-form-container2">
        <form className="SignInStyle" onSubmit={handleSubmit}>
          <label className="minlabel" htmlFor="registrationno">
            Registration No:
          </label>
          <input
            value={registrationNo}
            type="text" // Consider a more descriptive type based on requirements
            placeholder="Type Registration no"
            onChange={(e) => setRegistrationNo(e.target.value)}
          />
          <label className="minlabel" htmlFor="password">
            Password:
          </label>
          <input
            value={password}
            type="password"
            placeholder="Type Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="SignInButt" type="submit">
            GET BUYIN!!
          </button>
          {error && <div className="error-message">{typeof error === 'object' ? JSON.stringify(error) : error}</div>} {/* Display error if exists */}
        </form>
      </div>

      <div className="donthaveacc">
        <label className="deletethis">Don't have an account?</label>
        <button className="SignUpButt" onClick={() => props.onFormSwitch("SignUp")}>
          Sign UP!
        </button>
      </div>
    </div>
  );
};





// import React, { useState } from "react";
// import HomeScreen from "./HomeScreen";

// export const SignInScreen = (props) => {
//     const [registrationno, setRegistrationNo] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const [invalidRegistration, setInvalidRegistration] = useState(false);
//     const [invalidPassword, setInvalidPassword] = useState(false);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
        
//         const requestOptions = {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ stud_registration_no: registrationno, stud_password: password }),
//         };

//         try {
//             const response = await fetch("http://localhost:8000/getstudentinfo", requestOptions);
//             const data = await response.json();

//             if (response.ok) {
//                 props.onFormSwitch('HomeScreen');
//             } else if(response.status === 403) {
//                 console.log(data);
//                 if (data === "Invalid password") {
//                     setInvalidPassword(true);
//                     setInvalidRegistration(false);
//                 } else if (data === "Invalid Registration") {
//                     setInvalidRegistration(true);
//                     setInvalidPassword(false);
//                 }

//             } else {
//                 setError(data);
//             }
//         } catch (error) {
//             console.error("Error:", error);
//             setError("An error occurred. Please try again.");
//         }
//     };

//     return (
//         <div>
//             <div className="Topcontainer">
//                 <form className="SignInStyle">
//                     <label className="toplab1" >Welcome to MUBay</label>
//                     <label className="toplab2" >Sign In!</label>
//                 </form>
//             </div>

//             <div className="auth-form-container2">
//                 <form className="SignInStyle" onSubmit={handleSubmit}>
//                     <label className="minlabel" htmlFor="registrationno">Registration No:</label>
//                     <input value={registrationno} type="registrationno" placeholder="Type Registration no" onChange={(e) => setRegistrationNo(e.target.value)}></input>
//                     {invalidRegistration && <div className="error-message">Invalid registration number</div>}
//                     <label className="minlabel" htmlFor="password">Password:</label>
//                     <input value={password} type="password" placeholder="Type Password" onChange={(e) => setPassword(e.target.value)}></input>
//                     {invalidPassword && <div className="error-message">Invalid password</div>}
//                     <button className="SignInButt" type="submit">GET BUYIN!!</button>
//                     {error && <div className="error-message">{error}</div>}
//                 </form>
//             </div>

//             <div className="donthaveacc">
//                 <label className="deletethis">Don't have an account?</label>
//                 <button className="SignUpButt" onClick={() => props.onFormSwitch('SignUp')}>Sign UP!</button>
//             </div>
//         </div>
//     );
// };