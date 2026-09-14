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

export const loggingWithGoogle = () => {
  window.location.href = "http://localhost:3000/api/v1/auth/google";
};
