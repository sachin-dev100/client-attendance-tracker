import { CreditCard } from "lucide-react";
import {apiHandler} from "../lib/api.js";

export const registration = async (userDetails) => {
  const data = await apiHandler({
    endPoint: "auth/register",
    method: "POST",
    credentials: null,
    bodyContent: userDetails,
    defaultErrMsg: "Registration Failed",
  });
  console.log(data);
  return data;
};

export const login = async (userCredential) => {
  const data = await apiHandler({
    endPoint: "auth/login",
    method: "POST",
    credentials: null,
    bodyContent: userCredential,
    defaultErrMsg: "Login Failed",
  });

  return data;
};

export const emailValidation = async (emailDetails) => {
  const isEmailValid = await apiHandler({
    endPoint: 'auth/email-validator',
    method: "POST",
    credentials: null,
    bodyContent: emailDetails,
    defaultErrMsg: "Email is Not Valid"
  })
  console.log(isEmailValid)
  return isEmailValid
}

export const setNewPassword = async(updatedPassword) => {
  const getUpdatedDetails = await apiHandler({
    endPoint: 'auth/password-recovery',
    method: "PUT",
    credentials: null,
    bodyContent: updatedPassword,
    defaultErrMsg: "Password Not updated"
  })
  return getUpdatedDetails
}

export const loggingWithGoogle = () => {
  window.location.href = "http://localhost:3000/api/v1/auth/google";
};
