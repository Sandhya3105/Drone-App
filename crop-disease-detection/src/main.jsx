import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import App from "./App";
import Login from "./Login";
import HomePage from "./Home";
import "./index.css";

const clientId = "404835897565-rqs9ho7lg0dfdj8vhbrmn6rqg13te4el.apps.googleusercontent.com"; // Replace with actual Client ID

ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId={clientId}>
    <React.StrictMode>
      <Router basename="/DRONE-APP">
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<HomePage/>}/>
          
        </Routes>
      </Router>
    </React.StrictMode>
  </GoogleOAuthProvider>
);
