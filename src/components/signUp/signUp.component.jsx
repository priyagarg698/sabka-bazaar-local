import React, { useState } from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../FormInput/FormInput.component";
import "./signUp.styles.scss";

const SignUp = () => {
  const [userCredentials, setCredentials] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confimPassword: ""
  });
  const [inputError, setInputError] = useState({
    email: "",
    password: "",
  });

  const {firstName, lastName, email, password, confimPassword } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(password !== confimPassword){
        return alert("Password do not match");
    }
    alert("Sign In successfull");
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
    debugger;
    if (event.target.name === "email") {
      const emailPattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;

      if (!emailPattern.test(event.target.value)) {
        const emailError = "Please add valid email pattern wich includes @";
        setInputError({ ...inputError, [name]: emailError });
      } else {
        setInputError({ ...inputError, [name]: "" });
      }
    }

    if (event.target.name === "password") {
      const passworPattern = /(?=^.{6,30}$)(?=.*\d)(?=.*[a-zA-Z])(?!.*\s)/;

      if (!passworPattern.test(event.target.value)) {
        const passwordError =
          "Please add valid Password (min-length 6, atleast 1 alpha numeric and no space)";
        setInputError({ ...inputError, [name]: passwordError });
      } else {
        setInputError({ ...inputError, [name]: "" });
      }
    }
  };

  return (
    <div className="sign-in">
      <div className="signIn__content">
        <h2 className="title">Login</h2>
        <span>Get access to your Orders, Wishlist and Recommensations</span>
      </div>
      <form onSubmit={handleSubmit} className="signIn__form">
      <FormInput
          name="firstName"
          type="text"
          label="First Name"
          value={firstName}
          handleChange={handleChange}
          required
        />
        <FormInput
          name="lastName"
          type="text"
          label="Last Name"
          value={lastName}
          handleChange={handleChange}
          required
        />
        <FormInput
          name="email"
          type="email"
          label="Email"
          value={email}
          handleChange={handleChange}
          required
          error={inputError.email}
        />
        <FormInput
          name="password"
          type="password"
          label="Password"
          value={password}
          handleChange={handleChange}
          required
          error={inputError.password}
        />
        <FormInput
          name="confirmPassword"
          type="password"
          label="Confirm Password"
          value={password}
          handleChange={handleChange}
          required
        />
        <CustomButton
          type="submit"
          className="buttons"
          disabled={inputError.email || inputError.password}
        >
          Sign In
        </CustomButton>
      </form>
    </div>
  );
};
export default SignUp;
