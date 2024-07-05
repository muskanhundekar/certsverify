import React, { useState } from 'react';
import LoginApi from "../Api/Login.api.js";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";
import _default from "../utils/Config/default.js";
import "./LoginFrom.css";

export default function LoginForm() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    username: "",
    password: ""
  })

  const [isLogin, setIsLogin] = useState(false)

  const loginHandler = async (e) => {
    e.preventDefault()
    console.log(loginData)
    try {
      const res = await LoginApi.login(loginData);
      if (res.status === 200) {
        console.log("hi");
        document.cookie = "verified=1;";
        setIsLogin(true);

        navigate("/admin/dashboard");
      } else {
        toast("Email id and password is wrong", {
          type: "error",
          theme: "dark",
        });
      }
    } catch (error) {
      toast("Somethig went wrong", {
        type: "error",
      });
    }
  }

  return (
    <form className="container mt-5">
      <div className="form-outline mb-4">
        <label className="form-label" htmlFor="username">
          Username
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          name="username"
          value={loginData.username}
          onChange={(e) => {
            setLoginData({ ...loginData, username: e.target.value })
          }}
        />
      </div>

      <div className="form-outline mb-4">
        <label className="form-label" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          value={loginData.password}
          onChange={(e) => {
            setLoginData({ ...loginData, password: e.target.value })
          }}
        />
      </div>

      <button type="submit" onClick={(e) => loginHandler(e)} className="btn btn-primary btn-block mb-4">
        Sign in
      </button>
    </form>
  );
}

