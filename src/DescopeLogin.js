import { Descope } from "@descope/react-sdk";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const DescopeLogin = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      padding: "50px",
    }}>
      <div>
        <h4>Sign in with Descope</h4>
        {error && <p>{error}</p>}
      </div>
      <Descope
        flowId="oidc-flow"
        onSuccess={(e) => {
          console.log(e.detail.user);
          navigate("/dashboard");
        }}
        onError={
          (e) => {
            console.log("Could not log in!");
            setError(JSON.stringify(e.detail, null, 2));
          }}
        theme="light"
      />
    </div>
  );
};

export default DescopeLogin;
