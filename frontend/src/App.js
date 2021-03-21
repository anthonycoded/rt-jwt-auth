import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./app.css";
import Admin from "./components/Admin";
import Header from "./components/UI/Header";
import LandingPage from "./components/LandingPage";
import Register from "./components/Authentication/Register";

const App = () => {
  const [authorized, setAuthorized] = useState(false);

  return (
    <div className="h-full">
      <Router>
        <Header className="display-block"></Header>
        <Switch>
          <Route path="/" exact>
            <LandingPage></LandingPage>
          </Route>
          <Route path="/admin" component={Admin}></Route>
          <Route path="/register">
            <Register
              authorized={authorized}
              setAuthorized={setAuthorized}
            ></Register>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
