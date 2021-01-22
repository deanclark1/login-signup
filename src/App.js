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
  
  function handleLoginstate(isLogin) {
    setLoginState(isLogin);
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
