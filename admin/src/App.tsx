import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./Component/Navbar";
import RegistrationForm from "./Component/RegistrationForm";
import { useEffect, useState } from "react";
import LoginForm from "./Component/LoginForm";
import getCookie from "./utils/Functions/getCookie";
import DumpData from "./Component/DumpData";
import AllCertificates from "./Component/AllCertificates";
import ProtectedRoute from "./Component/ProtectedRoute";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    const varify = getCookie("verified");
    if (varify === 1) {
      setIsLogin(true);
    }
  }, []);
  return (
    <div className="App container">
      <>
        {isLogin ? (
          <>
            <Navbar />
            <ToastContainer autoClose={2000} />
            <Routes>
              <Route
                path="/"
                element={
                  <ProtectedRoute isLogin={isLogin}>
                    <RegistrationForm />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/dump"
                element={
                  <ProtectedRoute isLogin={isLogin}>
                    <DumpData />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/certificates/:csv_id"
                element={
                  <ProtectedRoute isLogin={isLogin}>
                    <AllCertificates />
                  </ProtectedRoute>
                }
              />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </>
        ) : (
          <div>
            <Routes>
              <Route
                path="/login"
                element={
                  <LoginForm isLogin={isLogin} setIsLogin={setIsLogin} />
                }
              />
              <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
          </div>
        )}
      </>
    </div>
  );
}

export default App;
