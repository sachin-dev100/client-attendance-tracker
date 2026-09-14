import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import Cookies from "js-cookie";
import RegisterForm from "@/features/auth/register/RegisterForm";

const Register = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (Cookies.get("jwtToken")) {
      console.log("token present...");
      navigate("/");
    }
  }, []);

  return (
    <>
      <header className="py-5">
        <h1 className="font-heading font-bold mb-2 text-heading text-2xl text-center">
          Create <span className="text-primary">Account</span>
        </h1>
        <p className="font-text text-lg/5 text-text text-center">
          Create an account so you can explore all features
        </p>
      </header>
      <RegisterForm />
    </>
  );
};

export default Register;
