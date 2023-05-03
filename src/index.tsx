import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "./global.css";
import CookieConsent from "react-cookie-consent";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <BrowserRouter>
      
      <CookieConsent
  location="bottom"
  buttonText="Jeg forstår"
  cookieName="myAwesomeCookieName2"
  style={{ background: "#2B373B" }}
  buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
  overlay={true}
>
Denne hjemmeside bruger cookies for at forbedre brugeroplevelsen.
 
</CookieConsent>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
