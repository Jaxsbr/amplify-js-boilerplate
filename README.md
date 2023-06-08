# Amplify React Typescript Boilerplate

After doing the [Amplify tutorial](https://docs.amplify.aws/start/getting-started/setup/q/integration/js/#initialize-a-new-backend) a couple of times I realized I could reduce the initial creation steps by extracting a simple boilerplate project.

After forking/cloning the repo, follow the steps below to get started:

## Prerequisites

- Node.js, npm, git
- AWS Account
- Install [Amplify CLI](https://docs.amplify.aws/cli/start/install/)
  - `npm install -g @aws-amplify/cli`

## AWS IAM user and profile setup for Amplify

Run the following command:
```bash
amplify configure
```

Thjs will guide you to do the following:
- Login to the AWS console
- Specify region in the terminal
- Provide an amplify IAM user. e.g. `amplify-dev`
- Attach policies directly: `AdministratorAccess-Amplify`
- Add an access key: `Command Line Interface (CLI)`
- Specify the `Access key` and `Secret access key` in the terminal
- Specify an AWS profile name. e.g. `amplify-dev`

## Create Amplify App

We'll generate some content that you **Don't** want to commit publicly.
The command below will modify the `.gitignore file` and assist with this process, however I still found some information about IAM role ARN's being included.

Ensure your .gitignore rules are setup correctly!  
e.g. `amplify/`

Run the following commnd to create your Amplify App:
```bash
amplify init
```

- Specify details about your project. e.g. project-name
- Specify the AWS profile as per [section above](#aws-iam-user-profile-setup-for-amplify). e.g. `amplify-dev`

Once the your app is initialized you can confirm it's existence in AWS Amplify Console.  
```bash
amplify console
```

![amplify app screenshot](/readme-content/amplify-app.png)