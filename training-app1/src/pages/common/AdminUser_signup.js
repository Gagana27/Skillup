import React, { Component, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminUser_signup() {const [fname, setFname] = useState("");
const [lname, setLname] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [userType, setUserType] = useState("");
const [secretKey, setSecretKey] = useState("");
const [contact, setContact] = useState("");
 const [addres, setAddres] = useState("");
const navigate=useNavigate()

const handleSubmit = (e) => {
  e.preventDefault();

  if (userType === "Admin" && secretKey !== "Admin") {
    alert("Invalid Admin");
  } else if (!fname || !lname || !email || !password || !userType) {
    alert("Please fill in all required fields.");
  } else {
    console.log(fname, lname,contact, email,addres, password, userType);
    fetch("http://localhost:5000/api/user/adminuser_signup", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        fname,
        lname,
        contact,
        addres,
        email,
        password,
        userType,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Server Error");
        }
      })
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "ok") {
          alert("Something went wrong");
        } else {
          alert("Registration Successful");
          navigate('/adminuser_signin')

        }
      })
      .catch((error) => {
        alert("Server Error: Something went wrong");
      });
  }
};

return (
  <div
    style={{
      height: "700px",
      width: "500px",
      marginLeft: "400px",
      border: "2px solid blue",
      padding: "20px",
      borderRadius: "10px",
    }}
  >
    <div className="auth-inner">
      <form onSubmit={handleSubmit}>
        <h3>Sign Up</h3>
        <div style={{ marginBottom: "20px", marginTop: "10px" }}>
          Register As
          <input
            style={{ marginLeft: "10px" }}
            type="radio"
            name="userType"
            value="User"
            onChange={(e) => setUserType(e.target.value)}
          />
          User
          <input
            style={{ marginLeft: "10px" }}
            type="radio"
            name="userType"
            value="Admin"
            onChange={(e) => setUserType(e.target.value)}
          />
          Admin
        </div>
        {userType === "Admin" ? (
          <div className="mb-3">
            <label>Secret Key</label>
            <input
              type="text"
              className="form-control"
              placeholder="Secret Key"
              onChange={(e) => setSecretKey(e.target.value)}
            />
          </div>
        ) : null}

        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            onChange={(e) => setFname(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Last name"
            onChange={(e) => setLname(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {userType != "Admin" ? (
          <>
           
           <div className="mb-3">
              <label>Address</label>
              <input
                type="text"
                className="form-control"
                placeholder="address"
                onChange={(e) => setAddres(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label>Contact</label>
              <input
                type="text"
                className="form-control"
                placeholder="contact"
                onChange={(e) => setContact(e.target.value)}
              />
            </div>

            
          </>
        ) : null}
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p style={{ marginTop: "20px" }}>
          Already registered <a href="/adminuser_signin">sign in?</a>
        </p>
      </form>
    </div>
  </div>
);
}
