import React, { useEffect, useState } from "react";
import firebase from "./Firebase";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const state = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
        navigate("/login");
      }
      setLoading(false);
    });

    return () => state();
  }, [navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  async function handleSignOut() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("User signed out");
        setUser(null);
        navigate("/login");
      })
      .catch((error) => {
        console.log("Sign out error", error);
      });
  }

  return (
    <>
      <div className="navbar">
        <h2 className="sample-logo blue">Firebase App</h2>
        <button className="login-btn logout-btn" onClick={handleSignOut}>
          Sign Out
        </button>
      </div>

      <div className="home">
        <p className="dash-tag">Welcome, {user.displayName}!</p>
        <p className="dash-tag">Your email: {user.email}</p>
      </div>
    </>
  );
};

export default Dashboard;
