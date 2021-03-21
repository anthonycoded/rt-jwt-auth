import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";

import "./app.css";
import Admin from "./components/Admin";
import Header from "./components/UI/Header";
import LandingPage from "./components/LandingPage";
import Register from "./components/Authentication/Register";
import Login from "./components/Authentication/Login";
import ProtectedRoute from "./components/ProtectedRoute"

const App = () => {
  const [authorized, setAuthorized] = useState(false);
  console.log(authorized);

  return (
    <div className="h-full">
      <Router>
        <Header
          className="display-block"
          authorized={authorized}
          setAuthorized={setAuthorized}
        ></Header>
        <Switch>
          <Route path="/" exact>
            <LandingPage
              authorized={authorized}
              setAuthorized={setAuthorized}
            ></LandingPage>
          </Route>
          <Route path="/admin" component={Admin}></Route>
          <Route path="/register">
            <Register
              authorized={authorized}
              setAuthorized={setAuthorized}
            ></Register>
          </Route>
          <Route path="/login">
            <Login
              authorized={authorized}
              setAuthorized={setAuthorized}
            ></Login>
          </Route>
          <Route path="/account">
            <ProtectedRoute
              authorized={authorized}
              setAuthorized={setAuthorized}
            ></ProtectedRoute>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
