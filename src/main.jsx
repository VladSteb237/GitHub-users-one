import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GithubProvider } from "./context/context";
import { Auth0Provider } from "@auth0/auth0-react";
// Domain
// dev-uap7hipku1j4i83p.us.auth0.com
// CliendID
// MBS3EhGYfoyDi7NMGDSQ5ZyZ4h4K4u8p

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-uap7hipku1j4i83p.us.auth0.com"
      clientId="MBS3EhGYfoyDi7NMGDSQ5ZyZ4h4K4u8p"
      cacheLocation="localstorage"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}>
      <GithubProvider>
        <App />
      </GithubProvider>
    </Auth0Provider>
  </React.StrictMode>
);
