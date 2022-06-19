import React, { useState } from "react";
import { useDispatch } from "react-redux";

import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../store/user/user.action";

import "./sign-in.style.scss";

const SignIn = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(emailSignInStart(email, password));
      setEmail("");
      setPassword("");
    } catch (error) {
      alert(error.message);
    }
  };

  const signInWithGoogle = async () => {
    dispatch(googleSignInStart());
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          handleChange={(e) => {
            setEmail(e.target.value);
          }}
          label="Email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={(e) => {
            setPassword(e.target.value);
          }}
          label="Password"
          required
        />
        <div className="buttons">
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            onClick={signInWithGoogle}
            buttonType={BUTTON_TYPE_CLASSES.google}
          >
            Sign In With Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
