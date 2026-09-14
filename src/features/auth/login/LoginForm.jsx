import {useNavigate} from "react-router-dom";

import {useLogin} from "./useLogin.js";
import {Input} from "@/components/ui/shadcn/input";
import {Button} from "@/components/ui/shadcn/button";

const LoginForm = () => {
  const {
    actionStatus,
    email,
    password,
    onChangeEmail,
    onChangePassword,
    onLogin,
    loginWithGoogle,
  } = useLogin();

  const navigate = useNavigate();

  const {isSubmitting, actionError} = actionStatus;

  return (
    <>
      <div className="flex flex-col gap-6">
        <Input
          type="text"
          value={email}
          onChange={onChangeEmail}
          placeholder="Email"
        />
        <Input
          type="password"
          value={password}
          onChange={onChangePassword}
          placeholder="Password"
        />
      </div>
      <div className="text-right mb-4">
        <Button variant="ghost" className="text-destructive font-base">
          Forget Your password ?
        </Button>
      </div>
      <Button
        className="w-full block mx-auto h-12 shadow text-secondary text-base font-bold"
        onClick={onLogin}
        disabled={isSubmitting}>
        {isSubmitting ? "Signing in..." : "Sign in"}
      </Button>
      {/* <Button size="lg" className="h-12 mt-4" onClick={loginWithGoogle}>
        Login With Google
      </Button> */}

      {actionError && (
        <p className="text-danger text-sm text-right mt-1">
          username and password is invalid
        </p>
      )}
      <Button
        variant="ghost"
        className="w-full mt-6 font-text text-lg text-success"
        onClick={() => navigate("/register")}>
        Create New Account
      </Button>
    </>
  );
};

export default LoginForm;
