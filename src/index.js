import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Auth0Provider} from "@auth0/auth0-react";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


import Login from "./components/auth0login"

ReactDOM.render(
  <Auth0Provider
  domain="dev-zuzrkzsf.us.auth0.com"
  clientId="orb3gGvMyMOK3weaaKF6q6MnQFo13aMH"
  redirectUri={window.location.origin}
>
<BrowserRouter>
    <Routes>
      <Route exact path="/" element = {<App/>}/>
      <Route path = "/auth" element = {<Login/>}/>
    </Routes>
  </BrowserRouter>,
</Auth0Provider>,

  document.getElementById('root')
);
