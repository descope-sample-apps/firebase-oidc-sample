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
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      "oidc.descope",
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

  // return (
  //   <div className="container">
  //     <div className="home">
  //       <StyledFirebaseAuth
  //         uiConfig={uiConfig}
  //         firebaseAuth={firebase.auth()}
  //       />
  //     </div>
  //   </div>
  // );
};

export default Login;
