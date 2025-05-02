import React, { useState } from "react";
import Input from "../Custom-Components/Input";
import InputWrapper from "../Custom-Components/InputWrapper";
import { useNavigate } from "react-router-dom";
import { View } from "tamagui";
import mailIcon from "../assets/email.png";
import nameIcon from "../assets/name.png";
import passIcon from "../assets/password.png";
import show from "../assets/show.png";
import registerBanner from "../assets/register-banner.jpg";
import Banner from "../Banner/Banner";
import InputIcon from "../Custom-Components/InputIcon";
import Button from "../Custom-Components/Button";
import LinkText from "../Custom-Components/LinkText";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [activePass, setActivePass] = useState("password");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      `Name is ${name} Email is ${email} and password is ${password}`
    );
  };

  const toggleShowPassword = () => {
    setActivePass((prev) => (prev === "password" ? "text" : "password"));
  };

  const handleNavigation = () => {
    navigate("/login");
  };
  return (
    <>
      <Banner imgSrc={registerBanner} />
      <form onSubmit={handleSubmit}>
        <View
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap="1rem"
        >
          <InputWrapper>
            <InputIcon iconSrc={nameIcon} />
            <Input
              placeHolder="Name"
              inputType="text"
              inputVal={setName}
              value={name}
            />
          </InputWrapper>

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

          <Button btnName="Sign Up" />

          <LinkText
            startWord="Already"
            displayLinkWord="Login"
            onClick={handleNavigation}
          />
        </View>
      </form>
    </>
  );
}
