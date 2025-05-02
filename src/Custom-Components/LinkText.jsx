import React from "react";
import { Text } from "tamagui";

export default function LinkText({ startWord, displayLinkWord, onClick }) {
  return (
    <Text margin={0} padding={0} fontSize={14} color="$black">
      {`${startWord} have an account? `}
      <Text
        onPress={onClick}
        color="$blue10"
        textDecorationLine="none"
        cursor="pointer"
        fontWeight="600"
      >
        {displayLinkWord}
      </Text>
    </Text>
  );
}
