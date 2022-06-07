import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "../src/components/Home";
import Register from "./components/Register";
import Login from './components/Login';
import AddCandidate from './components/AddCandidate';

function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/login" element={ <Login />} />
        <Route path="/register" element={ <Register />} />
        <Route path="/addcandidate" element={ <AddCandidate />} />
      </Routes>
    </>
  );
}

export default App;
