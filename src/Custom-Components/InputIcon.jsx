import { View } from "tamagui";
import React from "react";

export default function InputIcon({
  iconSrc,
  onClick,
  isClickable = false,
  positionRight = false,
}) {
  return (
    <View
      width="3rem"
      height="100%"
      position="absolute"
      top={0}
      {...(positionRight ? { right: 0 } : { left: 0 })}
      display="flex"
      justifyContent="center"
      alignItems="center"
      cursor={isClickable ? "pointer" : "default"}
      onClick={isClickable ? onClick : undefined}
    >
      <img
        src={iconSrc}
        alt="icon"
        style={{
          width: "1.5rem",
          height: "1.5rem",
          objectFit: "contain",
          pointerEvents: "none",
        }}
      />
    </View>
  );
}
