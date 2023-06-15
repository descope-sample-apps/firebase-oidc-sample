import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Dashboard from "./Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import DescopeLogin from "./DescopeLogin";
import { AuthProvider } from "@descope/react-sdk";

function App() {
  return (
    <AuthProvider projectId={process.env.REACT_APP_DESCOPE_PROJECT_ID}>
      <div className="app">
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/oidc-login" element={<DescopeLogin />}></Route>
            <Route exact path="/dashboard" element={<ProtectedRoute />}>
              <Route exact path="/dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
