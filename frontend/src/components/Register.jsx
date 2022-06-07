import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Register = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitHandler = async(e) => {
    e.preventDefault();
    // console.log("Hey kiddo");
    
    let result = await fetch("http://localhost:5000/register",{
      method: "POST",
      body: JSON.stringify({email, phone, password}),
      headers: {
                     "Content-type": "application/json",
               }
    })
    result = await result.json()
    console.log('result:', result)
    
    localStorage.setItem("user", JSON.stringify(result))

    alert("Signup successfully")
    navigate("/login")
    
  
}

  return (
    <>
      <Navbar />
      <div className="mainContainer">
        <div className="box1">
          <h4 className="h2Heading">Sign Up</h4>
          <div className="loginForm">
            <form onSubmit={submitHandler}>
              <div className="form-group col-md-3">
                <label for="inputEmail4">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className=" inputbox form-control"
                  placeholder="enter your name"
                />
              </div>
              <div className="form-group col-md-3">
                <label for="inputEmail4">Phone</label>
                <input
                   type="phone"
                   value={phone}
                   onChange={(e) => setPhone(e.target.value)}
                  className=" inputbox form-control"
                  placeholder="enter your phone number"
                />
              </div>

              <div className="form-group col-md-3">
                <label for="inputEmail4">Password</label>
                <input
                   type="password"
                   value={password}
                   onChange={(e) => setPassword(e.target.value)}
                  className=" inputbox form-control"
                  placeholder="enter your password"
                />
              </div>
              <label className="passTC">Minimum 8 Alpha numeric</label>

              <button className="Loginbutton" type="submit">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
