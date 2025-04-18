import { useContext } from "react";
import {  NavLink } from "react-router-dom";
import { UserContext } from "../services/UserContext";

export default function Navbar() {
  let {logout} = useContext(UserContext)
  return (
    <header className="nav">
      
        <h3><NavLink to="/">Home</NavLink></h3>
        <h3><NavLink to="/profile">Profile</NavLink></h3>
        <h3><NavLink to="/cv">My CV</NavLink></h3>
        <h3 onClick={logout}>Logout</h3>
    </header>
  )
}
