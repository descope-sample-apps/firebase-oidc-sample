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
      {
        provider: "oidc.descope",
        fullLabel: "Sign in with Passkeys",
        buttonColor: "#000000",
        iconUrl:
          "https://images.ctfassets.net/xqb1f63q68s1/7D1PYGYvVgRNOBeiA6USQM/68b572056b5d38a769c71b0fba63b4e5/Descope_RGB_Icon-ForDarkBackground.svg",
      },
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
