# Amplify React Typescript Boilerplate

After doing the [Amplify tutorial](https://docs.amplify.aws/start/getting-started/setup/q/integration/js/#initialize-a-new-backend) a couple of times I realized I could reduce the initial creation steps by extracting a simple boilerplate project.

After forking/cloning the repo, follow the steps below to get started:


## Create an **AWS IAM user** for Amplify and a local development **AWS profile**

```bash
amplify configure
```

- Login the AWS console
- Specify region in the terminal
- Provide an amplify IAM user. e.g. `amplify-dev`
- Attach policies directly: `AdministratorAccess-Amplify`
- Add an access key: `Command Line Interface (CLI)`
- Specify the `Access key` and `Secret access key` in the terminal
- Specify an AWS profile name. e.g. `amplify-dev`

## Getting started

We'll generate some content now that you **Don't** want to commit publicly.
The command below will modify the `.gitignore file` and assist with this process, however I still found some information about IAM role ARN's being included.

Ensure your .gitignore rules are setup correctly! 
e.g. `amplify/`

```bash
amplify init
```

- Specify details about your project.e.g. project-name
- Specify the AWS profile as per section abover. e.g. `amplify-dev`
