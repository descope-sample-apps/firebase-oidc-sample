import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import firebase from "./Firebase";

const ProtectedRoute = () => {
  const auth = firebase.auth().currentUser ? true : false;
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
