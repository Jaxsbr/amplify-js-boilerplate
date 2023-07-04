import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";
import {
  Button,
  Card,
  Divider,
  Heading,
  View,
  useTheme,
} from "@aws-amplify/ui-react";
Amplify.configure(awsExports);

const AmplifyDemo = () => {
  const { tokens } = useTheme();

  return (
    <View padding={tokens.space.zero}>
      <Card textAlign="center">
        <Heading level={3} fontWeight="thin">
          Mutation Results
        </Heading>
        <Button marginTop={25} size="small">
          Add Data
        </Button>
        <div id="MutationResult"></div>
        <Divider marginTop={25} orientation="horizontal" />

        <Heading margin={25} level={3} fontWeight="thin">
          Query Results
        </Heading>
        <div id="QueryResult"></div>
        <Divider marginTop={25} orientation="horizontal" />

        <Heading margin={25} level={3} fontWeight="thin">
          Subscription Results
        </Heading>
        <div id="SubscriptionResult"></div>
      </Card>
    </View>
  );
};

export default AmplifyDemo;
