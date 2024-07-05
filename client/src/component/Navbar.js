import { Link } from "react-router-dom";
import "../Style/navbar.css";
import RegistrationForm from "../component/RegistrationForm";
import DumpData from "../component/DumpData";
import { useState } from 'react';

import React from 'react'

export default function Navbar() {

    const [isComponentVisible, setIsComponentVisible] = useState(false);
  
    const handleLinkClick = () => {
      setIsComponentVisible(true);
    };
  return (
    <nav className="nav">
      <ul>
        <h1>
          <Link className="nav-link text-white" to="/admin/registration">
            Registration Form
          </Link>
        </h1>
      </ul>
      <ul>
        <h1>
          <Link className="nav-link text-white" to="/admin/dumpdata">
            Dump Data
          </Link>
        </h1>
      </ul>
    </nav>
  )
}
