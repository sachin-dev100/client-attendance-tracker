import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {registration} from "@/services/auth.service";

export const useRegister = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [gender, setGender] = useState("male");
  const [branch, setBranch] = useState("computer science");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [actionError, setActionError] = useState(null);
  const actionStatus = {
    isSubmitting,
    actionError,
  };

  const navigate = useNavigate();

  const onChangeName = (event) => {
    setFullName(event.target.value);
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onChangeConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  // Shacn Radio Component Direct pass value not event
  const onChangeGender = (value) => {
    setGender(value);
  };

  // Shacn Select Component Direct pass value not event
  const onChangeBranch = (value) => {
    setBranch(value);
  };

  const onSubmit = async () => {
    setIsSubmitting(true);
    setActionError(null);

    const userDetails = {
      fullName,
      email,
      password,
      confirmPassword,
      gender,
      branch,
    };
    try {
      await registration(userDetails);
      navigate("/login");
    } catch (error) {
      setActionError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    actionStatus,
    fullName,
    email,
    password,
    confirmPassword,
    gender,
    branch,
    onChangeName,
    onChangeEmail,
    onChangePassword,
    onChangeConfirmPassword,
    onChangeGender,
    onChangeBranch,
    onSubmit,
  };
};
