import LoginApi from "../Api/Login.api";
import { useNavigate } from "react-router-dom";
import "../Style/login.css";
import { useEffect } from "react";
import { toast } from "react-toastify";

type props = {
  setIsLogin: Function;
  isLogin: boolean;
};

function LoginForm({ setIsLogin, isLogin }: props): JSX.Element {
  const navigate = useNavigate();

  const loginHandler = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    try {
      const res = await LoginApi.login(data);
      if (res.status === 200) {
        console.log("hi");
        document.cookie = "verified=1;";
        setIsLogin(true);

        navigate("/");
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
  };
  return (
    <form onSubmit={loginHandler} className="container mt-5">
      <div className="form-outline mb-4">
        <label className="form-label" htmlFor="username">
          Username
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          name="username"
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
        />
      </div>

      <button type="submit" className="btn btn-primary btn-block mb-4">
        Sign in
      </button>
    </form>
  );
}
export default LoginForm;
