import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

// Layout Import
import Layout from "./components/layout/Layout";

import ProtectedRoute from "./utils/ProtectedRoute";

// Pages Import
import Login from "./pages/Auth/login";
import Register from "./pages/Auth/register";
import Home from "./pages/Home/Home";
import SubjectStatus from "./pages/SubjectStatus/SubjectStatus";
import { Input } from "./components/ui/shadcn/input";
import ProgressCircle from "./components/ui/shadcn/ProgressCircle";
import DeleteAlertDialog from "./components/ui/custom/DeleteAlertDialog";

import "./App.css";
import EmailValidation from "./pages/EmailValidation";
import PasswordRecovery from "./pages/PasswordRecovery";
import Profile from "./pages/Profile/Profile";

const isComponentCheck = false;

function App() {
  const [count, setCount] = useState(0)
  const onChangeCount = (event) => {
    setCount(event.target.value)
  }
  return (
    <>
      {isComponentCheck && (
        <>
          <input value={count} onChange={onChangeCount} />
          <h1> {count} </h1>
        </>
      )}
      {!isComponentCheck && (
        <Routes>
          <Route element={<Layout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/email-validator" element={<EmailValidation />} />
            <Route path="/password-recovery" element={<PasswordRecovery />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route
                path="/subject-status/:subjectId"
                element={<SubjectStatus />}
              />
            </Route>
          </Route>
        </Routes>
      )}
    </>
  );
}

{
  /* <Route
            path="/subject-status/:subjectId"
            element={<SubjectStatus />}
          /> */
}

export default App;
