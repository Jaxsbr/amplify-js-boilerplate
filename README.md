# amplify-js-boilerplate

After doing the Amplify tutorial a couple of times I realized I could reduce the initial creation steps by extracting a simple boilerplate project.


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