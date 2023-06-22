import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import "firebase/auth";
import firebase from "./Firebase";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const uiConfig = {
    signInFlow: "redirect",
    signInOptions: [
      {
        provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
        fullLabel: "Sign in with Email",
      },
      { provider: "oidc.descope", fullLabel: "Sign in With Descope Passkeys" },
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => {
        navigate("/dashboard");
        return false;
      },
    },
  };

  return (
    <div className="card-container">
      <div className="card">
        <div className="firebaseui-container">
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
