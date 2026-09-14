import {useState, useEffect} from "react";
import {Routes, Route} from "react-router-dom";

// Layout Import
import Layout from "./components/layout/Layout";

import ProtectedRoute from "./utils/ProtectedRoute";

// Pages Import
import Login from "./pages/Auth/login";
import Register from "./pages/Auth/register";
import Home from "./pages/Home/Home";
import SubjectStatus from "./pages/SubjectStatus/SubjectStatus";
import {Input} from "./components/ui/shadcn/input";
import ProgressCircle from "./components/ui/shadcn/ProgressCircle";
import DeleteAlertDialog from "./components/ui/custom/DeleteAlertDialog";

import "./App.css";

const isComponentCheck = false;

function App() {
  return (
    <>
      {isComponentCheck && (
        <DeleteAlertDialog>
          <button> Open It</button>
          <span> Confirm delete the subject </span>
        </DeleteAlertDialog>
      )}
      {!isComponentCheck && (
        <Routes>
          <Route element={<Layout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<Home />} />
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
