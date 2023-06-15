import React, { useEffect } from "react";
import firebase from "./Firebase";
import { useNavigate } from "react-router-dom";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import "firebase/auth";

const provider = new firebase.auth.OAuthProvider("oidc.descope");

const Login = () => {
  const navigate = useNavigate();

  const uiConfig = {
    signInFlow: "redirect",
    signInSuccessUrl: "/dashboard",
    signInOptions: [
      {
        provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
        requireDisplayName: true,
      },
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => {
        navigate("/dashboard");
      },
    },
  };

  useEffect(() => {
    firebase
      .auth()
      .getRedirectResult()
      .then((result) => {
        if (result.credential) {
          // New OIDC provider account.
          const { user: newUser, credential } = result;

          // Existing Firebase account.
          const currentUser = firebase.auth().currentUser;

          // Link the OIDC provider account to the existing Firebase account.
          if (currentUser) {
            currentUser
              .linkWithCredential(credential)
              .then(() => {
                console.log("Accounts successfully linked");
                mergeUserAttributes(currentUser, newUser);
              })
              .catch((error) => {
                console.log("Error linking accounts:", error);
              });
          }
          navigate("/dashboard");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [navigate]);

  const signInWithDescope = async () => {
    try {
      const result = await firebase.auth().signInWithRedirect(provider);
      console.log(result);
      if (result.additionalUserInfo.isNewUser) {
        const linkAccounts = window.confirm(
          "Do you want to link the new OIDC account with existing Firebase account?"
        );
        if (linkAccounts) {
          firebase.auth().signInWithRedirect(provider);
        }
      } else {
        console.log("Navigating to dashboard...");
        navigate("/dashboard");
      }
    } catch (error) {
      console.log("CAUGHT ERROR!");
      if (error.code === "auth/account-exists-with-different-credential") {
        const email = error.email;
        const password = window.prompt(
          `An account already exists with the same email address but different sign-in credentials. Sign in using a password for ${email}`
        );
        const credential = firebase.auth.EmailAuthProvider.credential(
          email,
          password
        );
        const user = firebase.auth().currentUser;
        user.linkWithRedirect(credential);
      }
    }
  };

  // Firebase doesn't handle merging of user attributes automatically, so we have to do it ourselves
  const mergeUserAttributes = async (currentUser, newUser) => {
    const db = firebase.firestore();
    const currentUserRef = db.collection("users").doc(currentUser.uid);
    const newUserRef = db.collection("users").doc(newUser.uid);

    // Begin a transaction.
    const res = await db.runTransaction(async (t) => {
      const currentUserDoc = await t.get(currentUserRef);
      const newUserDoc = await t.get(newUserRef);

      // Merge custom attribute data.
      if (currentUserDoc.exists && newUserDoc.exists) {
        const currentUserData = currentUserDoc.data();
        const newUserData = newUserDoc.data();

        const mergedData = {
          ...currentUserData,
          ...newUserData,
        };

        // Update the user document with the merged data.
        await t.update(currentUserRef, mergedData);
      }
    });

    if (res) {
      console.log("User attributes merged successfully");
    } else {
      console.log("Error merging user attributes");
    }
  };

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      padding: "0 50px",
    },
  };

  return (
    <div style={styles.container}>
      <div className="email-login-form">
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </div>
      <div>
        <br></br>
        <br></br>
        <p>OR</p>
      </div>
      <button className="dashboard-btn" onClick={signInWithDescope}>
        Sign in with Descope
      </button>
    </div>
  );
};

export default Login;
