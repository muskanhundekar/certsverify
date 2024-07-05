import "./admin.css";
import React, { useState, UseEffect, useEffect } from 'react';
import DumpData from "../component/DumpData";
import RegistrationForm from "../component/RegistrationForm";
import Navbar from "../component/Navbar";
import { Route, Routes, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



export const AdminLogin = (props) => {
    return (
        <div className="container">
            <Navbar />
        </div>
    );
}
export default AdminLogin;
