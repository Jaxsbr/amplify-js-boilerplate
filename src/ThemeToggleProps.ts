import { ColorMode } from "@aws-amplify/ui-react";

export type ThemeToggleProps = {
  colorMode?: string;
  setColorMode: (colorMode: ColorMode | undefined) => void;
};
