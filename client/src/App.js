import React from "react";
import "./App.css";
import Certificate from "./GeneralCert/Certificate";
import AdminLogin from "./admin/admin";
import Dashboard from "./admin/dashboard";
import DumpData from "./component/DumpData";
import RegistrationForm from "./component/RegistrationForm";
import AllCertificate from "./component/AllCertificates";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Verify from "./Verify";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Verify />} />
        <Route path="/cert" element={<Certificate />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/registration" element={<RegistrationForm />} />
        <Route path="/admin/dumpdata" element={<DumpData />} />
        <Route path="/admin/certificates/:csv_id" element={<AllCertificate />}></Route>
      </Routes>
    </Router>
  );
}
