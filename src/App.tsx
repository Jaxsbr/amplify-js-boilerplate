import {
  Card,
  ColorMode,
  Grid,
  ThemeProvider,
  View,
  defaultDarkModeOverride,
  useTheme,
} from "@aws-amplify/ui-react";
import AmplifyDemo from "./AmplifyDemo";
import "@aws-amplify/ui-react/styles.css";
import React, { useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import AmplifyDemoHeading from "./AmplifyDemoHeading";

function App() {
  const [colorMode, setColorMode] = React.useState<ColorMode | undefined>(
    "system"
  );
  const theme = {
    name: "my-theme",
    overrides: [defaultDarkModeOverride],
  };
  const { tokens } = useTheme();

  const changeThemeColor = (colorMode: ColorMode | undefined) => {
    setColorMode(colorMode);
  };

  const fillWindow = () => {
    const mainView = document.getElementById("main-view");
    if (mainView) {
      mainView.style.width = `${window.innerWidth}px`;
      mainView.style.height = `${window.innerHeight}px`;
    }
  };

  useEffect(() => {
    window.addEventListener('resize', fillWindow);
    fillWindow();
    return () => {
      window.removeEventListener('resize', fillWindow);
    };
  }, [colorMode]);

  return (
    <ThemeProvider theme={theme} colorMode={colorMode}>
      <View id="main-view" backgroundColor={tokens.colors.background.primary}>
        <Grid
          padding={tokens.space.zero}
          margin={tokens.space.zero}
          columnGap="0.5rem"
          rowGap="0.5rem"
          templateColumns="1fr 1fr 1fr"
          templateRows="1fr 3fr 1fr"
        >
          <Card
            columnStart="1"
            columnEnd="-1"
          >
            <AmplifyDemoHeading />
          </Card>
          <Card
            columnStart="1"
            columnEnd="-1"
          >
            <AmplifyDemo />
          </Card>
          <Card
            columnStart="1"
            columnEnd="-1"
          >
            <ThemeToggle colorMode={colorMode} setColorMode={changeThemeColor} />
          </Card>
        </Grid>
        
        
        
      </View>
    </ThemeProvider>
  );
}

export default App;
