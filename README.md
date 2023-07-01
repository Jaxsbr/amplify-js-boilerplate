# Amplify React Typescript Boilerplate

After practicing the [Amplify tutorial](https://docs.amplify.aws/start/getting-started/setup/q/integration/js/#initialize-a-new-backend) a couple of times I realized I could reduce the initial creation steps by extracting a simple boilerplate project.

Also, the tutorial uses JavaScript React (JSX) which is not my preference and configuring TypeScript is burdensome when I just what to do the tutorial in TS.

The boilerplate:
- Creates a Typescript enabled React starting project for the Tutorial.
- Provides the default HTML for the tutorial converted into the a React `App` component.
- Allows us to effectivly skip the `Set up fullstack project` step in the tutorial.

![](/readme-content/tutorial-step.png)

## Prerequisites

- Node.js, npm, git
- AWS Account
- Install [Amplify CLI](https://docs.amplify.aws/cli/start/install/)
  - `npm install -g @aws-amplify/cli`
- Fork or clone the repo

## AWS IAM user and profile setup for Amplify

Run the following command:
```bash
amplify configure
```

This will guide you in doing the following:
- Login to the AWS console
- Specify region in the terminal
- Provide an amplify IAM user. e.g. `amplify-dev`
- Attach policies directly: `AdministratorAccess-Amplify`
- Add an access key: `Command Line Interface (CLI)`
- Specify the `Access key` and `Secret access key` in the terminal
- Specify an AWS profile name. e.g. `amplify-dev`

## Create Amplify App

Run the following commnd to create your Amplify App:
```bash
amplify init
```

- Specify details about your project. e.g. project-name
- Specify the AWS profile as per [section above](#aws-iam-user-profile-setup-for-amplify). e.g. `amplify-dev`

Removal can be done easily if needed:
```bash
amplify remove
```

Once your app is initialized you can confirm it's existence in AWS Amplify Console.  
```bash
amplify console
```

![amplify app screenshot](/readme-content/amplify-app.png)

## Launch new boilerplate App

All the basicd should now be in place and we can test our App.

```bash
npm install
npm start
```
![boilerplate app](/readme-content/boilerplate-app.png)

## Warning: Generated Amplify Content

We've now generated some content that you **Don't** want to commit publicly.
The `.gitignore file` would have been modified by `amplify init`, however I still found some information about IAM role ARN's being included.

Ensure your .gitignore rules are setup correctly!  
e.g. `amplify/`

## Conclusion

You have a Amplify app configured to use Typescript along with the first React component. You can now skip ahead to the tutorial step: [Connect API and database to the app](https://docs.amplify.aws/start/getting-started/data-model/q/integration/react/)
