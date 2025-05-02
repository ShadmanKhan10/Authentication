import React, { useState } from "react";
import Input from "../Custom-Components/Input";
import { useNavigate } from "react-router-dom";
import { View, Text } from "tamagui";
import mailIcon from "../assets/email.png";
import passIcon from "../assets/password.png";
import show from "../assets/show.png";
import loginBanner from "../assets/login-banner.jpg";
import Banner from "../Banner/Banner";
import InputWrapper from "../Custom-Components/InputWrapper";
import InputIcon from "../Custom-Components/InputIcon";
import Button from "../Custom-Components/Button";
import LinkText from "../Custom-Components/LinkText";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [activePass, setActivePass] = useState("password");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email is ${email} and password is ${password}`);
  };
  const toggleShowPassword = () => {
    console.log("clicked");
    setActivePass((prev) => (prev === "password" ? "text" : "password"));
  };

  const handleNavigation = () => {
    navigate("/signup");
  };
  return (
    <>
      <Banner imgSrc={loginBanner} />
      <form onSubmit={handleSubmit}>
        <View
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap="1rem"
        >
          <InputWrapper>
            <InputIcon iconSrc={mailIcon} />
            <Input
              placeHolder="Email"
              inputType="email"
              inputVal={setEmail}
              value={email}
            />
          </InputWrapper>

          <InputWrapper>
            <InputIcon iconSrc={passIcon} />
            <Input
              placeHolder="Password"
              inputType={activePass}
              inputVal={setPassword}
              value={password}
            />
            <InputIcon
              positionRight
              iconSrc={show}
              onClick={toggleShowPassword}
              isClickable
            />
          </InputWrapper>

          <Button btnName="Login" />

          <LinkText
            startWord="Don't"
            displayLinkWord="Register"
            onClick={handleNavigation}
          />
        </View>
      </form>
    </>
  );
}
