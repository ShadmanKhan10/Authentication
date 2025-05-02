import { createTamagui } from "tamagui";
import { config } from "@tamagui/config";

const tamaguiConfig = createTamagui({
  ...config,
  // Define your custom themes here
  theme: {
    light: {
      background: "#FFFFFF",
      gray7: "#B0B0B0",
      // Customize other colors if necessary
    },
    dark: {
      background: "#333333",
      gray7: "#888888",
      // Customize other colors for dark theme
    },
  },
});

export default tamaguiConfig;
