import {useState} from "react";
import {useNavigate} from "react-router-dom";
import Cookies from "js-cookie";

import {login, loggingWithGoogle} from "../../../services/auth.service";

export const useLogin = () => {
  // state variables
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // action api call
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [actionError, setActionError] = useState(null);
  const actionStatus = {
    isSubmitting,
    actionError,
  };

  const navigate = useNavigate();

  // user Handler
  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onLogin = async () => {
    setIsSubmitting(true);
    setActionError(null);
    const userCredential = {email, password}; // set user credientials for login
    try {
      const {jwt} = await login(userCredential); // get jwtToken
      Cookies.set("jwtToken", jwt); // store jwt token inside browser cookies
      // navigate to home page
      navigate("/");
    } catch (error) {
      // update failure api state
      setActionError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const loginWithGoogle = async () => {
    setIsSubmitting(true);
    setActionError(null);
    try {
      const data = await loggingWithGoogle();
      console.log(data);
    } catch (error) {
      setActionError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    actionStatus,
    email,
    password,
    onChangeEmail,
    onChangePassword,
    onLogin,
    loginWithGoogle,
  };
};
