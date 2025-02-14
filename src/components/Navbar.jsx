import {  NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="nav">
      
        <h3><NavLink to="/">Home</NavLink></h3>
        <h3><NavLink to="/profile">Profile</NavLink></h3>
        <h3><NavLink to="/cv">My CV</NavLink></h3>
        <h3><NavLink to="/logout">Logout</NavLink></h3>
    </header>
  )
}
