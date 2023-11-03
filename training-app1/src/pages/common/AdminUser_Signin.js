import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AdminUser_signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:5000/api/user/adminuser_signin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
            userType: ["Admin", "User"],
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();

        if (data.userType === "Admin") {
          // Navigate to the admin dashboard page
          navigate("/admindashboard");
        } else if (data.userType === "User") {
          navigate("/homepage");
        }
      } else {
        alert("Login failed. Please check your credentials.");
      }
    } catch (error) {
      alert("An error occurred. Please try again later.");
    }
  }

  return (
    <div
      style={{
        height: "400px",
        width: "450px",
        marginLeft: "450px",
        marginTop: "50px",
        border: "2px solid black",
        padding: "20px",
        borderRadius: "10px",
        backgroundColor: "lightgray",
      }}
    >
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h1>Sign In</h1>

          {error && <p className="error-message">{error}</p>}

          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>
          <div style={{ marginTop: "5px" }}>
            Don't have an account?{" "}
            <Link to="/adminuser_signup">Register here</Link>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>

          {/* <p className="forgot-password text-right">
            <a href="/register">Sign Up</a>
          </p> */}
        </form>
      </div>
    </div>
  );
}
