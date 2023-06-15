# Firebase with Descope as OIDC Provider

## Description

This is a very simple react app to demonstrate how to implement Descope as an OIDC provider with Firebase.

> **Note**: If you need the flow, to work with OIDC and Passkeys, it is the `oidc-flow.json` file in the root of this directory. This can be downloaded and imported via the [Descope Console](https://app.descope.com/flows).

## Project Setup

The first thing you'll need to do is setup your Firebase Configuration.

1. Create `.env` for env variables;

```
REACT_APP_USERPOOL_ID=<region>_<id>
REACT_APP_USERPOOL_WEB_CLIENT_ID=<user pool client ID>
REACT_APP_AWS_REGION=<region>
REACT_APP_COGNITO_HOSTED_UI=<url of hosted UI>
REACT_APP_COGNITO_DOMAIN=<cognito domain>
DESCOPE_PROJECT_ID=<Descope Project ID from Descope Console>
```

2. Install all of the packages

You can install all of the necessary packages by running `yarn install`

## Run

Run the program using:

`yarn start`

## Issue Reporting

If you have found a bug or if you have a feature request, please report them at this repository issues section.

## Author

[Descope](https://descope.com)

## License

This project is licensed under the MIT license.
