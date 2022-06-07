import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const AddCandidate = () => {
  return (
    <>
      <Navbar/>
   
          <h4 className="headingText">Create Candidate</h4>
      <div className="container">
      <form>
  <div className="form-group col-md-12 left">
    <div className="form-group col-md-3">
      <label for="inputEmail4">Name</label>
      <input type="name" className=" inputbox form-control" id="inputEmail4" placeholder="enter your name"/>
    </div>
    <div className="form-group col-md-3">
      <label for="inputEmail4">DOB</label>
      <input type="name" className=" inputbox form-control" id="inputEmail4" placeholder="enter your Date of Birth"/>
    </div>
    <div className="form-group col-md-3">
      <label for="inputEmail4">Age</label>
      <input type="name" className=" inputbox form-control" id="inputEmail4" placeholder="enter your age"/>
    </div>
   
  </div>
  
  <div className="form-row right">
    <div className="form-group col-md-3">
      <label for="inputCity">Address</label>
      <input type="text" className=" inputbox form-control" id="inputCity"  placeholder="enter your Address" />
    </div>
    <div className="form-group col-md-3">
      <label for="inputCity">State</label>
      <input type="text" className=" inputbox form-control" id="inputCity"  placeholder="enter your state" />
    </div>
   
    <div className="form-group col-md-3">
      <label for="inputZip">Pin Code</label>
      <input type="text" className=" inputbox form-control" id="inputZip"  placeholder="enter your Pin Code" />
    </div>
  </div>
  
<div className="btnDiv">
  <button type="submit" className="btn btn-primary addbtn">Create</button>
</div>
</form>
      </div>
    
    </>
  )
}

export default AddCandidate