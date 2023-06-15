import React, { useEffect, useState } from "react";
import firebase from "./Firebase";

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  if (!user) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome, {user.displayName}!</p>
      <p>Your email: {user.email}</p>
    </div>
  );
};

export default Dashboard;
