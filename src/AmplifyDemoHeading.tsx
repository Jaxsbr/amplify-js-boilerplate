import { Card, Heading, useTheme } from "@aws-amplify/ui-react";
import { FunctionComponent } from "react";

const AmplifyDemoHeading: FunctionComponent = () => {
  const { tokens } = useTheme();

  return (
    <Card textAlign="center" backgroundColor={tokens.colors.brand.primary[20]}>
      <Heading level={2}>Welcome to Amplify</Heading>
    </Card>
  );
};

export default AmplifyDemoHeading;
