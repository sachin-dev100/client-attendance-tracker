import {useEffect} from "react";

import {useNavigate} from "react-router-dom";
import Cookies from "js-cookie";

import LoginForm from "@/features/auth/LoginForm";

const Login = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (Cookies.get("jwtToken")) {
      console.log("token present...");
      navigate("/");
    }
  }, []);

  return (
    <main className = "md:w-130 md:m-auto">
      <header className="pt-7 pb-7">
        <h1 className="font-heading font-bold mb-3 text-heading text-2xl md:text-3xl text-center">
          <span className="text-primary">Login</span> Here
        </h1>
        <p className="font-text text-lg md:text-xl text-text text-center">
          Welcome back you've been missed!
        </p>
      </header>
      <LoginForm />
    </main>
  );
};

export default Login;
