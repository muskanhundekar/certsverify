import "../Style/navbar.css";
import { Link } from "react-router-dom";

import React from 'react'

export default function Navbar() {
  return (
    <nav className="nav">
      <ul>
        <h1>
          <Link className="nav-link text-white" to="/">
            Registration Form
          </Link>
        </h1>
      </ul>
      <ul>
        <h1>
          <Link className="nav-link text-white" to="dump">
            Dump Data
          </Link>
        </h1>
      </ul>
    </nav>
  )
}
