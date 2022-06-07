import React from "react";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <h1 className="App">Welcome</h1>
      <h3 className="h3">Please Login/Signup to continue</h3>

      <div className="homeTable">
        <table className="table">
          <thead>
            <tr className="table-dark">
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">DOB</th>
              <th scope="col">Email</th>
              <th scope="col">Result</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Ankit</td>
              <td>17/06/1997</td>
              <td>ankitanwar730@gmail.com</td>
              <td className="d-flex justify-content-between">
                <button>
                  <i className="bi bi-pen"></i>
                </button>
                <button>delete </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
