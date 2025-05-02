import { createTamagui } from "tamagui";
import { config } from "@tamagui/config";

const tamaguiConfig = createTamagui({
  ...config,
  theme: {
    light: {
      background: "#FFFFFF",
      gray7: "#B0B0B0",
      primary: "#4f46e5",
      color: "#000000",
    },
    dark: {
      background: "#333333",
      gray7: "#888888",
      background: "#1a1a1a",
      gray7: "#888888",
      primary: "#22d3ee",
      color: "#ffffff",
    },
    blue: {
      background: "#e0f2ff",
      gray7: "#60a5fa",
      primary: "#3b82f6",
      color: "#1e3a8a",
    },
  },
});

export default tamaguiConfig;
