import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";
import "./App.css"; // Ensure styles are applied

const Login = () => {
  const clientId = "404835897565-rqs9ho7lg0dfdj8vhbrmn6rqg13te4el.apps.googleusercontent.com"; // Replace with actual Client ID
  const navigate = useNavigate(); // Initialize navigation
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const redirectToHome = () => {
    navigate("/home"); // Navigate to home page
  };

  // Google Login Handler
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const res = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: {
            Authorization: `Bearer ${tokenResponse.access_token}`,
          },
        });
        const userObject = await res.json();
        console.log("User Info:", userObject);
        navigate("/home");
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    },
    onError: () => {
      console.log("Login Failed");
      alert("Google Login Failed. Try Again!");
    },
    scope: "openid email profile",
  });



  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div className="mobile-view">
        
        {/* Header Section with Image */}
        <div className="header-section">
          <img src="/drone.jpg" alt="Movo Logo" className="header-image" />
        </div>

        <h2 className="login-title">Welcome!</h2>
        <p className="login-subtitle">Hi, enter your details to sign in to your account</p>

        {/* Input Fields */}
        <div className="input-container">
          <input 
            type="text" 
            placeholder="Enter email/Phone no" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-container">
          <input 
            type="password" 
            placeholder="Enter password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Login Button */}
        <button className="login-btn" onClick={redirectToHome}>Login</button>

        <p className="or-text">Or Sign In via</p>

        {/* Social Login Buttons */}
        <div className="social-login">
          <div className="social-btn" onClick={() => login()}>
            <img style={{ width: "30px", cursor: "pointer" }} src="/google_logo.png" alt="Google" />
          </div>
          <div className="social-btn">
            <img src="/facebook.png" alt="Facebook" />
          </div>
          <div className="social-btn">
            <img src="/apple.png" alt="Apple" />
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default Login;
