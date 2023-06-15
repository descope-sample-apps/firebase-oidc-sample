import { Descope } from "@descope/react-sdk";

export const DescopeLogin = () => {
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
      <Descope
        flowId="oidc-flow"
        onSuccess={(e) => console.log(e.detail.user)}
        onError={(e) => console.log("Could not log in!")}
        theme="light"
      />
    </div>
  );
};

export default DescopeLogin;
