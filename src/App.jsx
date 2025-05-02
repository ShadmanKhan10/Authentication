import React from "react";
import { TamaguiProvider, Theme } from "tamagui";
import config from "../tamagui.config";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";

function App() {
  return (
    <TamaguiProvider config={config}>
      <Theme name="light">
        {/* You can switch between light or dark theme */}
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </Theme>
    </TamaguiProvider>
  );
}

export default App;
