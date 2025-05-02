import React from "react";
import { Button as TButton } from "tamagui";

export default function Button({ btnName }) {
  return (
    <TButton
      width="19rem"
      height="3rem"
      backgroundColor="$blue10"
      color="white"
      fontWeight="600"
      borderRadius={8}
    >
      {btnName}
    </TButton>
  );
}
