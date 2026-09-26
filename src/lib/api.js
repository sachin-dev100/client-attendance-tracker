import Cookies from "js-cookie";
const BASE_URL = import.meta.env.VITE_SERVER_URL

export const apiHandler = async (apiConfig) => {
  const {
    endPoint,
    method,
    credentials = "include",
    bodyContent = null,
    defaultErrMsg,
  } = apiConfig;
  const apiUrl = `${BASE_URL}/${endPoint}`;
  // Get jwtToken while all Api Call
  const jwtToken = Cookies.get("jwtToken");

  // header include credential or not
  const headers = {
    "Content-Type": "application/json",
    ...(credentials === "include" ? { Authorization: `Bearer ${jwtToken}` } : {})
  }

  // is body is exist inside request
  const body =
    method === "GET" || method === "DELETE"
      ? null
      : JSON.stringify(bodyContent)

  const options = {
    method,
    headers,
    body
  };

  const response = await fetch(apiUrl, options);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || defaultErrMsg);
  }
  console.log(data);
  return data;
};
