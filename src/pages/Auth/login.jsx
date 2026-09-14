import {useEffect} from "react";

import {useNavigate} from "react-router-dom";
import Cookies from "js-cookie";

import LoginForm from "@/features/auth/login/LoginForm";

const Login = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (Cookies.get("jwtToken")) {
      console.log("token present...");
      navigate("/");
    }
  }, []);

  return (
    <>
      <header className="pt-7 pb-7">
        <h1 className="font-heading font-bold mb-3 text-heading text-2xl text-center">
          <span className="text-primary">Login</span> Here
        </h1>
        <p className="font-text text-lg text-text text-center">
          Welcome back you've been missed!
        </p>
      </header>
      <LoginForm />
    </>
  );
};

export default Login;
