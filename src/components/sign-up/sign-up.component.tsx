import React, { useState, ChangeEvent, FormEvent } from "react";
import { useDispatch } from "react-redux";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import { SignUpContainer } from "./sign-up.styles";
import { signUpStart } from "../../store/user/user.action";

const SignUp = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = formData;
    if (password !== confirmPassword) {
      alert("password don't match");
      return;
    }

    try {
      dispatch(signUpStart(email, password, displayName));

      setFormData({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SignUpContainer>
      <h2 className="title">I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={formData.displayName}
          onChange={onChange}
          label="Display Name"
          required
        />
        <FormInput
          type="text"
          name="email"
          value={formData.email}
          onChange={onChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={formData.password}
          onChange={onChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={onChange}
          label="Confirm Password"
          required
        />
        <Button type="submit">SIGN UP</Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUp;
