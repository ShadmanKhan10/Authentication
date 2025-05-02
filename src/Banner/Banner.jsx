import React from "react";

export default function Banner({ imgSrc }) {
  return (
    <img
      src={imgSrc}
      alt="icon"
      style={{
        width: "17rem",
        height: "17rem",
        objectFit: "contain",
        position: "relative",
        left: "50%",
        transform: "translateX(-50%)",
        mixBlendMode: "multiply",
      }}
    />
  );
}
