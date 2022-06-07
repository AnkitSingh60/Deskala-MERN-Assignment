import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar"

const Login = () => {
  return (
      <>
      <Navbar />
    <div className="mainContainer">
      <div className="box1">
        <h4 className="h2Heading">Login</h4>
        <div className="loginForm">
          <form>
          <div className="form-group col-md-3">
      <label for="inputEmail4">Name</label>
      <input type="name" className=" inputbox form-control" id="inputEmail4" placeholder="enter your name"/>
    </div>

    <div className="form-group col-md-3">
      <label for="inputEmail4">Password</label>
      <input type="name" className=" inputbox form-control" id="inputEmail4" placeholder="enter your name"/>
    </div>
            <p className="passTC">Minimum 8 Alpha numeric</p>

            <button className="Loginbutton" type="submit">
              Login
            </button>
          </form>
         
        </div>
      </div>
    </div>
      </>
  );
};

export default Login;
