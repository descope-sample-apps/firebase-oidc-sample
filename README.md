# Firebase with Descope as OIDC Provider

## Description

This is a very simple react app to demonstrate how to implement Descope as an OIDC provider with Firebase.

## Project Setup

The first thing you'll need to do is setup a Descope Project to use with Firebase.

1. Create your Project and Configure your Flow Hosting URL

You can sign up for Descope [here](https://www.descope.com/sign-up).

> **Note**: If you would like to implement Passkeys with Firebase, it is recommened to use pre-built flow `oidc-flow.json` file in the root of this directory. This can be downloaded and imported via the [Descope Console](https://app.descope.com/flows).

In the Descope Console, make sure that your [Flow Hosting URL](https://app.descope.com/settings/authentication/sso) is set to:

```
http://localhost:3000/oidc-login
```

This is where the Descope Flow component will be in this sample app. If you wish to modify the source code of this repo, you can modify the route in the `App.js` file to whatever you'd like.

2. Create `.env` for env variables;

Next, you'll need to do is setup your Firebase Configuration to work with OIDC. Instructions can be found in this [blog](). Once that is complete you'll need to input your Firebase configuration settings into an `.env` file.

```
# Descope Config
REACT_APP_DESCOPE_PROJECT_ID=<Descope Project ID>

# Firebase Config
REACT_APP_FIREBASE_API_KEY=<Firebase API Key>
REACT_APP_FIREBASE_AUTH_DOMAIN=<Firebase Auth Domain>
REACT_APP_FIREBASE_PROJECT_ID=<Firebase Project Id>
REACT_APP_FIREBASE_STORAGE_BUCKET=<Firebase Storage Bucket>
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=<Firebase Messaging Sender ID>
REACT_APP_FIREBASE_APP_ID=<Firebase App ID>
REACT_APP_FIREBASE_MEASUREMENT_ID=<Firebase Measurement ID>
```

3. Install all of the packages

You can install all of the necessary packages by running `yarn install`

After these simple steps, you should be all set to test it out. This sample app uses [FirebaseUI](https://firebase.google.com/docs/auth/web/firebaseui) for the login screen, and showcases login with Descope via OIDC, and simple email/password.

## Run

Run the program using:

`yarn start`

## Issue Reporting

If you have found a bug or if you have a feature request, please report them at this repository issues section.

## Author

[Descope](https://descope.com)

## License

This project is licensed under the MIT license.
