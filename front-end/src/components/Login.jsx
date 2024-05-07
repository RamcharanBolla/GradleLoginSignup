// Login.js

import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:8080/api/login", {
        username,
        password,
      });
      console.log("Login successful!", response.data);
      // Handle successful login, e.g., redirect to dashboard
    } catch (error) {
      console.error("Login failed:", error);
      setError("Invalid username or password. Please try again.");
    }
  };

  const handleSignUp = async () => {
    try {
      // Add your sign-up logic here using axios or any other library
      const response = await axios.post("http://localhost:8080/api/signup", {
        username,
        password,
      });
      console.log("Sign-up successful!", response.data);
      // Optionally, you can redirect the user to the login page after successful sign-up
      // For demonstration purposes, let's switch back to login form after sign-up
      setIsSignUp(false);
    } catch (error) {
      console.error("Sign-up failed:", error);
      setError("Sign-up failed. Please try again.");
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center">
                {isSignUp ? "Sign Up" : "Login"}
              </h2>
              {error && <div className="alert alert-danger">{error}</div>}
              <form>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {isSignUp && (
                  <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="confirmPassword"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                )}
                <button
                  type="button"
                  className="btn btn-primary btn-block"
                  onClick={isSignUp ? handleSignUp : handleLogin}
                >
                  {isSignUp ? "Sign Up" : "Login"}
                </button>
                <button
                  type="button"
                  className="btn btn-link btn-block"
                  onClick={() => setIsSignUp(!isSignUp)}
                >
                  {isSignUp ? "Switch to Login" : "Switch to Sign Up"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
