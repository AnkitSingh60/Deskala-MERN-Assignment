import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Register = () => {
  return (
      <>
      <Navbar/>
    <div className="mainContainer">
      <div className="box1">
        <h4 className="h2Heading">Sign Up</h4>
        <div className="loginForm">
          <form>
          <div className="form-group col-md-3">
      <label for="inputEmail4">Email</label>
      <input type="name" className=" inputbox form-control" id="inputEmail4" placeholder="enter your name"/>
    </div>
    <div className="form-group col-md-3">
      <label for="inputEmail4">Phone</label>
      <input type="name" className=" inputbox form-control" id="inputEmail4" placeholder="enter your phone number"/>
    </div>

    <div className="form-group col-md-3">
      <label for="inputEmail4">Password</label>
      <input type="name" className=" inputbox form-control" id="inputEmail4" placeholder="enter your password"/>
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
  )
}

export default Register