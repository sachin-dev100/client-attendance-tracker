import {useNavigate} from "react-router-dom";

import {useRegister} from "./useRegister.js";

import {Input} from "@/components/ui/shadcn/input";
import {RadioGroup, RadioGroupItem} from "@/components/ui/shadcn/radio-group";
import {Button} from "@/components/ui/shadcn/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/shadcn/select";
import {Label} from "@/components/ui/shadcn/label";

const RegisterForm = () => {
  const {
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
  } = useRegister();

  const navigate = useNavigate();

  const {isSubmitting, actionError} = actionStatus;

  return (
    <>
      <div className="flex flex-col gap-6 mt-3">
        {/* Full Name Input */}
        <Input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={onChangeName}
        />
        {/* Email Input */}
        <Input
          type="text"
          placeholder="Email"
          value={email}
          onChange={onChangeEmail}
        />
        {/* password Input */}
        <Input
          type="password"
          placeholder="password"
          value={password}
          onChange={onChangePassword}
        />
        {/* confirm Password Input */}
        <Input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={onChangeConfirmPassword}
        />
        {/* Gender Input  */}
        {/* In Shadc Radio Radix UI component use onValueChange instead of using onChange */}
        <RadioGroup
          value={gender}
          onValueChange={onChangeGender}
          className="flex gap-3 items-center">
          <div className="flex items-center gap-3">
            <RadioGroupItem value="male" id="male" />
            <Label htmlFor="male">Male</Label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="female" id="female" />
            <Label htmlFor="female">Female</Label>
          </div>
        </RadioGroup>

        {/* department input */}
        {/* In Shadc Select Radix UI component use onValueChange instead of using onChange */}
        <Select value={branch} onValueChange={onChangeBranch}>
          <SelectTrigger className="w-full max-w-90">
            <SelectValue placeholder="Select Branch" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectItem value="AI">
              Artifical & Data Enginnering
            </SelectItem>
            <SelectItem value="computer">Computer Science Enginnering</SelectItem>
            <SelectItem value="electronics">Electronics & Communication Enginnering</SelectItem>
            <SelectItem value="electrical">Electrical Enginnering</SelectItem>
            <SelectItem value="mechanical">Mechanical Enginnering</SelectItem>
            <SelectItem value="chemical">Chemical Enginnering</SelectItem>
            <SelectItem value="civil">Civil Enginnering</SelectItem>
            <SelectItem value="meta">Metallugical & Material Enginnering</SelectItem>
          </SelectContent>
        </Select>
        <Button
          className="w-full block m-auto h-12 shadow text-secondary text-base font-bold"
          onClick={onSubmit}
          disabled={isSubmitting}>
          {isSubmitting ? "Signing up..." : "Sign up"}
        </Button>
      </div>
      <Button
        variant="ghost"
        className="w-full mt-2 mb-7 font-text text-lg text-success"
        onClick={() => navigate("/login")}>
        Already have an account
      </Button>
    </>
  );
};

export default RegisterForm;
