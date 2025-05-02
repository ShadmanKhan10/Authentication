import { Input as TamaguiInput } from "tamagui";

export default function Input({ placeHolder, inputType, inputVal, value }) {
  const handleInputChange = (e) => {
    inputVal(e.target.value);
  };

  return (
    <TamaguiInput
      placeholder={placeHolder}
      secureTextEntry={inputType === "password"}
      value={value}
      onChange={handleInputChange}
      width="100%"
      height="100%"
      borderWidth={0}
      borderColor="transparent"
      outlineWidth={0}
      borderRadius={12}
      backgroundColor="transparent"
      shadowColor="transparent"
      focusStyle={{
        outlineWidth: 0,
        borderColor: "transparent",
        shadowColor: "transparent",
        shadowRadius: 0,
        shadowOffset: { width: 0, height: 0 },
      }}
    />
  );
}
