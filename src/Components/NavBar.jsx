import React from 'react'
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navbar">
        <h5>Logo</h5>
        <ul className="navGuys">
            <Link to="/home"> <li className="nav-item">home</li> </Link>
            <Link to="/about"> <li className="nav-item">About</li> </Link>
            {/* <li className="nav-item">about</li> */}
        </ul>
    </div>
  )
}
