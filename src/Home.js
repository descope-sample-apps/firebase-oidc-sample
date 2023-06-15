import "./Home.css";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

function HomePage() {
  const navigate = useNavigate();

  const redirectToLogin = useCallback(async () => {
    navigate("/login");
  }, [navigate]);

  return (
    <>
      <div className="navbar">
        <h2 className="sample-logo blue">Firebase</h2>
        {/* <button className="login-btn" onClick={redirectToLogin}>
          Login
        </button> */}
      </div>

      <div className="home">
        <h1 className="title">
          <span className="blue">Firebase App</span> with FirebaseUI and{" "}
          <span className="blue">Descope as an OIDC Provider</span>
        </h1>
        <p className="powered">
          <div className="blue-dot"></div>Powered by Descope
        </p>
        <button className="dashboard-btn" onClick={redirectToLogin}>
          Dashboard &nbsp;<span className="arrow">→</span>
        </button>
      </div>
    </>
  );
}

export default HomePage;
