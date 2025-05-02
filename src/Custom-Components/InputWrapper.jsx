import { View } from "tamagui";
import React from "react";

export default function InputWrapper({ children }) {
  return (
    <View
      width="19rem"
      height={56}
      borderWidth={1}
      borderColor="$black"
      position="relative"
      display="flex"
      alignItems="center"
      paddingLeft="2rem"
      borderRadius={12}
    >
      {children}
    </View>
  );
}
