import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from './components/HomePage'
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";

function App() {
  const [isLogin, setLoginState] = useState(false);
  const [authUser, setAuthUser] = useState("");
  
  function handleLoginstate(isLogin, user) {
    setLoginState(isLogin);
    setAuthUser(user);
  }
  return (
    <div className="App">

      <Router>
          <Navbar {...{ handleLoginstate, isLogin }} />
          <Switch>
            <Route
              exact
              path="/"
              component={() => (
                <HomePage
                  isLogin={isLogin}
                  username={typeof authUser === "object" ? authUser.name : null}
                />
              )}
            />
            <Route path="/signup" component={Signup} />
            <Route
              path="/login"
              component={() => <Login handleLoginstate={handleLoginstate} />}
            />
          </Switch>
      </Router>

    </div>
  );
}

export default App;
