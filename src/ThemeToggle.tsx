import {
  Card,
  ToggleButtonGroup,
  ToggleButton,
  ColorMode,
} from "@aws-amplify/ui-react";
import { FunctionComponent } from "react";
import { ThemeToggleProps } from "./ThemeToggleProps";

const ThemeToggle: FunctionComponent<ThemeToggleProps> = ({
  colorMode,
  setColorMode,
}) => {
  const AsColorMode = (value: any): ColorMode | undefined => {
    if (value === "light" || value === "dark") {
      return value as ColorMode;
    }
    return undefined;
  };

  return (
    <Card>
      <ToggleButtonGroup
        value={colorMode!}
        isExclusive
        onChange={(value) => setColorMode(AsColorMode(value))}
      >
        <ToggleButton value="light">Light</ToggleButton>
        <ToggleButton value="dark">Dark</ToggleButton>
      </ToggleButtonGroup>
    </Card>
  );
};

export default ThemeToggle;
